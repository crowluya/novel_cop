import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor";
import { Button } from "@/components/tailwind/ui/button";
import Menu from "@/components/tailwind/ui/menu";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'OpenSeek Editor - AI-Powered Writing Assistant',
  description: 'Transform your writing with OpenSeek\'s AI-powered editor. Get intelligent suggestions, real-time collaboration, and beautiful formatting.',
  keywords: 'AI writing assistant, content editor, writing tool, text editor, collaboration tool',
  openGraph: {
    title: 'OpenSeek Editor - AI-Powered Writing Assistant',
    description: 'Transform your writing with AI-powered assistance',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenSeek Editor - AI-Powered Writing Assistant',
    description: 'Transform your writing with AI-powered assistance',
    images: ['/twitter-image.jpg'],
  },
};

export default function EditorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5">
      <div className="flex w-full max-w-screen-lg items-center gap-2 px-4 sm:mb-[calc(20vh)]">
        <Link href="/" className="ml-auto">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <Menu />
      </div>

      <TailwindAdvancedEditor />
    </div>
  );
}