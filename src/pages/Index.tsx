
import { MessageCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex flex-col relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Header with logo */}
      <header className="relative z-10 flex justify-between items-center p-8">
        <div></div>
        <div className="flex items-center space-x-4">
          {/* 3D Star Logo */}
          <div className="relative group">
            <div className="w-12 h-12 transform rotate-12 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 transform rotate-45 rounded-lg shadow-lg"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 transform rotate-45 rounded-lg"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 transform rotate-45 rounded-md"></div>
              {/* Star points */}
              <div className="absolute top-0 left-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-yellow-400 transform -translate-x-1/2 -translate-y-1"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-yellow-400 transform -translate-x-1/2 translate-y-1 rotate-180"></div>
              <div className="absolute left-0 top-1/2 w-0 h-0 border-t-2 border-b-2 border-r-4 border-transparent border-r-yellow-400 transform -translate-y-1/2 -translate-x-1"></div>
              <div className="absolute right-0 top-1/2 w-0 h-0 border-t-2 border-b-2 border-l-4 border-transparent border-l-yellow-400 transform -translate-y-1/2 translate-x-1"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-wider">
            43's Market
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center relative z-10">
        <div className="text-center">
          {/* 3D Coming Soon Text with hover animation */}
          <div className="relative mb-8 group cursor-pointer">
            <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 select-none transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-b group-hover:from-yellow-200 group-hover:to-yellow-400 group-hover:animate-pulse">
              COMING
            </h2>
            <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 select-none -mt-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-b group-hover:from-yellow-200 group-hover:to-yellow-400 group-hover:animate-pulse">
              SOON!
            </h2>
            {/* 3D Shadow effect with animation */}
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-gray-600 opacity-30 transform translate-x-2 translate-y-2 -z-10 transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:text-yellow-600">
              COMING
            </div>
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-gray-600 opacity-30 transform translate-x-2 translate-y-2 -z-10 -mt-4 transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:text-yellow-600">
              SOON!
            </div>
          </div>

          {/* Animated pulse effect */}
          <div className="flex justify-center mb-12">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-8 text-center">
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-xl text-gray-300 mb-4 leading-relaxed">
            Get ready for the ultimate Roblox basketball marketplace experience! 
            43's Market will revolutionize how you trade, buy, and sell your favorite basketball items.
          </p>
          <p className="text-lg text-gray-400 mb-2">
            🏀 <span className="font-semibold">The Best Roblox Basketball Market</span> 🏀
          </p>
          <p className="text-md text-gray-500">
            Launch date: <span className="font-bold text-white">To be announced</span>
          </p>
        </div>

        {/* Discord Icon */}
        <div className="flex justify-center">
          <a 
            href="https://discord.gg/Wt8tDHWqbF" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
            {/* Hover tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Join our Discord!
            </div>
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Stay tuned for updates and exclusive previews!
        </p>
      </footer>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-16 w-4 h-4 bg-indigo-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-60 right-12 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default Index;
