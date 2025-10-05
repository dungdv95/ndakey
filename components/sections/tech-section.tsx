import { getDictionary } from "@/get-dictionary";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { inEnglish } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function TechSection({
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
