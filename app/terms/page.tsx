import React from 'react'
import Outbrain from '@/components/ads/outbrain';

import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Terms And Condition",
  };

const TermsAndConditions = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Header */}
        <header className="bg-gray-900 text-white py-10 text-center">
          <h1 className="text-4xl mt-14 font-bold">Terms and Conditions</h1>
          <p className="text-md mt-2 text-gray-300">
            Please read these terms and conditions carefully before using Nexus News.
          </p>
        </header>

         <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>

   

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              By accessing or using Nexus News, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of the terms, you should not use our website.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-4">
              These terms apply to all visitors, users, and others who access or use the service.
            </p>
          </section>

          {/* Use of Content */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Use of Content</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              The content provided on Nexus News is for informational purposes only. It is not intended as financial, investment, or legal advice. Users should conduct their own due diligence before making investment decisions.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-4">
              You may not reproduce, distribute, or modify any content without express written permission from Nexus News.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <ul className="list-disc list-inside text-md text-gray-600 space-y-2">
              <li><strong>Accountability:</strong> You are responsible for any activity that occurs under your account.</li>
              <li><strong>Accuracy:</strong> You agree not to post misleading, false, or deceptive content on the site.</li>
              <li><strong>Compliance:</strong> You must comply with all applicable laws and regulations when using our services.</li>
              <li><strong>Security:</strong> Do not attempt to access data or systems you are not authorized to use.</li>
              <li><strong>Respect:</strong> Engage respectfully with other users and our team. Abuse or harassment will not be tolerated.</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              All content, including articles, graphics, logos, and design elements, is the property of Nexus News and protected by copyright and trademark laws.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-4">
              Unauthorized use of our content is strictly prohibited and may result in legal action.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              Nexus News will not be liable for any losses or damages arising from the use or inability to use the website, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to These Terms</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-4">
              Continued use of the site after changes constitutes your acceptance of the new terms.
            </p>
          </section>
        </main>
      </div>

      <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain />
    </>
  )
}

export default TermsAndConditions
