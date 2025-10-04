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
    <div className="mt-[50px] pt-[60px] bg-footer">
      <div className="container mx-auto 2xl:px-[123px] xl:px-[60px] max-xl:mt-[54px]">
        <div className="flex flex-col gap-14">
          <div className="flex gap-[140px]">
            <div className="w-[70%]">
              <Icons.ndaKeyLogo className="w-[325px] h-[73px]" />
            </div>
            <div className="w-full mt-1 flex justify-between gap-4">
              <span className="text-[#194185] text-base font-medium tracking-[-0.6px]">
                Giới thiệu
              </span>
              <span className="text-[#194185] text-base font-medium tracking-[-0.6px]">
                Lĩnh vực
              </span>
              <span className="text-[#194185] text-base font-medium tracking-[-0.6px]">
                Công nghệ
              </span>
              <span className="text-[#194185] text-base font-medium tracking-[-0.6px]">
                Hạ tầng
              </span>
              <span className="text-[#194185] text-base font-medium tracking-[-0.6px]">
                Tin tức
              </span>
            </div>
          </div>
          <div className="flex gap-[140px]">
            <div className="w-[70%] flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[#194185] text-2xl leading-8 font-semibold">
                  Trao quyền dữ liệu cho Công dân
                </span>
                <span className="text-[#194185] text-2xl leading-8 font-semibold">
                  Kiến tạo Niềm tin số
                </span>
              </div>
              <span className="text-[#194185] text-lg leading-7">
                Công dân có toàn quyền kiểm soát và chia sẻ dữ liệu an toàn,
                minh bạch; đồng thời kiến tạo nền tảng tin cậy cho Chính phủ số,
                Kinh tế số và Xã hội số.
              </span>
              <span className="text-[#194185] text-lg leading-7">
                Ứng dụng hiện có mặt trên nền tảng iOS và Android.
              </span>
              <div className="flex gap-4 items-center">
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
            </div>
            <div className="w-full flex justify-between gap-8">
              <div className="w-1/2 flex flex-col gap-6">
                <span className="text-[#194185] text-2xl font-semibold leading-8">
                  Liên hệ
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
                    Địa chỉ
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    37 Trần Bình Trọng, Phường Cửa Nam, Hà Nội
                  </span>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-6">
                <span className="text-[#194185] text-2xl font-semibold leading-8">
                  Sản phẩm
                </span>
                <div className="mt-1.5 flex flex-col">
                  <span className="text-[#194185] text-base font-semibold leading-6">
                    NDAChain
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    Nền tảng Blockchain quốc gia
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#194185] text-base font-semibold leading-6">
                    NDADID
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    Nền tảng định danh phi tập trung quốc gia
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#194185] text-base font-semibold leading-6">
                    NDATrace
                  </span>
                  <span className="text-[#194185] text-base leading-6">
                    Nền tảng quốc gia về định danh, xác thực và truy xuất nguồn
                    gốc hàng hoá
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
    </div>
  );
}
