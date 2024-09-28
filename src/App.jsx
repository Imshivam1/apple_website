import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";

import * as Sentry from '@sentry/react';
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";

// This function returns the main structure of the app, wrapped with Sentry's profiler for performance tracking
const App = () => {
  
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  )
}

// Exporting the App component with Sentry's profiler enabled to monitor app performance
export default Sentry.withProfiler(App);
