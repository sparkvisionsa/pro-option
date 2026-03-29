import { BASE_URL, type HomeSectionId, getSectionMeta, type SectionLocale } from "@/lib/seo";

interface SectionMetaProps {
  id: HomeSectionId;
  locale: SectionLocale;
}

export function SectionMeta({ id, locale }: SectionMetaProps) {
  const section = getSectionMeta(locale, id);

  return (
    <>
      <meta itemProp="name" content={section.name} />
      <meta itemProp="description" content={section.description} />
      <meta itemProp="inLanguage" content={section.language} />
      <link itemProp="url" href={`${BASE_URL}/#${id}`} />
    </>
  );
}
