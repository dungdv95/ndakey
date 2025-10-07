"use client";

import { useQuery } from "@tanstack/react-query";
import apis from "@/lib/apis/blogs";
import ErrorNotice from "@/components/notice/notice-error";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogProps, useStore } from "@/components/navs/store";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import moment from "moment";
import {
  getEng,
  getNamePostByLang,
  getTitleCategory,
  isEnglish,
} from "@/lib/utils";
import { motion } from "motion/react";
import { useIsMobile } from "@/components/hooks/use-mobile";

import { getDictionary } from "@/get-dictionary";

export default function BlogDetail({
  slugNews,
  dictionary,
}: {
  slugNews: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  const pathName = usePathname();
  // console.log("slugNews", slugNews);
  const isMobile = useIsMobile();
  const {
    data: data,
    error,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["/blogs/detail", { slugNews }],
    queryFn: () =>
      apis.getBlogPostDetail({
        slugFilter: slugNews ?? "",
      }),
    retry: 0,
    // keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return <>{isMobile ? <LoadMobile /> : <LoadDesktop />}</>;
  }
  if (isError) {
    return <ErrorNotice error={error as Error} />;
  }

  if (data === undefined || data === null) {
    return null;
  }

  if (data?.length <= 0) {
    return (
      <span className="text-2xl font-semibold text-red-600">
        {isEnglish(pathName)
          ? `This article could not be found!`
          : `Không tìm thấy bài viết này!`}
      </span>
    );
  }

  return <DetailDesktop data={data[0]} blogLang={dictionary?.blogList} />;
}

function DetailDesktop({
  data,
  blogLang,
}: {
  data: BlogProps;
  blogLang: Awaited<ReturnType<typeof getDictionary>>["blogList"];
}) {
  const pathName = usePathname();
  // console.log("data", data);
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.1,
      }}
      className="mt-[64px] grid grid-cols-12 gap-[30px] max-xl:grid-cols-1 max-md:mt-9"
    >
      <div className="col-span-8 flex flex-col gap-[26px] max-xl:col-span-1">
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-wrap gap-2 items-center">
            {data?.categoryIds.map((category, idxCategory: number) => (
              <Button
                key={`category_${idxCategory}`}
                className="h-[22px] bg-[#194185] hover:bg-[#194185]/80 text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]"
              >
                {getTitleCategory(category, pathName)}
              </Button>
            ))}
          </div>
          <span className="text-[#194185] text-[30px] leading-[38px] font-semibold">
            {/* {data?.name} */}
            {getNamePostByLang(data, pathName, "name")}
          </span>
          <span className="text-[#194185] text-sm leading-5">
            {moment(data?.createdAt).format("DD/MM/YYYY")}
          </span>
          <div className="p-4 bg-[#F5F5F5] rounded-[4px]">
            <span className="text-[#194185] text-sm leading-5">
              {/* {data?.description} */}
              {getNamePostByLang(data, pathName, "description")}
            </span>
          </div>
          <div
            className="text-[#194185] text-sm leading-5"
            dangerouslySetInnerHTML={{
              __html: data ? getNamePostByLang(data, pathName, "content") : "",
            }}
          />
        </div>
      </div>

      <BlogRelated
        idBlog={data?.id}
        categoryId={data?.categoryIds[0]}
        blogLang={blogLang}
      />
    </motion.div>
  );
}

function BlogRelated({
  idBlog,
  categoryId,
  blogLang,
}: {
  idBlog: string;
  categoryId: string;
  blogLang: Awaited<ReturnType<typeof getDictionary>>["blogList"];
}) {
  const {
    data: data,
    error,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["/blogs/list-related", { categoryId }],
    queryFn: () =>
      apis.getBlogPost({
        pageIndex: 1,
        pageSize: 10,
        applicationFilter: "ndatrace",
        categoryIdFilter: categoryId,
      }),
    retry: 0,
    // keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return (
      <div className="flex flex-col gap-5">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }
  if (isError) {
    return <ErrorNotice error={error as Error} />;
  }

  if (data === undefined || data === null) {
    return null;
  }

  return (
    <RelatedView
      relatedData={data.filter((el: any) => el.id !== idBlog)}
      blogLang={blogLang}
    />
  );
}

function RelatedView({
  relatedData,
  blogLang,
}: {
  relatedData: BlogProps[];
  blogLang: Awaited<ReturnType<typeof getDictionary>>["blogList"];
}) {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <>
      {relatedData.length > 0 ? (
        <div className="mt-[160px] col-span-4 flex flex-col gap-2 max-xl:col-span-1 max-xl:mt-0">
          <span className="text-[#194185] text-[30px] leading-[38px] font-semibold">
            {blogLang.realted}
          </span>
          <div className="flex flex-col gap-[30px]">
            {relatedData.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div
                  className="cursor-pointer w-[118px] h-[91px] flex-shrink-0"
                  onClick={() => {
                    // router.push(
                    //   `/${getEng(pathName)}/blogs/detail/${item.slug}`
                    // );
                  }}
                >
                  <img
                    src={item.thumbnail || "/images/default-img.jpg"}
                    className="object-cover h-full w-full  rounded-[10px]"
                    alt="thumbnail"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="flex flex-wrap gap-2 items-center">
                      {item.categoryIds.map((category, index: number) => (
                        <Button
                          key={index}
                          className="mt-1 h-[22px] bg-[#194185] hover:bg-[#194185]/80 rounded-[4px] text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]"
                        >
                          {getTitleCategory(category, pathName)}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <span
                    onClick={() => {
                      // router.push(
                      //   `/${getEng(pathName)}/blogs/detail/${item.slug}`
                      // );
                    }}
                    className="cursor-pointer text-[#194185] text-sm leading-6 font-semibold"
                  >
                    {/* {item.name} */}
                    {getNamePostByLang(item, pathName, "name")}
                  </span>
                  <span className="text-[#194185] text-sm leading-5">
                    {moment(item?.createdAt).format("DD/MM/YYYY")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

function LoadDesktop() {
  return (
    <div className="mt-[93px] flex gap-[30px]">
      <div className="w-[60%] flex flex-col gap-[26px]">
        <div className="flex flex-col gap-[15px]">
          <Skeleton className="w-full h-[80px]" />
          <Skeleton className="w-[200px] h-5" />
          <Skeleton className="w-full h-[40px]" />
          <Skeleton className="w-full h-[80px]" />
          <Skeleton className="w-full h-[120px]" />
          <Skeleton className="w-full h-[300px]" />
        </div>
        <div></div>
      </div>
      <div className="w-[40%] mt-[134px] flex flex-col gap-4">
        <Skeleton className="w-[40%] h-10" />
        <div className="w-full flex gap-[30px]">
          <Skeleton className="h-[140px] w-[160px] flex-shrink-0" />
          <div className="w-full flex flex-col gap-4">
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
        </div>
        <div className="w-full flex gap-[30px]">
          <Skeleton className="h-[140px] w-[160px] flex-shrink-0" />
          <div className="w-full flex flex-col gap-4">
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
        </div>
        <div className="w-full flex gap-[30px]">
          <Skeleton className="h-[140px] w-[160px] flex-shrink-0" />
          <div className="w-full flex flex-col gap-4">
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadMobile() {
  return (
    <div className="mt-9 flex flex-col gap-4">
      <Skeleton className="w-full h-[100px]" />
      <Skeleton className="w-[30%] h-6" />
      <Skeleton className="w-full h-[200px]" />
      <Skeleton className="w-full h-[300px]" />
      <Skeleton className="w-full h-[400px]" />
    </div>
  );
}
