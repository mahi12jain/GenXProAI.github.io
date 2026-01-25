// import React from 'react';

// export const AboutUs = () => {
//     return (
//         <section id="about" className="py-20 px-4 bg-white">
//             <div className="max-w-7xl mx-auto">
//                 {/* SEO Optimized H1 Headline */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//                         About GenX Pro AI: Leading Enterprise AI Solutions Provider for Business Transformation
//                     </h1>
//                     <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-4">
//                         Trusted AI Agency Delivering Custom Artificial Intelligence, Machine Learning & Automation Solutions to Global Enterprises
//                     </p>
//                     <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
//                 </div>

//                 {/* Quick Answer for AGO */}
//                 <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200 mb-16">
//                     <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//                         What Makes GenX Pro AI the Preferred AI Partner for Businesses?
//                     </h2>
//                     <p className="text-lg text-gray-700 leading-relaxed mb-4">
//                         GenX Pro AI is a specialized artificial intelligence agency focused on delivering enterprise-grade AI solutions, machine learning development, 
//                         intelligent automation, and digital transformation services. We serve businesses of all sizes from emerging startups to established enterprises.
//                     </p>
//                     <p className="text-lg text-gray-700 leading-relaxed">
//                         GenX Pro AI transforms business operations through predictive analytics, natural language processing, computer vision, and 
//                         generative AI implementations with a dedicated team of certified AI engineers and data scientists.
//                     </p>
//                 </div>

//                 {/* Main Content Grid */}
//                 <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
//                     <div className="space-y-8">
//                         <div>
//                             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                                 Who We Are: AI Innovation Leaders Since Foundation
//                             </h2>
//                             <p className="text-gray-700 text-lg leading-relaxed mb-4">
//                                 GenX Pro AI is a full-service <strong>AI development company</strong> and strategic technology partner for businesses 
//                                 seeking competitive advantage through artificial intelligence. Our multidisciplinary team combines deep expertise in 
//                                 <strong> machine learning engineering</strong>, <strong>data science</strong>, <strong>cloud architecture</strong>, and 
//                                 <strong> enterprise software development</strong>.
//                             </p>
//                             <p className="text-gray-700 text-lg leading-relaxed mb-4">
//                                 We serve C-suite executives, IT directors, product managers, and innovation teams who demand measurable ROI from 
//                                 AI investments. Our client portfolio spans <strong>healthcare AI solutions</strong>, <strong>financial services automation</strong>, 
//                                 <strong> retail analytics</strong>, <strong>manufacturing optimization</strong>, and <strong>SaaS product enhancement</strong>.
//                             </p>
//                         </div>

//                         <div>
//                             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                                 Our AI Expertise: Comprehensive Technology Stack
//                             </h3>
//                             <ul className="space-y-3 text-gray-700 text-lg">
//                                 <li className="flex items-start">
//                                     <span className="text-blue-600 mr-3 mt-1">✓</span>
//                                     <span><strong>Custom AI Development:</strong> TensorFlow, PyTorch, Scikit-learn, GPT integration</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-blue-600 mr-3 mt-1">✓</span>
//                                     <span><strong>Business Process Automation:</strong> RPA, workflow optimization, intelligent document processing</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-blue-600 mr-3 mt-1">✓</span>
//                                     <span><strong>Predictive Analytics:</strong> Forecasting models, demand prediction, risk assessment</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-blue-600 mr-3 mt-1">✓</span>
//                                     <span><strong>NLP Solutions:</strong> Chatbots, sentiment analysis, content generation, voice AI</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-blue-600 mr-3 mt-1">✓</span>
//                                     <span><strong>Computer Vision:</strong> Image recognition, quality control, facial detection systems</span>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="space-y-6">
//                         <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl">
//                             <div className="flex items-start space-x-4">
//                                 <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
//                                     <span className="text-3xl">🎯</span>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission: Democratizing Enterprise AI</h3>
//                                     <p className="text-gray-700 leading-relaxed">
//                                         Make cutting-edge artificial intelligence accessible, affordable, and actionable for businesses worldwide. 
//                                         We bridge the gap between complex AI capabilities and practical business outcomes through proven 
//                                         implementation frameworks and ongoing support.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl">
//                             <div className="flex items-start space-x-4">
//                                 <div className="w-14 h-14 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
//                                     <span className="text-3xl">💡</span>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Approach: Results-Driven Methodology</h3>
//                                     <p className="text-gray-700 leading-relaxed">
//                                         Our <strong>AI implementation framework</strong> combines discovery workshops, proof-of-concept development, 
//                                         phased deployment, and continuous optimization. We align AI initiatives with business KPIs including 
//                                         cost reduction, revenue growth, operational efficiency, and customer satisfaction metrics.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 p-8 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl">
//                             <div className="flex items-start space-x-4">
//                                 <div className="w-14 h-14 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
//                                     <span className="text-3xl">🤝</span>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-xl font-bold text-gray-900 mb-3">Client Commitment: Long-Term Partnership Model</h3>
//                                     <p className="text-gray-700 leading-relaxed">
//                                         GenX Pro AI provides end-to-end support from strategy consulting through deployment and maintenance. 
//                                         Our <strong>24/7 enterprise support</strong>, dedicated account management, and transparent communication 
//                                         ensure your AI systems deliver sustained business value and competitive differentiation.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Industry Recognition & Trust Signals */}
//                 <div className="mb-16">
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
//                         Why Global Enterprises Choose GenX Pro AI
//                     </h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
//                             <h3 className="text-xl font-bold text-gray-900 mb-3">🏆 Industry Recognition</h3>
//                             <p className="text-gray-700">
//                                 Recognized AI solutions provider serving enterprises across fintech, healthcare, e-commerce, manufacturing, 
//                                 and professional services sectors with ISO-certified development processes.
//                             </p>
//                         </div>
//                         <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg">
//                             <h3 className="text-xl font-bold text-gray-900 mb-3">🔒 Enterprise Security</h3>
//                             <p className="text-gray-700">
//                                 SOC 2 compliant infrastructure, GDPR adherence, data encryption standards, and comprehensive NDAs 
//                                 protect your proprietary business data and intellectual property.
//                             </p>
//                         </div>
//                         <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-pink-400 transition-all duration-300 hover:shadow-lg">
//                             <h3 className="text-xl font-bold text-gray-900 mb-3">🌍 Global Delivery Model</h3>
//                             <p className="text-gray-700">
//                                 Seamless project execution for clients worldwide with timezone-aligned teams, multilingual support, 
//                                 and cultural understanding across North America, Europe, Asia-Pacific, and Middle East markets.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Performance Metrics */}
//                 {/* <div className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
//                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//                         Proven Track Record: GenX Pro AI Performance Metrics
//                     </h2>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                         <div className="text-center">
//                             <div className="text-5xl font-bold mb-2">500+</div>
//                             <div className="text-blue-100 text-lg">AI Projects Delivered Globally</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-5xl font-bold mb-2">98%</div>
//                             <div className="text-purple-100 text-lg">Client Satisfaction & Retention Rate</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-5xl font-bold mb-2">50+</div>
//                             <div className="text-pink-100 text-lg">AI Specialists & Data Scientists</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-5xl font-bold mb-2">24/7</div>
//                             <div className="text-orange-100 text-lg">Enterprise Support Availability</div>
//                         </div>
//                     </div>
//                 </div> */}

//                 {/* FAQ Section for AGO */}
//                 <div className="mb-16">
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
//                         Frequently Asked Questions About GenX Pro AI
//                     </h2>
//                     <div className="space-y-6 max-w-4xl mx-auto">
//                         <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300">
//                             <h3 className="text-xl font-bold text-gray-900 mb-3">
//                                 What industries does GenX Pro AI serve?
//                             </h3>
//                             <p className="text-gray-700 leading-relaxed">
//                                 GenX Pro AI delivers AI solutions across multiple sectors including financial services, healthcare and life sciences, 
//                                 retail and e-commerce, manufacturing and supply chain, telecommunications, real estate technology, legal tech, 
//                                 and enterprise SaaS platforms.
//                             </p>
//                         </div>
                        
//                         <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300">
//                             <h3 className="text-xl font-bold text-gray-900 mb-3">
//                                 How does GenX Pro AI ensure ROI on AI investments?
//                             </h3>
//                             <p className="text-gray-700 leading-relaxed">
//                                 We establish clear success metrics during discovery phase, implement phased deployment with measurable milestones, 
//                                 provide detailed analytics dashboards, and conduct quarterly business reviews to track cost savings, revenue impact, 
//                                 efficiency gains, and customer satisfaction improvements.
//                             </p>
//                         </div>
                        
//                         <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300">
//                             <h3 className="text-xl font-bold text-gray-900 mb-3">
//                                 What is GenX Pro AI's typical project timeline?
//                             </h3>
//                             <p className="text-gray-700 leading-relaxed">
//                                 Project timelines vary by complexity. Proof-of-concept projects: 4-8 weeks. MVP development: 3-6 months. 
//                                 Enterprise-scale implementations: 6-12 months with phased rollouts. We use agile methodology with bi-weekly 
//                                 sprints and continuous stakeholder communication.
//                             </p>
//                         </div>
                        
//                         <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300">
//                             <h3 className="text-xl font-bold text-gray-900 mb-3">
//                                 Does GenX Pro AI provide post-deployment support?
//                             </h3>
//                             <p className="text-gray-700 leading-relaxed">
//                                 Yes. All clients receive comprehensive maintenance packages including 24/7 technical support, system monitoring, 
//                                 performance optimization, security updates, model retraining, and continuous improvement based on production data 
//                                 and evolving business needs.
//                             </p>
//                         </div>
                        
//                         <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300">
//                             <h3 className="text-xl font-bold text-gray-900 mb-3">
//                                 Where is GenX Pro AI located and do you work with international clients?
//                             </h3>
//                             <p className="text-gray-700 leading-relaxed">
//                                 GenX Pro AI serves clients globally across North America, Europe, Asia, Australia, and emerging markets. 
//                                 Our distributed team model and cloud-based infrastructure enable seamless collaboration across timezones 
//                                 with multilingual project management and culturally adapted communication styles.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* B2B CTA Section */}
//                 {/* <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                         Ready to Transform Your Business with Enterprise AI Solutions?
//                     </h2>
//                     <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//                         Schedule a complimentary AI strategy consultation with GenX Pro AI's senior solutions architects. 
//                         Discover how artificial intelligence can drive measurable business outcomes for your organization.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                         <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
//                             Request Enterprise Demo
//                         </button>
//                         <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
//                             Download AI ROI Calculator
//                         </button>
//                     </div>
//                     <p className="text-gray-400 mt-6 text-sm">
//                         Trusted by Fortune 500 companies • ISO-certified processes • 98% client retention rate
//                     </p>
//                 </div> */}
//             </div>
//         </section>
//     );
// };

// export default AboutUs;


import React, { useState } from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';

export default function AboutUs() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How much does a custom AI chatbot cost?",
      a: "Pricing depends on scope and complexity. Basic RAG chatbots start around $5,000, advanced multi-source systems range from $10,000–$25,000, and enterprise-grade solutions with fine-tuned LLMs can go higher. Final pricing is shared after discovery."
    },
    {
      q: "RAG vs Fine-tuning – what should we choose?",
      a: "RAG is best for dynamic, document-based knowledge. Fine-tuning is suitable for highly specialized tasks. We help you choose the most cost-effective approach during the discovery phase."
    },
    {
      q: "Can AI integrate with our existing tools?",
      a: "Yes. We integrate AI with CRMs, ERPs, internal dashboards, and 1000+ apps via APIs, Zapier, and n8n."
    },
    {
      q: "Do you provide training and support?",
      a: "Every project includes documentation, team training, and post-launch support with optional long-term maintenance."
    }
  ];

  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
            About GenX Pro AI
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Professional AI Solutions Built for Real Business Impact
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We design and deploy enterprise-ready AI chatbots, custom LLM solutions, and intelligent automation systems that improve efficiency, reduce costs, and scale operations.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {["AI Chatbots", "Custom LLMs", "AI Automation", "AI Agents"].map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition">
              <CheckCircle className="text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">{item}</h3>
              <p className="text-sm text-slate-600">
                Secure, scalable, and tailored to your business workflows.
              </p>
            </div>
          ))}
        </div>

        {/* Approach */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Approach</h2>
            <ul className="space-y-5 text-slate-600">
              <li><strong className="text-slate-900">Discovery:</strong> Understand goals, data, and constraints.</li>
              <li><strong className="text-slate-900">POC:</strong> Validate feasibility and ROI quickly.</li>
              <li><strong className="text-slate-900">Build:</strong> Agile development with enterprise standards.</li>
              <li><strong className="text-slate-900">Optimize:</strong> Continuous improvement post-launch.</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Why Choose Us</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600">70%</div>
                <p className="text-sm text-slate-600">Cost Reduction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">300%</div>
                <p className="text-sm text-slate-600">ROI in 6 Months</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">2–4</div>
                <p className="text-sm text-slate-600">Weeks Deployment</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">90+</div>
                <p className="text-sm text-slate-600">Days Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg">
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-medium text-slate-900">{faq.q}</span>
                  <ChevronDown className={`transition ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-slate-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border border-slate-200 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Let’s Build Your AI Advantage
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Book a free strategy call and explore how AI can transform your operations.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Schedule Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
}

