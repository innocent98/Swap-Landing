import React from 'react';
import { Button } from '@/components/ui/button';
import { SmileOutlined, ThunderboltFilled } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border-2 border-navy rounded-full px-4 py-2">
            <Image src='/logo.svg' alt='offer 2' width={200} height={200} className='w-full h-full rounded-[16px]' />
            {/* <span className="font-sora text-lg font-semibold text-navy">sm:</span>
            <SmileOutlined className="text-xl text-navy" />
            <span className="font-sora text-lg font-semibold text-navy">eswap</span> */}
          </div>
          <Button 
            className="bg-navy text-white hover:bg-navy-light font-archivo px-6 py-2 rounded-full"
          >
            Features
          </Button>
        </div>

        {/* CTA Button */}
        <Button 
          className="bg-navy text-white hover:bg-navy-light font-archivo px-6 py-2.5 rounded-full text-sm font-medium"
        >
          <Link href="/early-access">Get Early Access</Link>
        </Button>
      </nav>

      {/* Decorative Blobs */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-yellow-blob/40 rounded-full blur-3xl">
        {/* <Image src='/hero1.png' alt='offer 2' width={200} height={200} className='w-full h-full rounded-[16px]' /> */}
      </div>
      <div className="absolute top-32 right-20 w-80 h-80 bg-green-blob/30 rounded-full blur-3xl"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-20 pb-32 relative z-10">
        <div className="text-center max-w-5xl mx-auto justify-center flex flex-col items-center">
          <Image src='/smile.svg' alt='offer 2' width={80} height={80} className='rounded-[16px] mb-8' />
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-badge/20 text-green-800 px-4 py-2 rounded-full mb-8">
            <ThunderboltFilled className="text-green-600" />
            <span className="font-sora text-sm font-medium">SmileSwap is Coming Soon!</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-sora text-6xl md:text-7xl lg:text-8xl font-bold text-navy leading-tight mb-6">
            Join the Future of
            <br />
            Currency Exchange
          </h1>

          {/* Subheading */}
          <p className="font-sora text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Access a pool of businesses to swap your foreign currencies with,
            seamlessly and very secure powered by our advance escrow technology
          </p>

          {/* CTA Button */}
          <Button 
            className="bg-navy text-white hover:bg-navy-light font-archivo px-8 py-6 rounded-xl text-base font-semibold"
            size="lg"
          >
            <Link href="/early-access">Get Early Access</Link>
          </Button>
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-20 relative max-w-6xl mx-auto">
          {/* Browser Chrome */}
          <div className="bg-white rounded-t-2xl shadow-2xl border border-gray-200">
            {/* Browser Header */}
            <div className="bg-gray-100 px-4 py-3 rounded-t-2xl border-b border-gray-200 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white px-4 py-1.5 rounded-lg flex items-center gap-2 text-xs text-gray-500">
                  <SmileOutlined />
                  <span>smile.swap</span>
                </div>
              </div>
              <div className="w-20"></div>
            </div>

            {/* Dashboard Content */}
            <div className="bg-white p-8 rounded-b-2xl">
              <div className="flex gap-8">
                {/* Sidebar */}
                <div className="w-48 space-y-4">
                  <div className="font-sora text-xl font-bold text-navy mb-6">sm:)eswap</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                      <div className="w-5 h-5 bg-blue-600 rounded"></div>
                      <span className="font-sora text-sm font-medium">Home</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 px-4 py-2">
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      <span className="font-sora text-sm">Wallet</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 px-4 py-2">
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      <span className="font-sora text-sm">Trade</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 px-4 py-2">
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      <span className="font-sora text-sm">Payments</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 px-4 py-2">
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      <span className="font-sora text-sm">Profile/Settings</span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-sora text-2xl font-bold text-navy">Your Dashboard</h2>
                      <p className="font-sora text-sm text-gray-500">Send and receive money with ease within and outside sm: sleswap</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-mint rounded-full"></div>
                      <div>
                        <div className="font-sora text-sm font-semibold text-navy">Bryan Obinna</div>
                        <div className="text-xs text-gray-500">@bryanjohn</div>
                      </div>
                    </div>
                  </div>

                  {/* Wallet Cards */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-xs text-gray-500 mb-2 flex items-center gap-2">
                        <div className="w-6 h-4 bg-blue-500 rounded"></div>
                        USD Wallet
                      </div>
                      <div className="font-sora text-xl font-bold text-navy mb-2">$13,878</div>
                      <Button size="sm" className="bg-navy text-white font-archivo text-xs rounded-lg w-full">
                        View
                      </Button>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-xs text-gray-500 mb-2 flex items-center gap-2">
                        <div className="w-6 h-4 bg-blue-500 rounded"></div>
                        Euro Wallet
                      </div>
                      <div className="font-sora text-xl font-bold text-navy">$13,878</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-xs text-gray-500 mb-2 flex items-center gap-2">
                        <div className="w-6 h-4 bg-gray-400 rounded"></div>
                        NGN Wallet
                      </div>
                      <div className="font-sora text-xl font-bold text-navy">₦ 13,878</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-xs text-gray-500 mb-2 flex items-center gap-2">
                        <div className="w-6 h-4 bg-red-500 rounded"></div>
                        GBP Wallet
                      </div>
                      <div className="font-sora text-xl font-bold text-navy">$13,878</div>
                    </div>
                  </div>

                  {/* Recent Transactions */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-sora text-lg font-semibold text-navy">Recent Transactions</h3>
                      <a href="#" className="text-sm text-blue-600 font-sora">View all transactions</a>
                    </div>
                    <div className="bg-gray-50 rounded-xl overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-white border-b border-gray-200">
                          <tr>
                            <th className="text-left px-4 py-3 font-sora text-xs font-medium text-gray-500">Transaction Details</th>
                            <th className="text-left px-4 py-3 font-sora text-xs font-medium text-gray-500">Date</th>
                            <th className="text-left px-4 py-3 font-sora text-xs font-medium text-gray-500">Amount</th>
                            <th className="text-left px-4 py-3 font-sora text-xs font-medium text-gray-500">Status</th>
                            <th className="text-left px-4 py-3 font-sora text-xs font-medium text-gray-500">Transaction Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-3 font-sora text-sm text-navy">USD Account Transfer</td>
                            <td className="px-4 py-3 font-sora text-sm text-gray-600">Just now</td>
                            <td className="px-4 py-3 font-sora text-sm text-navy font-semibold">₦2,000.50</td>
                            <td className="px-4 py-3">
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-sora text-xs font-medium">
                                Completed
                              </span>
                            </td>
                            <td className="px-4 py-3 font-sora text-sm text-gray-600">Withdrawal</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements on Dashboard */}
          <div className="absolute -left-10 top-1/2 w-32 h-32 bg-yellow-blob/50 rounded-full blur-2xl"></div>
          <div className="absolute -right-10 bottom-10 w-40 h-40 bg-green-blob/50 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Currency Ticker */}
      <div className="bg-gray-100 py-8 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center gap-12 text-gray-300 font-sora text-6xl font-bold">
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
    </section>
  );
};

export default HeroSection;
