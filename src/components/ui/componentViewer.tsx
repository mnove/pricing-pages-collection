import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { extractCodeFromFilePath } from "@/lib/code";
import { Badge } from "./badge";
import CodePreview from "./codePreview";
import CodeInput from "./codeInput";
import CodeRenderer from "./codeRendered";

const getFilename = (filePath: string): string => {
  return filePath.split("/").pop() || "";
};

type ComponetViewerProps = {
  filePath: string;
  name: string;
  description: string;
  componentPreview: React.ReactNode;
  shadcnuiComponentsUsed?: string[];
  externalLibrariesUsed?: string[];
};

export const ComponentViewer = ({
  filePath,
  name,
  description,
  componentPreview,
  shadcnuiComponentsUsed = [],
  externalLibrariesUsed = [],
}: ComponetViewerProps) => {
  const fileName = getFilename(filePath);
  const fileContent = extractCodeFromFilePath(filePath);

  const npmCommandShadcnuiComponents = shadcnuiComponentsUsed?.length
    ? `npx shadcn@latest add ${shadcnuiComponentsUsed.join(" ")}`
    : "";

  const npmCommandExternalLibs = externalLibrariesUsed?.length
    ? `npm install ${externalLibrariesUsed.join(" ")}`
    : "";

  return (
    <div>
      <div>
        <div className="mb-6">
          <h1 className="text-3xl font-bold pb-2">{name}</h1>
          <p className="text-muted-foreground">{description}</p>

          <div className="mt-4 text-sm">
            <div className="flex items-center flex-wrap gap-2">
              <span className="text-muted-foreground">
                shadcn/ui components:
              </span>

              {shadcnuiComponentsUsed?.length > 0 ? (
                <>
                  <div className="flex flex-wrap gap-2">
                    {shadcnuiComponentsUsed?.map((component) => (
                      <Badge
                        variant="secondary"
                        key={component}
                        className="capitalize"
                      >
                        {component}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    <CodeInput code={npmCommandShadcnuiComponents} />
                  </div>
                </>
              ) : (
                <>
                  <p>n/a</p>
                </>
              )}
            </div>
            <div className="flex items-center mt-4 flex-wrap gap-2">
              <span className="text-muted-foreground">External libraries:</span>

              {externalLibrariesUsed?.length > 0 ? (
                <>
                  <div className="flex flex-wrap gap-2">
                    {externalLibrariesUsed?.map((library) => (
                      <>
                        <Badge
                          variant="secondary"
                          key={library}
                          className="font-mono"
                        >
                          {library}
                        </Badge>
                      </>
                    ))}
                  </div>
                  <div>
                    <CodeInput code={npmCommandExternalLibs} />
                  </div>
                </>
              ) : (
                <>
                  <p>n/a</p>
                </>
              )}
            </div>
          </div>
        </div>
        <Tabs defaultValue="preview" className="relative mr-auto w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full border rounded-md p-0" value="preview">
            <>{componentPreview}</>
          </TabsContent>
          <TabsContent value="code">
            <CodePreview code={fileContent} fileName={fileName}>
              <CodeRenderer code={fileContent} lang="tsx" />
            </CodePreview>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
