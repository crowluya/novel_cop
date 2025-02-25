import { Button } from "@/components/tailwind/ui/button";
import { GithubIcon, Feather, Sparkles, Zap, FileText } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'NovelCop - AI-Powered Writing Assistant | Write Better Content',
  description: 'NovelCop is an AI-powered writing assistant that helps you create better content faster. Get intelligent suggestions, real-time collaboration, and beautiful formatting.',
  keywords: 'AI writing assistant, content creation, writing tool, text editor, collaboration tool',
  openGraph: {
    title: 'NovelCop - AI-Powered Writing Assistant',
    description: 'Create better content faster with AI-powered writing assistance',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovelCop - AI-Powered Writing Assistant',
    description: 'Create better content faster with AI-powered writing assistance',
    images: ['/twitter-image.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Feather className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">NovelCop</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/docs" className="text-gray-600 hover:text-gray-900">Docs</Link>
            <Link href="/editor">
              <Button>Try Editor</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                Write Better Content
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> with AI</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Transform your writing with AI-powered suggestions, real-time collaboration, 
                and beautiful formatting. Create content that stands out.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Link href="/editor">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Writing Free
                  </Button>
                </Link>
                <a href="https://github.com/steven-tey/novel" 
                   target="_blank" 
                   rel="noreferrer"
                   className="inline-flex items-center">
                  <Button size="lg" variant="outline" className="h-14 text-lg">
                    <GithubIcon className="mr-2 h-5 w-5" />
                    Star on GitHub
                  </Button>
                </a>
              </div>
              <div className="text-sm text-gray-500">
                No credit card required · Free plan available
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white" id="features">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Write Better
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful features to help you create outstanding content
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="p-8 rounded-xl bg-gradient-to-b from-blue-50 to-white border border-blue-100">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">AI Writing Assistant</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get intelligent suggestions and auto-completions powered by advanced AI models.
                  Write faster and better than ever before.
                </p>
              </article>
              <article className="p-8 rounded-xl bg-gradient-to-b from-purple-50 to-white border border-purple-100">
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Real-time Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Work together with your team in real-time. See changes as they happen
                  and never lose track of your work.
                </p>
              </article>
              <article className="p-8 rounded-xl bg-gradient-to-b from-pink-50 to-white border border-pink-100">
                <div className="w-12 h-12 rounded-lg bg-pink-600 flex items-center justify-center mb-6">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Beautiful Formatting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create professionally formatted documents with our intuitive editor.
                  Export to multiple formats.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Writing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of writers who are already creating better content with NovelCop.
              Start your free trial today.
            </p>
            <Link href="/editor">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg">
                Get Started Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
                <Feather className="h-5 w-5 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">NovelCop</span>
              </Link>
              <p className="text-sm text-gray-500">
                AI-powered writing assistant for better content creation
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                <li><Link href="/docs" className="text-gray-600 hover:text-gray-900">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link href="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms</Link></li>
                <li>
                  <a 
                    href="https://github.com/steven-tey/novel" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
            {new Date().getFullYear()} NovelCop. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
