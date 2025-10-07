"use client";

import { usePathname, useRouter } from "next/navigation";
import { BlogProps } from "../navs/store";
import { motion } from "motion/react";
import { cn, getEng, getNamePostByLang, getTitleCategory } from "@/lib/utils";
import { Button } from "../ui/button";
import moment from "moment";
import { NDA_TRACE_DEFAULT_IMG } from "@/constants/images";

export default function BlogViewDesktop({ data }: { data: BlogProps[] }) {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.1,
      }}
      className="flex flex-col gap-[128px]"
    >
      <div className="flex justify-between gap-[29px] max-lg:gap-5">
        <div
          className={cn(
            "w-1/2 flex flex-col gap-2",
            data.length <= 1 && "w-full"
          )}
        >
          <div
            className={cn(
              "cursor-pointer w-full ",
              data.length <= 1 ? "h-[500px]" : "h-[320px]"
            )}
            onClick={() => {
              router.push(`/${getEng(pathName)}/blogs/detail/${data[0]?.slug}`);
            }}
          >
            <img
              src={data[0]?.thumbnail || NDA_TRACE_DEFAULT_IMG}
              className="object-cover h-full w-full rounded-[16px]"
              alt=""
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-2 items-center">
              {data[0]?.categoryIds.map((item, index: number) => (
                <Button
                  key={index}
                  className="mt-1 h-[22px] bg-[#194185] hover:bg-[#194185]/80 rounded-[4px] text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]"
                >
                  {getTitleCategory(item, pathName)}
                </Button>
              ))}
            </div>
          </div>

          <span
            className="cursor-pointer text-[#194185] text-xl leading-[30px] font-semibold max-lg:text-lg"
            onClick={() => {
              router.push(`/${getEng(pathName)}/blogs/detail/${data[0]?.slug}`);
            }}
          >
            {getNamePostByLang(data[0], pathName, "name")}
          </span>

          <span className="text-[#194185] text-sm leading-5 ">
            {moment(data[0]?.createdAt).format("DD/MM/YYYY")}
          </span>
          <span className="mt-2 text-[#194185] text-sm leading-5 ">
            {getNamePostByLang(data[0], pathName, "description")}
            {/* {data[0]?.description} */}
          </span>
        </div>
        {data.length > 1 && (
          <div className="w-1/2 flex flex-col gap-[30px]">
            {data.slice(1, 4).map((item, index: number) => (
              <div
                key={index}
                className="flex gap-[30px] max-xl:gap-6 max-lg:gap-4"
              >
                <div
                  className="cursor-pointer w-[191px] h-[147px] flex-shrink-0 max-lg:w-[169px] max-lg:h-[130px]"
                  onClick={() => {
                    router.push(
                      `/${getEng(pathName)}/blogs/detail/${item.slug}`
                    );
                  }}
                >
                  <img
                    src={item.thumbnail || NDA_TRACE_DEFAULT_IMG}
                    className="object-cover h-full w-full  rounded-[10px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap gap-2 items-center">
                    {item.categoryIds.map((category, idxCategory: number) => (
                      <Button
                        key={`category_${idxCategory}`}
                        className="h-[22px] bg-[#194185] hover:bg-[#194185]/80 text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]"
                      >
                        {/* {blogLang.news} */}
                        {getTitleCategory(category, pathName)}
                      </Button>
                    ))}
                  </div>
                  <span
                    className="cursor-pointer text-[#194185] text-xl leading-[30px] font-semibold max-xl:text-lg max-lg:text-base"
                    onClick={() => {
                      router.push(
                        `/${getEng(pathName)}/blogs/detail/${item.slug}`
                      );
                    }}
                  >
                    {/* {item.name} */}
                    {getNamePostByLang(item, pathName, "name")}
                  </span>
                  <span className="text-[#194185] text-sm leading-5 ">
                    {moment(item?.createdAt).format("DD/MM/YYYY")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {data.length > 4 && (
        <div className="flex flex-col gap-[32px]">
          <span className="text-[#194185] text-2xl leading-8 font-semibold">
            Bài viết liên quan
          </span>
          <div className="grid grid-cols-4 gap-8">
            {data.slice(4).map((item, index) => (
              <div key={index} className="flex flex-col gap-[30px]">
                <div
                  onClick={() => {
                    router.push(
                      `/${getEng(pathName)}/blogs/detail/${item.slug}`
                    );
                  }}
                  className="cursor-pointer w-full h-[220px] max-lg:h-[130px]"
                >
                  <img
                    src={item.thumbnail || NDA_TRACE_DEFAULT_IMG}
                    className="object-cover h-full w-full rounded-[16px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap gap-2 items-center">
                    {item.categoryIds.map((category, idxCategory: number) => (
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
                    onClick={() => {
                      router.push(
                        `/${getEng(pathName)}/blogs/detail/${item.slug}`
                      );
                    }}
                  >
                    {/* {item.name} */}
                    {getNamePostByLang(item, pathName, "name")}
                  </span>
                  <span className="text-[#194185] text-sm leading-5 ">
                    {moment(item?.createdAt).format("DD/MM/YYYY")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
