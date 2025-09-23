import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProductModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  const productData = {
    "Card Fraud Detector": {
      userProblem:
        "Financial institutions lose billions annually to card fraud, with traditional rule-based systems generating high false positives that frustrate legitimate customers while missing sophisticated fraud patterns.",
      context:
        "Banks needed more accurate fraud detection to reduce losses while maintaining customer satisfaction. Existing systems had 85% false positive rates.",
      role: "Product Lead & Data Scientist",
      responsibilities: [
        "Defined product requirements and success metrics",
        "Led technical implementation using ML algorithms",
        "Analyzed user feedback from banking partners",
        "Optimized model performance for production deployment",
      ],
      metrics: {
        accuracy: "94.2% fraud detection accuracy",
        falsePositives: "Reduced false positives by 67%",
        performance: "3x faster processing with Snap ML",
        impact: "Potential $2M+ annual fraud prevention for mid-size bank",
      },
      tradeoffs:
        "Chose Decision Tree over complex neural networks for interpretability - banking regulations require explainable AI decisions. Sacrificed marginal accuracy gains for regulatory compliance and stakeholder trust.",
      lifecycle: "MVP → Partner Testing → Production Pilot → Scale Planning",
      strategy:
        "Focus on interpretable models first, then optimize for speed. Prioritized regulatory compliance over cutting-edge accuracy to ensure market adoption.",
      stakeholders:
        "Banking partners, compliance teams, data science team, end users (fraud analysts)",
      communication:
        "Weekly stakeholder demos, documented model decisions for compliance, created non-technical executive summaries showing ROI impact.",
    },
    "SMS Spam Detector ": {
      userProblem:
        "Mobile users receive 45+ spam messages monthly, wasting time and potentially exposing them to phishing attacks. Existing filters miss 30% of spam while blocking legitimate messages.",
      context:
        "Need for real-time, accurate SMS filtering that works across different languages and spam tactics without blocking important communications.",
      role: "Product Manager & ML Engineer",
      responsibilities: [
        "Conducted user research on spam patterns",
        "Designed NLP preprocessing pipeline",
        "A/B tested different model approaches",
        "Optimized for mobile deployment constraints",
      ],
      metrics: {
        accuracy: "95.3% spam detection accuracy",
        precision: "96% precision (low false positives)",
        recall: "94% recall (catches real spam)",
        speed: "Real-time processing <100ms",
      },
      tradeoffs:
        "Used simpler NLP features over transformer models to ensure <100ms response time for real-time filtering. Prioritized user experience over marginal accuracy improvements.",
      lifecycle:
        "Research → Prototype → User Testing → Mobile Optimization → Launch",
      strategy:
        "Mobile-first approach with offline capabilities. Focused on preventing false positives to maintain user trust in the filtering system.",
      stakeholders:
        "Mobile users, telecom partners, security team, mobile development team",
      communication:
        "User interviews for spam patterns, regular demos with telecom partners, created privacy impact assessments for data usage.",
    },
    "Trading Bot": {
      userProblem:
        "Retail traders lack access to institutional-level algorithmic trading tools, missing profitable opportunities during volatile market periods, especially in forex markets.",
      context:
        "Morgan Stanley hackathon challenge to democratize algorithmic trading for retail investors with risk management safeguards.",
      role: "Product Strategy Lead",
      responsibilities: [
        "Defined MVP scope for 48-hour hackathon",
        "Designed risk management framework",
        "Led cross-functional team of 4 developers",
        "Presented business case to Morgan Stanley judges",
      ],
      metrics: {
        performance: "12% returns in backtesting",
        riskManagement: "Max 2% portfolio risk per trade",
        speed: "Real-time trade execution <5 seconds",
        userSafety: "Automatic stop-loss protection",
      },
      tradeoffs:
        "Focused on EUR/GBP pair only for MVP rather than multi-currency support. Prioritized robust risk management over maximum returns to ensure user safety.",
      lifecycle:
        "Ideation → Rapid Prototyping → Backtesting → Demo → Post-hackathon roadmap",
      strategy:
        "Safety-first approach with conservative risk limits. Built trust through transparent algorithm logic and comprehensive backtesting results.",
      stakeholders:
        "Hackathon judges, potential retail investors, compliance team, development team",
      communication:
        "Pitch presentation to Morgan Stanley executives, demonstrated risk safeguards, explained algorithm in non-technical terms for judges.",
    },
    "Sentiment AI": {
      userProblem:
        "E-commerce platforms struggle to understand customer satisfaction from thousands of reviews, missing critical insights that could improve products and customer experience.",
      context:
        "Inspired by TikTok Shop's need to process high-volume review data for merchant insights and product improvement recommendations.",
      role: "Product Designer & Data Analyst",
      responsibilities: [
        "Conducted user research with e-commerce managers",
        "Designed intuitive data visualization dashboard",
        "Built sentiment analysis pipeline",
        "Created actionable insight recommendations",
      ],
      metrics: {
        processing: "Analyzes 10,000+ reviews in seconds",
        accuracy: "87% sentiment classification accuracy",
        insights: "Identifies top 5 improvement areas automatically",
        adoption: "Dashboard reduces analysis time by 80%",
      },
      tradeoffs:
        "Chose pre-trained sentiment models over custom training for faster deployment. Traded some domain-specific accuracy for immediate business value and shorter development cycles.",
      lifecycle:
        "User Research → Design → Development → Testing → Analytics Integration",
      strategy:
        "Focus on actionable insights over perfect accuracy. Prioritized intuitive visualizations to enable non-technical users to extract value immediately.",
      stakeholders:
        "E-commerce managers, product teams, customer service, UX designers",
      communication:
        "User journey mapping sessions, iterative prototype feedback, created ROI calculator showing time savings for stakeholders.",
    },
    "Globe Travel Application": {
      userProblem:
        "Travel planning requires using 5+ different platforms (flights, hotels, attractions, itineraries), creating friction and missed opportunities for discovering local experiences.",
      context:
        "Travelers spend 8+ hours planning trips across multiple platforms. Need unified platform combining discovery, booking, and planning with AI assistance.",
      role: "Product Manager & UX Lead",
      responsibilities: [
        "Led user research with 50+ travelers",
        "Created comprehensive user journey maps",
        "Designed end-to-end booking experience",
        "Prototyped AI chatbot integration",
      ],
      metrics: {
        userSatisfaction: "4.7/5 in usability testing",
        timeReduction: "Reduces planning time by 65%",
        engagement: "Users spend 40% more time exploring destinations",
        conversion: "Higher booking intent vs single-purpose apps",
      },
      tradeoffs:
        "Focused on core booking flow over advanced social features for MVP. Prioritized reliable core functionality over feature breadth to ensure strong user foundation.",
      lifecycle:
        "Research → Wireframing → Prototyping → User Testing → Iteration → Development Handoff",
      strategy:
        "Platform approach targeting high-value travelers first, then expand to budget segments. AI-first experience to differentiate from existing booking platforms.",
      stakeholders:
        "Travelers, travel suppliers, AI team, design team, business development",
      communication:
        "User persona presentations, journey mapping workshops, prototype demos with stakeholder feedback sessions, competitive analysis reports.",
    },
    CodeMentorX: {
      userProblem:
        "Tech students lack access to industry mentorship, with 73% reporting difficulty connecting with experienced professionals for career guidance and skill development.",
      context:
        "Growing skills gap in tech industry. Students need personalized mentorship but existing platforms lack quality matching and structured programs.",
      role: "Founder & Product Lead",
      responsibilities: [
        "Conducted market research with 200+ students",
        "Designed mentor-mentee matching algorithm",
        "Built two-sided marketplace with booking system",
        "Established mentor onboarding and quality standards",
      ],
      metrics: {
        userGrowth: "500+ students registered in beta",
        mentorQuality: "4.8/5 average mentor rating",
        engagement: "85% complete their booked sessions",
        outcomes: "67% of users report improved career clarity",
      },
      tradeoffs:
        "Manual mentor vetting vs automated scaling. Chose quality over quantity in early stages to build trust and strong unit economics before scaling.",
      lifecycle:
        "Problem Discovery → MVP → Beta Testing → Mentor Acquisition → Platform Launch",
      strategy:
        "Two-sided marketplace requiring careful balance. Focus on mentor quality first to attract students, then scale both sides simultaneously.",
      stakeholders:
        "Students, tech mentors, university partners, career services, development team",
      communication:
        "Student survey insights, mentor recruitment presentations, university partnership proposals, investor pitch materials showing market opportunity.",
    },
    EnergyX: {
      userProblem:
        "Consumers lack transparency into energy usage and have no incentives to reduce consumption, while utilities struggle with demand forecasting and grid efficiency.",
      context:
        "EasyA hackathon focused on sustainability. Climate change requires immediate action on energy consumption with blockchain enabling transparent, incentivized conservation.",
      role: "Product Strategist & Blockchain Lead",
      responsibilities: [
        "Defined sustainability impact metrics",
        "Designed tokenomics for conservation rewards",
        "Led team of 5 through 48-hour hackathon",
        "Created go-to-market strategy for utilities",
      ],
      metrics: {
        energySavings: "Potential 15% reduction in home energy use",
        userRewards: "Average $50/month XRP rewards for efficient users",
        utilityValue: "20% improvement in demand forecasting",
        sustainability: "Estimated 2.3 tons CO2 reduction per household/year",
      },
      tradeoffs:
        "Blockchain complexity vs user adoption. Simplified crypto experience with fiat-equivalent rewards display to reduce barrier to entry while maintaining decentralized benefits.",
      lifecycle:
        "Ideation → Technical Architecture → Rapid Development → Demo → Pilot Planning",
      strategy:
        "B2B2C approach targeting utilities first for distribution, then direct consumer adoption. Environmental impact as primary value prop, financial rewards as engagement driver.",
      stakeholders:
        "Utility companies, environmentally conscious consumers, blockchain developers, sustainability advocates, regulatory bodies",
      communication:
        "Hackathon pitch focused on environmental impact, utility partnership proposals, consumer education materials explaining blockchain benefits simply.",
    },
  };

  const data = productData[project.name] || {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">
            {project.name} - Product Overview
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* User Problem & Context */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6l0 6l4 2" />
              </svg>
              <h3 className="text-xl font-bold text-white">
                User Problem & Context
              </h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <h4 className="text-lg font-semibold text-red-300 mb-2">
                Problem Statement
              </h4>
              <p className="text-gray-300">{data.userProblem}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-red-300 mb-2">
                Context
              </h4>
              <p className="text-gray-300">{data.context}</p>
            </div>
          </section>

          {/* Role & Responsibilities */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3 className="text-xl font-bold text-white">
                Role & Responsibilities
              </h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-300 mb-2">
                Role: {data.role}
              </h4>
              <ul className="space-y-2">
                {data.responsibilities?.map((resp, index) => (
                  <li
                    key={index}
                    className="text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-blue-400 font-bold">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Metrics & Outcomes */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                <polyline points="17,6 23,6 23,12" />
              </svg>
              <h3 className="text-xl font-bold text-white">
                Metrics & Outcomes
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(data.metrics || {}).map(([key, value]) => (
                <div key={key} className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-green-300 font-semibold capitalize mb-1">
                    {key.replace(/([A-Z])/g, " $1")}
                  </h4>
                  <p className="text-gray-300">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trade-offs & Decision Reasoning */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <h3 className="text-xl font-bold text-white">
                Trade-offs & Decision Reasoning
              </h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-300">{data.tradeoffs}</p>
            </div>
          </section>

          {/* Product Lifecycle & Strategy */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <h3 className="text-xl font-bold text-white">
                Product Lifecycle & Strategy
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-purple-300 font-semibold mb-2">
                  Product Lifecycle
                </h4>
                <p className="text-gray-300">{data.lifecycle}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-purple-300 font-semibold mb-2">
                  Strategy & Prioritization
                </h4>
                <p className="text-gray-300">{data.strategy}</p>
              </div>
            </div>
          </section>

          {/* Team & Communication */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <h3 className="text-xl font-bold text-white">
                Team & Stakeholder Communication
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-cyan-300 font-semibold mb-2">
                  Key Stakeholders
                </h4>
                <p className="text-gray-300">{data.stakeholders}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-cyan-300 font-semibold mb-2">
                  Communication Approach
                </h4>
                <p className="text-gray-300">{data.communication}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
              {/* Product Analytics Button */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:shadow-lg transition-all duration-200"
                title="View Product Details"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>

              {/* GitHub Button */}
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>

      <ProductModal
        project={{ name, description, tags, image, source_code_link }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and README file. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
