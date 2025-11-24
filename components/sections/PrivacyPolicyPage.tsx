'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: [
      {
        heading: 'Purpose of this Privacy Policy',
        text: 'Cubbiccle Inc ("Company", "We", "Us" or "Our") in partnership with Smiletech Transnational Ltd respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and/or use our mobile application (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.',
      },
      {
        heading: 'Scope',
        text: "This privacy policy does not apply to services that are not owned or controlled by the Company, including third-party websites and the services of the Company's merchants. This privacy policy applies to all forms of systems, operations and processes within the Company's environment that involve the processing of personal data.",
      },
      {
        heading: 'Your Acceptance',
        text: "By using or accessing our services, you agree to the collection, use, and disclosure of your personal data as described in this privacy policy. Your use of our services is also subject to the Company's Terms and Conditions.",
      },
    ],
  },
  {
    id: 'data-collection',
    title: '2. The Data We Collect About You',
    content: [
      {
        heading: 'Types of Personal Data',
        text: 'We may collect, use, store and transfer different kinds of personal data about you, including:',
        list: [
          'Identity Data: firstname, lastname, username, date of birth and gender',
          'Contact Data: billing address, delivery address, email address and telephone numbers',
          'Financial Data: bank account and payment card details',
          'Transaction Data: details about payments and products/services purchased',
          'Technical Data: internet protocol (IP) address, login data, browser type and version, operating system',
          'Profile Data: username, password, purchase history, interests and preferences',
          'Usage Data: information about how you use our website and services',
          'Marketing and Communications Data: your preferences and communication preferences',
        ],
      },
      {
        heading: "What We Don't Collect",
        text: 'We do not collect any special categories of personal data (such as race, ethnicity, religious beliefs, sexual orientation, political opinions, health information, genetic or biometric data) nor do we collect information about criminal convictions and offences.',
      },
    ],
  },
  {
    id: 'data-collection-methods',
    title: '3. How Is Your Personal Data Collected?',
    content: [
      {
        heading: 'Collection Methods',
        text: 'We collect data through:',
        list: [
          'Direct Interactions: when you apply for products, create an account, subscribe to services, or contact us',
          'Automated Technologies: through cookies, server logs and similar tracking technologies',
          'Third Parties: from analytics providers, advertising networks, payment processors, and public sources',
        ],
      },
    ],
  },
  {
    id: 'data-usage',
    title: '4. How We Use Your Personal Data',
    content: [
      {
        heading: 'Lawful Basis',
        text: 'We only use your personal data when the law allows us to. We primarily use your data to:',
        list: [
          'Provide the required services and process your orders',
          'Respond to your questions or requests',
          'Improve website features and develop products',
          'Address inappropriate use of our services',
          'Send you marketing content (with your consent)',
          'Comply with legal obligations',
        ],
      },
    ],
  },
  {
    id: 'data-disclosure',
    title: '5. Disclosures of Your Personal Data',
    content: [
      {
        heading: 'Who We Share Your Data With',
        text: 'We may share your personal data with:',
        list: [
          'Merchants: for your purchase details and record purposes',
          'Service Providers: vendors working on our behalf (customer support, system security, payment processors)',
          'Financial Services: banks and payment processors for transaction handling',
          'Affiliates: related companies and subsidiaries',
          'Legal Authorities: when required by law or in response to legal process',
          'Business Partners: in case of sale, merger, or acquisition of our business',
        ],
      },
    ],
  },
  {
    id: 'international-transfers',
    title: '6. International Transfers',
    content: [
      {
        heading: 'Cross-Border Data Transfer',
        text: 'We may rely on third-party servers in foreign jurisdictions as part of our services. The Company takes steps to ensure that data is processed and protected according to this policy and applicable law. Any transfer of personal data outside Nigeria will be in accordance with the Nigeria Data Protection Act, 2023, using contractual terms or ensuring adequate data protection laws in the destination country.',
      },
    ],
  },
  {
    id: 'data-security',
    title: '7. Data Security',
    content: [
      {
        heading: 'Protection Measures',
        text: 'We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your data to those employees, agents, contractors and third parties who have a business need to know.',
      },
      {
        heading: 'Breach Notification',
        text: 'We have procedures to deal with any suspected personal data breach and will notify you and applicable regulators of a breach where we are legally required to do so.',
      },
    ],
  },
  {
    id: 'data-retention',
    title: '8. Data Retention',
    content: [
      {
        heading: 'How Long We Keep Your Data',
        text: 'We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: '9. Your Legal Rights',
    content: [
      {
        heading: 'Data Subject Rights',
        text: 'Any user whose personal data is held by the Company is entitled to exercise the following data protection rights:',
        list: [
          'Request Access: receive a copy of the personal data we hold about you',
          'Request Correction: have inaccurate data corrected',
          'Request Erasure: ask us to delete your personal data in certain circumstances',
          'Object to Processing: object to processing based on legitimate interests',
          'Request Restriction: suspend processing of your data',
          'Data Portability: receive your data in a structured, machine-readable format',
          'Withdraw Consent: withdraw consent where we rely on it to process your data',
          'Lodge a Complaint: make a complaint to the Nigeria Data Protection Commission (NDPC)',
        ],
      },
      {
        heading: 'Exercising Your Rights',
        text: 'You will not have to pay a fee to access your personal data or to exercise any other rights. However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. We aim to respond to all requests within one month.',
      },
    ],
  },
  {
    id: 'contact',
    title: '10. Contact Details',
    content: [
      {
        heading: 'Get in Touch',
        text: 'If you have any questions about this privacy policy or our privacy practices, please contact our data protection officer at privacy@smileswap.com. For any further queries, you can reach our data protection officer at the contact details provided by the Company.',
      },
    ],
  },
];

const PrivacyPolicyPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('introduction');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3ff] via-[#f0f0ff] to-[#faf5ff]">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1 border-2 border-[#1a1d3a] rounded-full px-4 py-2">
            <Image src="/logo.svg" alt="SmileSwap" width={80} height={80} className="rounded-[16px]" />
          </div>
        </Link>
        <Link
          href="/"
          className="bg-[#1a1d3a] text-white hover:bg-[#2a2d4a] font-archivo px-6 py-2 rounded-full"
        >
          Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-sora text-3xl md:text-5xl font-bold text-[#1a1d3a] mb-4">
            Privacy Policy
          </h1>
          <p className="font-sora text-base md:text-lg text-[#4a4a68]">
            Last Updated: September 2025
          </p>
        </div>

        {/* Introduction Banner */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-8 border-l-4 border-primary">
          <p className="font-sora text-sm md:text-base text-[#4a4a68] leading-relaxed">
            This Privacy Policy explains how <span className="font-semibold text-[#1a1d3a]">Cubbiccle Inc</span> in
            partnership with <span className="font-semibold text-[#1a1d3a]">Smiletech Transnational Ltd</span>{' '}
            (collectively "Smileswap App", "we", "us" or "our") collects, uses, and protects your personal information
            when you use our mobile application and website.
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4 mb-12">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h2 className="font-sora text-lg md:text-xl font-bold text-[#1a1d3a] text-left">{section.title}</h2>
                <ChevronDown
                  className={`w-5 h-5 text-[#4a4a68] transition-transform duration-300 flex-shrink-0 ml-4 ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedSection === section.id && (
                <div className="px-6 md:px-8 py-6 border-t border-gray-200 bg-gray-50">
                  <div className="space-y-6">
                    {section.content.map((item, index) => (
                      <div key={index}>
                        <h3 className="font-sora text-base md:text-lg font-semibold text-[#1a1d3a] mb-3">
                          {item.heading}
                        </h3>
                        <p className="font-sora text-sm md:text-base text-[#4a4a68] leading-relaxed mb-3">
                          {item.text}
                        </p>
                        {item.list && (
                          <ul className="space-y-2 ml-4">
                            {item.list.map((listItem, i) => (
                              <li key={i} className="font-sora text-sm md:text-base text-[#4a4a68] flex items-start gap-3">
                                <span className="text-primary font-bold mt-1">•</span>
                                <span>{listItem}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-primary to-[#2a2d4a] rounded-3xl shadow-xl p-6 md:p-8 text-white text-center">
          <h3 className="font-sora text-xl md:text-2xl font-bold mb-3">Questions About Your Privacy?</h3>
          <p className="font-sora text-sm md:text-base mb-6 text-white/90">
            If you have any concerns or questions about how we handle your data, please don't hesitate to reach out to
            our privacy team.
          </p>
          <a
            href="mailto:privacy@smileswap.com"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-archivo font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
