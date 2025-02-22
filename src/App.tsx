function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="w-full max-w-6xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-8">
            Welcome to react-ts-vite-tail-template created by b33
          </h1>
          
          <p className="text-xl text-white/80 mb-12">
            Building the future of digital assets
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-white text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast</h3>
              <p className="text-white/70">Lightning-quick transactions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-white text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
              <p className="text-white/70">Enterprise-grade security</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-white text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-white mb-2">Reliable</h3>
              <p className="text-white/70">99.99% uptime guaranteed</p>
            </div>
          </div>
          
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
