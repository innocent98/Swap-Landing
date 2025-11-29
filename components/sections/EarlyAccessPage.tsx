'use client';

/**
 * Early Access Waitlist Page
 *
 * This component integrates with Google Forms for waitlist submissions.
 *
 * Google Form Details:
 * - Form URL: https://forms.gle/yGhD7fZnU8GyCuqy8
 * - Submission Endpoint: https://docs.google.com/forms/d/e/1FAIpQLSeyq2xnQq8b1L8DBhlE1HLR0u7zgn_hIAwc54jRQeLPFMA3jQ/formResponse
 *
 * Field Mappings (verified from actual form submission):
 * - entry.730138085 -> User Type (Individual/Business)
 * - entry.1357895843 -> Name
 * - emailAddress -> Email (Google Forms uses special parameter for email)
 *
 * Note: The form UI is maintained but now submits to Google Forms backend using hidden iframe approach.
 */

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { User, Mail, Users, Share2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const EarlyAccessPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = 2000; // 2 seconds

    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200); // Blink duration: 200ms
    };

    // Blink every 2 seconds
    const interval = setInterval(triggerBlink, blinkInterval);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Google Form submission endpoint
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeyq2xnQq8b1L8DBhlE1HLR0u7zgn_hIAwc54jRQeLPFMA3jQ/formResponse';

      // Create hidden iframe to receive the response
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden_iframe';

      let isFirstLoad = true;

      // Handle iframe load event - this fires after form submission completes
      iframe.onload = () => {
        // Skip the first load (when iframe is initially created)
        if (isFirstLoad) {
          isFirstLoad = false;
          return;
        }

        // Form submitted successfully
        setIsSubmitted(true);
        setIsSubmitting(false);

        // Clean up after a delay
        setTimeout(() => {
          if (document.body.contains(form)) document.body.removeChild(form);
          if (document.body.contains(iframe)) document.body.removeChild(iframe);
        }, 1000);
      };

      document.body.appendChild(iframe);

      // Create form element
      const form = document.createElement('form');
      form.action = formUrl;
      form.method = 'POST';
      form.target = 'hidden_iframe';

      // Add form fields with correct field IDs
      const fields = {
        'entry.730138085': formData.userType === 'individual' ? 'Individual' : 'Business',
        'entry.1357895843': formData.name,
        'emailAddress': formData.email
      };

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

    } catch (err) {
      console.error('Form submission error:', err);
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3ff] via-[#f0f0ff] to-[#faf5ff]">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1 border-2 border-[#1a1d3a] rounded-full px-4 py-2">
            <Image src='/logo.svg' alt='offer 2' width={80} height={80} className='rounded-[16px]' />
          </div>
        </Link>
        <Link href="/#features">
          <Button className="bg-[#1a1d3a] text-white hover:bg-[#2a2d4a] font-archivo px-6 py-2 rounded-full">
            Features
          </Button>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-6 flex flex-col justify-center items-center">
        <Image
          src='/smile.svg'
          alt='offer 2'
          width={80}
          height={80}
          className={`rounded-[16px] mb-0 transition-opacity duration-200 ${isBlinking ? 'opacity-0' : 'opacity-100'}`}
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            {/* Smile Icon */}

            {/* Hero Text */}
            <div>
              <h1 className="font-sora text-2xl md:text-4xl lg:text-6xl font-bold text-[#1a1d3a] leading-tight mb-6">
                Join the Future of{' '}
                <span className="relative">
                  <span className="relative z-10">Currency</span>
                  <div className="absolute -left-2 -right-2 top-0 bottom-0 bg-yellow-300/40 -rotate-1 rounded-lg -z-0"></div>
                </span>
                <br />
                <span className="relative">
                  <span className="relative z-10">Exchange</span>
                  <div className="absolute -left-2 -right-2 top-0 bottom-0 bg-yellow-300/40 rotate-1 rounded-lg -z-0"></div>
                </span>
              </h1>
              <p className="font-sora text-sm md:text-lg text-[#4a4a68] leading-relaxed max-w-lg">
                Access a pool of businesses to swap your foreign currencies with, seamlessly and very secure powered by our advance escrow technology
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md">
                <Image src='/early.svg' alt='offer 2' width={200} height={200} className='w-full h-full rounded-[16px]' />
              {/* <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-sora text-white/70 text-sm">Image Placeholder</p>
                  <p className="font-sora text-white/50 text-xs mt-2">Person with phone photo</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Side - Waitlist Form */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-10 relative z-10">
              {/* Smile Icon */}
              {/* <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                  <SmileOutlined className="text-2xl text-[#1a1d3a]" />
                </div>
              </div> */}

              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="font-sora text-xl md:text-2xl font-bold text-[#1a1d3a] mb-2">
                  Be the First to Experience SmileSwap
                </h2>
                <p className="font-sora text-sm text-[#6b7280]">
                  Complete the following steps
                </p>
              </div>

              {!isSubmitted ? (
                /* Waitlist Form - Now integrated with Google Forms */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="font-sora text-sm text-red-800">{error}</p>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <User className="w-5 h-5" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-12"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-12"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* User Type Select */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                      <Users className="w-5 h-5" />
                    </div>
                    <Select
                      value={formData.userType}
                      onValueChange={(value) => setFormData({ ...formData, userType: value })}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="pl-12">
                        <SelectValue placeholder="User Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary font-archivo py-6 rounded-xl text-base font-semibold mt-8"
                    disabled={!formData.name || !formData.email || !formData.userType || isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Continue'}
                  </Button>
                </form>
              ) : (
                /* Success State */
                <div className="space-y-6">
                  {/* Success Message */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-sora text-lg font-bold text-green-900 mb-1">
                          Great!
                        </h3>
                        <p className="font-sora text-sm text-green-800">
                          You've secured a spot on our waitlist!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Share Button */}
                  <Button className="w-full bg-[#0f0f2e] text-white hover:bg-[#1a1d3a] font-archivo py-6 rounded-xl text-base font-semibold flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Get Friends on the List
                  </Button>
                </div>
              )}
            </div>

            {/* Coin Stack Image Placeholder */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 z-0">
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <svg className="w-16 h-16 text-yellow-600/30" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <p className="font-sora text-yellow-700 text-xs mt-1">Coins</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Currency Ticker */}
        <div className="w-full bg-gray-100 py-6 sm:py-8 overflow-hidden mt-6">
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex items-center gap-6 sm:gap-8 md:gap-12 text-gray-300 font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
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
              <span>•</span>
              <span>NGN</span>
              <span>•</span>
              <span>USD</span>
              <span>•</span>
              <span>EUR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-white/50 backdrop-blur-sm py-6 px-0 mt-0">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Contact */}
            <div>
              <h3 className="font-sora text-2xl font-semibold text-[#1a1d3a] mb-6">
                Contact
              </h3>
              <div className="space-y-4">
                <p className="font-sora text-sm md:text-base text-[#4a4a68]">
                  hello@smileswap.app
                </p>
                <p className="font-sora text-sm md:text-base text-[#4a4a68] leading-relaxed">
                  Delaware, USA
                </p>
                <p className="font-sora text-sm md:text-base text-[#4a4a68] leading-relaxed">
                  Uyo, Nigeria
                </p>
              </div>
            </div>

            {/* Right Column - Links */}
            <div className="md:text-right">
              <h3 className="font-sora text-2xl font-semibold text-[#1a1d3a] mb-6">
                Terms and Conditions
              </h3>
              <div className="space-y-3">
                <div>
                  <a href="/privacy-policy" className="font-sora text-sm md:text-base text-[#4a4a68] hover:text-[#1a1d3a] transition-colors">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="font-sora text-sm md:text-base text-[#4a4a68] hover:text-[#1a1d3a] transition-colors">
                    Terms of Use
                  </a>
                </div>
                <div>
                  <a href="#" className="font-sora text-sm md:text-base text-[#4a4a68] hover:text-[#1a1d3a] transition-colors">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sora text-sm text-[#4a4a68]">
              © 2025 smileswap. All right reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                  <span className="text-2xl">🇺🇸</span>
                </div>
                <span className="font-sora text-base text-[#1a1d3a] font-medium">
                  USA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                  <span className="text-2xl">🇳🇬</span>
                </div>
                <span className="font-sora text-base text-[#1a1d3a] font-medium">
                  Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EarlyAccessPage;