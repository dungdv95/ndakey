"use client";

import { usePathname, useRouter } from "next/navigation";
import { BlogProps } from "../navs/store";
import { motion } from "motion/react";
import { getEng, getNamePostByLang, getTitleCategory } from "@/lib/utils";
import { Button } from "../ui/button";
import moment from "moment";
import { NDA_TRACE_DEFAULT_IMG } from "@/constants/images";

export function BlogViewMobile({ data }: { data: BlogProps[] }) {
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
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <div
          className="cursor-pointer w-full h-[230px]"
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
        <div className="mt-1">
          <div className="flex flex-wrap gap-2 items-center">
            {data[0]?.categoryIds.map((item, index: number) => (
              <Button
                key={index}
                className="h-[22px] bg-[#194185] hover:bg-[#194185]/80 rounded-[4px] text-[#EFF8FF] text-xs leading-[18px] tracking-[-0.24px]"
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
          {/* {data[0]?.name} */}
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
      <div className="flex flex-col gap-6">
        {data.slice(1).map((item, index: number) => (
          <div key={index} className="flex gap-4 items-start">
            <div
              className="w-[118px] h-[91px] flex-shrink-0"
              onClick={() => {
                router.push(`/${getEng(pathName)}/blogs/detail/${item?.slug}`);
              }}
            >
              <img
                src={item.thumbnail || NDA_TRACE_DEFAULT_IMG}
                className="object-cover h-full w-full  rounded-[10px]"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
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
                onClick={() => {
                  router.push(
                    `/${getEng(pathName)}/blogs/detail/${item?.slug}`
                  );
                }}
                className="text-[#194185] text-sm leading-6 font-semibold"
              >
                {getNamePostByLang(item, pathName, "name")}
              </span>
              <span className="text-[#194185] text-sm leading-5">
                {moment(item?.createdAt).format("DD/MM/YYYY")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
