import React, { useState } from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';

export function AboutUs() {
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
          {[
            { title: "AI Chatbots", desc: "RAG-powered chatbots trained on your data" },
            { title: "Custom LLMs", desc: "Fine-tuned models for your industry" },
            { title: "AI Automation", desc: "n8n & Zapier with AI agents" },
            { title: "AI Agents", desc: "Multi-agent systems with CrewAI" }
          ].map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <CheckCircle className="text-blue-600 mb-4 w-6 h-6" />
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Approach */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Approach</h2>
            <ul className="space-y-5 text-slate-600">
              <li className="flex gap-3">
                <span className="font-bold text-slate-900 min-w-[90px]">Discovery:</span>
                <span>Understand goals, data, and constraints.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-slate-900 min-w-[90px]">POC:</span>
                <span>Validate feasibility and ROI quickly.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-slate-900 min-w-[90px]">Build:</span>
                <span>Agile development with enterprise standards.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-slate-900 min-w-[90px]">Optimize:</span>
                <span>Continuous improvement post-launch.</span>
              </li>
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
              <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-medium text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border border-slate-200 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Let&apos;s Build Your AI Advantage
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Book a free strategy call and explore how AI can transform your operations.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
