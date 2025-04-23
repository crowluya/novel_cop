import { Logo } from "@/components/tailwind/ui/icons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Open-Seek",
  description: "Read the terms and conditions for using Open-Seek services",
  keywords: "Open-Seek terms of service, terms and conditions, legal terms, user agreement",
  openGraph: {
    title: "Terms of Service - Open-Seek",
    description: "Read the terms and conditions for using Open-Seek services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Open-Seek",
    description: "Read the terms and conditions for using Open-Seek services",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Logo className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Open-Seek</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-blue-600 font-medium">
              Terms of Service
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <div className="text-sm text-gray-500 mb-8">Last Updated: March 20, 2025</div>

        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to Open-Seek! These Terms of Service ("Terms") govern your access to and use of the Open-Seek
            website, products, and services ("Services"). Please read these Terms carefully, and contact us if you have
            any questions. By accessing or using our Services, you agree to be bound by these Terms and our Privacy
            Policy.
          </p>

          <h2>1. Using Our Services</h2>

          <h3>1.1 Account Registration</h3>
          <p>
            You may need to register for an account to access some of our Services. When you register, you agree to
            provide accurate, current, and complete information about yourself. You are responsible for safeguarding
            your account credentials and for any activity that occurs under your account. If you learn of any
            unauthorized access to your account, please contact us immediately.
          </p>

          <h3>1.2 Age Requirements</h3>
          <p>
            You must be at least 13 years old to use our Services. If you are under 18, you must have your parent or
            guardian's permission to use our Services. If you use our Services on behalf of a company, organization, or
            other entity, you must have the authority to bind that entity to these Terms.
          </p>

          <h3>1.3 User Content</h3>
          <p>
            Our Services may allow you to create, upload, store, send, or receive content such as text, images, or other
            materials ("User Content"). You retain ownership of any intellectual property rights that you hold in that
            User Content.
          </p>
          <p>
            When you upload, submit, store, send, or receive User Content to or through our Services, you give Open-Seek
            (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative
            works, communicate, publish, publicly perform, publicly display, and distribute such User Content for the
            limited purpose of operating, promoting, and improving our Services.
          </p>
          <p>
            You represent and warrant that you have all the rights, power, and authority necessary to grant the rights
            granted herein to any User Content that you submit. You also represent that the use of such User Content as
            contemplated herein will not violate the rights of any third party.
          </p>

          <h3>1.4 Prohibited Uses</h3>
          <p>When using our Services, you agree not to:</p>
          <ul>
            <li>
              Use our Services in any manner that could interfere with, disable, disrupt, overburden, or otherwise
              impair the Services
            </li>
            <li>Use any robot, spider, crawler, scraper, or other automated means to access our Services</li>
            <li>Bypass or circumvent measures we may use to prevent or restrict access to our Services</li>
            <li>Attempt to access any service, account, or system without authorization</li>
            <li>Violate the law or the legal rights of others in any way</li>
            <li>
              Use our Services to upload, transmit, or distribute any computer viruses, worms, or other malicious
              software
            </li>
            <li>Use our Services to collect or harvest any personally identifiable information</li>
            <li>Use our Services for any illegal or unauthorized purpose</li>
            <li>
              Create or distribute content that is abusive, threatening, obscene, defamatory, libelous, or otherwise
              objectionable
            </li>
            <li>Engage in any activity that interferes with or disrupts the Services</li>
          </ul>

          <h2>2. Intellectual Property Rights</h2>

          <h3>2.1 Open-Seek Content</h3>
          <p>
            The Services and its original content (excluding User Content), features, and functionality are and will
            remain the exclusive property of Open-Seek and its licensors. The Services are protected by copyright,
            trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress
            may not be used in connection with any product or service without the prior written consent of Open-Seek.
          </p>

          <h3>2.2 Feedback</h3>
          <p>
            If you provide feedback, ideas, or suggestions about our Services ("Feedback"), you agree that we are free
            to use such Feedback without any restriction or compensation to you. By providing Feedback, you agree that
            we can use and share it for any purpose.
          </p>

          <h2>3. Privacy</h2>
          <p>
            Our Privacy Policy describes how we handle the information you provide to us when you use our Services. You
            understand that through your use of the Services you consent to the collection and use of this information
            as described in our Privacy Policy.
          </p>

          <h2>4. Subscription and Payments</h2>

          <h3>4.1 Billing</h3>
          <p>
            Some of our Services may require payment of fees. You shall pay all applicable fees, as described on the
            website in connection with such Services selected by you. We reserve the right to change our price listing
            and to institute new charges at any time, upon notice to you, which may be sent by email or posted on the
            website. Your use of the Services following such notification constitutes your acceptance of any new or
            increased charges.
          </p>

          <h3>4.2 Subscription Terms</h3>
          <p>
            For subscription-based Services, you will be billed in advance on a recurring and periodic basis ("Billing
            Cycle"). Billing cycles are set on a monthly or annual basis, depending on the type of subscription plan you
            select.
          </p>
          <p>
            At the end of each Billing Cycle, your subscription will automatically renew under the exact same conditions
            unless you cancel it or Open-Seek cancels it. You may cancel your subscription renewal either through your
            online account management page or by contacting our customer support team.
          </p>

          <h3>4.3 Free Trial</h3>
          <p>
            We may, at our sole discretion, offer a subscription with a free trial for a limited period of time. You may
            be required to enter your billing information to sign up for the free trial. If you do enter your billing
            information when signing up for a free trial, you will not be charged until the free trial has expired. On
            the last day of the free trial period, unless you canceled your subscription, you will be automatically
            charged the applicable subscription fee for the type of subscription you have selected.
          </p>

          <h3>4.4 Fee Changes</h3>
          <p>
            Open-Seek, in its sole discretion and at any time, may modify the subscription fees. Any subscription fee
            change will become effective at the end of the then-current Billing Cycle. Open-Seek will provide you with
            reasonable prior notice of any change in subscription fees to give you an opportunity to terminate your
            subscription before such change becomes effective. Your continued use of the Services after the subscription
            fee change comes into effect constitutes your agreement to pay the modified subscription fee amount.
          </p>

          <h3>4.5 Refunds</h3>
          <p>Except when required by law, paid subscription fees are non-refundable.</p>

          <h2>5. Termination</h2>
          <p>
            We may terminate or suspend your access to the Services immediately, without prior notice or liability,
            under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a
            breach of the Terms.
          </p>
          <p>
            All provisions of the Terms which by their nature should survive termination shall survive termination,
            including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of
            liability.
          </p>
          <p>
            Upon termination, your right to use the Services will immediately cease. If you wish to terminate your
            account, you may simply discontinue using the Services, or you may notify us via the methods provided in our
            contact information.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall Open-Seek, its affiliates, agents,
            directors, employees, suppliers, or licensors be liable for any indirect, punitive, incidental, special,
            consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill,
            use, data, or other intangible losses, that result from the use of, or inability to use, the Services.
          </p>
          <p>
            To the maximum extent permitted by applicable law, Open-Seek assumes no liability or responsibility for any:
            (i) errors, mistakes, or inaccuracies of content; (ii) personal injury or property damage, of any nature
            whatsoever, resulting from your access to or use of our Services; (iii) any unauthorized access to or use of
            our secure servers and/or any and all personal information stored therein; (iv) any interruption or
            cessation of transmission to or from the Services; (v) any bugs, viruses, trojan horses, or the like that
            may be transmitted to or through our Services by any third party; (vi) any errors or omissions in any
            content or for any loss or damage incurred as a result of the use of any content posted, emailed,
            transmitted, or otherwise made available through the Services; and/or (vii) user content or the defamatory,
            offensive, or illegal conduct of any third party.
          </p>
          <p>
            In no event shall Open-Seek, its affiliates, agents, directors, employees, suppliers, or licensors be liable
            to you for any claims, proceedings, liabilities, obligations, damages, losses, or costs in an amount
            exceeding the amount you paid to Open-Seek in the 12-month period preceding the event giving rise to the
            liability, or $100.00, whichever is greater.
          </p>
          <p>
            This limitation of liability section applies whether the alleged liability is based on contract, tort,
            negligence, strict liability, or any other basis, even if Open-Seek has been advised of the possibility of
            such damage.
          </p>

          <h2>7. Disclaimer</h2>
          <p>
            Your use of the Services is at your sole risk. The Services are provided on an "AS IS" and "AS AVAILABLE"
            basis. The Services are provided without warranties of any kind, whether express or implied, including, but
            not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement,
            or course of performance.
          </p>
          <p>
            Open-Seek, its subsidiaries, affiliates, and its licensors do not warrant that: (i) the Services will
            function uninterrupted, secure, or available at any particular time or location; (ii) any errors or defects
            will be corrected; (iii) the Services are free of viruses or other harmful components; or (iv) the results
            of using the Services will meet your requirements.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of
            liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply
            to you.
          </p>

          <h2>8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Open-Seek and its licensee and licensors, and their
            employees, contractors, agents, officers, and directors, from and against any and all claims, damages,
            obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's
            fees), resulting from or arising out of: (i) your use and access of the Services, by you or any person using
            your account and password; (ii) a breach of these Terms; or (iii) User Content posted to the Services.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of California, United States,
            without regard to its conflict of law provisions. Our failure to enforce any right or provision of these
            Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid
            or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>

          <h2>10. Dispute Resolution</h2>
          <p>
            In the event of any dispute, claim, question, or disagreement arising from or relating to these Terms or the
            breach thereof, the parties shall use their best efforts to settle the dispute. If the parties cannot reach
            a resolution within a period of 30 days, then, upon notice by either party to the other, all disputes,
            claims, questions, or differences shall be finally settled by arbitration administered in San Francisco,
            California, in accordance with the rules of the American Arbitration Association.
          </p>
          <p>
            You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a
            class, consolidated, or representative action. If for any reason a claim proceeds in court rather than in
            arbitration, we each waive any right to a jury trial.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a
            material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Services after any revisions become effective, you agree to be bound by
            the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Services.
          </p>

          <h2>12. Electronic Communications</h2>
          <p>
            When you use the Services or send emails to us, you are communicating with us electronically. You consent to
            receive communications from us electronically. We will communicate with you by email or by posting notices
            on our website. You agree that all agreements, notices, disclosures, and other communications that we
            provide to you electronically satisfy any legal requirement that such communications be in writing.
          </p>

          <h2>13. Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between you and Open-Seek regarding our Services, and supersede
            and replace any prior agreements we might have had between us regarding the Services.
          </p>

          <h2>14. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>

          <address>
            Open-Seek
            <br />
            <br />
            San Francisco, CA 94103
            <br />
            Email: contact@open-seek.com
            <br />
          </address>
        </div>
      </main>

      <footer className="bg-gray-50 border-t py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center justify-center md:justify-start">
                <Logo className="w-8 h-8 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Open-Seek</span>
              </div>
              <p className="text-gray-600 mt-2 text-center md:text-left">Advanced AI solutions for content creation</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} Open-Seek.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
