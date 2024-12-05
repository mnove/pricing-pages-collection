import { codeToHtml } from "@/lib/shiki";

type CodeRenderer = {
  code: string;
  lang: string;
};

export default async function CodeRenderer({ code, lang }: CodeRenderer) {
  const html = await codeToHtml({
    code,
    lang,
  });

  return (
    <div className="max-w-[100px] mt-7">
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
