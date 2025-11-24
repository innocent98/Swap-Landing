import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-white py-10 px-0 border-t border-gray-100">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Contact */}
          <div>
            <h3 className="font-sora text-2xl font-semibold text-[#1a1d3a] mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <p className="font-sora text-sm md:text-base text-[#4a4a68]">
                hello@gosmileswap.com
              </p>
              <p className="font-sora text-sm md:text-base text-[#4a4a68] leading-relaxed">
                1007 N Orange St. 4th Floor Ste<br />
                1382, Wilmington, DE, USA 19801
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
                <a
                  href="/privacy-policy"
                  className="font-sora text-sm md:text-base text-[#4a4a68] hover:text-[#1a1d3a] transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sora text-sm md:text-base text-[#4a4a68] hover:text-[#1a1d3a] transition-colors"
                >
                  Terms of Use
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sora text-sm md:text-base text-[#4a4a68] hover:text-[#1a1d3a] transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="font-sora text-sm text-[#4a4a68]">
            © 2025 smileswap. All right reserved.
          </p>

          {/* Country Selector */}
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
    </footer>
  );
};

export default Footer;