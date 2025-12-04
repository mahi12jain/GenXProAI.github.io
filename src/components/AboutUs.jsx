import React from 'react';

export const AboutUs = () => {
    return (
        <section id="about" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">GenXPro AI</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-semibold text-gray-900">
                            Transforming Businesses Through AI Innovation
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            At GenXPro AI, we are pioneers in artificial intelligence solutions, dedicated to empowering businesses 
                            with cutting-edge technology. Founded by a team of AI experts and industry veterans, we bridge the gap 
                            between complex AI capabilities and practical business applications.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Our mission is to democratize AI technology, making it accessible and actionable for businesses of all 
                            sizes. We believe that every organization deserves the competitive advantage that AI can provide, and 
                            we're committed to delivering solutions that drive real, measurable results.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h4>
                                    <p className="text-gray-700">
                                        To be the global leader in AI-driven business transformation, creating a future where 
                                        intelligent automation enhances human potential.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">💡</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Approach</h4>
                                    <p className="text-gray-700">
                                        We combine deep technical expertise with business acumen, delivering customized AI 
                                        solutions that align with your strategic goals and industry requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">🤝</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Commitment</h4>
                                    <p className="text-gray-700">
                                        We're dedicated to transparency, ethical AI practices, and building long-term 
                                        partnerships that foster continuous innovation and growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                            500+
                        </div>
                        <div className="text-gray-600">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                            98%
                        </div>
                        <div className="text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-600 mb-2">
                            50+
                        </div>
                        <div className="text-gray-600">AI Specialists</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-2">
                            24/7
                        </div>
                        <div className="text-gray-600">Support Available</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
