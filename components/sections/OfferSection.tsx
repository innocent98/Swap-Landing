import React from 'react';
import { Button } from '@/components/ui/button';
import { Landmark } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const OfferSection = () => {
  return (
    <section className="relative bg-[#1a1d3a] py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="font-sora text-sm text-white">Our Offerings</span>
          </div>
          <h2 className="font-sora text-5xl md:text-6xl font-bold text-white mb-6">
            What We Offer
          </h2>
          <p className="font-sora text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
            In today's global market, quick and cost-effective currency exchange is crucial. SmileSwap simplifies international transactions for all businesses, from importers to freelancers. With SmileSwap, your business can:
          </p>
        </div>

        {/* Top Section - Card 1 and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Card 1 - Get Best Deals */}
          <div className="bg-gradient-to-br from-[#f8f7ff] to-[#f0eeff] rounded-[32px] p-10 relative">
            {/* Number Badge - Top Left */}
            <div className="absolute top-8 left-8 flex items-center justify-center w-14 h-14 bg-[#2d1b4e] rounded-full">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <span className="font-archivo text-white font-bold text-lg">1</span>
              </div>
            </div>

            <div className="pt-20">
              <h3 className="font-sora text-4xl font-bold text-[#0f0f2e] mb-4">
                Get Best Deals
              </h3>
              <p className="font-sora text-base text-[#4a4a68] leading-relaxed">
                Access competitive and real-time exchange rates from authorized dealers and brokers.
              </p>
            </div>
          </div>

          {/* Image Placeholder for Card 1 */}
            <Image src='/offer1.svg' alt='offer 1' width={200} height={200} className='w-full h-full rounded-[32px]' />
        </div>

        {/* Bottom Row - Cards 2, 3, 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 2 - Get Escrow Security */}
          <div className="bg-gradient-to-br from-[#f8f7ff] to-[#f0eeff] rounded-[32px] p-10 relative">
            {/* Number Badge - Top Left */}
            <div className="absolute top-8 left-8 flex items-center justify-center w-14 h-14 bg-[#2d1b4e] rounded-full">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <span className="font-archivo text-white font-bold text-lg">2</span>
              </div>
            </div>

            <div className="pt-20">
              <h3 className="font-sora text-3xl font-bold text-[#0f0f2e] mb-4">
                Get Escrow Security
              </h3>
              <p className="font-sora text-base text-[#4a4a68] leading-relaxed">
                Safeguard every transaction with our automated escrow system, ensuring funds are only released once both parties are satisfied.
              </p>
            </div>
          </div>

          {/* Card 3 - Pay Globally, Instantly */}
          <div className="bg-gradient-to-br from-[#f8f7ff] to-[#f0eeff] rounded-[32px] p-10 relative">
            {/* Number Badge - Top Left */}
            <div className="absolute top-8 left-8 flex items-center justify-center w-14 h-14 bg-[#2d1b4e] rounded-full">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <span className="font-archivo text-white font-bold text-lg">3</span>
              </div>
            </div>

            <div className="pt-20">
              <h3 className="font-sora text-3xl font-bold text-[#0f0f2e] mb-4">
                Pay Globally, Instantly
              </h3>
              <p className="font-sora text-base text-[#4a4a68] leading-relaxed">
                Make cross-border payments and offshore exchanges quickly and securely, directly from your virtual bank account.
              </p>
            </div>
          </div>

          {/* Card 4 - Effortless Payment Integration */}
          <div className="bg-gradient-to-br from-[#f8f7ff] to-[#f0eeff] rounded-[32px] p-10 relative">
            {/* Blue Badge - Top Right */}
            <div className="absolute top-8 right-8 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg font-archivo text-sm font-bold shadow-lg">
              <span>501.9</span>
              <span className="text-white/80">≡</span>
              <span>311</span>
            </div>

            {/* Number Badge - Top Left */}
            <div className="absolute top-8 left-8 flex items-center justify-center w-14 h-14 bg-[#2d1b4e] rounded-full">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <span className="font-archivo text-white font-bold text-lg">4</span>
              </div>
            </div>

            <div className="pt-20">
              <h3 className="font-sora text-3xl font-bold text-[#0f0f2e] mb-4">
                Effortless Payment Integration
              </h3>
              <p className="font-sora text-base text-[#4a4a68] leading-relaxed">
                Seamlessly integrate your transactions with flexible payment methods and secure gateways.
              </p>
            </div>
          </div>
        </div>

        {/* Large Bottom Card - Trade with Confidence */}
        <div className="bg-gradient-to-br from-[#e8f4ff] to-[#f0f7ff] rounded-[32px]  relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className='p-10 md:pr-0 md:p-16'>
              {/* Bank Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-8 shadow-sm">
                <Landmark className="w-10 h-10 text-[#0f0f2e]" strokeWidth={1.5} />
              </div>

              <h3 className="font-sora text-4xl md:text-5xl font-bold text-[#0f0f2e] mb-6 leading-tight">
                Trade with Confidence, Data-Driven
              </h3>
              <p className="font-sora text-lg text-[#4a4a68] leading-relaxed mb-8">
                Receive real-time insights and analytics to help you make informed decisions on currency trading.
              </p>

              <Button className="bg-[#0f0f2e] text-white hover:bg-[#1a1d3a] font-archivo px-8 py-6 rounded-xl text-base font-semibold shadow-lg">
                <Link href="/early-access">Get Early Access</Link>
              </Button>
            </div>

            {/* Right Content - Dashboard Image Placeholder */}
            <div className='pt-10 md:pt-16'>
              <Image src='/offer2.svg' alt='offer 2' width={200} height={200} className='w-full h-full rounded-[16px]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;