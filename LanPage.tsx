"use client";
import * as React from "react";
import { useState, useEffect } from "react";

function KamayabLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(() => 0);

  const [isMenuOpen, setIsMenuOpen] = useState(() => false);

  const [selectedClassification, setSelectedClassification] = useState(
    () => "all"
  );

  const [testimonials, setTestimonials] = useState(() => [
    {
      id: 1,
      name: "Priya Sharma",
      text: "Kamayab helped me understand my emotions better and build confidence in myself.",
      image:
        "https://images.pexels.com/photos/15638082/pexels-photo-15638082.jpeg",
    },
    {
      id: 2,
      name: "Arjun Patel",
      text: "The digital literacy module opened up a whole new world of opportunities for me.",
      image:
        "https://images.pexels.com/photos/16504390/pexels-photo-16504390.jpeg",
    },
    {
      id: 3,
      name: "Meera Singh",
      text: "Learning about financial basics has made me more responsible with money.",
      image:
        "https://images.pexels.com/photos/6936005/pexels-photo-6936005.jpeg",
    },
  ]);

  const [classifications, setClassifications] = useState(() => [
    {
      id: "fundamental",
      title: "Fundamental",
      ageRange: "6–9 years old",
      description:
        "Building foundational life skills and character development for young learners",
      color: "#FF6B6B",
      bgColor: "#FFF5F5",
      lightBgColor: "#FEF2F2",
      icon: "🌱",
      modules: ["Personal Skills", "Safety Skills", "Behavioral Skills"],
    },
    {
      id: "intermediate",
      title: "Intermediate",
      ageRange: "10–12 years old",
      description:
        "Developing social awareness and practical skills for pre-teens",
      color: "#4ECDC4",
      bgColor: "#F0FDFA",
      lightBgColor: "#ECFDF5",
      icon: "🎯",
      modules: [
        "Mental & Emotional Skills",
        "Relationship & Interpersonal Skills",
        "Environmental Responsibility",
        "Digital & Tech Literacy",
      ],
    },
    {
      id: "expert",
      title: "Expert",
      ageRange: "13–15 years old",
      description:
        "Advanced skill development and responsibility for teenagers",
      color: "#45B7D1",
      bgColor: "#F0F9FF",
      lightBgColor: "#EFF6FF",
      icon: "🚀",
      modules: ["Adolescence & You", "Legal Literacy", "Financial Basics"],
    },
    {
      id: "kamayab",
      title: "Kamayab",
      ageRange: "16–18 years old",
      description: "Comprehensive preparation for adulthood and leadership",
      color: "#96CEB4",
      bgColor: "#F0FDF4",
      lightBgColor: "#F0FDF4",
      icon: "👑",
      modules: [
        "Personal Skills",
        "Mental & Emotional Skills",
        "Legal Literacy",
        "Adolescence & You",
        "Digital & Tech Literacy",
        "Safety Skills",
        "Relationship & Interpersonal Skills",
        "Financial Basics",
        "Behavioral Skills",
        "Environmental Responsibility",
      ],
    },
  ]);

  const [allModules, setAllModules] = useState(() => [
    {
      title: "Personal Skills",
      desc: "Self-awareness, goal setting, and personal development for confident living",
      icon: "🎯",
      color: "#EF4444",
      bgColor: "#FEF2F2",
      classifications: ["fundamental", "kamayab"],
    },
    {
      title: "Mental & Emotional Skills",
      desc: "Emotional intelligence, stress management, and mental wellness",
      icon: "🧠",
      color: "#8B5CF6",
      bgColor: "#F5F3FF",
      classifications: ["intermediate", "kamayab"],
    },
    {
      title: "Legal Literacy",
      desc: "Understanding rights, responsibilities, and basic legal awareness",
      icon: "⚖️",
      color: "#059669",
      bgColor: "#F0FDF4",
      classifications: ["expert", "kamayab"],
    },
    {
      title: "Adolescence & You",
      desc: "Navigating teenage challenges with confidence and understanding",
      icon: "🌱",
      color: "#10B981",
      bgColor: "#F0FDF4",
      classifications: ["expert", "kamayab"],
    },
    {
      title: "Digital & Tech Literacy",
      desc: "Essential digital skills for the modern connected world",
      icon: "💻",
      color: "#3B82F6",
      bgColor: "#EFF6FF",
      classifications: ["intermediate", "kamayab"],
    },
    {
      title: "Safety Skills",
      desc: "Personal safety, risk assessment, and emergency preparedness",
      icon: "🛡️",
      color: "#F59E0B",
      bgColor: "#FFFBEB",
      classifications: ["fundamental", "kamayab"],
    },
    {
      title: "Relationship & Interpersonal Skills",
      desc: "Building healthy relationships and effective communication",
      icon: "🤝",
      color: "#EC4899",
      bgColor: "#FDF2F8",
      classifications: ["intermediate", "kamayab"],
    },
    {
      title: "Financial Basics",
      desc: "Money management, budgeting, and financial planning fundamentals",
      icon: "💰",
      color: "#059669",
      bgColor: "#F0FDF4",
      classifications: ["expert", "kamayab"],
    },
    {
      title: "Behavioral Skills",
      desc: "Developing positive habits, discipline, and character building",
      icon: "⭐",
      color: "#DC2626",
      bgColor: "#FEF2F2",
      classifications: ["fundamental", "kamayab"],
    },
    {
      title: "Environmental Responsibility",
      desc: "Understanding sustainability and our role in protecting nature",
      icon: "🌍",
      color: "#16A34A",
      bgColor: "#F0FDF4",
      classifications: ["intermediate", "kamayab"],
    },
  ]);

  function nextTestimonial() {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  }

  function prevTestimonial() {
    setCurrentTestimonial(
      currentTestimonial === 0
        ? testimonials.length - 1
        : currentTestimonial - 1
    );
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function setClassification(classification: string) {
    setSelectedClassification(classification);
  }

  function getFilteredModules() {
    if (selectedClassification === "all") {
      return allModules;
    }
    return allModules.filter((module) =>
      module.classifications.includes(selectedClassification)
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <div className="min-h-screen leading-relaxed bg-stone-50">
      <header className="sticky top-0 border-b border-solid backdrop-blur-[10px] bg-[white] z-[1000]">
        <div className="flex justify-between items-center px-8 py-3 mx-auto my-0 max-w-[1400px] max-md:px-4 max-md:py-3">
          <div className="text-3xl font-bold text-gray-800 -tracking-wide">
            Kamayab
          </div>
          <nav className="flex gap-10 max-md:hidden">
            <a
              className="text-base font-medium text-gray-700 no-underline duration-[0.2s] ease-[ease] transition-[color] hover:text-emerald-600"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-base font-medium text-gray-700 no-underline duration-[0.2s] ease-[ease] transition-[color] hover:text-emerald-600"
              href="#about"
            >
              About
            </a>
            <a
              className="text-base font-medium text-gray-700 no-underline duration-[0.2s] ease-[ease] transition-[color] hover:text-emerald-600"
              href="#modules"
            >
              Modules
            </a>
            <a
              className="text-base font-medium text-gray-700 no-underline duration-[0.2s] ease-[ease] transition-[color] hover:text-emerald-600"
              href="#values"
            >
              Values
            </a>
            <a
              className="text-base font-medium text-gray-700 no-underline duration-[0.2s] ease-[ease] transition-[color] hover:text-emerald-600"
              href="#contact"
            >
              Contact
            </a>
          </nav>
          <div className="flex gap-4 items-center">
            <button className="px-6 py-3 text-sm font-semibold bg-emerald-600 rounded-lg transition-all cursor-pointer border-[none] duration-[0.2s] ease-[ease] text-[white] hover:bg-emerald-700">
              Join Us
            </button>
            <button
              className="hidden flex-col gap-1 p-2 bg-transparent cursor-pointer border-[none] max-md:flex"
              onClick={(event) => toggleMenu()}
            >
              <div className="w-5 h-0.5 bg-gray-700 transition-all duration-[0.3s] ease-[ease]" />
              <div className="w-5 h-0.5 bg-gray-700 transition-all duration-[0.3s] ease-[ease]" />
              <div className="w-5 h-0.5 bg-gray-700 transition-all duration-[0.3s] ease-[ease]" />
            </button>
          </div>
        </div>
        <div
          className="px-8 py-4 border-t border-solid bg-[white] border-gray-200"
          style={{
            display: isMenuOpen ? "block" : "none",
          }}
        >
          <nav className="flex flex-col gap-4">
            <a
              href="#home"
              className="px-0 py-2 font-medium text-gray-700 no-underline"
              onClick={(event) => toggleMenu()}
            >
              Home
            </a>
            <a
              href="#about"
              className="px-0 py-2 font-medium text-gray-700 no-underline"
              onClick={(event) => toggleMenu()}
            >
              About
            </a>
            <a
              href="#modules"
              className="px-0 py-2 font-medium text-gray-700 no-underline"
              onClick={(event) => toggleMenu()}
            >
              Modules
            </a>
            <a
              href="#values"
              className="px-0 py-2 font-medium text-gray-700 no-underline"
              onClick={(event) => toggleMenu()}
            >
              Values
            </a>
            <a
              href="#contact"
              className="px-0 py-2 font-medium text-gray-700 no-underline"
              onClick={(event) => toggleMenu()}
            >
              Contact
            </a>
            <button className="self-start px-6 py-3 mt-2 text-sm font-semibold bg-emerald-600 rounded-lg cursor-pointer border-[none] text-[white]">
              Join Us
            </button>
          </nav>
        </div>
      </header>
      <section
        id="home"
        className="px-8 pt-16 pb-12 bg-[white] max-sm:px-4 max-sm:pt-12 max-sm:pb-8"
      >
        <div className="grid gap-12 items-center mx-auto my-0 grid-cols-[1fr_1fr] max-w-[1400px] max-md:gap-8 max-md:text-center max-md:grid-cols-[1fr]">
          <div>
            <div className="px-4 py-2 mb-3 text-sm font-semibold text-emerald-600 bg-green-50 rounded-[50px] inline-block">
              🌟 Empowering Young Minds
            </div>
            <h1 className="mb-3 text-6xl font-extrabold leading-none text-gray-900 -tracking-wide max-sm:text-4xl">
              Building Tomorrow's
              <br />
              <span className="bg-clip-text">Leaders Today</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-500 max-w-[500px] max-md:max-w-none">
              Comprehensive life skills education designed for the youth.
              Building confidence, capability, and character through
              innovative learning modules.
            </p>
            <div className="flex gap-4 max-sm:flex-col max-sm:items-center">
              <button className="px-8 py-4 text-base font-semibold bg-emerald-600 rounded-xl transition-all cursor-pointer border-[none] duration-[0.2s] ease-[ease] text-[white] hover:bg-emerald-700">
                Start Learning
              </button>
              <button className="px-8 py-4 text-base font-semibold text-gray-700 bg-transparent rounded-xl border-2 border-gray-300 border-solid transition-all cursor-pointer duration-[0.2s] ease-[ease] hover:border-gray-400">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bg-green-50 rounded-full h-[100px] right-[-2rem] top-[-2rem] w-[100px] z-[1] max-md:hidden" />
            <img
              alt="Indian students learning together"
              src="https://images.pexels.com/photos/8923566/pexels-photo-8923566.jpeg"
              className="object-cover overflow-hidden w-full rounded-3xl h-[500px] shadow-[0_25px_50px_rgba(0,0,0,0.1)] z-[2] max-sm:hidden"
            />
            <div className="absolute w-20 h-20 bg-amber-100 rounded-full bottom-[-2rem] left-[-2rem] z-[1] max-md:hidden" />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="px-8 py-16 bg-stone-50 max-sm:px-4 max-sm:py-12"
      >
        <div className="grid gap-12 items-center mx-auto my-0 grid-cols-[1fr_1fr] max-w-[1400px] max-md:gap-8 max-md:grid-cols-[1fr]">
          <div className="relative max-md:order-2">
            <img
              alt="Indian students in classroom setting"
              src="https://images.pexels.com/photos/8847181/pexels-photo-8847181.jpeg"
              className="object-cover overflow-hidden w-full rounded-3xl h-[450px] shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            />
            <div className="absolute top-8 left-8 p-6 rounded-2xl bg-[white] max-w-[200px] shadow-[0_10px_25px_rgba(0,0,0,0.1)] max-sm:left-[18px] max-sm:top-[241px]">
              <div className="mb-2 text-3xl">🎯</div>
              <h4 className="mb-1 text-lg font-bold text-gray-900">
                10+ Modules
              </h4>
              <p className="text-sm text-gray-500">
                Comprehensive skill development
              </p>
            </div>
          </div>
          <div className="max-md:order-1 max-md:text-center">
            <div className="px-4 py-2 mb-4 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-[50px] inline-block">
              📚 About Kamayab
            </div>
            <h2 className="mb-6 text-5xl font-extrabold leading-tight text-gray-900 -tracking-wide max-sm:text-4xl">
              Bridging Education
              <br />& Real-World Skills
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-500">
              Kamayab is designed specifically for the youth, addressing the
              unique challenges and opportunities in our rapidly evolving
              society.
            </p>
            <div className="grid gap-6 mb-8 grid-cols-[1fr_1fr] max-sm:grid-cols-[1fr]">
              <div className="flex gap-3 items-center">
                <div className="flex items-center justify-center w-10 h-10 text-xl bg-green-50 rounded-xl">
                  ✓
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Practical Skills
                  </h4>
                  <p className="text-sm text-gray-500">
                    Real-world applications
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex items-center justify-center w-10 h-10 text-xl bg-green-50 rounded-xl">
                  ✓
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Evolving Curriculum
                  </h4>
                  <p className="text-sm text-gray-500">
                    Innovative learning modules
                  </p>
                </div>
              </div>
            </div>
            <button className="px-7 py-3.5 text-base font-semibold bg-emerald-600 rounded-xl transition-all cursor-pointer border-[none] duration-[0.2s] ease-[ease] text-[white] hover:bg-emerald-700">
              Discover Our Mission
            </button>
          </div>
        </div>
      </section>
      <section
        id="modules"
        className="px-8 py-12 bg-[white] max-sm:px-4 max-sm:py-8"
      >
        <div className="mx-auto my-0 max-w-[1400px]">
          <div className="mb-8 text-center">
            <div className="px-4 py-2 mb-4 text-sm font-semibold text-amber-600 bg-amber-100 rounded-[50px] inline-block">
              🎓 Learning Classifications
            </div>
            <h2 className="mb-3 text-4xl font-extrabold leading-tight text-gray-900 -tracking-wide max-sm:text-3xl">
              Age-Based Learning
              <br />
              Classifications
            </h2>
            <p className="mx-auto mt-0 mb-8 text-base leading-relaxed text-gray-500 max-w-[600px]">
              Choose your age group to discover modules designed specifically
              for your developmental stage.
            </p>
          </div>
          <div className="flex justify-center mb-8 max-sm:flex-col max-sm:gap-2 max-sm:items-center">
            <div className="flex gap-1 p-1 bg-gray-50 rounded-xl max-sm:flex-col max-sm:w-full max-sm:max-w-[300px]">
              <button
                className="px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer border-[none] duration-[0.2s] ease-[ease]"
                onClick={(event) => setClassification("all")}
                style={{
                  backgroundColor:
                    selectedClassification === "all"
                      ? "#059669"
                      : "transparent",
                  color: selectedClassification === "all" ? "white" : "#6B7280",
                }}
              >
                All Modules
              </button>
              {classifications?.map((classification) => (
                <button
                  className="px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer border-[none] duration-[0.2s] ease-[ease]"
                  key={classification.id}
                  onClick={(event) => setClassification(classification.id)}
                  style={{
                    backgroundColor:
                      selectedClassification === classification.id
                        ? classification.color
                        : "transparent",
                    color:
                      selectedClassification === classification.id
                        ? "white"
                        : "#6B7280",
                  }}
                >
                  {classification.title}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-6 mb-12 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-sm:gap-4 max-sm:grid-cols-[1fr]">
            {classifications?.map((classification) => (
              <div
                className="p-6 rounded-2xl transition-all cursor-pointer duration-[0.3s] ease-[ease]"
                key={classification.id}
                onClick={(event) => setClassification(classification.id)}
                style={{
                  backgroundColor: classification.lightBgColor,
                  border: `2px solid ${
                    selectedClassification === classification.id
                      ? classification.color
                      : "transparent"
                  }`,
                  transform:
                    selectedClassification === classification.id
                      ? "translateY(-4px)"
                      : "none",
                  boxShadow:
                    selectedClassification === classification.id
                      ? "0 8px 25px rgba(0,0,0,0.1)"
                      : "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className="flex justify-center items-center mr-4 text-2xl rounded-xl h-[50px] w-[50px]"
                    style={{ backgroundColor: classification.bgColor }}
                  >
                    {classification.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-gray-900">
                      {classification.title}
                    </h3>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: classification.color }}
                    >
                      {classification.ageRange}
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">
                  {classification.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{`${classification.modules.length} modules`}</span>
                  <div
                    className="flex items-center text-sm font-semibold"
                    style={{ color: classification.color }}
                  >
                    Explore
                    <span className="ml-2 transition-transform duration-[0.2s] ease-[ease]">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="mb-6 text-2xl font-bold text-center text-gray-900">
              {selectedClassification === "all"
                ? "All Learning Modules"
                : `${
                    classifications.find((c) => c.id === selectedClassification)
                      ?.title || ""
                  } Modules`}
            </h3>
            <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] max-sm:gap-4 max-sm:grid-cols-[1fr]">
              {getFilteredModules()?.map((module, index) => (
                <div
                  className="p-6 rounded-2xl border border-gray-100 border-solid transition-all cursor-pointer bg-[white] duration-[0.2s] ease-[ease] hover:shadow-lg"
                  key={index}
                >
                  <div
                    className="flex justify-center items-center mb-4 text-xl rounded-xl h-[50px] w-[50px]"
                    style={{ backgroundColor: module.bgColor }}
                  >
                    {module.icon}
                  </div>
                  <h4 className="mb-2 text-lg font-bold leading-tight text-gray-900">
                    {module.title}
                  </h4>
                  <p className="mb-4 text-sm leading-relaxed text-gray-500">
                    {module.desc}
                  </p>
                  <div className="flex justify-end items-center">
                    <div
                      className="flex items-center text-sm font-semibold cursor-pointer"
                      style={{ color: module.color }}
                    >
                      Learn More
                      <span className="ml-2 transition-transform duration-[0.2s] ease-[ease]">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="values"
        className="px-8 py-16 bg-stone-50 max-sm:px-4 max-sm:py-12"
      >
        <div className="mx-auto my-0 max-w-[1400px]">
          <div className="mb-12 text-center">
            <div className="px-4 py-2 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-[50px] inline-block">
              💎 Core Values
            </div>
            <h2 className="mb-4 text-5xl font-extrabold leading-tight text-gray-900 -tracking-wide max-sm:text-4xl">
              Values That
              <br />
              Guide Our Mission
            </h2>
            <p className="mx-auto my-0 text-lg leading-relaxed text-gray-500 max-w-[600px]">
              The fundamental principles that shape our approach to education
              and character development.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-sm:gap-6 max-sm:grid-cols-[1fr]">
            {[
              {
                title: "Integrity",
                desc: "Building character through honesty, transparency, and strong moral principles in all our interactions.",
                icon: "🎖️",
                color: "#DC2626",
                bgColor: "#FEF2F2",
              },
              {
                title: "Empathy",
                desc: "Fostering understanding and compassion to create meaningful connections and inclusive communities.",
                icon: "❤️",
                color: "#EC4899",
                bgColor: "#FDF2F8",
              },
              {
                title: "Responsibility",
                desc: "Encouraging ownership of actions and decisions while contributing positively to society.",
                icon: "🎯",
                color: "#059669",
                bgColor: "#F0FDF4",
              },
              {
                title: "Inclusion",
                desc: "Celebrating diversity and ensuring every voice is heard, valued, and respected in our community.",
                icon: "🤗",
                color: "#3B82F6",
                bgColor: "#EFF6FF",
              },
              {
                title: "Excellence",
                desc: "Pursuing the highest standards in education, personal growth, and service to others.",
                icon: "⭐",
                color: "#F59E0B",
                bgColor: "#FFFBEB",
              },
            ]?.map((value, index) => (
              <div
                className="px-8 py-10 text-center rounded-3xl border border-gray-100 border-solid transition-all bg-[white] duration-[0.3s] ease-[ease] hover:shadow-lg"
                key={index}
              >
                <div
                  className="flex justify-center items-center mx-auto mt-0 mb-6 w-20 h-20 text-3xl rounded-3xl"
                  style={{ backgroundColor: value.bgColor }}
                >
                  {value.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-500">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-8 py-12 bg-green-50 max-sm:px-4 max-sm:py-8">
        <div className="mx-auto my-0 text-center max-w-[800px]">
          <h2 className="mb-12 text-4xl text-green-700 font-bold">
            What Our Students Say
          </h2>
          <div className="relative px-6 py-8 rounded-3xl bg-[white] shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <img
              className="object-cover overflow-hidden mx-auto mt-0 mb-6 w-20 h-20 rounded-full border-4 border-green-400 border-solid"
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
            />
            <p className="mb-6 text-xl italic leading-relaxed text-neutral-600">
              &quot;{testimonials[currentTestimonial].text}&quot;
            </p>
            <h4 className="text-lg font-semibold text-green-700">
              {testimonials[currentTestimonial].name}
            </h4>
            <div className="flex gap-4 justify-center mt-8">
              <button
                className="w-10 h-10 bg-green-400 rounded-full transition-all cursor-pointer border-[none] duration-[0.3s] ease-[ease] text-[white] hover:bg-green-500"
                onClick={(event) => prevTestimonial()}
              >
                ←
              </button>
              <button
                className="w-10 h-10 bg-green-400 rounded-full transition-all cursor-pointer border-[none] duration-[0.3s] ease-[ease] text-[white] hover:bg-green-500"
                onClick={(event) => nextTestimonial()}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer
        id="contact"
        className="px-8 pt-12 pb-4 bg-green-700 text-[white] max-sm:px-4 max-sm:pt-8 max-sm:pb-4"
      >
        <div className="mx-auto my-0 max-w-[1200px]">
          <div className="grid gap-8 mb-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Kamayab</h3>
              <p className="leading-relaxed opacity-90">
                Empowering future leaders through comprehensive life skills
                education.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a
                  className="no-underline opacity-90 transition-opacity duration-[0.3s] ease-[ease] text-[white] hover:opacity-100"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="no-underline opacity-90 transition-opacity duration-[0.3s] ease-[ease] text-[white] hover:opacity-100"
                  href="#modules"
                >
                  Modules
                </a>
                <a
                  className="no-underline opacity-90 transition-opacity duration-[0.3s] ease-[ease] text-[white] hover:opacity-100"
                  href="#values"
                >
                  Values
                </a>
                <a
                  className="no-underline opacity-90 transition-opacity duration-[0.3s] ease-[ease] text-[white] hover:opacity-100"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold">Contact Info</h4>
              <p className="mb-2 leading-relaxed opacity-90">
                Email: info@kamyaab.org
              </p>
              <p className="leading-relaxed opacity-90">
                Phone: +91 98765 43210
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  className="text-2xl transition-transform duration-[0.3s] ease-[ease] text-[white] hover:scale-110"
                  href="#"
                >
                  📘
                </a>
                <a
                  className="text-2xl transition-transform duration-[0.3s] ease-[ease] text-[white] hover:scale-110"
                  href="#"
                >
                  🐦
                </a>
                <a
                  className="text-2xl transition-transform duration-[0.3s] ease-[ease] text-[white] hover:scale-110"
                  href="#"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
          <div className="pt-4 text-center border-t border-solid opacity-80 border-t-white border-t-opacity-20">
            <p>© 2024 Kamyaab. All rights reserved. | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default KamayabLanding;
