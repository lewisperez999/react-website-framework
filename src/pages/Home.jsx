import React from "react";

const Home = () => (
  <div className="space-y-6">
    <h2 className="text-4xl font-bold text-white">Welcome to <span className="text-blue-400">MySite</span></h2>
    <p className="text-lg text-gray-300">Explore our features and discover how we build modern React apps with clean UI and reusable components.</p>
    <button className="inline-block bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-700 transition">Get Started</button>
    <div className="mt-6 flex items-center space-x-2 p-4 bg-green-200/10 border border-green-400 text-green-300 rounded">
      <span>✅ Tailwind CSS is working!</span>
    </div>
  </div>
);

export default Home;