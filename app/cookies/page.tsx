export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: March 1, 2024</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Cookies</h2>
            <p className="text-gray-700 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website.
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Cookies</h2>
            <p className="text-gray-700 mb-6">We use cookies to enhance your experience on our website, including:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Remembering your preferences and settings</li>
              <li>Analyzing website traffic and usage patterns</li>
              <li>Providing personalized content and recommendations</li>
              <li>Ensuring website security and preventing fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Cookies We Use</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function properly and cannot be disabled.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies help us understand how visitors interact with our website by collecting anonymous
                information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are used to track visitors across websites to display relevant advertisements.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Managing Cookies</h2>
            <p className="text-gray-700 mb-6">
              You can control and manage cookies in various ways. Most web browsers automatically accept cookies, but
              you can modify your browser settings to decline cookies if you prefer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about our Cookie Policy, please contact us at
              drdanburke@mindremappingacademy.com or call (404) 793-0011.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
