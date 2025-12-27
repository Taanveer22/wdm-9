const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-2">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <p className="text-md font-medium text-orange-600 mb-8">
          ⚠️ This is a demo project created for learning and testing purposes only.
        </p>

        {/* Intro */}
        <section className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy describes how information is handled in this
            Firebase Authentication demo application. This project is not a
            production system and should not be used for real-world data storage.
          </p>
        </section>

        {/* Demo Disclaimer */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Demo Project Disclaimer
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This application is a demonstration project only. Any data entered
            may be cleared at any time, and long-term data storage is not
            guaranteed.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Email address and display name</li>
            <li>Authentication provider (Google or Email & Password)</li>
            <li>Basic profile information provided by Firebase</li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Information is used only to demonstrate authentication features such
            as login, registration, and session management. No personal data is
            sold, shared, or used for commercial purposes.
          </p>
        </section>

        {/* Firebase */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Firebase Authentication
          </h2>
          <p className="text-gray-700 leading-relaxed">
            User authentication is handled by Google Firebase. Firebase may
            process data according to its own privacy policies and security
            practices.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Reasonable security measures are provided by Firebase; however, this
            demo project does not guarantee complete data protection.
          </p>
        </section>

        {/* User Control */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            User Control
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You may sign out or delete your account at any time using Firebase
            Authentication features available in the app.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This is a personal demo project. No official support or guarantees
            are provided.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
