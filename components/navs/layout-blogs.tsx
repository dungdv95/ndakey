"use client";

import { getDictionary } from "@/get-dictionary";
import { useStore } from "./store";
import { useIsMobile } from "../hooks/use-mobile";
import { usePathname, useRouter } from "next/navigation";
import { cn, getEng, getTitleCategory } from "@/lib/utils";
import path from "path";

interface LayoutProps {
  children: React.ReactNode;
  blogListLang: Awaited<ReturnType<typeof getDictionary>>["blogList"];
}

export default function LayoutBlogs({ children, blogListLang }: LayoutProps) {
  const listCategory = useStore((state) => state.listCategory);
  const isMobile = useIsMobile();
  const pathName = usePathname();

  const router = useRouter();

  if (isMobile) {
    return (
      <div className="bg-[#FAFAFA]">
        <div className="pt-[72px] flex flex-col">
          <div className="flex justify-center py-4">
            <div className="w-[80%] bg-transparent gap-2 h-fit">
              <div className="w-full grid grid-cols-2 gap-2">
                <div
                  //   onClick={() => {
                  //     router.push(`/${getEng(pathName)}/blogs/all`);
                  //   }}
                  className={cn(
                    "flex justify-center p-2.5 h-11 w-full bg-white text-[#194185] text-base leading-6 rounded-md",
                    pathName.includes("/all") && "font-bold bg-[#EFF8FF]"
                  )}
                >
                  {blogListLang.all}
                </div>
                {listCategory.map((category, index) => (
                  <div
                    // onClick={() => {
                    //   router.push(`/${getEng(pathName)}/blogs/${category.id}`);
                    // }}
                    className={cn(
                      "flex justify-center p-2.5 h-11 w-full bg-white text-[#194185] text-base leading-6 rounded-md",
                      pathName.includes(`/${category.id}`) &&
                        "font-bold bg-[#EFF8FF]"
                    )}
                    key={index}
                  >
                    {getTitleCategory(category.id, pathName)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-4 px-[15px] bg-white">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[146px]">
      <div className="flex flex-col gap-9">
        <div className="bg-[#EFF8FF] py-[18px]">
          <div className="container mx-auto 2xl:px-[123px] xl:px-[60px]">
            <div className="h-6 gap-10 inline-flex">
              <div
                // onClick={() => {
                //   router.push(`/${getEng(pathName)}/blogs/all`);
                // }}
                className={cn(
                  "cursor-pointer text-[#535862] text-base leading-6 font-medium ",
                  pathName.includes("/all") && "text-[#194185] font-bold"
                )}
              >
                {blogListLang.all}
              </div>
              {listCategory.map((category, index) => (
                <div
                  //   onClick={() => {
                  //     router.push(`/${getEng(pathName)}/blogs/${category.id}`);
                  //   }}
                  key={index}
                  className={cn(
                    "cursor-pointer text-[#535862] text-base leading-6 font-medium ",
                    pathName.includes(`/${category.id}`) &&
                      "text-[#194185] font-bold"
                  )}
                >
                  {getTitleCategory(category.id, pathName)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto 2xl:px-[123px] xl:px-[60px]">
          {children}
        </div>
      </div>
    </div>
  );
}
