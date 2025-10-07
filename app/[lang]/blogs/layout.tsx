import LayoutBlogs from "@/components/navs/layout-blogs";
import { getDictionary } from "@/get-dictionary";
import { type Locale } from "@/i18n-config";

export default async function Layout(props: LayoutProps<"/[lang]">) {
  const params = await props.params;

  const dictionary = await getDictionary(params?.lang as Locale);

  return (
    <LayoutBlogs blogListLang={dictionary?.blogList}>
      {props?.children}
    </LayoutBlogs>
  );
}
