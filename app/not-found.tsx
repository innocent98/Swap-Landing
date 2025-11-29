'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3ff] via-[#f0f0ff] to-[#faf5ff] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1 border-2 border-[#1a1d3a] rounded-full px-4 py-2">
              <Image
                src='/logo.svg'
                alt='SmileSwap Logo'
                width={80}
                height={80}
                className='rounded-[16px]'
              />
            </div>
          </Link>
        </div>

        {/* Smile Icon */}
        <div className="flex justify-center">
          <Image
            src='/smile.svg'
            alt='Smile'
            width={120}
            height={120}
            className='rounded-[16px] opacity-50'
          />
        </div>

        {/* 404 Content */}
        <div className="space-y-4">
          <h1 className="font-sora text-8xl md:text-9xl font-bold text-[#1a1d3a]">
            404
          </h1>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#1a1d3a]">
            Page Not Found
          </h2>
          <p className="font-sora text-lg text-[#4a4a68] max-w-md mx-auto">
            Oops! The page you're looking for seems to have gone on a currency exchange adventure.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/">
            <Button className="bg-primary text-white hover:bg-primary/90 font-archivo px-8 py-6 rounded-full text-base font-semibold flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go Home
            </Button>
          </Link>
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="border-2 border-[#1a1d3a] text-[#1a1d3a] hover:bg-[#1a1d3a] hover:text-white font-archivo px-8 py-6 rounded-full text-base font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>

        {/* Currency Ticker */}
        <div className="pt-12">
          <div className="flex animate-scroll whitespace-nowrap overflow-hidden">
            <div className="flex items-center gap-6 text-gray-300 font-sora text-2xl md:text-3xl font-bold">
              <span>NGN</span>
              <span>•</span>
              <span>USD</span>
              <span>•</span>
              <span>EUR</span>
              <span>•</span>
              <span>GBP</span>
              <span>•</span>
              <span>CHC</span>
              <span>•</span>
              <span>NGN</span>
              <span>•</span>
              <span>USD</span>
              <span>•</span>
              <span>EUR</span>
              <span>•</span>
              <span>GBP</span>
              <span>•</span>
              <span>CHC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
