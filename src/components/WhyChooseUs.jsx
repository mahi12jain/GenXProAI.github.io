import React from 'react';
import { Zap, Clock, Target, Shield, Code, Sparkles } from 'lucide-react';

export function WhyChooseUs() {
    const benefits = [
        {
            icon: Zap,
            color: 'blue',
            title: 'Rapid Deployment',
            description: 'Launch your AI solution in 2-4 weeks, not months. We use proven frameworks and pre-built components to accelerate development without compromising quality.',
            metric: '2-4 weeks',
            metricLabel: 'Average deployment'
        },
        {
            icon: Target,
            color: 'purple',
            title: 'ROI-Focused Approach',
            description: 'Every solution is designed to deliver measurable business value. Our clients see an average 300% ROI within 6 months through cost reduction and efficiency gains.',
            metric: '300%',
            metricLabel: 'Average ROI'
        },
        {
            icon: Code,
            color: 'green',
            title: 'Production-Ready Code',
            description: 'Enterprise-grade implementations using LangChain, GPT-4, Claude, and industry-standard frameworks. No prototypes—only scalable, maintainable solutions.',
            metric: '99.9%',
            metricLabel: 'Uptime guarantee'
        },
        {
            icon: Shield,
            color: 'orange',
            title: 'Data Security First',
            description: 'SOC 2 compliant infrastructure, end-to-end encryption, and GDPR adherence. Your proprietary data stays secure with on-premise deployment options available.',
            metric: 'SOC 2',
            metricLabel: 'Certified'
        },
        {
            icon: Clock,
            color: 'pink',
            title: 'Comprehensive Support',
            description: '90-day post-launch support included with every project. Ongoing monitoring, optimization, and technical assistance to ensure long-term success.',
            metric: '90 days',
            metricLabel: 'Free support'
        },
        {
            icon: Sparkles,
            color: 'cyan',
            title: 'Full Training Included',
            description: 'Complete team onboarding with documentation, video tutorials, and live training sessions. Your team will be confident using and maintaining the AI system.',
            metric: '100%',
            metricLabel: 'Training coverage'
        }
    ];

    const colorClasses = {
        blue: {
            icon: 'text-blue-600',
            bg: 'bg-blue-50',
            border: 'border-blue-100',
            metric: 'text-blue-600'
        },
        purple: {
            icon: 'text-purple-600',
            bg: 'bg-purple-50',
            border: 'border-purple-100',
            metric: 'text-purple-600'
        },
        green: {
            icon: 'text-green-600',
            bg: 'bg-green-50',
            border: 'border-green-100',
            metric: 'text-green-600'
        },
        orange: {
            icon: 'text-orange-600',
            bg: 'bg-orange-50',
            border: 'border-orange-100',
            metric: 'text-orange-600'
        },
        pink: {
            icon: 'text-pink-600',
            bg: 'bg-pink-50',
            border: 'border-pink-100',
            metric: 'text-pink-600'
        },
        cyan: {
            icon: 'text-cyan-600',
            bg: 'bg-cyan-50',
            border: 'border-cyan-100',
            metric: 'text-cyan-600'
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-blue-900">Why GenX Pro AI</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        The Difference is in the Details
                    </h2>
                    <p className="text-xl text-slate-600">
                        We don't just build AI solutions—we deliver production-ready systems with measurable business impact, comprehensive training, and ongoing support.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, idx) => {
                        const colors = colorClasses[benefit.color];
                        const Icon = benefit.icon;
                        
                        return (
                            <div 
                                key={idx}
                                className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-slate-300 transition-all group"
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 ${colors.bg} ${colors.border} border rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {benefit.description}
                                </p>

                                {/* Metric */}
                                <div className={`pt-4 border-t ${colors.border}`}>
                                    <div className={`text-2xl font-bold ${colors.metric} mb-1`}>
                                        {benefit.metric}
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        {benefit.metricLabel}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Stats Bar */}
                <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 text-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">10+</div>
                            <div className="text-slate-300">AI Projects Delivered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">90%</div>
                            <div className="text-slate-300">Client Retention Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-slate-300">Technical Support</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">10+</div>
                            <div className="text-slate-300">Industries Served</div>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        <span>SOC 2 Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        <span>GDPR Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        <span>ISO 27001</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>99.9% SLA</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
