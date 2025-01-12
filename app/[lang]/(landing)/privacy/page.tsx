import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-sm text-center mb-8">
          {new Date().toLocaleDateString("en-US")}
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, and any other information you provide directly.
              </li>
              <li>
                <strong>Usage Information:</strong> Information about how you
                interact with our services, including IP address, browser type,
                and device information.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> Cookies,
                beacons, and similar technologies to track your usage and
                improve our services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700">
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Provide and maintain our services.</li>
              <li>Improve user experience.</li>
              <li>Communicate with you about updates or promotional content.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. How We Share Your Information
            </h2>
            <p className="text-gray-700">
              We do not sell your personal information. We may share your
              information in the following ways:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>
                <strong>Service Providers:</strong> With third parties that help
                us operate our services.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required to comply
                with legal obligations or protect our rights.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, sale, or transfer of assets.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Your Rights and Choices
            </h2>
            <p className="text-gray-700">
              You have the following rights and choices:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>
                <strong>Access and Update:</strong> You can access and update
                your information.
              </li>
              <li>
                <strong>Opt-Out:</strong> You can opt out of marketing
                communications at any time.
              </li>
              <li>
                <strong>Cookies:</strong> You can manage your cookie preferences
                in your browser settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-700">
              We implement security measures to protect your information.
              However, no method of transmission or storage is 100% secure, and
              we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Children's Privacy
            </h2>
            <p className="text-gray-700">
              Our services are not intended for individuals under the age of 13.
              We do not knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700">
              We may update this policy from time to time. Any changes will be
              posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="list-none text-gray-700 space-y-2 mt-2">
              <li>
                <strong>Email:</strong> help@nexarb.com
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
