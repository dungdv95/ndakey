import { getDictionary } from "@/get-dictionary";
import { Icons } from "../icons";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function FieldSection({
  fieldLang,
}: {
  fieldLang: Awaited<ReturnType<typeof getDictionary>>["field"];
}) {
  const [isActive, setIsActive] = useState("finance");

  return (
    <div className="bg-field-section">
      <div className="container mx-auto 2xl:px-[123px] xl:px-[60px] max-xl:mt-[54px]">
        <div className="py-10 flex flex-col gap-6">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-4 items-center">
              <span className="text-[#0059DE] text-4xl font-semibold leading-11">
                {fieldLang?.title.split("-")[0]}
              </span>
              <span className="text-[#A6CAFF] text-2xl leading-8">|</span>
              <span className="text-field-color text-4xl font-semibold leading-11">
                {fieldLang?.title.split("-")[1]}
              </span>
            </div>
            <span className="text-[#194185] text-base leading-6">
              {fieldLang?.description}
            </span>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="flex justify-between gap-6">
              <div
                className={cn(
                  "cursor-pointer  w-[132px] h-14 rounded-full flex justify-center items-center",
                  isActive === "finance" ? "bg-[#0073ff]" : "bg-[#FAFAFA]"
                )}
              >
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.financeIcon />
                  </div>
                  <span
                    className={cn(
                      "text-base leading-6",
                      isActive === "finance"
                        ? "text-[#EFF8FF] "
                        : "text-[#194185] "
                    )}
                  >
                    {fieldLang?.finance}
                  </span>
                </div>
              </div>
              <div className="cursor-pointer bg-[#FAFAFA] w-[162px] h-14 rounded-full flex justify-center items-center">
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.businessIcon />
                  </div>
                  <span className="text-[#194185] text-base leading-6">
                    {fieldLang?.business}
                  </span>
                </div>
              </div>

              <div className="cursor-pointer bg-[#FAFAFA] w-[132px] h-14 rounded-full flex justify-center items-center">
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.jobIcon />
                  </div>
                  <span className="text-[#194185] text-base leading-6">
                    {fieldLang?.job}
                  </span>
                </div>
              </div>

              <div className="cursor-pointer bg-[#FAFAFA] w-[192px] h-14 rounded-full flex justify-center items-center">
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.publicAdIcon />
                  </div>
                  <span className="text-[#194185] text-base leading-6">
                    {fieldLang?.publicAd}
                  </span>
                </div>
              </div>

              <div className="cursor-pointer bg-[#FAFAFA] w-[115px] h-14 rounded-full flex justify-center items-center">
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.entertainmentIcon />
                  </div>
                  <span className="text-[#194185] text-base leading-6">
                    {fieldLang?.entertainment}
                  </span>
                </div>
              </div>
              <div className="cursor-pointer bg-[#FAFAFA] w-[116px] h-14 rounded-full flex justify-center items-center">
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.travelIcon />
                  </div>
                  <span className="text-[#194185] text-base leading-6">
                    {fieldLang?.travel}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">3</div>
          <div>btn</div>
        </div>
      </div>
    </div>
  );
}
