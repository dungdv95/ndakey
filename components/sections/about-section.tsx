import { getDictionary } from "@/get-dictionary";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { cn, inEnglish, pathLanguage } from "@/lib/utils";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { usePathname } from "next/navigation";

export default function AboutSection({
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
