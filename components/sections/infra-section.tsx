import { getDictionary } from "@/get-dictionary";
import { Icons } from "../icons";
import { useState } from "react";
import { cn, inEnglish } from "@/lib/utils";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useIsMobile } from "../hooks/use-mobile";

export default function InfraSection({
  infraLang,
}: {
  infraLang: Awaited<ReturnType<typeof getDictionary>>["infra"];
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileView infraLang={infraLang} />;
  }

  return <DesktopView infraLang={infraLang} />;
}

function MobileView({
  infraLang,
}: {
  infraLang: Awaited<ReturnType<typeof getDictionary>>["infra"];
}) {
  const pathName = usePathname();
  return (
    <section id="infra" className="pt-[50px] pb-6">
      <div className="relative flex justify-center min-h-[886px]">
        <div className="z-10 absolute top-0">
          <div className="w-[886px] h-[886px]">
            <img
              src="/images/infra-bg.png"
              className="object-cover h-full w-full"
              alt="not-found"
            />
          </div>
        </div>
        <div className="relative z-20 flex flex-col items-center">
          <span className="px-4 whitespace-pre-line text-center text-[#0057D6] text-[30px] font-semibold leading-[38px]">
            {infraLang?.title.split("-")[0]}
          </span>
          <span className="px-4 text-field-color text-center text-[#0057D6] text-[30px] font-semibold leading-[38px]">
            {infraLang?.title.split("-")[1]}
          </span>
          <div className="absolute top-[322px] w-full flex justify-center">
            <span className="text-center text-[#194185] text-lg leading-7 font-semibold">
              {infraLang.text1}
            </span>
          </div>
          <div className="absolute top-[520px] w-full flex justify-center">
            <span className="whitespace-pre-line text-center text-[#194185] text-lg leading-7 font-semibold">
              {infraLang.text2}
            </span>
          </div>
          <div className="absolute top-[780px] w-full flex justify-center">
            <span className="text-center text-[#194185] text-lg leading-7 font-semibold">
              {infraLang.text3}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopView({
  infraLang,
}: {
  infraLang: Awaited<ReturnType<typeof getDictionary>>["infra"];
}) {
  const pathName = usePathname();
  return (
    <section
      id="infra"
      className="container mx-auto 2xl:px-[123px] xl:px-[60px] max-xl:mt-[54px]"
    >
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
          <div className="z-20 absolute top-[226px] right-[-260px]">
            <div className="flex flex-col gap-[29px] items-end">
              <div className="flex items-center gap-2">
                <div className="w-[126px] border-t-2 border-[#2E90FA] border-dashed" />
                <div className="p-6 w-[375px] rounded-[12px] bg-[#EAF8FF] border border-[#0074FF]">
                  <div className="flex items-center justify-between">
                    <Icons.infraChatIcon />
                    <Icons.infraAirIcon />
                    <Icons.infraCarIcon />
                    <Icons.infraPlusIcon />
                    <Icons.infraLandmarkIcon />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[67px] border-t-2 border-[#2E90FA] border-dashed" />
                <div className="p-6 w-[375px] rounded-[12px] bg-[#EAF8FF] border border-[#0074FF]">
                  <div className="flex items-center justify-between">
                    <Icons.infraDB1Icon />
                    <Icons.infraDB2Icon />
                    <Icons.infraDB3Icon />
                    <Icons.infraDB4Icon />
                    <Icons.infraDB5Icon />
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-[67px] border-t-2 border-[#2E90FA] border-dashed" />
                <div className="p-6 w-[375px] rounded-[12px] bg-[#EAF8FF] border border-[#0074FF]">
                  <div className="flex items-center justify-between">
                    <Icons.infraDB6Icon />
                    <Icons.infraDB6Icon />
                    <Icons.infraDB6Icon />
                    <Icons.infraDB6Icon />
                    <Icons.infraDB6Icon />
                    <Icons.infraDB6Icon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-20 absolute top-[240px] left-[-220px]">
            <div className="flex flex-col gap-[60px]">
              <div className="flex items-center gap-2">
                <span className="whitespace-pre-line text-[#002D87] text-xl font-medium leading-7">
                  {infraLang.text1}
                </span>
                <div
                  className={cn(
                    "border-t-2 border-[#2E90FA] border-dashed",
                    inEnglish(pathName) ? "w-[290px]" : "w-[300px]"
                  )}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="whitespace-pre-line text-[#002D87] text-xl font-medium leading-7">
                  {infraLang.text2}
                </span>
                <div className="w-[110px] border-t-2 border-[#2E90FA] border-dashed" />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="whitespace-pre-line text-[#002D87] text-xl font-medium leading-7">
                  {infraLang.text3}
                </span>
                <div className="w-[220px] border-t-2 border-[#2E90FA] border-dashed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
