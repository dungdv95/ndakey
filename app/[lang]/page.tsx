import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import MainPage from "./main-page";

export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return <MainPage dictionary={dictionary} />;
}
