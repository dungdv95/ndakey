import { getDictionary } from "@/get-dictionary";
import { Icons } from "../icons";
import { useState } from "react";
import { cn, inEnglish, isEnglish, pathLanguage } from "@/lib/utils";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useIsMobile } from "../hooks/use-mobile";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function FieldSection({
  fieldLang,
}: {
  fieldLang: Awaited<ReturnType<typeof getDictionary>>["field"];
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileView fieldLang={fieldLang} />;
  }
  return <DesktopView fieldLang={fieldLang} />;
}

function MobileView({
  fieldLang,
}: {
  fieldLang: Awaited<ReturnType<typeof getDictionary>>["field"];
}) {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState("finance");
  const [open, setOpen] = useState(false);

  return (
    <section id="usecase" className="bg-field-section">
      <div className="pt-10 pb-14 flex flex-col">
        <div className="px-5 flex flex-col gap-1">
          <span className="text-[#0057D6] text-[30px] leading-[38px] font-semibold">
            {fieldLang?.title.split("-")[0]}
          </span>
          <span className="text-field-color text-[30px] leading-[38px] font-semibold">
            {fieldLang?.title.split("-")[1]}
          </span>
        </div>
        <div className="px-6 mt-6">
          <ScrollArea type="hover" className={cn("w-full")}>
            <div className="flex justify-between gap-6">
              <div
                className={cn(
                  "h-fit min-w-[140px] cursor-pointer px-5 py-3.5 rounded-full flex justify-center items-center",
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
                      "text-sm leading-6",
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
                  "h-fit min-w-[140px] cursor-pointer px-5 py-3.5 rounded-full flex justify-center items-center",
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
                      "text-sm leading-6",
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
                  "h-fit min-w-[160px] cursor-pointer px-5 py-3.5 rounded-full flex justify-center items-center",
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
                      "text-sm leading-6",
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
                  "h-fit min-w-[230px] cursor-pointer px-6 py-3.5 rounded-full flex justify-center items-center",
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
                      "text-sm leading-6",
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
                  "h-fit min-w-[170px] cursor-pointer px-5 py-3.5 rounded-full flex justify-center items-center",
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
                      "text-sm leading-6",
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
                  "h-fit min-w-[140px] cursor-pointer px-5 py-3.5 rounded-full flex justify-center items-center",
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
                      "text-sm leading-6",
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
            <div className="mt-2">
              <ScrollBar orientation="horizontal" />
            </div>
          </ScrollArea>
        </div>

        <div className="mt-8 px-2 flex flex-col">
          <ScrollArea type="always" className={cn("w-full")}>
            <div className="w-full py-5 px-4 bg-[#FFFFFFCC] rounded-[24px] border-2 border-[#5DA8FF] ">
              {isActive === "finance" && (
                <div className="flex justify-center items-center">
                  <div
                    className={cn(
                      inEnglish(pathName)
                        ? "h-[703px] w-[1008px]"
                        : "h-[703px] w-[980px]"
                    )}
                  >
                    <img
                      src={`/images/${pathLanguage(pathName)}/finance.png`}
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}

              {isActive === "business" && (
                <div className="flex justify-center items-center">
                  <div
                    className={cn(
                      inEnglish(pathName)
                        ? "h-[703px] w-[1001px]"
                        : "h-[703px] w-[1009px]"
                    )}
                  >
                    <img
                      src={`/images/${pathLanguage(pathName)}/business.png`}
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "job" && (
                <div className="flex justify-center items-center">
                  <div
                    className={cn(
                      inEnglish(pathName)
                        ? "h-[703px] w-[998px]"
                        : "h-[703px] w-[994px]"
                    )}
                  >
                    <img
                      src={`/images/${pathLanguage(pathName)}/job.png`}
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "publicAd" && (
                <div className="flex justify-center items-center">
                  <div
                    className={cn(
                      inEnglish(pathName)
                        ? "h-[703px] w-[1001px]"
                        : "h-[703px] w-[968px]"
                    )}
                  >
                    <img
                      src={`/images/${pathLanguage(pathName)}/public-ad.png`}
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "entertainment" && (
                <div className="flex justify-center items-center">
                  <div
                    className={cn(
                      inEnglish(pathName)
                        ? "h-[703px] w-[997px]"
                        : "h-[703px] w-[1013px]"
                    )}
                  >
                    <img
                      src={`/images/${pathLanguage(
                        pathName
                      )}/entertainment.png`}
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}

              {isActive === "travel" && (
                <div className="flex justify-center items-center">
                  <div
                    className={cn(
                      inEnglish(pathName)
                        ? "h-[703px] w-[996px]"
                        : "h-[703px] w-[996px]"
                    )}
                  >
                    <img
                      src={`/images/${pathLanguage(pathName)}/travel.png`}
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="mt-2.5">
              <ScrollBar orientation="horizontal" />
            </div>
          </ScrollArea>
        </div>
        <div className="mt-2.5">
          <Dialog open={open} onOpenChange={setOpen}>
            <div className="w-full flex justify-center ">
              <DialogTrigger asChild>
                <Button
                  className="h-5 p-0 cursor-pointer text-center text-[#1570EF] text-sm leading-5 underline focus-visible:ring-0"
                  variant="ghost"
                >
                  {inEnglish(pathName)
                    ? `View enlarged image`
                    : `Xem ảnh lớn hơn`}
                </Button>
              </DialogTrigger>
            </div>

            <DialogContent
              className="min-w-[98%] py-3 px-2"
              showCloseButton={false}
            >
              <DialogHeader className="hidden">
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3">
                <div className="h-full w-full flex justify-center items-center">
                  <img
                    src={getUrlImg(pathName, isActive)}
                    className="object-cover h-full w-full"
                    alt=""
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    className="h-9 w-[100px] bg-[#3176EE] hover:bg-[#3176EE]/80 rounded-[8px] text-white text-base leading-6 font-medium
                  max-[31.25rem]:text-sm max-[31.25rem]:h-7 max-[31.25rem]:w-[80px]
                  "
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    OK
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="mt-6 flex justify-center">
          <Button className="bg-[#0073ff] h-14 w-[200px] rounded-full text-white text-lg font-semibold leading-7">
            {inEnglish(pathName) ? `Request Solution` : `Tư vấn giải pháp`}
          </Button>
        </div>
      </div>
    </section>
  );
}

function DesktopView({
  fieldLang,
}: {
  fieldLang: Awaited<ReturnType<typeof getDictionary>>["field"];
}) {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState("finance");
  return (
    <section id="usecase" className="bg-field-section">
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
            {/* <span className="text-[#194185] text-base leading-6">
              {fieldLang?.description}
            </span> */}
          </div>
          <div className="mt-4 flex flex-col items-center gap-7">
            <div className="flex justify-between gap-6">
              <div
                className={cn(
                  "cursor-pointer p-4 rounded-full flex justify-center items-center",
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
                  "cursor-pointer p-4 rounded-full flex justify-center items-center",
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
                  "cursor-pointer p-4 rounded-full flex justify-center items-center",
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
                  "cursor-pointer p-4 rounded-full flex justify-center items-center",
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
                  "cursor-pointer p-4 rounded-full flex justify-center items-center",
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
                  "cursor-pointer p-4 rounded-full flex justify-center items-center",
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
            <div className="relative min-h-[783px] overflow-hidden w-full py-10 px-6 bg-[#FFFFFFCC] rounded-[24px] border-2 border-[#5DA8FF] shadow-[0_13px_20px_0_#B6D5E5]">
              <div className="z-10 absolute top-[10px] left-6">
                <Icons.fieldTabLeft />
              </div>
              <div className="z-10 absolute bottom-[10px] right-6">
                <Icons.fieldTabRight />
              </div>

              {isActive === "finance" && (
                <div className="relative z-20 flex justify-center items-center">
                  <div
                    className={cn(
                      inEnglish(pathName)
                        ? "max-h-[703px] max-w-[1008px]"
                        : "max-h-[703px] max-w-[980px]"
                    )}
                  >
                    <img
                      src={`/images/${pathLanguage(pathName)}/finance.png`}
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "business" && (
                <div className="relative z-20 flex justify-center items-center">
                  <div
                    className={cn(
                      inEnglish(pathName)
                        ? "max-h-[703px] max-w-[1001px]"
                        : "max-h-[703px] max-w-[1009px]"
                    )}
                  >
                    <img
                      src={`/images/${pathLanguage(pathName)}/business.png`}
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "job" && (
                <div className="relative z-20 flex justify-center items-center">
                  <div
                    className={cn(
                      inEnglish(pathName)
                        ? "max-h-[703px] max-w-[998px]"
                        : "max-h-[703px] max-w-[994px]"
                    )}
                  >
                    <img
                      src={`/images/${pathLanguage(pathName)}/job.png`}
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "publicAd" && (
                <div className="relative z-20 flex justify-center items-center">
                  <div
                    className={cn(
                      inEnglish(pathName)
                        ? "max-h-[703px] max-w-[1001px]"
                        : "max-h-[703px] max-w-[968px]"
                    )}
                  >
                    <img
                      src={`/images/${pathLanguage(pathName)}/public-ad.png`}
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "entertainment" && (
                <div className="relative z-20 flex justify-center items-center">
                  <div
                    className={cn(
                      inEnglish(pathName)
                        ? "max-h-[703px] max-w-[997px]"
                        : "max-h-[703px] max-w-[1013px]"
                    )}
                  >
                    <img
                      src={`/images/${pathLanguage(
                        pathName
                      )}/entertainment.png`}
                      className="object-cover h-full w-full"
                      alt="not-found"
                    />
                  </div>
                </div>
              )}
              {isActive === "travel" && (
                <div className="relative z-20 flex justify-center items-center">
                  <div className={cn("max-h-[703px] max-w-[996px]")}>
                    <img
                      src={`/images/${pathLanguage(pathName)}/travel.png`}
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
              {inEnglish(pathName) ? `Request Solution` : `Tư vấn giải pháp`}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const getUrlImg = (pathName: string, isActive: string) => {
  if (isActive === "finance") {
    return `/images/${pathLanguage(pathName)}/finance.png`;
  }
  if (isActive === "business") {
    return `/images/${pathLanguage(pathName)}/business.png`;
  }
  if (isActive === "job") {
    return `/images/${pathLanguage(pathName)}/job.png`;
  }
  if (isActive === "publicAd") {
    return `/images/${pathLanguage(pathName)}/public-ad.png`;
  }
  if (isActive === "entertainment") {
    return `/images/${pathLanguage(pathName)}/entertainment.png`;
  }
  return `/images/${pathLanguage(pathName)}/travel.png`;
};
