import { bundledLanguages, createHighlighter } from "shiki/bundle/web";

export const codeToHtml = async ({
  code,
  lang,
}: {
  code: string;
  lang: string;
}) => {
  const highlighter = await createHighlighter({
    themes: ["min-dark"],
    langs: [...Object.keys(bundledLanguages)],
  });
  return highlighter.codeToHtml(code, {
    lang: lang,
    theme: "min-dark",
    colorReplacements: {
      "#1f1f1f": "transparent",
    },
  });
};
