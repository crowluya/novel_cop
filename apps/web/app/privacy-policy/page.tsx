import { Logo } from "@/components/tailwind/ui/icons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Open-Seek",
  description: "Learn about how Open-Seek collects, uses, and protects your personal information",
  keywords: "Open-Seek privacy policy, data protection, personal information, privacy terms",
  openGraph: {
    title: "Privacy Policy - Open-Seek",
    description: "Learn about how Open-Seek collects, uses, and protects your personal information",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Open-Seek",
    description: "Learn about how Open-Seek collects, uses, and protects your personal information",
  },
};

export default function PrivacyPolicyPage() {
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
            <Link href="/privacy-policy" className="text-blue-600 font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <div className="text-sm text-gray-500 mb-8">Last Updated: March 20, 2025</div>

        <div className="prose prose-lg max-w-none">
          <p>
            At Open-Seek, we are committed to protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
            you visit our website (open-seek.com) or use our services. Please read this privacy policy carefully. If you
            do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect via the website
            includes:
          </p>

          <h3>Personal Data</h3>
          <p>
            Personally identifiable information, such as your name, email address, and telephone number, that you
            voluntarily give to us when you register with the website or when you choose to participate in various
            activities related to the website, such as online chat and message boards. You are under no obligation to
            provide us with personal information of any kind, however your refusal to do so may prevent you from using
            certain features of the website.
          </p>

          <h3>Derivative Data</h3>
          <p>
            Information our servers automatically collect when you access the website, such as your IP address, your
            browser type, your operating system, your access times, and the pages you have viewed directly before and
            after accessing the website. If you are using our mobile application, this information may also include your
            device name and type, your operating system, your phone number, your country, your likes and replies, and
            other interactions with the application and other users via server log files, as well as any other
            information you choose to provide.
          </p>

          <h3>Financial Data</h3>
          <p>
            Financial information, such as data related to your payment method (e.g. valid credit card number, card
            brand, expiration date) that we may collect when you purchase, order, return, exchange, or request
            information about our services from the website. We store only very limited, if any, financial information
            that we collect. Otherwise, all financial information is stored by our payment processor (e.g., Stripe,
            PayPal) and you are encouraged to review their privacy policy and contact them directly for responses to
            your questions.
          </p>

          <h3>Data From Social Networks</h3>
          <p>
            User information from social networking sites, such as Apple's Game Center, Facebook, Google+ Instagram,
            Pinterest, Twitter, including your name, your social network username, location, gender, birth date, email
            address, profile picture, and public data for contacts, if you connect your account to such social networks.
            This information may also include the contact information of anyone you invite to use and/or join our
            website.
          </p>

          <h3>Mobile Device Data</h3>
          <p>
            Device information, such as your mobile device ID, model, and manufacturer, and information about the
            location of your device, if you access the website from a mobile device.
          </p>

          <h3>Third-Party Data</h3>
          <p>
            Information from third parties, such as personal information or network friends, if you connect your account
            to the third party and grant the website permission to access this information.
          </p>

          <h3>Data From Contests, Giveaways, and Surveys</h3>
          <p>
            Personal and other information you may provide when entering contests or giveaways and/or responding to
            surveys.
          </p>

          <h2>Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized
            experience. Specifically, we may use information collected about you via the website to:
          </p>

          <ul>
            <li>Create and manage your account.</li>
            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            <li>Create and manage your account.</li>
            <li>
              Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the
              website to you.
            </li>
            <li>Email you regarding your account or order.</li>
            <li>Enable user-to-user communications.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the website.</li>
            <li>Generate a personal profile about you to make future visits to the website more personalized.</li>
            <li>Increase the efficiency and operation of the website.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
            <li>Notify you of updates to the website.</li>
            <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
            <li>Perform other business activities as needed.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            <li>Process payments and refunds.</li>
            <li>Request feedback and contact you about your use of the website.</li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Respond to product and customer service requests.</li>
            <li>Send you a newsletter.</li>
            <li>Solicit support for the website.</li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be
            disclosed as follows:
          </p>

          <h3>By Law or to Protect Rights</h3>
          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate
            or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we
            may share your information as permitted or required by any applicable law, rule, or regulation. This
            includes exchanging information with other entities for fraud protection and credit risk reduction.
          </p>

          <h3>Third-Party Service Providers</h3>
          <p>
            We may share your information with third parties that perform services for us or on our behalf, including
            payment processing, data analysis, email delivery, hosting services, customer service, and marketing
            assistance.
          </p>

          <h3>Marketing Communications</h3>
          <p>
            With your consent, or with an opportunity for you to withdraw consent, we may share your information with
            third parties for marketing purposes, as permitted by law.
          </p>

          <h3>Interactions with Other Users</h3>
          <p>
            If you interact with other users of the website, those users may see your name, profile photo, and
            descriptions of your activity, including sending invitations to other users, chatting with other users,
            liking posts, following blogs.
          </p>

          <h3>Online Postings</h3>
          <p>
            When you post comments, contributions or other content to the Applications, your posts may be viewed by all
            users and may be publicly distributed outside the Application in perpetuity
          </p>

          <h3>Third-Party Advertisers</h3>
          <p>
            We may use third-party advertising companies to serve ads when you visit the website. These companies may
            use information about your visits to the website and other websites that are contained in web cookies in
            order to provide advertisements about goods and services of interest to you.
          </p>

          <h3>Affiliates</h3>
          <p>
            We may share your information with our affiliates, in which case we will require those affiliates to honor
            this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or
            other companies that we control or that are under common control with us.
          </p>

          <h3>Business Partners</h3>
          <p>
            We may share your information with our business partners to offer you certain products, services or
            promotions.
          </p>

          <h3>Offer Wall</h3>
          <p>
            Our Applications may display a third-party-hosted "offer wall." Such an offer wall allows third-party
            advertisers to offer virtual currency, gifts, or other items to users in return for acceptance and
            completion of an advertisement offer. Such an offer wall may appear in our applications and be displayed to
            you based on certain data, such as your geographic area or demographic information. When you click on an
            offer wall, you will leave our application. A unique identifier, such as your user ID, will be shared with
            the offer wall provider in order to prevent fraud and properly credit your account.
          </p>

          <h3>Other Third Parties</h3>
          <p>
            We may share your information with advertisers and investors for the purpose of conducting general business
            analysis. We may also share your information with such third parties for marketing purposes, as permitted by
            law.
          </p>

          <h3>Sale or Bankruptcy</h3>
          <p>
            If we reorganize or sell all or a portion of our assets, undergo a merger, or are acquired by another
            entity, we may transfer your information to the successor entity. If we go out of business or enter
            bankruptcy, your information would be an asset transferred or acquired by a third party. You acknowledge
            that such transfers may occur and that the transferee may decline honor commitments we made in this Privacy
            Policy.
          </p>

          <p>
            We are not responsible for the actions of third parties with whom you share personal or sensitive data, and
            we have no authority to manage or control third-party solicitations. If you no longer wish to receive
            correspondence, emails or other communications from third parties, you are responsible for contacting the
            third party directly.
          </p>

          <h2>Tracking Technologies</h2>
          <h3>Cookies and Web Beacons</h3>
          <p>
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the website to help
            customize the website and improve your experience. When you access the website, your personal information is
            not collected through the use of tracking technology. Most browsers are set to accept cookies by default.
            You can remove or reject cookies, but be aware that such action could affect the availability and
            functionality of the website. You may not decline web beacons. However, they can be rendered ineffective by
            declining all cookies or by modifying your web browser's settings to notify you each time a cookie is
            tendered, permitting you to accept or decline cookies on an individual basis.
          </p>

          <h3>Internet-Based Advertising</h3>
          <p>
            Additionally, we may use third-party software to serve ads on the website, implement email marketing
            campaigns, and manage other interactive marketing initiatives. This third-party software may use cookies or
            similar tracking technology to help manage and optimize your online experience with us. For more information
            about opting-out of interest-based ads, visit the{" "}
            <a href="http://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener noreferrer">
              Network Advertising Initiative Opt-Out Tool
            </a>{" "}
            or{" "}
            <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
              Digital Advertising Alliance Opt-Out Tool
            </a>
            .
          </p>

          <h3>Website Analytics</h3>
          <p>
            We may also partner with selected third-party vendors, such as Google Analytics, to allow tracking
            technologies and remarketing services on the website through the use of first party cookies and third-party
            cookies, to, among other things, analyze and track users' use of the website, determine the popularity of
            certain content and better understand online activity. By accessing the website, you consent to the
            collection and use of your information by these third-party vendors. You are encouraged to review their
            privacy policy and contact them directly for responses to your questions. We do not transfer personal
            information to these third-party vendors. However, if you do not want any information to be collected and
            used by tracking technologies, you can visit the third-party vendor or the{" "}
            <a href="http://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener noreferrer">
              Network Advertising Initiative Opt-Out Tool
            </a>{" "}
            or{" "}
            <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
              Digital Advertising Alliance Opt-Out Tool
            </a>
            .
          </p>

          <p>
            You should be aware that getting a new computer, installing a new browser, upgrading an existing browser, or
            erasing or otherwise altering your browser's cookies files may also clear certain opt-out cookies, plugins,
            or settings.
          </p>

          <h2>Third-Party Websites</h2>
          <p>
            The website may contain links to third-party websites and applications of interest, including advertisements
            and external services, that are not affiliated with us. Once you have used these links to leave the website,
            any information you provide to these third parties is not covered by this Privacy Policy, and we cannot
            guarantee the safety and privacy of your information. Before visiting and providing any information to any
            third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third
            party responsible for that website, and should take those steps necessary to, in your discretion, protect
            the privacy of your information. We are not responsible for the content or privacy and security practices
            and policies of any third parties, including other sites, services or applications that may be linked to or
            from the website.
          </p>

          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information.
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data
            transmission can be guaranteed against any interception or other type of misuse. Any information disclosed
            online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee
            complete security if you provide personal information.
          </p>

          <h2>Policy for Children</h2>
          <p>
            We do not knowingly solicit information from or market to children under the age of 13. If you become aware
            of any data we have collected from children under age 13, please contact us using the contact information
            provided below.
          </p>

          <h2>Controls for Do-Not-Track Features</h2>
          <p>
            Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you
            can activate to signal your privacy preference not to have data about your online browsing activities
            monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has
            been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If a standard for online tracking is
            adopted that we must follow in the future, we will inform you about that practice in a revised version of
            this Privacy Policy.
          </p>

          <h2>Options Regarding Your Information</h2>
          <h3>Account Information</h3>
          <p>You may at any time review or change the information in your account or terminate your account by:</p>
          <ul>
            <li>Logging into your account settings and updating your account</li>
            <li>Contacting us using the contact information provided below</li>
          </ul>

          <p>
            Upon your request to terminate your account, we will deactivate or delete your account and information from
            our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot
            problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.
          </p>

          <h3>Emails and Communications</h3>
          <p>
            If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out
            by:
          </p>
          <ul>
            <li>Noting your preferences at the time you register your account with the website</li>
            <li>Logging into your account settings and updating your preferences</li>
            <li>Contacting us using the contact information provided below</li>
          </ul>

          <p>
            If you no longer wish to receive correspondence, emails, or other communications from third parties, you are
            responsible for contacting the third party directly.
          </p>

          <h2>California Privacy Rights</h2>
          <p>
            California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are
            California residents to request and obtain from us, once a year and free of charge, information about
            categories of personal information (if any) we disclosed to third parties for direct marketing purposes and
            the names and addresses of all third parties with which we shared personal information in the immediately
            preceding calendar year. If you are a California resident and would like to make such a request, please
            submit your request in writing to us using the contact information provided below.
          </p>

          <p>
            If you are under 18 years of age, reside in California, and have a registered account with the website, you
            have the right to request removal of unwanted data that you publicly post on the website. To request removal
            of such data, please contact us using the contact information provided below, and include the email address
            associated with your account and a statement that you reside in California. We will make sure the data is
            not publicly displayed on the website, but please be aware that the data may not be completely or
            comprehensively removed from our systems.
          </p>

          <h2>Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>

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
