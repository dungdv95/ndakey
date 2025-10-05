import { getDictionary } from "@/get-dictionary";
import { Separator } from "../ui/separator";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export default function FooterSection({
  footerLang,
}: {
  footerLang: Awaited<ReturnType<typeof getDictionary>>["footer"];
}) {
  return (
    <section id="footer" className="mt-[50px] pt-[60px] bg-footer">
      <div className="container mx-auto 2xl:px-[123px] xl:px-[60px] max-xl:mt-[54px]">
        <div className="flex flex-col gap-14">
          <div className="flex gap-[140px]">
            <div className="w-[70%]">
              <Icons.ndaKeyLogo className="w-[325px] h-[73px]" />
            </div>
            <div className="w-full mt-1 flex justify-between gap-4">
              <span className="text-[#194185] text-base font-medium tracking-[-0.6px]">
                {footerLang.navs.about}
              </span>
              <span className="text-[#194185] text-base font-medium tracking-[-0.6px]">
                {footerLang.navs.usecase}
              </span>
              <span className="text-[#194185] text-base font-medium tracking-[-0.6px]">
                {footerLang.navs.tech}
              </span>
              <span className="text-[#194185] text-base font-medium tracking-[-0.6px]">
                {footerLang.navs.infra}
              </span>
              <span className="text-[#194185] text-base font-medium tracking-[-0.6px]">
                {footerLang.navs.news}
              </span>
            </div>
          </div>
          <div className="flex gap-[140px]">
            <div className="w-[70%] flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[#194185] text-2xl leading-8 font-semibold">
                  {footerLang.leftText.text1}
                </span>
                <span className="text-[#194185] text-2xl leading-8 font-semibold">
                  {footerLang.leftText.text2}
                </span>
              </div>
              <span className="text-[#194185] text-lg leading-7">
                {footerLang.leftText.description1}
              </span>
              <span className="text-[#194185] text-lg leading-7">
                {footerLang.leftText.description2}
              </span>
              <div className="flex gap-4 items-center">
                <Button className="h-12 w-[180px] rounded-[8px] justify-start py-1.5">
                  <div className="flex gap-2 items-center">
                    <div>
                      <Icons.appleIcon className="!w-[21px] !h-[26px]" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-white text-[10px] font-medium">
                        {footerLang.btn.apple}
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
                        {footerLang.btn.chPlay}
                      </span>
                      <span className="text-[21px] font-medium tracking-[-1.502px] leading-5">
                        Google Play
                      </span>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
            <div className="w-full flex justify-between gap-8">
              <div className="w-1/2 flex flex-col gap-6">
                <span className="text-[#194185] text-2xl font-semibold leading-8">
                  {footerLang.contact.title}
                </span>
                <div className="mt-1.5 flex flex-col">
                  <span className="text-[#194185] text-base font-semibold leading-6">
                    E-mail
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    info@ndakey.vn
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#194185] text-base font-semibold leading-6">
                    {footerLang.contact.addrName}
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    {footerLang.contact.addr}
                  </span>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-6">
                <span className="text-[#194185] text-2xl font-semibold leading-8">
                  {footerLang.product.title}
                </span>
                <div className="mt-1.5 flex flex-col">
                  <span className="text-[#194185] text-base font-semibold leading-6">
                    NDAChain
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    {footerLang.product.ndaChain}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#194185] text-base font-semibold leading-6">
                    NDADID
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    {footerLang.product.ndaDid}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#194185] text-base font-semibold leading-6">
                    NDATrace
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    {footerLang.product.ndaTrace}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="m-0 mt-[67px] bg-[#B2DDFF]" />
      <div className="py-4 flex justify-center items-center">
        <span className="text-[#194185] text-base">
          © 2025 Copyright by NDAKey
        </span>
      </div>
    </section>
  );
}
