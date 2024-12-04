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
    <div>
      {/* <div className="max-h-[650px] overflow-auto rounded-md bg-zinc-800">
        <div className="inline-block overflow-x-auto p-4 text-sm">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div> */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
