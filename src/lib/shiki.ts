import { bundledLanguages, createHighlighter } from "shiki/bundle/web";
import { noir } from "./custom-theme";

export const codeToHtml = async ({
  code,
  lang,
}: {
  code: string;
  lang: string;
}) => {
  const highlighter = await createHighlighter({
    themes: [noir, "github-dark"],
    langs: [...Object.keys(bundledLanguages)],
  });

  return highlighter.codeToHtml(code, {
    lang: lang,
    theme: "github-dark",
  });
};
