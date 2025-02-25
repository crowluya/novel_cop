import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor";
import { Button } from "@/components/tailwind/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/tailwind/ui/dialog";
import Menu from "@/components/tailwind/ui/menu";
import { ScrollArea } from "@/components/tailwind/ui/scroll-area";
import { BookOpen, GithubIcon } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'NovelCop Editor - AI-Powered Writing Assistant',
  description: 'Transform your writing with NovelCop\'s AI-powered editor. Get intelligent suggestions, real-time collaboration, and beautiful formatting.',
  keywords: 'AI writing assistant, content editor, writing tool, text editor, collaboration tool',
  openGraph: {
    title: 'NovelCop Editor - AI-Powered Writing Assistant',
    description: 'Transform your writing with AI-powered assistance',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovelCop Editor - AI-Powered Writing Assistant',
    description: 'Transform your writing with AI-powered assistance',
    images: ['/twitter-image.jpg'],
  },
};

export default function EditorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5">
      <div className="flex w-full max-w-screen-lg items-center gap-2 px-4 sm:mb-[calc(20vh)]">
        <Button size="icon" variant="outline">
          <a href="https://github.com/steven-tey/novel" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml gap-2">
              <BookOpen className="h-4 w-4" />
              Usage in dialog
            </Button>
          </DialogTrigger>
          <DialogContent className="flex max-w-3xl h-[calc(100vh-24px)]">
            <ScrollArea className="max-h-screen">
              <TailwindAdvancedEditor />
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <Link href="/" className="ml-auto">
          <Button variant="ghost">Back to Home</Button>
        </Link>
        <Menu />
      </div>

      <TailwindAdvancedEditor />
    </div>
  );
}
