// src/pages/Landing.tsx
import { Link } from 'react-router-dom';
import BusinessLogo from '../assets/Business.png';
import HeroImage from '../assets/hero-image.png';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white font-figtree">
      {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center max-w-7xl mx-auto">
        <img src={BusinessLogo} alt="HeySalad Business" className="h-12" />
        <div className="flex gap-4">
          <Link to="/contact" className="text-[#ed4c4c] hover:text-[#faa09a] transition-colors">Contact us</Link>
          <Link to="/blog" className="text-[#ed4c4c] hover:text-[#faa09a] transition-colors">Blog</Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-12 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className="space-y-6">
            <h1 className="font-grandstander text-5xl md:text-6xl font-bold text-[#ed4c4c]">
              Fall in love with client success again
            </h1>
            <p className="text-2xl md:text-3xl text-gray-800">
              Match your expertise with clients who thrive
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/signup" 
                className="btn bg-[#ed4c4c] hover:bg-[#faa09a] text-white border-none rounded-full px-8"
              >
                Get Started
              </Link>
              <Link 
                to="/login" 
                className="btn btn-outline text-[#ed4c4c] hover:bg-[#ffd0cd] hover:border-[#ed4c4c] rounded-full px-8"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img 
              src={HeroImage}
              alt="Nutritionist with client" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="px-6 py-12 bg-[#faa09a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-grandstander text-3xl text-center mb-12 text-white">it's as easy as 1, 2, 3</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg relative">
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#ed4c4c] text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="font-grandstander text-xl mb-3">Create your profile</h3>
              <p className="text-gray-600">Showcase your expertise and specializations to attract the right clients</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg relative">
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#ed4c4c] text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="font-grandstander text-xl mb-3">Connect with clients</h3>
              <p className="text-gray-600">Our platform matches you with clients who align with your expertise</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg relative">
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#ed4c4c] text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="font-grandstander text-xl mb-3">Guide and grow</h3>
              <p className="text-gray-600">Use our tools to create meal plans and track client progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Try HeySalad Section */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-grandstander text-4xl font-bold">Try HeySalad Business</h2>
          <p className="text-xl">Get more information about new features and our launch date</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input border-[#ed4c4c] rounded-full w-full" 
            />
            <button className="btn bg-[#ed4c4c] hover:bg-[#faa09a] text-white border-none rounded-full px-8 whitespace-nowrap">
              Join us →
            </button>
          </div>
        </div>
      </section>

      {/* Footer with Company Info */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <img src={BusinessLogo} alt="HeySalad Business" className="h-8 mb-4" />
              <p className="text-gray-600">
                SALAD HR TECHNOLOGY LTD<br/>
                Here East, Queen Elizabeth Olympic Park<br/>
                London, England, E20 3BS
              </p>
            </div>
            
            {/* Links */}
            <div className="space-y-4">
              <h3 className="font-grandstander text-lg">Legal</h3>
              <div className="flex flex-col gap-2">
                <Link to="/terms" className="text-gray-600 hover:text-[#ed4c4c]">Terms of use</Link>
                <Link to="/privacy" className="text-gray-600 hover:text-[#ed4c4c]">Privacy policy</Link>
                <Link to="/cookies" className="text-gray-600 hover:text-[#ed4c4c]">Cookie policy</Link>
              </div>
            </div>
            
            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-grandstander text-lg">Support</h3>
              <div className="flex flex-col gap-2">
                <a href="mailto:support@heysalad.com" className="text-gray-600 hover:text-[#ed4c4c]">Contact</a>
                <Link to="/help" className="text-gray-600 hover:text-[#ed4c4c]">Help Center</Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t mt-12 pt-6 text-center text-gray-600">
            <p>© {new Date().getFullYear()} SALAD HR TECHNOLOGY LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;