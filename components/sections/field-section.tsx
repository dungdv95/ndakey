import { getDictionary } from "@/get-dictionary";
import { Icons } from "../icons";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

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
          <div className="mt-4 flex flex-col items-center gap-7">
            <div className="flex justify-between gap-6">
              <div
                className={cn(
                  "cursor-pointer w-[132px] h-14 rounded-full flex justify-center items-center",
                  isActive === "finance" ? "bg-[#0073ff]" : "bg-[#FAFAFA]"
                )}
                onClick={() => setIsActive("finance")}
              >
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.financeIcon
                      strokeColor={
                        isActive === "finance" ? "#EFF8FF" : "#1849A9"
                      }
                    />
                  </div>
                  <span
                    className={cn(
                      "text-base leading-6",
                      isActive === "finance"
                        ? "text-[#EFF8FF] font-semibold"
                        : "text-[#194185] "
                    )}
                  >
                    {fieldLang?.finance}
                  </span>
                </div>
              </div>
              <div
                className={cn(
                  "cursor-pointer w-[162px] h-14 rounded-full flex justify-center items-center",
                  isActive === "business" ? "bg-[#0073ff]" : "bg-[#FAFAFA]"
                )}
                onClick={() => setIsActive("business")}
              >
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.businessIcon
                      strokeColor={
                        isActive === "business" ? "#EFF8FF" : "#1849A9"
                      }
                    />
                  </div>
                  <span
                    className={cn(
                      "text-base leading-6",
                      isActive === "business"
                        ? "text-[#EFF8FF] font-semibold"
                        : "text-[#194185] "
                    )}
                  >
                    {fieldLang?.business}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "cursor-pointer w-[132px] h-14 rounded-full flex justify-center items-center",
                  isActive === "job" ? "bg-[#0073ff]" : "bg-[#FAFAFA]"
                )}
                onClick={() => setIsActive("job")}
              >
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.jobIcon
                      strokeColor={isActive === "job" ? "#EFF8FF" : "#1849A9"}
                    />
                  </div>
                  <span
                    className={cn(
                      "text-base leading-6",
                      isActive === "job"
                        ? "text-[#EFF8FF] font-semibold"
                        : "text-[#194185] "
                    )}
                  >
                    {fieldLang?.job}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "cursor-pointer w-[192px] h-14 rounded-full flex justify-center items-center",
                  isActive === "publicAd" ? "bg-[#0073ff]" : "bg-[#FAFAFA]"
                )}
                onClick={() => setIsActive("publicAd")}
              >
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.publicAdIcon
                      strokeColor={
                        isActive === "publicAd" ? "#EFF8FF" : "#1849A9"
                      }
                    />
                  </div>
                  <span
                    className={cn(
                      "text-base leading-6",
                      isActive === "publicAd"
                        ? "text-[#EFF8FF] font-semibold"
                        : "text-[#194185] "
                    )}
                  >
                    {fieldLang?.publicAd}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "cursor-pointer w-[115px] h-14 rounded-full flex justify-center items-center",
                  isActive === "entertainment" ? "bg-[#0073ff]" : "bg-[#FAFAFA]"
                )}
                onClick={() => setIsActive("entertainment")}
              >
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.entertainmentIcon
                      strokeColor={
                        isActive === "entertainment" ? "#EFF8FF" : "#1849A9"
                      }
                    />
                  </div>
                  <span
                    className={cn(
                      "text-base leading-6",
                      isActive === "entertainment"
                        ? "text-[#EFF8FF] font-semibold"
                        : "text-[#194185] "
                    )}
                  >
                    {fieldLang?.entertainment}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "cursor-pointer w-[116px] h-14 rounded-full flex justify-center items-center",
                  isActive === "travel" ? "bg-[#0073ff]" : "bg-[#FAFAFA]"
                )}
                onClick={() => setIsActive("travel")}
              >
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.travelIcon
                      strokeColor={
                        isActive === "travel" ? "#EFF8FF" : "#1849A9"
                      }
                    />
                  </div>
                  <span
                    className={cn(
                      "text-base leading-6",
                      isActive === "travel"
                        ? "text-[#EFF8FF] font-semibold"
                        : "text-[#194185] "
                    )}
                  >
                    {fieldLang?.travel}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden w-full py-10 px-6 bg-[#FFFFFFCC] rounded-[24px] border-2 border-[#5DA8FF] shadow-[0_13px_20px_0_#B6D5E5]">
              <div className="z-10 absolute top-[10px] left-6">
                <Icons.fieldTabLeft />
              </div>
              <div className="z-10 absolute bottom-[10px] right-6">
                <Icons.fieldTabRight />
              </div>

              {isActive === "finance" && (
                <div className="relative z-20 flex justify-center items-center">
                  <div className="max-h-[703px] max-w-[963px]">
                    <img
                      src="/images/vn-finance.png"
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "business" && (
                <div className="relative z-20 flex justify-center items-center">
                  <div className="max-h-[703px] max-w-[957px]">
                    <img
                      src="/images/vn-business.png"
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "job" && (
                <div className="relative z-20 flex justify-center items-center">
                  <div className="max-h-[703px] max-w-[976px]">
                    <img
                      src="/images/vn-job.png"
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "publicAd" && (
                <div className="relative z-20 flex justify-center items-center">
                  <div className="max-h-[703px] max-w-[968px]">
                    <img
                      src="/images/vn-public-ad.png"
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "entertainment" && (
                <div className="relative z-20 flex justify-center items-center">
                  <div className="max-h-[703px] max-w-[968px]">
                    <img
                      src="/images/vn-entertainment.png"
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "travel" && (
                <div className="relative z-20 flex justify-center items-center">
                  <div className="max-h-[703px] max-w-[996px]">
                    <img
                      src="/images/vn-travel.png"
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div className="mt-6">3</div> */}
          <div className="mt-6 flex justify-center">
            <Button className="bg-[#0073ff] h-14 w-[200px] rounded-full text-white text-lg font-semibold leading-7">
              Tư vấn giải pháp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
