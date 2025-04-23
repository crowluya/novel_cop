import { Button } from "@/components/tailwind/ui/button";
import { Logo } from "@/components/tailwind/ui/icons";
import { Bolt, Brain, Code, Image, Lock, MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FloatingChatDemo from "./FloatingChatDemo";

export const metadata: Metadata = {
  title: "Open-Seek - Advanced AI Solutions",
  description:
    "Explore infinite AI possibilities with Open-Seek V3/R1, delivering powerful AI solutions for natural language processing, code generation, and complex problem solving.",
  keywords: "Open-Seek , AI solutions, natural language processing, code generation, AI model",
  openGraph: {
    title: "Open-Seek  - Advanced AI Solutions",
    description: "Explore infinite AI possibilities with Open-Seek V3/R1",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open-Seek - Advanced AI Solutions",
    description: "Explore infinite AI possibilities with Open-Seek V3/R1",
    images: ["/twitter-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <div className="fluid-background fixed top-0 left-0 w-full h-full -z-10">
        <div className="fluid-shape"></div>
        <div className="fluid-shape"></div>
        <div className="fluid-shape"></div>
        <div className="fluid-shape"></div>
        <div className="fluid-shape"></div>
      </div>

      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Logo className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Open-Seek</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#what-is" className="text-gray-600 hover:text-gray-900">
              What is
            </Link>
            <Link href="#how-to-use" className="text-gray-600 hover:text-gray-900">
              How to use
            </Link>
            <Link href="#detailed-features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#use-cases" className="text-gray-600 hover:text-gray-900">
              Use cases
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900">
              Terms
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Floating AI Chat Demo */}
      <FloatingChatDemo />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Explore Infinite
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  AI Possibilities
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                Powered by the latest DeepSeek V3/R1 architecture, delivering powerful AI solutions
              </p>
              <Link href="/ai-editor">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white" id="features">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 text-center">Core Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <article className="p-8 rounded-xl bg-gradient-to-b from-blue-50 to-white border border-blue-100">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Deep Learning</h3>
                <p className="text-gray-600">Advanced deep learning technology for superior AI performance</p>
              </article>
              <article className="p-8 rounded-xl bg-gradient-to-b from-purple-50 to-white border border-purple-100">
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center mb-6">
                  <Bolt className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Inference</h3>
                <p className="text-gray-600">Optimized inference engine for rapid response</p>
              </article>
              <article className="p-8 rounded-xl bg-gradient-to-b from-green-50 to-white border border-green-100">
                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center mb-6">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
                <p className="text-gray-600">Enterprise-grade security to protect your data privacy</p>
              </article>
              <article className="p-8 rounded-xl bg-gradient-to-b from-pink-50 to-white border border-pink-100">
                <div className="w-12 h-12 rounded-lg bg-pink-600 flex items-center justify-center mb-6">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Open Integration</h3>
                <p className="text-gray-600">Simple APIs supporting multiple development frameworks</p>
              </article>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Try Our Editor</h3>
              <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                <iframe src="/ai-editor/embed" className="w-full h-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Models Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50" id="models">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 text-center">Model Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <article className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-6">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Natural Language Processing</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Text Generation & Understanding
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Multilingual Translation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Sentiment Analysis
                  </li>
                </ul>
              </article>
              <article className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center mb-6">
                  <Image className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Computer Vision</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Image Recognition & Classification
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Object Detection
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Image Generation
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* What is OpenSeek Section */}
        <section className="py-24 bg-white" id="what-is">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 text-center">What is Open-Seek?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Open-Seek is an advanced AI-powered assistant that transforms how you create, optimize, and manage
                  content. Built on cutting-edge language models, it helps writers, marketers, academics, and businesses
                  produce high-quality content efficiently.
                </p>
                <p className="text-lg text-gray-700">
                  Unlike basic text editors, Open-Seek understands context, offers creative suggestions, and adapts to
                  your writing style while ensuring grammatical accuracy and engaging prose across multiple languages.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Differentiators</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Context-aware content generation that understands your goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Intelligent SEO optimization built into the writing process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Multi-language support with cultural nuance preservation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">
                      Specialized templates for various content types and industries
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use OpenSeek Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50" id="how-to-use">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 text-center">How to Use Open-Seek</h2>

            {/* Added GIF image */}
            <div className="mb-12 text-center">
              <img
                src="https://pub-120195864a0046c49ac9d9af4171257f.r2.dev/openseek.gif"
                alt="How to use Open-Seek"
                className="mx-auto rounded-lg shadow-lg max-w-full"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-6 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Select Your Content Type</h3>
                <p className="text-gray-600">
                  Choose from various content formats including blog posts, marketing copy, academic papers, emails, or
                  social media content.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-6 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Provide Basic Input</h3>
                <p className="text-gray-600">
                  Enter your topic, target audience, key points, and preferred tone. Open-Seek will generate a draft
                  based on your specifications.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Refine and Optimize</h3>
                <p className="text-gray-600">
                  Edit the generated content using our intuitive editor. Apply SEO suggestions, adjust tone, or expand
                  sections with AI assistance.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/ai-editor">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Try Open-Seek Editor Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features of OpenSeek Section */}
        <section className="py-24 bg-white" id="detailed-features">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 text-center">Features of Open-Seek</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Content Generation</h3>
                  <p className="text-gray-600">
                    Automatically create articles, expand paragraphs, and provide creative inspiration tailored to your
                    specific needs and audience.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Code className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Text Optimization</h3>
                  <p className="text-gray-600">
                    Check grammar, improve writing style, and adjust tone to match your brand voice or target audience
                    preferences.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
                  <p className="text-gray-600">
                    Suggest keywords, analyze SEO performance, and provide recommendations to improve your content's
                    search engine visibility.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center">
                    <Image className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Multi-language Support</h3>
                  <p className="text-gray-600">
                    Write and translate content across multiple languages including English, Chinese, Spanish, French,
                    German, Japanese, and Arabic while maintaining context, tone, and cultural nuances.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                    <Bolt className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Content Personalization</h3>
                  <p className="text-gray-600">
                    Optimize audience experience, conduct A/B testing, and tailor content to specific demographic
                    segments.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Templates & Frameworks</h3>
                  <p className="text-gray-600">
                    Access ready-to-use templates for emails, resumes, marketing copy, and other content types to
                    accelerate your workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50" id="use-cases">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 text-center">Use Cases of Open-Seek</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Marketing Teams</h3>
                <p className="text-gray-600 mb-4">
                  Create compelling marketing copy, product descriptions, and social media content that resonates with
                  your target audience and drives engagement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">→</span>
                    <span className="text-gray-600">Generate consistent brand messaging across channels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">→</span>
                    <span className="text-gray-600">Optimize content for different platforms and audiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">→</span>
                    <span className="text-gray-600">Scale content production without sacrificing quality</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Content Creators</h3>
                <p className="text-gray-600 mb-4">
                  Overcome writer's block, generate fresh ideas, and enhance your content with AI-powered suggestions
                  that maintain your unique voice.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">→</span>
                    <span className="text-gray-600">Expand outlines into full-length articles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">→</span>
                    <span className="text-gray-600">Improve readability and engagement metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">→</span>
                    <span className="text-gray-600">Repurpose content across different formats</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Academic Writers</h3>
                <p className="text-gray-600 mb-4">
                  Generate research paper outlines, literature reviews, and receive citation suggestions while
                  maintaining academic integrity and rigor.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">→</span>
                    <span className="text-gray-600">Structure complex academic arguments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">→</span>
                    <span className="text-gray-600">Summarize research findings effectively</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">→</span>
                    <span className="text-gray-600">Maintain consistent academic style</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-pink-600">Business Users</h3>
                <p className="text-gray-600 mb-4">
                  Streamline communication, create professional documents, and maintain consistent messaging across your
                  organization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">→</span>
                    <span className="text-gray-600">Draft professional emails and business proposals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">→</span>
                    <span className="text-gray-600">Create consistent internal documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">→</span>
                    <span className="text-gray-600">Generate reports and presentations efficiently</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white" id="faq">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">What powers Open-Seek's AI capabilities?</h3>
                <p className="text-gray-700">
                  Open-Seek is powered by cutting-edge AI models including DeepSeek V3 and DeepSeek R1, providing
                  state-of-the-art natural language processing and content generation capabilities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Who owns the copyright to generated content?</h3>
                <p className="text-gray-700">
                  You do! Every article generated through your Open-Seek account is copyrighted to you, giving you
                  complete ownership and control over the content.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Is Open-Seek suitable for non-writers?</h3>
                <p className="text-gray-700">
                  Absolutely! Open-Seek is designed for everyone from professional writers to business users with no
                  writing experience. The intuitive interface and AI assistance make quality content creation accessible
                  to all skill levels.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border border-purple-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">How does Open-Seek handle specialized industry content?</h3>
                <p className="text-gray-700">
                  Open-Seek has been trained on diverse content across industries including technology, healthcare,
                  finance, education, and more. It can adapt to specialized terminology and conventions while
                  maintaining accuracy.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Can I customize Open-Seek's output style?</h3>
                <p className="text-gray-700">
                  Yes! Open-Seek allows you to define your preferred tone, style, and formatting preferences. The more
                  you use it, the better it learns your unique writing style and brand voice.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-xl border border-pink-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">How secure is my content with Open-Seek?</h3>
                <p className="text-gray-700">
                  We prioritize data security and privacy. Your content is encrypted, never shared with third parties,
                  and you retain full ownership of all materials created using our platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50" id="about">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are dedicated to building next-generation AI technology, making artificial intelligence smarter, more
              reliable, and easier to use.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50" id="contact">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 text-center">Contact Us</h2>
            <div className="max-w-xl mx-auto">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <a href="mailto:contact@open-seek.com" className="block w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Logo className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">Open-Seek</span>
              </div>
              <p className="text-gray-400 mb-6">
                Explore infinite AI possibilities with the latest Open-Seek technology.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Product</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Open-Seek. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LBXKXLCKR7" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LBXKXLCKR7');
        `}
      </Script>

      {/* Plausible Analytics */}
      <Script
        defer
        data-domain="open-seek.com"
        src="https://bibleversegenerator.net/js/script.outbound-links.pageview-props.revenue.tagged-events.js"
      />
    </>
  );
}
