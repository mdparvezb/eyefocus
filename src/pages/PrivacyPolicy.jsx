const PrivacyPolicy = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="prose max-w-none">
            <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-6">
              Welcome to EyeFocus Opticals. We are committed to protecting your
              privacy and ensuring the security of your personal information.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>

            <h2 className="text-xl font-bold mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide
              to us, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Name, email address, phone number</li>
              <li>Shipping and billing addresses</li>
              <li>
                Payment information (processed securely by our payment partners)
              </li>
              <li>Prescription details for eyewear</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2 className="text-xl font-bold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              We may use the information we collect for various purposes,
              including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To provide, operate, and maintain our services</li>
              <li>To process your orders and transactions</li>
              <li>
                To communicate with you, including responding to inquiries
              </li>
              <li>To improve our website and services</li>
              <li>To send promotional emails (you may opt-out at any time)</li>
            </ul>

            <h2 className="text-xl font-bold mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="mb-6">
              We do not sell or rent your personal information to third parties.
              We may share information with trusted third-party service
              providers who assist us in operating our website, conducting our
              business, or servicing you, as long as those parties agree to keep
              this information confidential.
            </p>

            <h2 className="text-xl font-bold mb-4">5. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no internet
              transmission or electronic storage is 100% secure, so we cannot
              guarantee absolute security.
            </p>

            <h2 className="text-xl font-bold mb-4">
              6. Changes to This Privacy Policy
            </h2>
            <p className="mb-6">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "effective date" at the top. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-xl font-bold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:info@eyefocusopticals.com"
                className="text-indigo-600 hover:underline"
              >
                info@eyefocusopticals.com
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:9988776655"
                className="text-indigo-600 hover:underline"
              >
                9988776655
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
