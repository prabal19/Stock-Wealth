import React from 'react'

import Outbrain from '@/components/ads/outbrain';
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "DMCA",
  };

  
const DMCA = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Header */}
        <header className="bg-gray-900 text-white py-10 text-center">
          <h1 className="text-4xl mt-14 font-bold">DMCA Policy</h1>
          <p className="text-md mt-2 text-gray-300">
            Learn how Nexus News handles copyright infringement claims under the DMCA.
          </p>
        </header>

         <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>

    

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
          {/* What is the DMCA? */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">What is the DMCA?</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              The Digital Millennium Copyright Act (DMCA) is a U.S. law that protects the rights of copyright holders by enabling them to report infringing content. Nexus News complies fully with the DMCA and respects the intellectual property of others.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-4">
              This policy outlines our procedures for handling DMCA takedown notices and how affected parties may respond.
            </p>
          </section>

          {/* Reporting Infringement */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Reporting Copyright Infringement</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              If you believe that content on Nexus News infringes on your copyright, please send a written DMCA notice to our designated agent including the following:
            </p>
            <ul className="list-disc list-inside text-md text-gray-600 space-y-2 mt-4">
              <li>A description of the copyrighted work you claim has been infringed.</li>
              <li>The exact URL or location of the infringing material on our site.</li>
              <li>Your contact information, including name, address, phone number, and email.</li>
              <li>A statement that you have a good faith belief the use is unauthorized.</li>
              <li>A statement, under penalty of perjury, that the information is accurate and you are the copyright owner or authorized to act on their behalf.</li>
              <li>Your physical or electronic signature.</li>
            </ul>
          </section>

          {/* Counter-Notification */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Counter-Notification</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              If your content was removed due to a DMCA notice and you believe this was done in error or that you have the right to use the material, you may file a counter-notification.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-4">
              Your counter-notification must include your contact details, identification of the removed content, a statement under penalty of perjury that you believe the content was removed by mistake, consent to jurisdiction in a U.S. federal court, and your signature.
            </p>
          </section>

          {/* Repeat Infringers */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Repeat Infringers</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              Nexus News has a zero-tolerance policy for repeat copyright infringers. We may terminate user accounts or access for repeat offenders at our sole discretion.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              DMCA notices and counter-notices should be sent to our designated agent:
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-4">
              <strong>Email:</strong> legal@nexusnews.com  
              <br />
              <strong>Address:</strong> Nexus News, Attn: DMCA Agent, 123 Finance St, Market City, NY 10001
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

export default DMCA
