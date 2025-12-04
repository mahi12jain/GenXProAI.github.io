import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Cog, Lightbulb, Palette, GraduationCap } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "AI Chat Solutions",
      description:
        "Intelligent conversational AI that understands your business needs and delivers exceptional customer experiences.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r border-neutral-200",
    },
    {
      title: "Business Process Automation",
      description:
        "Streamline operations and boost efficiency with cutting-edge AI-powered automation tailored to your workflow.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b border-neutral-200",
    },
    {
      title: "AI Strategy & Implementation",
      description:
        "From vision to execution, we guide you through every step of your AI transformation journey.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-neutral-200",
    },
    {
      title: "Creative & Marketing AI",
      description:
        "Elevate your brand with AI-driven creative solutions that captivate audiences and drive results.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none border-neutral-200",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black">
          Comprehensive AI Solutions for Your Business
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-600 text-center font-normal">
          From intelligent chatbots to complete business automation, we provide end-to-end AI solutions with training and ongoing support to ensure your success.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 xl:border rounded-md border-neutral-200">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={`p-4 sm:p-8 relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p className="text-sm md:text-base text-neutral-600 text-left max-w-sm mx-0 md:text-sm my-2">
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white shadow-2xl group h-full border border-neutral-200 rounded-lg">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          {/* Chat Interface Mockup */}
          <div className="space-y-4 p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div className="bg-neutral-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-neutral-700">How can I help you automate your business today?</p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-blue-500 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-white">I need help with customer support automation</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-neutral-300 flex-shrink-0"></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div className="bg-neutral-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-neutral-700">Great! I can help you set up an intelligent chatbot that handles common queries 24/7...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white via-white to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const processes = [
    { icon: Cog, label: "Data Entry", color: "bg-blue-500" },
    { icon: MessageSquare, label: "Communication", color: "bg-purple-500" },
    { icon: Lightbulb, label: "Analytics", color: "bg-green-500" },
    { icon: Palette, label: "Reports", color: "bg-orange-500" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center p-8 gap-6 h-full overflow-hidden">
      <div className="grid grid-cols-2 gap-4">
        {processes.map((process, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: idx * 0.2,
              repeat: Infinity,
              repeatDelay: 2,
              duration: 0.5,
            }}
            className="rounded-xl p-4 bg-white border border-neutral-200 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
          >
            <div className={`${process.color} w-12 h-12 rounded-full flex items-center justify-center`}>
              <process.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs text-neutral-700 font-medium">{process.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full group/image p-8">
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-4 relative">
          {/* Strategy Steps */}
          <div className="space-y-3">
            {[
              { step: "1", title: "Assessment", desc: "Analyze your needs" },
              { step: "2", title: "Strategy", desc: "Design AI roadmap" },
              { step: "3", title: "Implementation", desc: "Deploy solutions" },
              { step: "4", title: "Optimization", desc: "Continuous improvement" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2, repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
                className="flex items-center gap-4 bg-white border border-neutral-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">{item.title}</p>
                  <p className="text-xs text-neutral-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  const creativeTools = [
    {
      icon: Palette,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      label: "Design",
    },
    {
      icon: Lightbulb,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      label: "Innovation",
    },
    {
      icon: MessageSquare,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      label: "Content",
    },
    {
      icon: GraduationCap,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      label: "Training",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center p-8 gap-6 h-full overflow-hidden">
      <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
        {creativeTools.map((tool, idx) => (
          <div
            key={idx}
            className="relative aspect-square bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-xl shadow-lg flex items-center justify-center group hover:shadow-xl transition-shadow"
            style={{
              backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} rounded-xl`} />
            <tool.icon className="relative w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white to-transparent h-full pointer-events-none" />
    </div>
  );
};
