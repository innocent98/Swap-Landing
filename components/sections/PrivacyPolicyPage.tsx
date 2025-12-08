'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';

const sections = [
  {
    id: 'privacy-policy',
    title: '1. Privacy Policy',
    content: [
      {
        heading: 'Introduction',
        text: 'This privacy policy (this "Privacy Policy") explains how personal information is collected, used, stored, and disclosed by Smileswap. This Privacy Policy applies to our website and all related sites, applications, services and tools regardless of how you access or use them. If anything here applies to only one of our Services or to customers in a particular country, we\'ll explicitly point this out to you. This Privacy Policy is part of our Terms of Use. By accessing or using our Services, website, software, services, applications, products and content offered via Smileswap (collectively, the "Services"), you agree to this Privacy Policy and our Terms of Use.',
      },
      {
        heading: 'Scope of Application',
        text: 'This Privacy Policy applies to your use of (regardless of means of access) our Services. You may access or use our Services through a desktop, laptop, mobile phone, tablet, or other consumer electronic device (each, a "Device"). This Privacy Policy does not apply to services that are not owned or controlled by Smileswap, including third-party websites and the services of other Smileswap merchants. These other sites may place their own cookies, plug-ins or other files on your computer, collect data or solicit personal information from you. Smileswap App does not control these third-party websites and we are not responsible for their privacy statements. Please consult such third parties\' privacy statement.',
      },
    ],
  },
  {
    id: 'data-collection',
    title: '2. Data We Collect',
    content: [
      {
        heading: 'Categories of Personal Data',
        text: 'We collect the following categories of personal data:',
        list: [
          'Identity Data: Name, date of birth, gender, government ID (e.g., SSN, BVN, NIN, passport).',
          'Contact Data: Email address, phone number, billing and delivery addresses.',
          'Financial Data: Bank account details, payment card details, wallet identifiers.',
          'Transaction Data: Details of payments, swaps, and transfers made through Smileswap.',
          'Technical Data: IP address, device information, operating system, browser type, login data, and location data.',
          'Profile Data: Username, password, preferences, feedback, survey responses.',
          'Usage Data: Information about how you use our app, website, and services.',
          'Marketing & Communications Data: Preferences for receiving marketing and communications.',
        ],
      },
      {
        heading: 'Special Categories of Data',
        text: 'We do not collect special categories of personal data (such as health, religion, or political opinions) unless required by law.',
      },
    ],
  },
  {
    id: 'data-usage',
    title: '3. How We Use Your Data',
    content: [
      {
        heading: 'Purposes of Data Processing',
        text: 'We use your personal data for the following purposes:',
        list: [
          'To provide Smileswap services (wallet creation, escrow, swaps, payouts).',
          'To verify your identity and comply with KYC/AML regulations.',
          'To process transactions securely via licensed partners.',
          'To communicate with you (service updates, notifications, marketing with consent).',
          'To improve our app, website, and user experience.',
          'To detect and prevent fraud, misuse, or illegal activity.',
          'To comply with legal and regulatory obligations in Nigeria, the USA, and other jurisdictions.',
        ],
      },
    ],
  },
  {
    id: 'third-party-processors',
    title: '4. Third-Party Data Processors',
    content: [
      {
        heading: 'Licensed Financial Partners',
        text: 'Smileswap integrates with licensed financial partners to deliver services. These partners act as third-party data processors:',
        list: [
          'Stripe, Inc. (USA): Provides wallet infrastructure, payment processing, and settlement services for USD/EUR/GBP.',
          'Paystack Payments Limited (Nigeria): Provides wallet infrastructure, payment processing, and settlement services for NGN.',
        ],
      },
      {
        heading: 'Privacy Policies',
        text: 'We share relevant personal and transactional data with Stripe and Paystack to enable wallet creation, transaction execution, and payouts. These partners process data in accordance with their own privacy policies and applicable laws.',
        list: [
          'Stripe\'s Privacy Policy: https://stripe.com/privacy',
          'Paystack\'s Privacy Policy: https://paystack.com/privacy/merchant',
        ],
      },
    ],
  },
  {
    id: 'data-sharing',
    title: '5. Data Sharing with Third Parties',
    content: [
      {
        heading: 'Third Party Sharing',
        text: 'We may disclose or share your Personal Information with third parties, which include our affiliates, employees, officers, service providers, agents, suppliers, subcontractors, as may be reasonably necessary for the purposes set out in this policy.',
      },
      {
        heading: 'Categories of Third Parties',
        text: 'We may share your personal data with:',
        list: [
          'Financial partners (Stripe, Paystack, banks, payment processors) to execute transactions.',
          'Service providers (cloud hosting, analytics, customer support, identity verification).',
          'Regulators and law enforcement where required by law.',
          'Affiliates and subsidiaries within the Smileswap group are for operational purposes.',
          'Business partners in the event of a merger, acquisition, or restructuring.',
        ],
      },
      {
        heading: 'No Selling of Personal Data',
        text: 'We do not sell your personal data to third parties.',
      },
    ],
  },
  {
    id: 'international-transfers',
    title: '6. International Data Transfers',
    content: [
      {
        heading: 'Cross-Border Transfers',
        text: 'Your data may be transferred between Nigeria, the USA, and other jurisdictions where our partners operate. We ensure that adequate safeguards (such as contractual protections and compliance with Nigeria\'s Data Protection Act 2023 and U.S. privacy laws) are in place to protect your data.',
      },
    ],
  },
  {
    id: 'data-security',
    title: '7. Data Security',
    content: [
      {
        heading: 'Security Measures',
        text: 'We implement technical and organizational measures to protect your personal data against unauthorized access, loss, misuse, or disclosure. Access is restricted to employees and partners who need it to provide services, and all are bound by confidentiality obligations. We have suitable security measures in place to prevent your Personal Information from being accidentally lost or used or accessed in an unauthorised way by a third party. When your bank account information is transmitted via our Services, it will be protected by encryption technology. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your Personal Information on our instructions.',
      },
    ],
  },
  {
    id: 'data-retention',
    title: '8. Data Retention',
    content: [
      {
        heading: 'Retention Periods',
        text: 'We retain your personal data only as long as necessary to provide services, comply with legal obligations, and resolve disputes. Retention periods may vary depending on regulatory requirements in Nigeria and the USA. We will retain your personal data only for as long as is necessary to fulfil the purposes for which we collected it. As a regulated financial institution, we are required by law to store some of your personal and transactional data beyond the closure of your account with us. We only access your data internally on a need-to-know basis, and we\'ll only access or process it if absolutely necessary.',
      },
      {
        heading: 'Data Deletion',
        text: 'We will always delete data that is no longer required by a relevant law or jurisdiction in which we operate. We do this automatically, so you don\'t need to contact us to ask us to delete your data. Deletion methods include shredding, destruction and secure disposal of hardware and hard-copy records, and deletion or over-writing of digital data.',
      },
      {
        heading: 'Retention for Security',
        text: 'We may retain certain information when necessary to ensure safety, security, and prevent fraudulent activities. For instance, if your account is deactivated due to unsafe behavior or security violations, we may retain specific details about your account to safeguard our platform and prevent unauthorized re-registration or misuse.',
      },
      {
        heading: 'Anonymized Data',
        text: 'Under some circumstances, we may anonymize personal information so that it can no longer be associated with a particular individual. We reserve the right to use such anonymous and de-identified data for any legitimate business purpose without further notice to the relevant individual or its consent.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: '9. Your Rights',
    content: [
      {
        heading: 'Data Subject Rights',
        text: 'Depending on your jurisdiction, you have the right to:',
        list: [
          'Access your personal data.',
          'Correct inaccurate data.',
          'Request deletion of your data.',
          'Object to processing for marketing purposes.',
          'Request data portability.',
          'Withdraw consent where processing is based on consent.',
        ],
      },
      {
        heading: 'Regulatory Authorities',
        text: 'Nigerian users may lodge complaints with the Nigeria Data Protection Commission (NDPC). U.S. users may exercise rights under applicable state privacy laws (e.g., CCPA in California).',
      },
    ],
  },
  {
    id: 'age-restriction',
    title: '10. Age Restriction',
    content: [
      {
        heading: 'Minimum Age Requirement',
        text: 'Our Services are not directed, or intended to be attractive, to children under the age of 18.',
      },
      {
        heading: 'Parental Notice',
        text: 'We do not knowingly collect Personal Information from children under the age of 18. If you are under the Age Limit, please do not use the Services, and do not provide any personal data to us. If as a parent or guardian, you become aware that your child or ward child has provided us with any information without your consent, please contact us through the details provided in this Privacy Policy.',
      },
    ],
  },
  {
    id: 'opt-out',
    title: '11. Opt-out Right',
    content: [
      {
        heading: 'Marketing Communications',
        text: 'If you do not wish to receive offers or other notices from us in the future, you can "opt out" by contacting us as indicated at the end of this Privacy Policy or by following the "unsubscribe" instructions in any communication you receive from us. Please be aware that if you are a User, you are not able to opt out of receiving communications about your Smileswap account or related transactions with us.',
      },
    ],
  },
  {
    id: 'policy-changes',
    title: '12. Change to Our Privacy Policy',
    content: [
      {
        heading: 'Updates and Amendments',
        text: 'Subject to applicable law, we may change, amend or review this Privacy Policy at any time to reflect new services or changes in our Policy. All changes made will be posted on this page and where changes will materially affect you, we will notify you of this change by placing a notice online or via mail. If you keep using our Services, you consent to all amendments of this Privacy Policy.',
      },
      {
        heading: 'Stay Informed',
        text: 'To stay up to date on any changes, check back periodically.',
      },
    ],
  },
  {
    id: 'contact',
    title: '13. Contact Us',
    content: [
      {
        heading: 'Data Protection Officer',
        text: 'For questions or to exercise your rights, please contact our Data Protection Officer:',
        list: [
          'Email: privacy@smileswap.app',
        ],
      },
      {
        heading: 'Complaints',
        text: 'If you feel that we have not addressed your questions or concerns adequately, or you believe that your data protection or privacy rights have been infringed, you can complain to your local Data Protection Authority.',
      },
    ],
  },
];

const PrivacyPolicyPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('privacy-policy');

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
            Last Updated: October, 2025
          </p>
        </div>

        {/* Introduction Banner */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-8 border-l-4 border-primary">
          <p className="font-sora text-sm md:text-base text-[#4a4a68] leading-relaxed">
            This Privacy Policy explains how personal information is collected, used, stored, and disclosed by{' '}
            <span className="font-semibold text-[#1a1d3a]">Smileswap</span>. This Privacy Policy applies to our website
            and all related sites, applications, services and tools regardless of how you access or use them.
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
            href="mailto:privacy@smileswap.app"
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
