"use client"

import { useState, useEffect } from "react"
import TypingCode from "@/components/TypingCode"
import { ArrowLeft, Users, Target, Award, Heart, Lightbulb, Globe, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Load dark mode preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode")
    let shouldBeDark = false

    if (savedDarkMode !== null) {
      shouldBeDark = savedDarkMode === "true"
    } else {
      shouldBeDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    }

    setIsDarkMode(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const stats = [
    { icon: Users, label: "Active Members", value: "200+" },
    { icon: Target, label: "Projects Completed", value: "50+" },
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: Globe, label: "Countries Reached", value: "10+" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Innovation",
      description: "We believe in the power of creative thinking and innovative solutions to solve real-world problems.",
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "Striving for excellence in every project, pushing boundaries and exploring new possibilities.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Building strong partnerships and fostering a culture of teamwork and mutual support.",
    },
    {
      icon: Shield,
      title: "Integrity & Ethics",
      description: "Maintaining the highest standards of integrity and ethical practices in all our endeavors.",
    },
  ]
  // Team members replacing timeline section
  const team = [
    { name: "Adarsh Dabral", role: "President", avatar: "/1.png", bio: "Guiding TDH vision and culture with passion for interdisciplinary innovation." },
    { name: "Unnati Gupta", role: "Vice President", avatar: "/3.png", bio: "Coordinates cross-team collaboration and strategic initiatives." },
    { name: "Akhil Pandey", role: "Chief of Staff", avatar: "/5.png", bio: "Enabling operational excellence and team momentum." },
    { name: "Shiv Gaur", role: "Project Supervisor", avatar: "/7.png", bio: "Oversees execution quality and delivery for flagship projects." },
    { name: "Keshav Kauts", role: "Tech Head", avatar: "/9.png", bio: "Architecting scalable, performant technical foundations." },
    { name: "Divyanshu Tomer", role: "Chief Mentor", avatar: "/11.png", bio: "Championing algorithmic thinking & problem solving." },
    { name: "Bhaavya Srivastava", role: "Media Head", avatar: "/13.png", bio: "Amplifying TDH narrative through compelling media." },
    { name: "Palak Panthri", role: "Design Head", avatar: "/15.png", bio: "Crafting accessible, human-centered visual systems." },
    { name: "Kanchan Bhatt", role: "Content Head", avatar: "/17.png", bio: "Telling clear, authentic stories about our impact." },
    { name: "Anurag Kumar Singh", role: "Chief Cameraman", avatar: "/19.png", bio: "Capturing moments and translating energy into visuals." },
    { name: "Abir Pal", role: "Treasurer", avatar: "/21.png", bio: "Stewarding resources responsibly for sustainable growth." },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <img
                src="/tdh-logo.png"
                alt="TDH Logo"
                className="h-6 w-6 dark:invert"
              />
              <h1 className="text-xl font-bold">About The Designnovation Hub</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                The Designnovation Hub
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Empowering the next generation of innovators through design thinking and technology.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-lg shadow-2xl bg-gray-900 dark:bg-black border border-gray-800 overflow-hidden w-full max-w-[560px]">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 border-b border-gray-700 text-xs text-gray-300 font-mono">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-400">main.java</span>
              </div>
              <div className="p-6 min-h-[360px]">
                <TypingCode
                  code={`// memoized fibonacci\nimport java.util.*;\n\nclass Fib {\n  static int f(int n, Map<Integer,Integer> m){\n    if(n<2) return n;\n    if(m.containsKey(n)) return m.get(n);\n    int v = f(n-1,m)+f(n-2,m);\n    m.put(n,v);\n    return v;\n  }\n  public static void main(String[] a){\n    Map<Integer,Integer> m=new HashMap<>();\n    for(int i=0;i<8;i++){ System.out.println(f(i,m)); }\n  }\n}`}
                  speed={12}
                  lineDelay={70}
                  startDelay={250}
                  outputLines={["0","1","1","2","3","5","8","13"]}
                  consoleTitle="java main"
                  showLineNumbers
                  className="text-gray-200"
                  heightClass="h-80"
                  ariaLabel="Animated Java Fibonacci code"
                  loop
                  restartDelay={2000}
                />
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-gray-900/80" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=400&text=Founder"
                alt="Founder"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Founder's Message
              </h2>
              <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  "Welcome to The Designnovation Hub (TDH). Our journey began with a simple yet powerful vision: 
                  to create a space where creativity meets technology, where innovation thrives, and where 
                  students can explore the endless possibilities of design thinking."
                </p>
                <p>
                  "At TDH, we believe that the future belongs to those who can think differently, who can 
                  bridge the gap between imagination and implementation. Our community is built on the 
                  principles of collaboration, innovation, and continuous learning."
                </p>
                <p>
                  "As we continue to grow and evolve, our commitment remains the same: to empower students 
                  with the skills, knowledge, and mindset needed to create meaningful impact in the world 
                  through design and technology."
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900 dark:text-white">Ishita Gupta</p>
                  <p className="text-blue-600 dark:text-blue-400">Founder, TDH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at TDH
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <value.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      {/* Our Team - Replaces Timeline */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The people who make TDH a warm, inventive, and high‑energy community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-sm hover:shadow-md transition-shadow duration-300 will-change-transform"
              >
                <div className="p-6 flex items-center gap-4">
                  <img
                    src={`${member.avatar}?height=96&width=96`}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-blue-600/10 dark:ring-blue-400/20"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{member.role}</p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To empower students with the skills, knowledge, and mindset needed to create meaningful 
                impact through innovative design and technology solutions. We strive to foster a community 
                of creative thinkers and problem solvers who can address real-world challenges.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <span>Promote design thinking and innovation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <span>Build collaborative learning environments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <span>Connect students with industry professionals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <span>Create opportunities for real-world projects</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To be the leading student organization that bridges the gap between design and technology, 
                creating a global community of innovators who shape the future through creative problem-solving 
                and technological advancement.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <span>Global recognition as an innovation hub</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <span>Partnerships with leading tech companies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <span>Alumni network of successful innovators</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <span>Sustainable impact on society</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to be part of something amazing? Join TDH and start your journey of innovation and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 