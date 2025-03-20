import { Logo } from "@/components/tailwind/ui/icons";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Open-Seek",
  description: "Explore the latest articles, tutorials and updates from Open-Seek",
  keywords: "Open-Seek, AI blog, AI tutorials, AI news, AI solutions",
  openGraph: {
    title: "Blog - Open-Seek",
    description: "Explore the latest articles, tutorials and updates from Open-Seek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Open-Seek",
    description: "Explore the latest articles, tutorials and updates from Open-Seek",
  },
};

export default function BlogPage() {
  return (
    <>
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Logo className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Open-Seek</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/blog" className="text-blue-600 font-medium">Blog</Link>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16 max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Open-Seek Blog</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <article className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium">AI Technology</span>
              <h2 className="text-xl font-semibold my-2">Introducing Open-Seek V3: Next Generation AI</h2>
              <p className="text-gray-600 mb-4">
                Explore the capabilities of our latest AI model and how it transforms natural language processing.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">March 15, 2025</span>
                <Link href="/blog/introducing-open-seek-v3" className="text-blue-600 text-sm font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-r from-green-400 to-teal-500"></div>
            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium">Tutorials</span>
              <h2 className="text-xl font-semibold my-2">How to Optimize Your Content with AI</h2>
              <p className="text-gray-600 mb-4">
                Learn practical techniques to improve your writing using Open-Seek's powerful AI tools.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">March 8, 2025</span>
                <Link href="/blog/optimize-content-with-ai" className="text-blue-600 text-sm font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Articles</h2>
          <div className="space-y-6">
            {/* Article 1 */}
            <div className="border-b pb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <Link href="/blog/ai-content-ethics" className="hover:text-blue-600 transition-colors">
                      AI Content Ethics: Best Practices for Responsible Creation
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-2">
                    An examination of ethical considerations when using AI to generate content, and guidelines for responsible usage.
                  </p>
                  <span className="text-sm text-gray-500">February 25, 2025</span>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="border-b pb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <Link href="/blog/ai-writing-tools-comparison" className="hover:text-blue-600 transition-colors">
                      Comparing Top AI Writing Tools: Open-Seek vs. Alternatives
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-2">
                    A comprehensive comparison of leading AI writing tools, highlighting the unique advantages of Open-Seek.
                  </p>
                  <span className="text-sm text-gray-500">February 18, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center justify-center md:justify-start">
                <Logo className="w-8 h-8 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Open-Seek</span>
              </div>
              <p className="text-gray-600 mt-2 text-center md:text-left">Advanced AI solutions for content creation</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} Open-Seek.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
