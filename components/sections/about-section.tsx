import { getDictionary } from "@/get-dictionary";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { cn, inEnglish, pathLanguage } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { usePathname } from "next/navigation";
import { useIsMobile } from "../hooks/use-mobile";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function AboutSection({
  aboutLang,
}: {
  aboutLang: Awaited<ReturnType<typeof getDictionary>>["about"];
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileAbout aboutLang={aboutLang} />;
  }

  return <DesktopAbout aboutLang={aboutLang} />;
}

function MobileAbout({
  aboutLang,
}: {
  aboutLang: Awaited<ReturnType<typeof getDictionary>>["about"];
}) {
  const pathName = usePathname();
  return (
    <section id="about" className="flex flex-col gap-14">
      <div className="pt-[112px] mb-bg-about rounded-b-2xl">
        <div className="flex flex-col items-center gap-[26px]">
          <div className=" px-4 flex flex-col items-center gap-2">
            <span className="text-[#0057D6] text-[30px] font-semibold leading-[38px]">
              {aboutLang?.title.split("-")[0]}
            </span>
            <span className="text-about-color text-[30px] font-semibold leading-[38px]">
              {aboutLang?.title.split("-")[1]}
            </span>
            <span className="text-[#0057D6] text-[30px] font-semibold leading-[38px]">
              {aboutLang?.title.split("-")[2]}{" "}
              <span className="text-about-color">
                {aboutLang?.title.split("-")[3]}
              </span>
            </span>
          </div>
          <div className="px-7 text-center">
            <span className="text-[#0E3588] text-sm leading-6">
              {aboutLang?.description}
            </span>
          </div>
          <div className="px-4 flex gap-4 items-center justify-center">
            <Button className="h-10 w-[150px] rounded-[8px] justify-start py-1.5">
              <div className="flex gap-1.5 items-center">
                <div>
                  <Icons.appleIcon className="!w-[18px] !h-[22px]" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-white text-[8px] font-medium">
                    {aboutLang.btn.apple}
                  </span>
                  <span className="text-[18px] font-medium tracking-[-1.251px] leading-4">
                    App Store
                  </span>
                </div>
              </div>
            </Button>
            <Button className="h-10 w-[150px] rounded-[8px] justify-start py-1.5">
              <div className="flex gap-1.5 items-center">
                <div>
                  <Icons.chPlayIcon className="!w-[22px] !h-[24px]" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-white text-[8px] font-medium">
                    {aboutLang.btn.chPlay}
                  </span>
                  <span className="text-[18px] font-medium tracking-[-1.251px] leading-4">
                    Google Play
                  </span>
                </div>
              </div>
            </Button>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="relative max-w-[532px] max-h-[533px] ">
              <div className="absolute w-full h-full mb-overlap-phone rounded-b-2xl" />
              <img
                src={`/images/${pathLanguage(pathName)}/about-phone.png`}
                className="px-4 object-cover h-full w-full"
                alt="not-found"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <span className="px-4 text-[#0057D6] text-[30px] font-semibold leading-[38px]">
          {aboutLang.whatNdaKey.title}
        </span>
        <span className="px-4 text-[#194185] text-center text-sm leading-5">
          {aboutLang.whatNdaKey.description}
        </span>
        <div className="mt-3 flex justify-center">
          <VideoCustomMobile aboutLang={aboutLang} />
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center gap-4">
        <span className="px-4 text-[#0057D6] text-center text-[30px] font-semibold leading-[38px]">
          {aboutLang?.active.title}
        </span>
        <span className="px-4 text-[#194185] text-center text-sm leading-5">
          {aboutLang?.active.description}
        </span>
        <div className="w-full flex justify-center bg-[url(/images/bg-about-ndakey.png)] bg-center bg-cover">
          <div className="pb-[60px] relative">
            <div className="w-[550px] h-[593px] max-[34rem]:w-[430px] max-[34rem]:h-[464px]">
              <img
                src="/images/about-nda-key-active.png"
                className="object-cover h-full w-full"
                alt="not-found"
              />
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <div className="absolute top-[38px] right-[245px] max-[34rem]:top-[25px] max-[34rem]:right-[178px]">
                  <Icons.aboutActiveHead className="!w-[73px] !h-[50px]" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="px-3 py-2 w-fit bg-[#1849A9]">
                <p className="text-white text-xs font-semibold">
                  {aboutLang.active.diagramHoverT1}
                </p>
              </PopoverContent>
            </Popover>
            <div className="absolute top-[100px] right-[240px] max-[34rem]:top-[83px] max-[34rem]:right-[175px] w-[100px] flex justify-center">
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-[9px] leading-3">
                {aboutLang.active.diagramT1}
              </span>
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <div
                  className={cn(
                    "absolute top-[120px] left-[112px] max-[34rem]:top-[90px] max-[34rem]:left-[75px] flex justify-center -rotate-40",
                    inEnglish(pathName) ? "w-[100px]" : "w-[90px]"
                  )}
                >
                  <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-[9px] leading-3">
                    {aboutLang.active.diagramT2}
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="px-3 py-2 w-fit bg-[#1849A9]">
                <p className="whitespace-pre-line text-white text-xs font-semibold leading-[18px]">
                  {aboutLang.active.diagramHoverT2}
                </p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <div
                  className={cn(
                    "absolute  flex justify-center rotate-43",
                    inEnglish(pathName)
                      ? "w-[110px] top-[127px] right-[133px] max-[34rem]:top-[94px] max-[34rem]:right-[90px]"
                      : "w-[90px] top-[134px] right-[147px] max-[34rem]:top-[103px] max-[34rem]:right-[105px]"
                  )}
                >
                  <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-[9px] leading-3">
                    {aboutLang.active.diagramT3}
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="px-3 py-2 w-fit bg-[#1849A9]">
                <p className="whitespace-pre-line text-white text-xs font-semibold leading-[18px]">
                  {aboutLang.active.diagramHoverT3}
                </p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <div className="absolute top-[188px] left-[70px] max-[34rem]:top-[145px] max-[34rem]:left-[42px]">
                  <Icons.aboutActiveLeft className="w-[67px] h-[60px]" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="px-3 py-2 w-fit bg-[#1849A9]">
                <p className="whitespace-pre-line text-white text-xs font-semibold leading-[18px]">
                  {aboutLang.active.diagramHoverT4}
                </p>
              </PopoverContent>
            </Popover>

            <div
              className={cn(
                "absolute w-[90px] flex justify-center",
                inEnglish(pathName)
                  ? "top-[273px] left-[55px] max-[34rem]:top-[218px] max-[34rem]:left-[32px]"
                  : "top-[267px] left-[55px] max-[34rem]:top-[212px] max-[34rem]:left-[32px]"
              )}
            >
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-[9px] leading-3">
                {aboutLang.active.diagramT4}
              </span>
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <div className="absolute top-[192px] right-[86px] max-[34rem]:top-[145px] max-[34rem]:right-[55px]">
                  <Icons.aboutActiveRight className="w-[53px] h-[61px]" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="px-3 py-2 w-fit bg-[#1849A9]">
                <p className="whitespace-pre-line text-white text-xs font-semibold leading-[18px]">
                  {aboutLang.active.diagramHoverT5}
                </p>
              </PopoverContent>
            </Popover>

            <div
              className={cn(
                "absolute w-[90px] flex justify-center",
                inEnglish(pathName)
                  ? "top-[273px] right-[65px] max-[34rem]:top-[218px] max-[34rem]:right-[36px]"
                  : "top-[267px] right-[65px] max-[34rem]:top-[212px] max-[34rem]:right-[36px] "
              )}
            >
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-[9px] leading-3">
                {aboutLang.active.diagramT5}
              </span>
            </div>

            <div
              className={cn(
                "absolute w-[90px] flex justify-center",
                inEnglish(pathName)
                  ? "w-[100px] top-[355px] left-[56px] max-[34rem]:top-[273px] max-[34rem]:left-[32px]"
                  : "w-[90px] top-[355px] left-[56px] max-[34rem]:top-[273px] max-[34rem]:left-[32px] "
              )}
            >
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-[9px] leading-3">
                {aboutLang.active.diagramT6}
              </span>
            </div>

            <div
              className={cn(
                "absolute  flex justify-center",
                inEnglish(pathName)
                  ? "w-[105px] top-[355px] right-[55px] max-[34rem]:top-[273px] max-[34rem]:right-[36px]"
                  : "w-[90px] top-[355px] right-[65px] max-[34rem]:top-[273px] max-[34rem]:right-[36px]"
              )}
            >
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-[9px] leading-3">
                {aboutLang.active.diagramT7}
              </span>
            </div>

            <div className="absolute top-[220px] right-[235px] max-[34rem]:top-[170px] max-[34rem]:right-[175px] w-[90px] flex justify-center">
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-[9px] leading-3">
                {aboutLang.active.diagramT8}
              </span>
            </div>

            <div
              className={cn(
                "absolute  flex justify-center",
                inEnglish(pathName)
                  ? "w-[105px] right-[170px] top-[205px]"
                  : "w-[90px] right-[235px] top-[260px] max-[34rem]:right-[175px] max-[34rem]:top-[205px]"
              )}
            >
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-[9px] leading-3">
                {aboutLang.active.diagramT9}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopAbout({
  aboutLang,
}: {
  aboutLang: Awaited<ReturnType<typeof getDictionary>>["about"];
}) {
  const pathName = usePathname();
  return (
    <section id="about" className="flex flex-col">
      <div className="mt-[22px] mx-6 bg-about rounded-[24px] pt-[175px]">
        <div className="flex justify-center">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center justify-center">
              <span className="text-[#0057D6] text-4xl font-semibold leading-11 tracking-[-0.72px]">
                {aboutLang?.title.split("-")[0]}
              </span>
              <span className="text-about-color text-4xl font-semibold leading-11 tracking-[-0.72px]">
                {aboutLang?.title.split("-")[1]}
              </span>
              <span className="text-[#0057D6] text-4xl font-semibold leading-11 tracking-[-0.72px]">
                {aboutLang?.title.split("-")[2]}
              </span>
              <span className="text-about-color text-4xl font-semibold leading-11 tracking-[-0.72px]">
                {aboutLang?.title.split("-")[3]}
              </span>
            </div>
            <span className="mt-[21px] text-center whitespace-pre-line text-[#0E3588] text-sm leading-6">
              {aboutLang?.description}
            </span>
            <div className="mt-6 flex gap-4 items-center justify-center">
              <Button className="h-12 w-[180px] rounded-[8px] justify-start py-1.5">
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.appleIcon className="!w-[21px] !h-[26px]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[10px] font-medium">
                      {aboutLang.btn.apple}
                    </span>
                    <span className="text-[21px] font-medium tracking-[-1.502px] leading-5">
                      App Store
                    </span>
                  </div>
                </div>
              </Button>
              <Button className="h-12 w-[180px] rounded-[8px] justify-start py-1.5">
                <div className="flex gap-2 items-center">
                  <div>
                    <Icons.chPlayIcon className="!w-[26px] !h-[28px]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[10px] font-medium">
                      {aboutLang.btn.chPlay}
                    </span>
                    <span className="text-[21px] font-medium tracking-[-1.502px] leading-5">
                      Google Play
                    </span>
                  </div>
                </div>
              </Button>
            </div>
            <div className="relative mt-5 flex justify-center">
              <div className="relative z-20 max-w-[532px] max-h-[533px]">
                <img
                  src={`/images/${pathLanguage(pathName)}/about-phone.png`}
                  className="object-cover h-full w-full"
                  alt="not-found"
                />
              </div>
              <div className="absolute left-[-310px]">
                <div className="max-w-[476px] max-h-[474px]">
                  <img
                    src={`/images/${pathLanguage(pathName)}/about-left.png`}
                    className="object-cover h-full w-full"
                    alt="not-found"
                  />
                </div>
              </div>
              <div className="absolute right-[-265px]">
                <div className="max-w-[436px] max-h-[509px]">
                  <img
                    src={`/images/${pathLanguage(pathName)}/about-right.png`}
                    className="object-cover h-full w-full"
                    alt="not-found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Nda key là gì */}
      <div className="mt-[60px] container mx-auto 2xl:px-[123px] xl:px-[60px] max-xl:mt-[54px]">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-5">
            <span className="text-[#0057D6] text-center text-4xl font-semibold leading-11 tracking-[-0.72px]">
              {aboutLang?.whatNdaKey?.title}
            </span>
            <span className="text-center whitespace-pre-line text-[#194185] text-sm leading-5">
              {aboutLang?.whatNdaKey?.description}
            </span>
          </div>

          <div className="px-[100px] flex justify-center max-lg:px-[40px]">
            <VideoCustom aboutLang={aboutLang} />
          </div>
        </div>
      </div>
      {/* Nda key hoạt động như thế nào */}
      <div className="mt-[92px] flex flex-col">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[#0057D6] text-4xl leading-11 font-semibold tracking-[-0.72px]">
            {aboutLang?.active?.title}
          </span>
          <span className="text-center whitespace-pre-line text-[#194185] text-sm leading-5">
            {aboutLang?.active?.description}
          </span>
        </div>

        <div className="mt-0.5 flex justify-center bg-[url(/images/bg-about-ndakey.png)] bg-center bg-cover">
          <div className="mt-[18px] mb-[85px] relative">
            <div className="max-w-[630px] max-h-[680px]">
              <img
                src="/images/about-nda-key-active.png"
                className="object-cover h-full w-full"
                alt="not-found"
              />
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[29px] right-[260px]">
                  <Icons.aboutActiveHead />
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  {aboutLang.active.diagramHoverT1}
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[120px] left-[224px] w-[150px] flex justify-center">
                  <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">
                    {aboutLang.active.diagramT1}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  {aboutLang.active.diagramHoverT1}
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[134px] left-[98px] w-[150px] flex justify-center -rotate-40">
                  <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">
                    {aboutLang.active.diagramT2}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2" align="center" side="left">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  {aboutLang.active.diagramHoverT2}
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "absolute  w-[160px] flex justify-center rotate-43",
                    inEnglish(pathName)
                      ? "top-[135px] right-[132px]"
                      : "top-[150px] right-[145px]"
                  )}
                >
                  <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">
                    {aboutLang.active.diagramT3}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2" align="center" side="right">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  {aboutLang.active.diagramHoverT3}
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[205px] left-[60px]">
                  <Icons.aboutActiveLeft />
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2" align="center" side="left">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  {aboutLang.active.diagramHoverT4}
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "absolute top-[305px] left-[40px] w-[150px] flex justify-center",
                    inEnglish(pathName)
                      ? "top-[320px] left-[40px]"
                      : "top-[305px] left-[40px]"
                  )}
                >
                  <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">
                    {aboutLang.active.diagramT4}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2" align="center" side="left">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  {aboutLang.active.diagramHoverT4}
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[210px] right-[80px]">
                  <Icons.aboutActiveRight />
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2" align="center" side="right">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  {aboutLang.active.diagramHoverT5}
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "absolute w-[150px] flex justify-center",
                    inEnglish(pathName)
                      ? "top-[320px] right-[40px]"
                      : "top-[310px] right-[40px]"
                  )}
                >
                  <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">
                    {aboutLang.active.diagramT5}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2" align="center" side="right">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  {aboutLang.active.diagramHoverT5}
                </p>
              </TooltipContent>
            </Tooltip>

            <div className="absolute top-[400px] left-[40px] w-[150px] flex justify-center">
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">
                {aboutLang.active.diagramT6}
              </span>
            </div>

            <div className="absolute top-[400px] right-[40px] w-[170px] flex justify-center">
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">
                {aboutLang.active.diagramT7}
              </span>
            </div>

            <div className="absolute top-[250px] left-[224px] w-[150px] flex justify-center">
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">
                {aboutLang.active.diagramT8}
              </span>
            </div>

            <div className="absolute top-[290px] left-[224px] w-[180px] flex justify-center">
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">
                {aboutLang.active.diagramT9}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCustom({
  aboutLang,
}: {
  aboutLang: Awaited<ReturnType<typeof getDictionary>>["about"];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [visiblePlay, setVisiblePlay] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseEnter = () => {
    setVisiblePlay(true);
  };

  const handleMouseLeave = () => {
    setVisiblePlay(false);
  };

  const handleEndVideo = () => {
    setIsPlaying(false);
    setVisiblePlay(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative shadow-[0_24px_48px_-12px_#D5E4E7,0_4px_4px_-2px_rgba(188,214,255,0.04)] rounded-b-[24px]"
    >
      <div className="z-10 relative w-full overflow-hidden rounded-[24px]">
        <video
          poster={"/images/video-thumb.png"}
          onEnded={handleEndVideo}
          ref={videoRef}
          className="size-full"
        >
          <source
            src={
              "https://s3-sgn10.fptcloud.com/cdn/ndatrace/video_introduce.mov"
            }
            type="video/mp4"
          />
        </video>
      </div>
      <AnimatePresence>
        {!isPlaying || visiblePlay ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            key="playingVideo"
            className={cn(
              "z-20 absolute bottom-0 w-full h-[45%] rounded-[22px]",
              "bg-tech-video"
            )}
          >
            <div className="absolute bottom-8 w-full px-10">
              <div className="flex gap-6 items-center">
                <Button
                  onClick={togglePlay}
                  className="cursor-pointer h-24 w-24 rounded-full bg-tech-btn"
                >
                  {isPlaying ? (
                    <Pause className="size-9 fill-white stroke-0" />
                  ) : (
                    <Play className="size-9 fill-white stroke-0" />
                  )}
                </Button>
                <div className="flex flex-col gap-[7px]">
                  <span className="text-[#194185] text-4xl leading-11 font-semibold tracking-[-0.72px] max-lg:text-2xl">
                    {aboutLang?.video?.introduce}
                  </span>
                  <span className="text-[#194185] text-[22px] leading-[30px] max-lg:text-xl">
                    {aboutLang?.video?.descriptionVideo}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function VideoCustomMobile({
  aboutLang,
}: {
  aboutLang: Awaited<ReturnType<typeof getDictionary>>["about"];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const handleEndVideo = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative ">
      <div
        // onTouchStart={handleMouseEnter}
        className="z-10 relative w-full overflow-hidden "
      >
        <video
          poster={"/images/video-thumb.png"}
          onEnded={handleEndVideo}
          ref={videoRef}
          className="size-full"
        >
          <source
            src={
              "https://s3-sgn10.fptcloud.com/cdn/ndatrace/video_introduce.mov"
            }
            type="video/mp4"
          />
        </video>
      </div>
      <AnimatePresence>
        {!isPlaying ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            key="playingVideo"
            className="z-20 absolute bottom-[-50px] w-full h-[35%] bg-tech-video"
          >
            <div className="absolute bottom-0 w-full px-4">
              <div className="p-4 rounded-[8px] bg-white shadow-xl flex items-center gap-2">
                <Button
                  onClick={togglePlay}
                  className="cursor-pointer h-11 w-11 rounded-full bg-tech-btn"
                >
                  {isPlaying ? (
                    <Pause className="size-5 fill-white stroke-0" />
                  ) : (
                    <Play className="size-5 fill-white stroke-0" />
                  )}
                </Button>
                <div className="flex flex-col gap-1">
                  <span className="text-[#194185] text-base leading-6 font-semibold">
                    {aboutLang.video.introduce}
                  </span>
                  <span className="text-[#194185] text-sm leading-5">
                    {aboutLang.video.descriptionVideo}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
