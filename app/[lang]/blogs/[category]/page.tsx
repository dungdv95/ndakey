import { Metadata, ResolvingMetadata } from "next";
import MainPage from "./main-page";
import { urlBase } from "@/constants/common";
import { NDA_TRACE_THUMBNAIL } from "@/constants/images";

export async function generateMetadata(
  { params }: { params: Promise<{ category: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { category } = await params;

  // fetch data
  // const product = await fetch(`https://.../${category}`).then((res) =>
  //   res.json()
  // );

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL(urlBase),
    title: "NDATrace - Giải pháp Truy xuất Xác thực Nguồn gốc chuẩn Quốc gia",
    description:
      "Giải pháp Truy xuất toàn diện - Tích hợp nền tảng Dữ liệu Quốc gia. Minh bạch - An toàn - Chống giả mạo.",
    keywords: ["NDA Trace", "NDA", "NDA Trace", "NDA Trace", "NDA Trace"],
    openGraph: {
      title: "NDATrace - Giải pháp Truy xuất Xác thực Nguồn gốc chuẩn Quốc gia",
      description:
        "Giải pháp Truy xuất toàn diện - Tích hợp nền tảng Dữ liệu Quốc gia. Minh bạch - An toàn - Chống giả mạo.",
      url: urlBase,
      siteName:
        "NDATrace - Giải pháp Truy xuất Xác thực Nguồn gốc chuẩn Quốc gia",
      images: [{ url: NDA_TRACE_THUMBNAIL, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "NDATrace - Giải pháp Truy xuất Xác thực Nguồn gốc chuẩn Quốc gia",
      description:
        "Giải pháp Truy xuất toàn diện - Tích hợp nền tảng Dữ liệu Quốc gia. Minh bạch - An toàn - Chống giả mạo.",
      images: [NDA_TRACE_THUMBNAIL],
    },
    robots: {
      index: true,
      follow: false,
      googleBot: {
        index: true,
        follow: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        vi: "/vi",
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return <MainPage category={category} />;
}
