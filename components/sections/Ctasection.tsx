import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="relative bg-white py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-[#f0f4f8] to-[#e8f0f7] rounded-[48px] p-12 md:p-16 lg:p-20 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1d3a] mb-6 leading-tight">
                Sign Up for Early Access & Best Rates.
              </h2>
              <p className="font-sora text-lg text-[#4a4a68] mb-8 leading-relaxed">
                Prepare your business for the future of currency exchange with SmileSwap. Join the waitlist today to get started.
              </p>
              <Button className="bg-[#0f0f2e] text-white hover:bg-[#1a1d3a] font-archivo px-8 py-6 rounded-xl text-base font-semibold shadow-lg">
                <Link href="/early-access">Get Early Access</Link>
              </Button>
            </div>

            {/* Right Content - Image Placeholder */}
            <div className="relative">
                {/* Image Placeholder */}
                <Image src='/cta.svg' alt='offer 2' width={200} height={200} className='w-full h-full rounded-[16px]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;