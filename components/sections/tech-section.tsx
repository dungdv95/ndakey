import { getDictionary } from "@/get-dictionary";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { inEnglish } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useIsMobile } from "../hooks/use-mobile";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

export default function TechSection({
  techLang,
}: {
  techLang: Awaited<ReturnType<typeof getDictionary>>["tech"];
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileView techLang={techLang} />;
  }

  return <DesktopView techLang={techLang} />;
}

function MobileView({
  techLang,
}: {
  techLang: Awaited<ReturnType<typeof getDictionary>>["tech"];
}) {
  const pathName = usePathname();

  return (
    <section id="tech" className="flex flex-col">
      <div className="pt-[50px] pb-10 bg-tech px-4 flex flex-col gap-6">
        {inEnglish(pathName) ? (
          <div className="flex flex-col gap-2">
            <span className="whitespace-pre-line text-center text-[#0059DE] text-[30px] font-semibold leading-[38px]">
              <span className="text-[#10AEDE]">Global</span> Standards,
            </span>
            <span className="whitespace-pre-line text-center text-[#0059DE] text-[30px] font-semibold leading-[38px]">
              <span className="text-[#10AEDE]">National-level</span> Security
            </span>
            <span className="whitespace-pre-line text-center text-[#0059DE] text-[30px] font-semibold leading-[38px]">
              for <span className="text-[#10AEDE]">Every Citizen</span>
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <span className="whitespace-pre-line text-center text-[#0059DE] text-[30px] font-semibold leading-[38px]">
              Tiêu chuẩn <span className="text-[#10AEDE]">quốc tế</span>
              {`,\nbảo mật `}
              <span className="text-[#10AEDE]">quốc gia</span> dành
            </span>
            <span className="whitespace-pre-line text-center text-[#0059DE] text-[30px] font-semibold leading-[38px]">
              cho <span className="text-[#10AEDE]">từng công dân</span>
            </span>
          </div>
        )}
        <span className="text-center text-balance text-[#194185] text-sm leading-6">
          {techLang.description}
        </span>
        <SlideTech techLang={techLang} />
      </div>
      <div className="relative py-[60px] flex flex-col items-center">
        <div className="relative z-20 max-w-[344px] max-h-[328px]">
          <img
            src="/images/tech-metting.png"
            className="object-cover h-full w-full"
            alt="not-found"
          />
        </div>
        <div className="relative z-20 px-4 mt-8 flex flex-col gap-2">
          <span className="whitespace-pre-line text-center text-[#1570EF] text-[30px] font-semibold leading-[38px]">
            {techLang.blockFive.title}
          </span>
          <span className="text-center text-[#194185] text-base leading-6">
            {techLang.blockFive.description}
          </span>
        </div>
        <div className="z-10 absolute bottom-0 mb-bg-auth w-full h-[64%]" />
        <div className="z-20 absolute bottom-[-30px]">
          <Button className="w-[200px] h-14 rounded-full text-white text-lg font-semibold leading-7 bg-linear-to-r from-[#5DA9FF] to-[#8FC4FF] ">
            {techLang.blockFive.btnText}
          </Button>
        </div>
      </div>
    </section>
  );
}

function DesktopView({
  techLang,
}: {
  techLang: Awaited<ReturnType<typeof getDictionary>>["tech"];
}) {
  const pathName = usePathname();
  return (
    <section id="tech" className="flex flex-col gap-[224px]">
      <div className="bg-tech pt-[53px] pb-[69px]">
        <div className="container mx-auto 2xl:px-[123px] xl:px-[60px] max-xl:mt-[54px]">
          <div className="flex flex-col gap-6 items-center">
            {inEnglish(pathName) ? (
              <div className="flex flex-col gap-2">
                <span className="whitespace-pre-line text-center text-[#0059DE] text-4xl font-semibold leading-11 tracking-[-0.72px]">
                  <span className="text-[#10AEDE]">Global</span> Standards,{" "}
                  <span className="text-[#10AEDE]">National-level</span>{" "}
                  Security
                </span>
                <span className="whitespace-pre-line text-center text-[#0059DE] text-4xl font-semibold leading-11 tracking-[-0.72px]">
                  for <span className="text-[#10AEDE]">Every Citizen</span>
                </span>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <span className="whitespace-pre-line text-center text-[#0059DE] text-4xl font-semibold leading-11 tracking-[-0.72px]">
                  Tiêu chuẩn <span className="text-[#10AEDE]">quốc tế</span>,
                  bảo mật <span className="text-[#10AEDE]">quốc gia</span>
                </span>
                <span className="whitespace-pre-line text-center text-[#0059DE] text-4xl font-semibold leading-11 tracking-[-0.72px]">
                  dành cho <span className="text-[#10AEDE]">từng công dân</span>
                </span>
              </div>
            )}

            <span className="whitespace-pre-line text-center text-[#194185] text-sm leading-6">
              {techLang.description}
            </span>
            <div className="mt-4 grid grid-cols-4 gap-7">
              <div className="p-6 rounded-[12px] bg-white shadow-[0_7px_17px_0_rgba(200,221,255,0.40)] min-w-[300px]">
                <div className="flex flex-col gap-4">
                  <div className="h-[150px] flex flex-col items-center justify-center gap-2.5">
                    <div>
                      <Icons.techEidasUp />
                    </div>
                    <span className="text-[#53B1FD] text-4xl font-semibold leading-[54px] tracking-[-0.967px]">
                      RealDID
                    </span>
                  </div>
                  <span className="mt-2 whitespace-pre-line text-center text-[#194185] text-2xl font-semibold leading-8">
                    {techLang.blockOne.title}
                  </span>
                  <span className="mt-4 text-center text-[#194185] text-base leading-6">
                    {techLang.blockOne.description}
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-[12px] bg-white shadow-[0_7px_17px_0_rgba(200,221,255,0.40)] min-w-[300px]">
                <div className="flex flex-col gap-4">
                  <div className="h-[150px] flex justify-center items-center">
                    <Icons.techAuthenFaceIcon />
                  </div>
                  <span className="mt-2 whitespace-pre-line text-center text-[#194185] text-2xl font-semibold leading-8">
                    {techLang.blockSecond.title}
                  </span>
                  <span className="mt-4 text-center text-[#194185] text-base leading-6">
                    {techLang.blockSecond.description}
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-[12px] bg-white shadow-[0_7px_17px_0_rgba(200,221,255,0.40)] min-w-[300px]">
                <div className="flex flex-col gap-4">
                  <div className="h-[150px] flex justify-center items-center">
                    <Icons.techDidCommIcon />
                  </div>
                  <span className="mt-2 whitespace-pre-line text-center text-[#194185] text-2xl font-semibold leading-8">
                    {techLang.blockThird.title}
                  </span>
                  <span className="mt-4 text-center text-[#194185] text-base leading-6">
                    {techLang.blockThird.description}
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-[12px] bg-white shadow-[0_7px_17px_0_rgba(200,221,255,0.40)] min-w-[300px]">
                <div className="flex flex-col gap-4">
                  <div className="h-[150px] flex justify-center items-center">
                    <Icons.techProof2Icon />
                  </div>
                  <span className="mt-2 whitespace-pre-line text-center text-[#194185] text-2xl font-semibold leading-8">
                    {techLang.blockFour.title}
                  </span>
                  <span className="mt-4 text-center text-[#194185] text-base leading-6">
                    {techLang.blockFour.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto 2xl:px-[123px] xl:px-[60px] max-xl:mt-[54px]">
        <div className="relative bg-tech h-[286px]">
          <div className="absolute top-[-120px] left-[110px] flex gap-2">
            <div className="pt-[63px] flex flex-col gap-6">
              <span className=" text-[#0057D6] text-4xl font-semibold leading-11 tracking-[-0.72px]">
                {techLang.blockFive.title}
              </span>
              <span className="max-w-[650px] text-[#194185] text-base leading-6">
                {techLang.blockFive.description}
              </span>
              <Button className="w-[200px] h-14 rounded-full text-white text-lg font-semibold leading-7 bg-linear-to-r from-[#5DA9FF] to-[#8FC4FF] ">
                {techLang.blockFive.btnText}
              </Button>
            </div>
            <div className="max-w-[404px] max-h-[384px]">
              <img
                src="/images/tech-metting.png"
                className="object-cover h-full w-full"
                alt="not-found"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideTech({
  techLang,
}: {
  techLang: Awaited<ReturnType<typeof getDictionary>>["tech"];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    // Lắng nghe sự kiện "select" để cập nhật slide hiện tại
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Lắng nghe sự kiện "reInit" trong trường hợp carousel được khởi tạo lại (ví dụ: thay đổi kích thước)
    api.on("reInit", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="px-4 mt-5 flex flex-col gap-[17px] items-center">
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-[450px] max-[31.25rem]:max-w-[350px]"
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem className="">
            <div className="border border-[#F0F6FF] p-6 rounded-[12px] bg-white min-h-[400px]">
              <div className="flex flex-col gap-4">
                <div className="h-[150px] flex flex-col items-center justify-center gap-2.5">
                  <div>
                    <Icons.techEidasUp />
                  </div>
                  <span className="text-[#53B1FD] text-4xl font-semibold leading-[54px] tracking-[-0.967px]">
                    RealDID
                  </span>
                </div>
                <span className="mt-2 whitespace-pre-line text-center text-[#194185] text-2xl font-semibold leading-8">
                  {techLang.blockOne.title}
                </span>
                <span className="mt-4 text-center text-[#194185] text-base leading-6">
                  {techLang.blockOne.description}
                </span>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="border border-[#F0F6FF] p-6 rounded-[12px] bg-white min-h-[400px]">
              <div className="flex flex-col gap-4">
                <div className="h-[150px] flex justify-center items-center">
                  <Icons.techAuthenFaceIcon />
                </div>
                <span className="mt-2 whitespace-pre-line text-center text-[#194185] text-2xl font-semibold leading-8">
                  {techLang.blockSecond.title}
                </span>
                <span className="mt-4 text-center text-[#194185] text-base leading-6">
                  {techLang.blockSecond.description}
                </span>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="border border-[#F0F6FF] p-6 rounded-[12px] bg-white min-h-[400px]">
              <div className="flex flex-col gap-4">
                <div className="h-[150px] flex justify-center items-center">
                  <Icons.techDidCommIcon />
                </div>
                <span className="mt-2 whitespace-pre-line text-center text-[#194185] text-2xl font-semibold leading-8">
                  {techLang.blockThird.title}
                </span>
                <span className="mt-4 text-center text-[#194185] text-base leading-6">
                  {techLang.blockThird.description}
                </span>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="border border-[#F0F6FF] p-6 rounded-[12px] bg-white min-h-[400px]">
              <div className="flex flex-col gap-4">
                <div className="h-[150px] flex justify-center items-center">
                  <Icons.techProof2Icon />
                </div>
                <span className="mt-2 whitespace-pre-line text-center text-[#194185] text-2xl font-semibold leading-8">
                  {techLang.blockFour.title}
                </span>
                <span className="mt-4 text-center text-[#194185] text-base leading-6">
                  {techLang.blockFour.description}
                </span>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <Button
            key={index}
            variant="ghost" // Sử dụng variant ghost hoặc icon cho nút chấm
            size="icon"
            className={`h-2 rounded-full p-0 transition-colors duration-200 ${
              index === current - 1 ? "bg-[#005FEB] w-4" : "bg-[#A7ABC3] w-2"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
