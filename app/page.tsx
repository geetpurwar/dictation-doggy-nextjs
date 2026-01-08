import Image from "next/image";
import Button from "@/components/Button";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import TestimonialCard from "@/components/TestimonialCard";
import UseCaseCard from "@/components/UseCaseCard";
import FAQ from "@/components/FAQ";

export default function Home() {
  const faqItems = [
    {
      question: "How accurate is the transcription?",
      answer: "Dictation Doggy uses advanced AI models to achieve 95%+ accuracy in real-time transcription. Accuracy improves with clear audio and proper microphone setup."
    },
    {
      question: "Does it work offline?",
      answer: "Yes! All processing happens locally on your Mac, ensuring privacy and allowing offline use. No internet connection required after initial setup."
    },
    {
      question: "Which languages are supported?",
      answer: "Currently supports English, Spanish, French, German, Italian, Portuguese, and 20+ other languages with more being added regularly."
    },
    {
      question: "Can I use it with any application?",
      answer: "Absolutely! Dictation Doggy works system-wide with any Mac application - from Word to Slack to your code editor."
    },
    {
      question: "What are the system requirements?",
      answer: "Requires macOS 12 (Monterey) or later. Works best with Apple Silicon (M1/M2/M3) but also supports Intel Macs."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Split Hero Section - Mono Theme */}
      <section className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-start bg-[#E8A22E] border-b-4 md:border-b-0 md:border-r-4 border-black relative overflow-hidden">
          {/* Decorative Elements - Monochrome */}
          <div className="absolute top-10 right-10 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full border-4 border-black z-0"></div>
          <div className="absolute bottom-10 left-10 w-12 h-12 md:w-16 md:h-16 bg-black transform rotate-12 border-4 border-white z-0"></div>
          
          <div className="relative z-10 max-w-xl">
            {/* Logo */}
            <div className="w-20 h-20 md:w-24 md:h-24 mb-6 md:mb-8 bg-white rounded-2xl border-4 border-black p-2 flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Dictation Doggy Logo" 
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight tracking-tight">
              STOP TYPING.<br/>START SPEAKING.
            </h1>
            
            <p className="text-lg md:text-xl font-medium text-black mb-8 md:mb-10 border-l-4 border-black pl-4">
              Transform your voice into text instantly with AI-powered transcription for Mac.
              <br/><br/>
              Perfect for writers, professionals, students & developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" href="https://dictationdoggy.s3.amazonaws.com/downloads/DictationDoggy_Latest.zip" className="w-full sm:w-auto text-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 bg-white text-black hover:bg-black hover:text-[#E8A22E]">
                <svg className="w-6 h-6 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download for Mac
              </Button>
              <Button variant="outline" href="#pricing" className="w-full sm:w-auto text-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 bg-black text-[#E8A22E] hover:bg-white hover:text-black">
                See Pricing
              </Button>
            </div>
            
            <p className="mt-6 text-sm font-bold opacity-70">v1.0.2 • macOS 12+ • Free Trial Available</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8 md:p-10 relative">
          {/* Decorative Grid Dots */}
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px', opacity: 0.1}}></div>
          
          <div className="relative z-10 max-w-md w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Dictation Doggy?</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-black mr-3 text-2xl font-bold">✓</span>
                <span><strong>95%+ Accuracy</strong> - Industry-leading AI transcription</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 text-2xl font-bold">✓</span>
                <span><strong>Privacy First</strong> - All processing happens locally</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 text-2xl font-bold">✓</span>
                <span><strong>Works Everywhere</strong> - System-wide compatibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 text-2xl font-bold">✓</span>
                <span><strong>Lightning Fast</strong> - Real-time transcription</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-16 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">POWERFUL FEATURES</h2>
          <p className="text-lg md:text-xl text-center mb-12 opacity-70">Everything you need for perfect transcription</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <div className="h-full">
              <FeatureCard 
                icon="🎤"
                title="Real-Time Transcription"
                description="See your words appear instantly as you speak. No lag, no delays."
              />
            </div>
            <div className="h-full">
              <FeatureCard 
                icon="🌍"
                title="Multi-Language"
                description="Support for 20+ languages with automatic language detection."
              />
            </div>
            <div className="h-full">
              <FeatureCard 
                icon="✨"
                title="AI-Powered"
                description="Advanced AI ensures industry-leading accuracy and context awareness."
              />
            </div>
            <div className="h-full">
              <FeatureCard 
                icon="🔒"
                title="Privacy First"
                description="All processing happens on your Mac. Your data never leaves your device."
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-16 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16">HOW IT WORKS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center group h-full flex flex-col">
              <div className="w-24 h-24 bg-[#E8A22E] border-4 border-black rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:translate-y-1 group-hover:shadow-none transition-all">1</div>
              <h3 className="text-2xl font-bold mb-3">Download & Install</h3>
              <p className="text-lg">Get Dictation Doggy for Mac and complete the simple setup process.</p>
            </div>
            <div className="text-center group h-full flex flex-col">
              <div className="w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:translate-y-1 group-hover:shadow-none transition-all text-[#E8A22E]">2</div>
              <h3 className="text-2xl font-bold mb-3">Press Hotkey</h3>
              <p className="text-lg">Use your custom hotkey to activate voice transcription anywhere on your Mac.</p>
            </div>
            <div className="text-center group h-full flex flex-col">
              <div className="w-24 h-24 bg-black border-4 border-black rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:translate-y-1 group-hover:shadow-none transition-all text-white">3</div>
              <h3 className="text-2xl font-bold mb-3">Start Speaking</h3>
              <p className="text-lg">Watch your words appear in real-time with incredible accuracy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - Unified Backgrounds */}
      <section className="py-20 px-6 md:px-16 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">PERFECT FOR</h2>
          <p className="text-lg md:text-xl text-center mb-12 opacity-70">Trusted by professionals across industries</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <div className="h-full">
              <UseCaseCard 
                icon="✍️"
                title="Writers"
                description="Draft articles, books, and content faster than ever."
                bgColor="bg-white"
              />
            </div>
            <div className="h-full">
              <UseCaseCard 
                icon="💼"
                title="Pros"
                description="Dictate emails, reports, and documents. Save hours."
                bgColor="bg-white"
              />
            </div>
            <div className="h-full">
              <UseCaseCard 
                icon="🎓"
                title="Students"
                description="Take lecture notes and write essays efficiently."
                bgColor="bg-white"
              />
            </div>
            <div className="h-full">
              <UseCaseCard 
                icon="👨‍💻"
                title="Coders"
                description="Code comments and documentation by voice."
                bgColor="bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 md:px-16 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">SIMPLE PRICING</h2>
          <p className="text-lg md:text-xl text-center mb-12 opacity-70">Choose the plan that fits your needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            <div className="h-full">
              <PricingCard 
                name="Free"
                price="Free"
                features={[
                  "30 mins/day",
                  "Basic accuracy",
                  "5 languages",
                  "System-wide",
                  "Local processing"
                ]}
                ctaText="Download"
                ctaHref="https://dictationdoggy.s3.amazonaws.com/downloads/DictationDoggy_Latest.zip"
              />
            </div>
            <div className="h-full">
              <PricingCard 
                name="Pro"
                price="$9.99"
                period="/mo"
                features={[
                  "Unlimited",
                  "Premium AI",
                  "20+ languages",
                  "Custom hotkeys",
                  "Priority support",
                  "Tone options"
                ]}
                highlighted={true}
                ctaText="Start Trial"
                ctaHref="#"
              />
            </div>
            <div className="h-full">
              <PricingCard 
                name="Enterprise"
                price="Custom"
                features={[
                  "Everything in Pro",
                  "Team management",
                  "Custom AI training",
                  "Dedicated support",
                  "SLA guarantee",
                  "Volume license"
                ]}
                ctaText="Contact Sales"
                ctaHref="#"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-16 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16">WHAT USERS SAY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="h-full">
              <TestimonialCard 
                quote="Changed how I write. I draft articles 3x faster now!"
                author="Sarah J."
                role="Writer"
                avatar="📝"
              />
            </div>
            <div className="h-full">
              <TestimonialCard 
                quote="Incredible accuracy. Understands technical jargon perfectly."
                author="Mike C."
                role="Developer"
                avatar="💻"
              />
            </div>
            <div className="h-full">
              <TestimonialCard 
                quote="Best productivity investment. Saves hours every day."
                author="Emma D."
                role="Consultant"
                avatar="💼"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 md:px-16 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16">FAQ</h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-16 bg-[#E8A22E] border-b-4 border-black relative overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-white rounded-full border-4 border-black opacity-50 z-0"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-black transform rotate-45 border-4 border-white opacity-50 z-0"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">READY TO SPEAK?</h2>
          <p className="text-xl md:text-2xl mb-10">Download Dictation Doggy today.</p>
          <Button variant="primary" href="https://dictationdoggy.s3.amazonaws.com/downloads/DictationDoggy_Latest.zip" className="text-xl px-12 py-6 bg-white hover:bg-black hover:text-white border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <svg className="w-6 h-6 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download Free
          </Button>
          <p className="mt-6 text-sm font-bold opacity-70">macOS 12+ • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-3 bg-white rounded-full border-2 border-white overflow-hidden flex-shrink-0">
                    <Image src="/logo.png" alt="Dictation Doggy" width={48} height={48} className="object-cover" />
                </div>
                <span className="text-2xl font-bold">Dictation Doggy</span>
              </div>
              <p className="opacity-70">AI-powered voice transcription for Mac.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#E8A22E]">Product</h4>
              <ul className="space-y-2 opacity-70">
                <li><a href="#features" className="hover:text-[#E8A22E] transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#E8A22E] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#E8A22E] transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#E8A22E]">Support</h4>
              <ul className="space-y-2 opacity-70">
                <li><a href="#" className="hover:text-[#E8A22E] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#E8A22E] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#E8A22E] transition-colors">System Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#E8A22E]">Legal</h4>
              <ul className="space-y-2 opacity-70">
                <li><a href="#" className="hover:text-[#E8A22E] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#E8A22E] transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center opacity-70">
            <p>&copy; 2026 Dictation Doggy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
