"use client";

import AboutSection from "@/components/sections/about-section";
import FieldSection from "@/components/sections/field-section";
import { getDictionary } from "@/get-dictionary";

const wait = () => new Promise((resolve) => setTimeout(resolve, 100));

export default function MainPage({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  return (
    <>
      <AboutSection aboutLang={dictionary?.about} />
      <FieldSection fieldLang={dictionary?.field} />
    </>
  );
}
