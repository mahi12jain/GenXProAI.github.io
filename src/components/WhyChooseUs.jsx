import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Brain, Shield, Headphones, TrendingUp, Users, Award } from 'lucide-react';

export function WhyChooseUs() {
    return (
        <section className="py-16 md:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-gray-900">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">GenXPro AI</span>
                    </h2>
                    <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
                        Partner with us to transform your business with cutting-edge AI solutions, expert guidance, and dedicated support every step of the way.
                    </p>
                </div>
                <div className="mx-auto mt-8 grid max-w-sm gap-6 md:mt-16 md:max-w-full md:grid-cols-2 lg:grid-cols-3">
                    <Card className="group border border-neutral-200 bg-neutral-50 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Brain className="size-6 text-blue-600" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-lg text-black">AI Expertise</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-neutral-600">
                                Our team of AI specialists brings years of experience in developing and implementing cutting-edge artificial intelligence solutions across industries.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group border border-neutral-200 bg-neutral-50 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <TrendingUp className="size-6 text-green-600" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-lg text-black">Proven Results</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-neutral-600">
                                Track record of delivering measurable business outcomes with ROI-focused AI implementations that drive growth and efficiency.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group border border-neutral-200 bg-neutral-50 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Shield className="size-6 text-purple-600" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-lg text-black">Secure & Compliant</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-neutral-600">
                                Enterprise-grade security and full compliance with industry standards to protect your data and maintain trust.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group border border-neutral-200 bg-neutral-50 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Users className="size-6 text-orange-600" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-lg text-black">Tailored Solutions</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-neutral-600">
                                Custom AI strategies designed specifically for your business needs, industry, and goals - not one-size-fits-all solutions.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group border border-neutral-200 bg-neutral-50 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Headphones className="size-6 text-pink-600" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-lg text-black">24/7 Support</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-neutral-600">
                                Comprehensive training programs and round-the-clock technical support to ensure your team maximizes AI capabilities.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group border border-neutral-200 bg-neutral-50 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Award className="size-6 text-cyan-600" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-lg text-black">Industry Recognition</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-neutral-600">
                                Award-winning AI solutions recognized by industry leaders for innovation, quality, and exceptional client satisfaction.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

const CardDecorator = ({ children }) => (
    <div aria-hidden className="relative mx-auto size-36" style={{
        maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)'
    }}>
        <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px] opacity-5"
        />
        <div className="bg-white absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-neutral-200 rounded-sm">
            {children}
        </div>
    </div>
);
