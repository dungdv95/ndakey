import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { cn, getEng, getNamePostByLang, getTitleCategory } from "@/lib/utils";
import { Icons } from "../icons";
import { useIsMobile } from "../hooks/use-mobile";
import { motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import apis from "@/lib/apis/blogs/index";
import ErrorNotice from "../notice/notice-error";
import { Skeleton } from "../ui/skeleton";
import { usePathname, useRouter } from "next/navigation";
import moment from "moment";
import { getDictionary } from "@/get-dictionary";
import { BlogProps, useStore } from "../navs/store";
// import { NDA_TRACE_DEFAULT_IMG } from "@/constants/images";

const listQa = [
  {
    id: 1,
    code: "ndaTrace",
    title: "ndaTrace",
    answer: "ndaTraceAns",
  },
  {
    id: 2,
    code: "ndaTraceUid",
    title: "ndaTraceUid",
    answer: "ndaTraceUidAns",
  },
  {
    id: 3,
    code: "custom",
    title: "ndaTraceCustom",
    answer: "ndaTraceCustomAns",
  },
  {
    id: 4,
    code: "object",
    title: "ndaTraceObj",
    answer: "ndaTraceObjAns",
  },
  {
    id: 5,
    code: "why",
    title: "ndaTraceWhy",
    answer: "ndaTraceWhyAns",
  },
];

export default function BlogSection({
  blogLang,
}: {
  blogLang: Awaited<ReturnType<typeof getDictionary>>["blogs"];
}) {
  const isMobile = useIsMobile();

  const {
    data: data,
    error,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["/blogs/list", {}],
    queryFn: () =>
      apis.getBlogPost({
        pageIndex: 1,
        pageSize: 4,
        applicationFilter: "ndatrace",
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

  if (isMobile) {
    return <MoblieBlog blogLang={blogLang} data={data} />;
  }
  return <DesktopBlog blogLang={blogLang} data={data} />;
}

function LoadDesktop() {
  return (
    <div className="pt-[75x] container mx-auto 2xl:px-[123px] xl:px-[60px]">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <Skeleton className="h-11 w-[300px] " />
        </div>

        <div className="flex justify-between gap-[29px] max-lg:gap-5">
          <div className="w-1/2 flex flex-col gap-2">
            <Skeleton className="h-[319px] w-full " />
            <Skeleton className="h-[22px] w-[55px] " />
            <Skeleton className="h-8 w-full " />
            <Skeleton className="h-[20px] w-[100px] " />
            <Skeleton className="h-12 w-full " />
          </div>
          <div className="w-1/2 flex flex-col gap-[30px]">
            <div className="flex gap-[30px]">
              <Skeleton className="h-[130px] w-[169px] flex-shrink-0" />
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-[22px] w-[55px] " />
                <Skeleton className="h-8 w-full " />
                <Skeleton className="h-[20px] w-[100px] " />
              </div>
            </div>
            <div className="flex gap-[30px]">
              <Skeleton className="h-[130px] w-[169px] flex-shrink-0" />
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-[22px] w-[55px] " />
                <Skeleton className="h-8 w-full " />
                <Skeleton className="h-[20px] w-[100px] " />
              </div>
            </div>
            <div className="flex gap-[30px]">
              <Skeleton className="h-[130px] w-[169px] flex-shrink-0" />
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-[22px] w-[55px] " />
                <Skeleton className="h-8 w-full " />
                <Skeleton className="h-[20px] w-[100px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopBlog({
  data,
  blogLang,
}: {
  data: BlogProps[];
  blogLang: Awaited<ReturnType<typeof getDictionary>>["blogs"];
}) {
  //   console.log("data", data);
  const router = useRouter();
  const [qaValue, setQaValue] = useState("ndaTrace");
  const pathName = usePathname();

  // console.log("data", data);

  return (
    <div className="pt-[100px] container mx-auto 2xl:px-[123px] xl:px-[60px]">
      <div className="flex flex-col">
        <section id="inquiry" className="flex flex-col gap-10">
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-center text-[#0057D6] text-4xl leading-11 font-semibold tracking-[-0.72px]"
          >
            {blogLang.title}
          </motion.span>

          <div className="flex justify-between gap-[29px] max-lg:gap-5">
            <div className="w-1/2 flex flex-col gap-2">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="cursor-pointer w-full h-[320px]"
                // onClick={() => {
                //   router.push(
                //     `/${getEng(pathName)}/blogs/detail/${data[0]?.slug}`
                //   );
                // }}
              >
                <img
                  src={
                    data[0]?.thumbnail ||
                    "https://s3-sgn10.fptcloud.com/cdn/ndatrace/default-img.jpg"
                  }
                  className="object-cover h-full w-full rounded-[16px]"
                  alt="thumbnail"
                />
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
              >
                <div className="flex flex-wrap gap-2 items-center">
                  {data[0]?.categoryIds.map((item, index) => (
                    <Button
                      key={index}
                      className="mt-1 h-[22px] bg-[#194185] hover:bg-[#194185]/80 rounded-[4px] text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]"
                    >
                      {getTitleCategory(item, pathName)}
                    </Button>
                  ))}
                </div>
              </motion.div>

              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="cursor-pointer text-[#194185] text-xl leading-[30px] font-semibold max-lg:text-lg"
                // onClick={() => {
                //   router.push(
                //     `/${getEng(pathName)}/blogs/detail/${data[0]?.slug}`
                //   );
                // }}
              >
                {getNamePostByLang(data[0], pathName, "name")}
              </motion.span>

              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#194185] text-sm leading-5 "
              >
                {moment(data[0]?.createdAt).format("DD/MM/YYYY")}
              </motion.span>
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="mt-2 text-[#194185] text-sm leading-5 "
              >
                {/* {data[0]?.description} */}
                {getNamePostByLang(data[0], pathName, "description")}
              </motion.span>
            </div>
            <div className="w-1/2 flex flex-col gap-[30px]">
              {data.slice(1, 5).map((item, index: number) => (
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  key={index}
                  className="flex gap-[30px] max-xl:gap-6 max-lg:gap-4"
                >
                  <div
                    className="cursor-pointer w-[191px] h-[147px] flex-shrink-0 max-lg:w-[169px] max-lg:h-[130px]"
                    // onClick={() => {
                    //   router.push(
                    //     `/${getEng(pathName)}/blogs/detail/${item.slug}`
                    //   );
                    // }}
                  >
                    <img
                      src={
                        item.thumbnail ||
                        "https://s3-sgn10.fptcloud.com/cdn/ndatrace/default-img.jpg"
                      }
                      className="object-cover h-full w-full  rounded-[10px]"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-2 items-center">
                      {item.categoryIds.map((category, idxCategory) => (
                        <Button
                          key={`category_${idxCategory}`}
                          className="h-[22px] bg-[#194185] hover:bg-[#194185]/80 text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]"
                        >
                          {getTitleCategory(category, pathName)}
                        </Button>
                      ))}
                    </div>
                    <span
                      className="cursor-pointer text-[#194185] text-xl leading-[30px] font-semibold max-xl:text-lg max-lg:text-base"
                      //   onClick={() => {
                      //     router.push(
                      //       `/${getEng(pathName)}/blogs/detail/${item.slug}`
                      //     );
                      //   }}
                    >
                      {getNamePostByLang(item, pathName, "name")}
                    </span>
                    <span className="text-[#194185] text-sm leading-5 ">
                      {moment(item?.createdAt).format("DD/MM/YYYY")}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="pt-[94px] flex gap-[30px]">
          <div className="relative w-1/2">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#0057D6] text-4xl leading-11 font-semibold tracking-[-0.72px]"
            >
              {blogLang.question}
            </motion.span>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="absolute top-[86px] left-[-180px] max-lg:top-[120px]"
            >
              <Icons.blogQaIcon className="max-lg:w-[535px] max-lg:h-[280px]" />
            </motion.div>
          </div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="w-1/2"
          >
            <Accordion
              type="single"
              collapsible
              className="w-full bg-[#EFF8FF] rounded-[12px]"
              value={qaValue}
              onValueChange={setQaValue}
            >
              {listQa.map((item, index) => (
                <AccordionItem
                  key={item.code}
                  value={item.code}
                  className={cn(
                    qaValue === item.code
                      ? "border-b-[#E9EAEB]"
                      : "border-b-white"
                  )}
                >
                  <AccordionTrigger className="cursor-pointer hover:no-underline px-6 py-4 text-[#194185] text-xl leading-[30px] font-semibold items-center gap-0 max-xl:text-lg">
                    {blogLang[item.title as keyof typeof blogLang]}
                  </AccordionTrigger>
                  <AccordionContent
                    className={cn(
                      "bg-white border-t border-x border-t-[#E9EAEB] border-x-[#E9EAEB] p-6",
                      index === listQa.length - 1 &&
                        "border-b border-b-[#E9EAEB] rounded-b-[12px]"
                    )}
                  >
                    <p className="text-[#194185] text-base leading-6 whitespace-pre-line max-xl:text-sm">
                      {blogLang[item.answer as keyof typeof blogLang]}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

function LoadMobile() {
  return (
    <div className="px-4 pt-[50px] flex flex-col gap-4">
      <div className="flex justify-center">
        <Skeleton className="h-[30px] w-[200px]" />
      </div>
      <Skeleton className="h-[228px] w-full" />
      <Skeleton className="h-[22px] w-[55px]" />
      <Skeleton className="h-[30px] w-full" />
      <Skeleton className="h-[20px] w-[100px]" />
      <Skeleton className="h-[50px] w-full" />
      <div className="flex gap-[30px]">
        <Skeleton className="h-[91px] w-[118px] flex-shrink-0" />
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-[22px] w-[55px] " />
          <Skeleton className="h-8 w-full " />
          <Skeleton className="h-[20px] w-[100px] " />
        </div>
      </div>
      <div className="flex gap-[30px]">
        <Skeleton className="h-[91px] w-[118px] flex-shrink-0" />
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-[22px] w-[55px] " />
          <Skeleton className="h-8 w-full " />
          <Skeleton className="h-[20px] w-[100px] " />
        </div>
      </div>
      <div className="flex gap-[30px]">
        <Skeleton className="h-[91px] w-[118px] flex-shrink-0" />
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-[22px] w-[55px] " />
          <Skeleton className="h-8 w-full " />
          <Skeleton className="h-[20px] w-[100px] " />
        </div>
      </div>
    </div>
  );
}

function MoblieBlog({
  data,
  blogLang,
}: {
  data: BlogProps[];
  blogLang: Awaited<ReturnType<typeof getDictionary>>["blogs"];
}) {
  const pathName = usePathname();
  const router = useRouter();
  // console.log("data", data);
  const [qaValue, setQaValue] = useState("ndaTrace");
  return (
    <section id="inquiry" className="px-4 pt-[50px] flex flex-col gap-[62px]">
      <div className="flex flex-col gap-6 items-center">
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="text-[#0057D6] text-xl leading-[30px] font-semibold"
        >
          {blogLang.title}
        </motion.span>

        <div className="flex flex-col gap-2">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="w-full h-full"
            // onClick={() => {
            //   router.push(`/${getEng(pathName)}/blogs/detail/${data[0]?.slug}`);
            // }}
          >
            <img
              src={
                data[0]?.thumbnail ||
                "https://s3-sgn10.fptcloud.com/cdn/ndatrace/default-img.jpg"
              }
              className="object-cover h-full w-full rounded-[16px]"
              alt=""
            />
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
          >
            <div className="flex flex-wrap gap-2 items-center">
              {data[0]?.categoryIds.map((item, index) => (
                <Button
                  key={index}
                  className="mt-1 bg-[#194185] hover:bg-[#194185]/80 rounded-[4px] h-[22px] text-[#EFF8FF]  text-xs leading-[18px] tracking-[-0.24px]"
                >
                  {getTitleCategory(item, pathName)}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-[#194185] text-xl leading-[30px] font-semibold max-[28.125rem]:whitespace-pre-line"
            // onClick={() => {
            //   router.push(`/${getEng(pathName)}/blogs/detail/${data[0]?.slug}`);
            // }}
          >
            {/* {data[0]?.name} */}
            {getNamePostByLang(data[0], pathName, "name")}
          </motion.span>

          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-[#194185] text-xs leading-5"
          >
            {moment(data[0]?.createdAt).format("DD/MM/YYYY")}
          </motion.span>

          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-[#194185] text-xs leading-5"
          >
            {/* {data[0]?.description} */}
            {getNamePostByLang(data[0], pathName, "description")}
          </motion.span>
        </div>
        <div className="flex flex-col gap-6">
          {data.slice(1, 4).map((item, index: number) => (
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              key={index}
              className="flex gap-4 items-start"
            >
              <div
                className="w-[118px] h-[91px] flex-shrink-0"
                // onClick={() => {
                //   router.push(`/${getEng(pathName)}/blogs/detail/${item.slug}`);
                // }}
              >
                <img
                  src={
                    item.thumbnail ||
                    "https://s3-sgn10.fptcloud.com/cdn/ndatrace/default-img.jpg"
                  }
                  className="object-cover h-full w-full  rounded-[10px]"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2 items-center">
                  {item.categoryIds.map((category, idxCategory) => (
                    <Button
                      key={`category_${idxCategory}`}
                      className="mt-1 bg-[#194185] hover:bg-[#194185]/80 rounded-[4px] h-[22px] text-[#EFF8FF]  text-xs leading-[18px] tracking-[-0.24px]"
                    >
                      {getTitleCategory(category, pathName)}
                    </Button>
                  ))}
                </div>

                <span
                  className="text-[#194185] text-sm leading-6 font-semibold"
                  //   onClick={() => {
                  //     router.push(
                  //       `/${getEng(pathName)}/blogs/detail/${item.slug}`
                  //     );
                  //   }}
                >
                  {/* {item.name} */}
                  {getNamePostByLang(item, pathName, "name")}
                </span>
                <span className="text-[#194185] text-sm leading-5">
                  {moment(item?.createdAt).format("DD/MM/YYYY")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="text-[#0057D6] text-xl leading-[30px] font-semibold"
        >
          {blogLang.question}
        </motion.span>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="w-full"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full bg-[#EFF8FF] rounded-[12px]"
            value={qaValue}
            onValueChange={setQaValue}
          >
            {listQa.map((item, index) => (
              <AccordionItem
                key={item.code}
                value={item.code}
                className={cn(
                  qaValue === item.code
                    ? "border-b-[#E9EAEB]"
                    : "border-b-white"
                )}
              >
                <AccordionTrigger className="cursor-pointer hover:no-underline p-4 text-[#194185] text-xl leading-[30px] font-semibold items-center gap-0 max-xl:text-lg">
                  {blogLang[item.title as keyof typeof blogLang]}
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    "bg-white border-t border-x border-t-[#E9EAEB] border-x-[#E9EAEB] p-6",
                    index === listQa.length - 1 &&
                      "border-b border-b-[#E9EAEB] rounded-b-[12px]"
                  )}
                >
                  <p className="text-[#194185] text-base leading-6 whitespace-pre-line max-xl:text-sm">
                    {blogLang[item.answer as keyof typeof blogLang]}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
