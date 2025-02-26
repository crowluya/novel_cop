import { Button } from "@/components/tailwind/ui/button";
import { Brain, Bolt, Lock, Code, MessageSquare, Image } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import FloatingChatDemo from "./FloatingChatDemo";

export const metadata: Metadata = {
  title: 'DeepSeek R1 - Advanced AI Solutions',
  description: 'Explore infinite AI possibilities with DeepSeek R1, delivering powerful AI solutions for natural language processing, code generation, and complex problem solving.',
  keywords: 'DeepSeek R1, AI solutions, natural language processing, code generation, AI model',
  openGraph: {
    title: 'DeepSeek R1 - Advanced AI Solutions',
    description: 'Explore infinite AI possibilities with DeepSeek R1',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepSeek R1 - Advanced AI Solutions',
    description: 'Explore infinite AI possibilities with DeepSeek R1',
    images: ['/twitter-image.jpg'],
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
            <span className="text-xl font-bold text-gray-900">OpenSeek</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="#models" className="text-gray-600 hover:text-gray-900">Models</Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
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
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Possibilities</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                Powered by the latest DeepSeek R1 architecture, delivering powerful AI solutions
              </p>
              <Link href="/editor">
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
                <p className="text-gray-600">
                  Advanced deep learning technology for superior AI performance
                </p>
              </article>
              <article className="p-8 rounded-xl bg-gradient-to-b from-purple-50 to-white border border-purple-100">
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center mb-6">
                  <Bolt className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Inference</h3>
                <p className="text-gray-600">
                  Optimized inference engine for rapid response
                </p>
              </article>
              <article className="p-8 rounded-xl bg-gradient-to-b from-green-50 to-white border border-green-100">
                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center mb-6">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
                <p className="text-gray-600">
                  Enterprise-grade security to protect your data privacy
                </p>
              </article>
              <article className="p-8 rounded-xl bg-gradient-to-b from-pink-50 to-white border border-pink-100">
                <div className="w-12 h-12 rounded-lg bg-pink-600 flex items-center justify-center mb-6">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Open Integration</h3>
                <p className="text-gray-600">
                  Simple APIs supporting multiple development frameworks
                </p>
              </article>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Try Our Editor</h3>
              <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                <iframe src="/editor/embed" className="w-full h-full" />
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

        {/* About Section */}
        <section className="py-24 bg-white" id="about">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are dedicated to building next-generation AI technology, making artificial intelligence smarter, 
              more reliable, and easier to use.
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
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-lg font-semibold text-gray-900">OpenSeek</span>
              </div>
              <p className="text-sm text-gray-500">
                Explore Infinite AI Possibilities
              </p>
            </div>
            <div className="text-right">
              <h4 className="font-semibold text-gray-900 mb-3">Contact</h4>
              <p className="text-sm text-gray-500">Email: contact@open-seek.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
            {new Date().getFullYear()} OpenSeek. All rights reserved.
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
