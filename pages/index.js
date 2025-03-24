
import React, { useEffect } from "react";
import gsap from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.from(".fade-in", { opacity: 0, y: 30, duration: 1, stagger: 0.2 });
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <header className="bg-white shadow-md py-5 px-6 fixed w-full z-50 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Small Shark</h1>
        <nav className="space-x-4 hidden md:flex">
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#waitlist" className="hover:text-blue-600">Waitlist</a>
        </nav>
      </header>

      <main className="pt-32 text-center px-6 fade-in">
        <h2 className="text-5xl font-bold text-blue-900">Backing India's Boldest Founders</h2>
        <p className="mt-4 text-lg text-gray-600">Small Shark connects visionary startups with sharp investors. Smart, secure, and game-changing.</p>
        <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition">Get Early Access</button>
      </main>

      <section id="testimonials" className="mt-28 px-6 fade-in text-center">
        <h3 className="text-3xl font-bold text-blue-800 mb-4">What Our Early Users Say</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white shadow-md rounded-xl p-6">
            <p className="text-gray-700 italic">“Small Shark helped me find and fund a startup in under 10 days. This is the future of investing.”</p>
            <p className="mt-2 text-sm text-gray-500">— Priya Malhotra, Angel Investor</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <p className="text-gray-700 italic">“As a founder, I raised pre-seed funding and connected with advisors all through Small Shark.”</p>
            <p className="mt-2 text-sm text-gray-500">— Rohan Mehta, Startup CEO</p>
          </div>
        </div>
      </section>

      <section id="waitlist" className="mt-32 px-6 text-center fade-in">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Join the Waitlist</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md" required />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md" required />
          <button type="submit" className="w-full py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900">Notify Me</button>
        </form>
      </section>

      <footer className="mt-28 py-6 text-center text-sm text-gray-600 bg-gray-50">
        <p>&copy; {new Date().getFullYear()} Small Shark. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="underline text-blue-700 mr-4">Privacy Policy</a>
          <a href="#" className="underline text-blue-700">Terms of Use</a>
        </div>
      </footer>
    </div>
  );
}
