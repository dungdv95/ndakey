import API from "@/configs/API";
import { urlBase } from "@/constants/common";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from "next";
import BlogDetail from "./blog-detail";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slugNews: string }>;
}): // parent: ResolvingMetadata
Promise<Metadata> {
  // read route params
  const { slugNews } = await params;

  // fetch data
  const news = await fetch(`${API.BLOG.GET}?slugFilter=${slugNews}`).then(
    (res) => res.json()
  );

  return {
    metadataBase: new URL(urlBase),
    title: news?.blogs[0]?.name,
    description: news?.blogs[0]?.description,
    keywords: news?.blogs[0]?.name
      ? [news?.blogs[0]?.name]
      : ["NDA Trace", "NDA", "NDA Trace", "NDA Trace", "NDA Trace"],
    openGraph: {
      title: news?.blogs[0]?.name,
      description: news?.blogs[0]?.description,
      url: urlBase,
      siteName: news?.blogs[0]?.name,
      images: [{ url: news?.blogs[0]?.thumbnail, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: news?.blogs[0]?.name,
      description: news?.blogs[0]?.description,
      images: [news?.blogs[0]?.thumbnail],
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

export default async function Page(props: {
  params: Promise<{ slugNews: string; lang: Locale }>;
}) {
  const { slugNews, lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return <BlogDetail slugNews={slugNews} dictionary={dictionary} />;
}
