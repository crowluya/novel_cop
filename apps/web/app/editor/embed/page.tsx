import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'OpenSeek Editor - Embed Mode',
  description: 'OpenSeek Editor embedded version for integration',
};

export default function EditorEmbedPage() {
  return (
    <div className="w-full h-full min-h-[500px] bg-background flex items-center justify-center">
      <TailwindAdvancedEditor />
    </div>
  );
}