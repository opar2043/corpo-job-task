import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Our Company
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in providing high-quality corporate T-shirts that blend comfort, style, and professionalism.
            Whether you're looking for custom branding, bulk orders, or premium fabric, we've got you covered.
          </p>
        </div>

        {/* About Content */}
        <div className="mt-10 flex flex-col md:flex-row gap-5 md:justify-between items-center">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co.com/Nfz5WSv/tshirt.jpg"
              alt="Corporate T-Shirts"
              className="rounded-lg shadow-lg md:w-1/2
              "
            />
          </div>

          {/* Info Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Why Choose Us?
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>✅ **Premium Fabric** – Soft, durable, and eco-friendly materials.</li>
              <li>✅ **Customization** – Add your company logo, slogan, or design.</li>
              <li>✅ **Bulk Ordering** – Special discounts for large corporate orders.</li>
              <li>✅ **Fast Delivery** – Reliable and on-time delivery services.</li>
              <li>✅ **Sustainable Approach** – Environmentally friendly production.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
