export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About Our Plant Recommendation System</h1>

      <div className="prose max-w-none">
        <p className="mb-4">
          Welcome to our Plant Recommendation System, a comprehensive tool designed to help you find the perfect indoor
          plants for your space and lifestyle.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to connect people with plants that will thrive in their specific environments. We believe that
          everyone deserves to experience the joy and benefits of living with plants, regardless of their experience
          level or living situation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
        <p className="mb-4">
          Our recommendation system uses a sophisticated algorithm that considers multiple factors:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Light conditions in your space</li>
          <li>Your desired maintenance level</li>
          <li>Humidity and temperature conditions</li>
          <li>Pet safety considerations</li>
          <li>Room type and function</li>
        </ul>
        <p className="mb-4">
          By analyzing these factors, we can suggest plants that are most likely to thrive in your specific environment
          and match your lifestyle needs.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Data</h2>
        <p className="mb-4">
          Our plant database contains detailed information on hundreds of indoor plant species, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Light requirements</li>
          <li>Watering needs</li>
          <li>Humidity preferences</li>
          <li>Maintenance difficulty</li>
          <li>Pet safety information</li>
          <li>Suitable room placements</li>
        </ul>
        <p className="mb-4">
          We regularly update our database to ensure the most accurate and comprehensive information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Enhanced Features</h2>
        <p className="mb-4">Beyond basic recommendations, our system offers:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Plant care troubleshooting with AI assistance</li>
          <li>Generative plant arrangement designs for different spaces</li>
          <li>Plant disease and pest detection</li>
          <li>Air quality improvement recommendations</li>
          <li>Explainable recommendations that tell you why each plant was selected</li>
          <li>Plant-based recipes and nutritional information</li>
          <li>Plant-inspired design and decor suggestions</li>
          <li>Plant progress tracking</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          Have questions or suggestions? We'd love to hear from you! Contact our team at
          support@plantrecommendations.com.
        </p>
      </div>
    </div>
  )
}

// Add these exports to fix the deployment error
export const page = AboutPage
export const tsx = true
