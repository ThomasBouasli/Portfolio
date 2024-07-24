import mermaid from "mermaid";
import { useEffect, useState } from "react";

interface MermaidProps {
  text: string;
}

const useRenderMermaid = (text: string) => {
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    mermaid.render("mermaid", text).then(({ svg }) => setSvg(svg));
  }, [text]);

  return svg;
};

const Inside = ({ text }: MermaidProps) => {
  mermaid.initialize({ startOnLoad: false, theme: "dark" });

  const svg = useRenderMermaid(text);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: svg ?? "" }}
        className="w-full h-fit max-w-5xl p-4 border rounded bg-zinc-800"
      />
    </div>
  );
};

export default Inside;
