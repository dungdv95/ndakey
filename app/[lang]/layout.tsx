import { Toaster } from "@/components/ui/sonner";
// import { googleAnalyticsId, urlBase } from "@/constants/common";
import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "@/i18n-config";
// import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";

import { Metadata } from "next";
// import { NDA_TRACE_THUMBNAIL } from "@/constants/images";
import "../globals.css";
import Providers from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import LayoutPage from "@/components/navs/layout-page";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   metadataBase: new URL(urlBase),
//   title: "NDATrace - Giải pháp Truy xuất Xác thực Nguồn gốc chuẩn Quốc gia",
//   description:
//     "Giải pháp Truy xuất toàn diện - Tích hợp nền tảng Dữ liệu Quốc gia. Minh bạch - An toàn - Chống giả mạo.",
//   keywords: ["NDA Trace", "NDA", "NDA Trace", "NDA Trace", "NDA Trace"],
//   openGraph: {
//     title: "NDATrace - Giải pháp Truy xuất Xác thực Nguồn gốc chuẩn Quốc gia",
//     description:
//       "Giải pháp Truy xuất toàn diện - Tích hợp nền tảng Dữ liệu Quốc gia. Minh bạch - An toàn - Chống giả mạo.",
//     url: urlBase,
//     siteName:
//       "NDATrace - Giải pháp Truy xuất Xác thực Nguồn gốc chuẩn Quốc gia",
//     images: [{ url: NDA_TRACE_THUMBNAIL, width: 1200, height: 630 }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "NDATrace - Giải pháp Truy xuất Xác thực Nguồn gốc chuẩn Quốc gia",
//     description:
//       "Giải pháp Truy xuất toàn diện - Tích hợp nền tảng Dữ liệu Quốc gia. Minh bạch - An toàn - Chống giả mạo.",
//     images: [NDA_TRACE_THUMBNAIL],
//   },
//   robots: {
//     index: true,
//     follow: false,
//     googleBot: {
//       index: true,
//       follow: false,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   alternates: {
//     canonical: "/",
//     languages: {
//       en: "/en",
//       vi: "/vi",
//     },
//   },
// };

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Layout(props: LayoutProps<"/[lang]">) {
  const params = await props.params;

  const dictionary = await getDictionary(params?.lang as Locale);

  // const { children } = props;

  return (
    <html
      lang={params.lang}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <LayoutPage dictionary={dictionary}>{props?.children}</LayoutPage>
          </Providers>
        </ThemeProvider>
        <Toaster richColors position="bottom-center" />
      </body>
      {/* <GoogleAnalytics gaId={googleAnalyticsId} /> */}
    </html>
  );
}
