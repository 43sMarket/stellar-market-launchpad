
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
          {/* 3D Coming Soon Text */}
          <div className="relative mb-8">
            <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 select-none">
              COMING
            </h2>
            <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 select-none -mt-4">
              SOON!
            </h2>
            {/* 3D Shadow effect */}
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-gray-600 opacity-30 transform translate-x-2 translate-y-2 -z-10">
              COMING
            </div>
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-gray-600 opacity-30 transform translate-x-2 translate-y-2 -z-10 -mt-4">
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
              <MessageCircle className="w-8 h-8 text-white" />
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
