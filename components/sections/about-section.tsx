import { getDictionary } from "@/get-dictionary";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function AboutSection({
  aboutLang,
}: {
  aboutLang: Awaited<ReturnType<typeof getDictionary>>["about"];
}) {
  return (
    <div className="flex flex-col">
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
                      Tải từ
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
                      Tải từ
                    </span>
                    <span className="text-[21px] font-medium tracking-[-1.502px] leading-5">
                      App Store
                    </span>
                  </div>
                </div>
              </Button>
            </div>
            <div className="relative mt-5 flex justify-center">
              <div className="max-w-[532px] max-h-[533px]">
                <img
                  src="/images/about-phone.png"
                  className="object-cover h-full w-full"
                  alt="not-found"
                />
              </div>
              <div className="absolute left-[-310px]">
                <div className="max-w-[476px] max-h-[474px]">
                  <img
                    src="/images/about-left.png"
                    className="object-cover h-full w-full"
                    alt="not-found"
                  />
                </div>
              </div>
              <div className="absolute right-[-265px]">
                <div className="max-w-[436px] max-h-[509px]">
                  <img
                    src="/images/about-right.png"
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
                  1. Yêu cầu cấp phát Chứng chỉ số (VC).
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[120px] left-[224px] w-[150px] flex justify-center">
                  <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">{`Phát hành\nthông tin xác thực`}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  1. Yêu cầu cấp phát Chứng chỉ số (VC).
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[134px] left-[98px] w-[150px] flex justify-center -rotate-40">
                  <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">{`Phát hành\nthông tin xác thực`}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2" align="center" side="left">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  3. Phát hành VC đã ký và lưu trữ tại thiết bị của người dùng
                  thông qua ứng dụng NDAKey.
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[150px] right-[145px] w-[150px] flex justify-center rotate-43">
                  <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">{`Xác minh thông tin`}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2" align="center" side="right">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  4. Lựa chọn dữ liệu và chia sẻ Bằng chứng số (VP) cho bên cần
                  xác minh thông tin qua NDAKey.
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
                  2. Tạo DID và khóa công khai trên NDAChain, sau đó ký số lên
                  VC.
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[305px] left-[40px] w-[150px] flex justify-center">
                  <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">{`Bên khởi tạo\nChứng chỉ số`}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2" align="center" side="left">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  2. Tạo DID và khóa công khai trên NDAChain, sau đó ký số lên
                  VC.
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
                  5. Truy xuất khóa công khai trên NDAChain để kiểm tra và xác
                  thực dữ liệu.
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[310px] right-[40px] w-[150px] flex justify-center">
                  <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">{`Bên xác thực\nBằng chứng số`}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2" align="center" side="right">
                <p className="text-white text-xs font-semibold leading-[18px]">
                  5. Truy xuất khóa công khai trên NDAChain để kiểm tra và xác
                  thực dữ liệu.
                </p>
              </TooltipContent>
            </Tooltip>

            <div className="absolute top-[400px] left-[40px] w-[150px] flex justify-center">
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">{`Gửi\nKhóa công khai`}</span>
            </div>

            <div className="absolute top-[400px] right-[40px] w-[150px] flex justify-center">
              <span className="whitespace-pre-line text-center text-[#5E5E5E] font-semibold text-sm leading-5">{`Truy xuất\nKhoá công khai`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          poster={
            "https://s3-sgn10.fptcloud.com/cdn/ndatrace/poster_video_introduce.png"
          }
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
