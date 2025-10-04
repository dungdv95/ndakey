import { getDictionary } from "@/get-dictionary";
import { Icons } from "../icons";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function InfraSection({
  infraLang,
}: {
  infraLang: Awaited<ReturnType<typeof getDictionary>>["infra"];
}) {
  return (
    <div className="container mx-auto 2xl:px-[123px] xl:px-[60px] max-xl:mt-[54px]">
      <div className=" pt-7 pb-10 flex justify-center items-center">
        <div className="relative max-h-[774px] max-w-[774px]">
          <img
            src="/images/vn-infra-bg.png"
            className="object-cover h-full w-full"
            alt="not-found"
          />
          <div className="z-20 absolute top-2 w-full flex flex-col items-center">
            <span className="text-[#0057D6] text-4xl font-semibold leading-11 tracking-[-0.72px]">
              {infraLang?.title.split("-")[0]}
            </span>
            <span className="text-field-color text-4xl font-semibold leading-11 tracking-[-0.72px]">
              {infraLang?.title.split("-")[1]}
            </span>
          </div>
          <div className="z-20 absolute top-[150px] right-[-260px]">
            <div className="flex flex-col gap-6 items-end">
              <div className="max-w-[503px] max-h-[160px]">
                <img
                  src="/images/infra-partner.png"
                  className="object-cover h-full w-full"
                  alt="not-found"
                />
              </div>
              <div className="max-w-[444px] max-h-[107px]">
                <img
                  src="/images/infra-platform.png"
                  className="object-cover h-full w-full"
                  alt="not-found"
                />
              </div>
              <div className="mt-3 max-w-[444px] max-h-[117px]">
                <img
                  src="/images/infra-db.png"
                  className="object-cover h-full w-full"
                  alt="not-found"
                />
              </div>
            </div>
          </div>
          <div className="z-20 absolute top-[240px] left-[-220px]">
            <div className="flex flex-col gap-[60px]">
              <div className="flex items-center gap-2">
                <span className="whitespace-pre-line text-[#002D87] text-xl font-medium leading-7">{`Ứng dụng quản lý\ndanh tính số`}</span>
                <div className="w-[300px] border-t-2 border-[#2E90FA] border-dashed" />
              </div>
              <div className="flex items-center gap-2">
                <span className="whitespace-pre-line text-[#002D87] text-xl font-medium leading-7">{`Nền tảng Định danh phi tập trung\nquốc gia`}</span>
                <div className="w-[110px] border-t-2 border-[#2E90FA] border-dashed" />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="whitespace-pre-line text-[#002D87] text-xl font-medium leading-7">{`Nền tảng Blockchain\nquốc gia`}</span>
                <div className="w-[220px] border-t-2 border-[#2E90FA] border-dashed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
