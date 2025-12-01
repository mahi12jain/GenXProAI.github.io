import React, { Suspense, useState, useEffect, useRef } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SplineHero = ({ onOpenContact }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const { clientWidth, clientHeight } = containerRef.current;
                // Only update if dimensions are valid
                if (clientWidth > 0 && clientHeight > 0) {
                    setDimensions({ width: clientWidth, height: clientHeight });
                }
            }
        };

        // Initial dimension check
        updateDimensions();

        // Update on resize
        const resizeObserver = new ResizeObserver(updateDimensions);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-primary-50">
            <div className="absolute inset-0 z-0">
                {dimensions.width > 0 && dimensions.height > 0 && (
                    <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-primary-500">Loading 3D Scene...</div>}>
                        <Spline scene="https://prod.spline.design/oiOVyQkjOrar0fRG/scene.splinecode" />
                    </Suspense>
                )}
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
                <div className="max-w-3xl glass-card p-8 rounded-3xl animate-float pointer-events-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        GenX pro <span className="text-gradient">AI</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-900/80 mb-8 font-light">
                        Intelligent Automation for the Future of Business
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary-500/30" onClick={onOpenContact}>
                            Get Started
                        </button>
                        <button className="bg-white hover:bg-gray-50 text-secondary-900 border border-gray-200 px-8 py-3 rounded-full font-semibold transition-all shadow-sm">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplineHero;
