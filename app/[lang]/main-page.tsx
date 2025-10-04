"use client";

import AboutSection from "@/components/sections/about-section";
import BlogSection from "@/components/sections/blog-section";
import FieldSection from "@/components/sections/field-section";
import FooterSection from "@/components/sections/footer-section";
import InfraSection from "@/components/sections/infra-section";
import TechSection from "@/components/sections/tech-section";
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
      <InfraSection infraLang={dictionary?.infra} />
      <TechSection techLang={dictionary?.tech} />
      <BlogSection blogLang={dictionary?.blogs} />
      <FooterSection footerLang={dictionary?.footer} />
    </>
  );
}
