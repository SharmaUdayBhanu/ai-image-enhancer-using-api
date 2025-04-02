import Home from "./components/Home";

const App = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 py-8 px-4 overflow-hidden">
            {/* Animated Stars */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(150)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white animate-pulse"
                        style={{
                            width: `${Math.random() * 3}px`,
                            height: `${Math.random() * 3}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random(),
                            animationDuration: `${5 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            <div className="text-center mb-8 relative z-10">
                <h1 className="text-5xl font-bold text-indigo-300 mb-2 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    AI Image Enhancer
                </h1>
                <p className="text-lg text-indigo-100">
                    Upload your Image and let AI enhance it in seconds!
                </p>
            </div>

            <Home />

            <div className="text-sm text-indigo-400 mt-6 relative z-10">
                Powered By Bhanu Uday Sharma
            </div>
        </div>
    );
};

export default App;