"use client"

import { useState, useEffect } from "react"
import TypingCode from "@/components/TypingCode"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Calendar,
  Users,
  Code,
  Cpu,
  Palette,
  Sun,
  Moon,
  MessageCircle,
} from "lucide-react"

export default function TDHPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedProjectTag, setSelectedProjectTag] = useState("All")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [siteData, setSiteData] = useState({
    hero: {
      title: "Empowering Innovation through Design & Technology",
      subtitle: "Join TDH and be part of a community that bridges creativity and technology to solve real-world problems through innovative design thinking.",
      heroImage: "/placeholder.svg?height=500&width=600&text=TDH+Innovation+Hub",
      stats: { members: "200+", projects: "50+" },
    },
    contact: {
      email: "contact@tdh.edu",
      location: "Innovation Lab, Tech Building, University Campus",
      whatsappLink: "https://wa.me/1234567890",
      socialLinks: { instagram: "#", linkedin: "#", github: "#" },
    },
  })

  const [projects, setProjects] = useState([
    { id: 1, name: "HydraGo", description: "Hyperhidrosis treatment assistant with personalized tracking and therapy guidance.", tags: ["IoT", "Health", "AI"], images: ["/hydra-go.jpg"], github: "#", demo: "#", featured: true, createdAt: "2025-01-05" },
    { id: 2, name: "FinMan", description: "Personal finance dashboard simplifying multi-currency tracking.", tags: ["Web", "Finance", "Analytics"], images: ["/finman.jpg"], github: "#", demo: "#", featured: true, createdAt: "2025-02-10" },
    { id: 3, name: "AlgoQuest", description: "Gamified platform for mastering DSA & algorithmic thinking.", tags: ["Education", "Game", "DSA"], images: ["/algoquest.jpg"], github: "#", demo: "#", featured: true, createdAt: "2025-03-18" },
    { id: 4, name: "Beat Brawls", description: "Rhythm-infused strategic card battle experience.", tags: ["Game", "Music", "Web"], images: ["/beat-brawls.jpg"], github: "#", demo: "#", featured: false, createdAt: "2025-04-02" },
    { id: 5, name: "AgroBandhu", description: "Decision support & analytics for smarter farming.", tags: ["AgriTech", "Sustainability", "AI"], images: ["/agrobandhu.jpg"], github: "#", demo: "#", featured: false, createdAt: "2025-04-22" },
  ])



  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Design Thinking Workshop",
      date: "2025-03-15",
      time: "10:00 AM",
      description: "Learn the fundamentals of design thinking and user-centered design",
      images: ["/placeholder.svg?height=150&width=200&text=Design+Workshop"],
      location: "Innovation Lab",
      registrationLink: "#",
      maxParticipants: 30,
      currentParticipants: 15,
      featured: true,
    },
    {
      id: 2,
      name: "AI & Machine Learning Bootcamp",
      date: "2025-03-22",
      time: "9:00 AM",
      description: "Intensive 3-day bootcamp covering ML fundamentals and practical applications",
      images: [
        "/placeholder.svg?height=150&width=200&text=AI+Bootcamp",
        "/placeholder.svg?height=150&width=200&text=ML+Training",
      ],
      location: "Tech Auditorium",
      registrationLink: "#",
      maxParticipants: 50,
      currentParticipants: 32,
      featured: true,
    },
    {
      id: 3,
      name: "Tech Innovation Showcase",
      date: "2025-04-05",
      time: "2:00 PM",
      description: "Annual showcase of student projects and innovations",
      images: ["/placeholder.svg?height=150&width=200&text=Innovation+Showcase"],
      location: "Main Hall",
      registrationLink: "#",
      maxParticipants: 200,
      currentParticipants: 89,
      featured: false,
    },
  ])

  const [team, setTeam] = useState([
  { id: 1, name: "Adarsh Dabral", role: "President", bio: "Guiding TDH vision and culture with passion for interdisciplinary innovation.", images: ["/1.png"], linkedin: "#", github: "#", email: "adarsh@tdh.edu", joinDate: "2024-01-10", featured: true },
  { id: 2, name: "Unnati Gupta", role: "Vice President", bio: "Coordinates cross-team collaboration and strategic initiatives.", images: ["/3.png"], linkedin: "#", github: "#", email: "unnati@tdh.edu", joinDate: "2024-01-10", featured: true },
  { id: 3, name: "Akhil Pandey", role: "Chief of Staff", bio: "Enabling operational excellence and team momentum.", images: ["/5.png"], linkedin: "#", github: "#", email: "akhil@tdh.edu", joinDate: "2024-01-15", featured: true },
  { id: 4, name: "Shiv Gaur", role: "Project Supervisor", bio: "Oversees execution quality and delivery for flagship projects.", images: ["/7.png"], linkedin: "#", github: "#", email: "shiv@tdh.edu", joinDate: "2024-01-20", featured: true },
  { id: 5, name: "Keshav Kauts", role: "Tech Head", bio: "Architecting scalable, performant technical foundations.", images: ["/9.png"], linkedin: "#", github: "#", email: "keshav@tdh.edu", joinDate: "2024-01-25", featured: true },
  { id: 6, name: "Divyanshu Tomer", role: "Chief Mentor", bio: "Championing algorithmic thinking & problem solving.", images: ["/11.png"], linkedin: "#", github: "#", email: "divyanshu@tdh.edu", joinDate: "2024-02-01", featured: true },
  { id: 7, name: "Bhaavya Srivastava", role: "Media Head", bio: "Amplifying TDH narrative through compelling media.", images: ["/13.png"], linkedin: "#", github: "#", email: "bhaavya@tdh.edu", joinDate: "2024-02-05", featured: false },
  { id: 8, name: "Palak Panthri", role: "Design Head", bio: "Crafting accessible, human-centered visual systems.", images: ["/15.png"], linkedin: "#", github: "#", email: "palak@tdh.edu", joinDate: "2024-02-05", featured: false },
  { id: 9, name: "Kanchan Bhatt", role: "Content Head", bio: "Telling clear, authentic stories about our impact.", images: ["/17.png"], linkedin: "#", github: "#", email: "kanchan@tdh.edu", joinDate: "2024-02-10", featured: false },
  { id: 10, name: "Anurag Kumar Singh", role: "Chief Cameraman", bio: "Capturing moments and translating energy into visuals.", images: ["/19.png"], linkedin: "#", github: "#", email: "anurag@tdh.edu", joinDate: "2024-02-12", featured: false },
  { id: 11, name: "Abir Pal", role: "Treasurer", bio: "Stewarding resources responsibly for sustainable growth.", images: ["/21.png"], linkedin: "#", github: "#", email: "abir@tdh.edu", joinDate: "2024-02-15", featured: false },
  ])

  const projectTags = ["All", "AI", "Web", "Hardware", "IoT", "Mobile", "Design", "Collaboration", "Sustainability"]

  const filteredProjects =
    selectedProjectTag === "All" ? projects : projects.filter((project) => project.tags.includes(selectedProjectTag))



  // Dark mode toggle - Fixed implementation
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)

    // Apply immediately to document
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Save to localStorage
    localStorage.setItem("darkMode", newDarkMode.toString())
  }

  // Load dark mode preference - Fixed
  useEffect(() => {
    // Check localStorage first, then system preference
    const savedDarkMode = localStorage.getItem("darkMode")
    let shouldBeDark = false

    if (savedDarkMode !== null) {
      // User has a saved preference
      shouldBeDark = savedDarkMode === "true"
    } else {
      // No saved preference, check system preference
      shouldBeDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    }

    setIsDarkMode(shouldBeDark)

    // Apply to document immediately
    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])



  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Handle contact form submission -> sends email via /api/contact
  const handleContactSubmit = async (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
      status: "unread",
    }

    // Basic validation
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      alert("Please fill in all fields")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      alert("Please enter a valid email address")
      return
    }

    const submitButton = e.target.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent
    try {
      submitButton.textContent = "Sending..."
      submitButton.disabled = true
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || 'Failed to send')
      }
      alert("Thank you for your message! We'll get back to you within 24-48 hours.")
      e.target.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Sorry, there was an error sending your message. Please try again or contact us directly.")
    } finally {
      submitButton.textContent = originalText
      submitButton.disabled = false
    }
  }

  // Handle membership form submission -> sends email via /api/membership
  const handleMembershipSubmit = async (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      major: formData.get("major"),
      interests: formData.get("interests"),
      timestamp: new Date().toISOString(),
      status: "pending",
    }

    // Basic validation
    if (!data.name.trim() || !data.email.trim() || !data.major.trim() || !data.interests.trim()) {
      alert("Please fill in all required fields")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      alert("Please enter a valid email address")
      return
    }

    const submitButton = e.target.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent
    try {
      submitButton.textContent = "Submitting..."
      submitButton.disabled = true
      const res = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || 'Failed to send')
      }
      alert("Thank you for your interest! We'll review your application and get back to you within 3-5 business days.")
      e.target.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Sorry, there was an error submitting your application. Please try again or contact us directly.")
    } finally {
      submitButton.textContent = originalText
      submitButton.disabled = false
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "events", "team", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">

        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-30 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0 animate-on-scroll">
                <div className="flex items-center space-x-2">
                  <img
                    src="/tdh-logo.png"
                    alt="TDH Logo"
                    className="h-8 w-8 dark:invert"
                  />
                  <div>
                    <h1 className="text-lg font-bold text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform duration-300">
                      The Designnovation Hub
                    </h1>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {["home", "projects", "events", "team", "contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`px-3 py-2 rounded-md text-sm font-medium capitalize transition-all duration-300 hover:scale-105 ${
                        activeSection === item
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-md"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                  <a
                    href="/about"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
                  >
                    About
                  </a>
                  {/* Hidden for now as requested */}
                  <a
                    href="/gallery"
                    className="hidden px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
                  >
                    Gallery
                  </a>
                </div>
              </div>

              {/* Dark Mode Toggle & CTA Button */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Join Us
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 transition-all duration-300 hover:scale-110"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 animate-fade-in">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {["home", "projects", "events", "team", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 w-full text-left capitalize transition-all duration-300"
                  >
                    {item}
                  </button>
                ))}
                <a
                  href="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 w-full text-left transition-all duration-300"
                >
                  About
                </a>
                {/* Hidden for now as requested */}
                <a
                  href="/gallery"
                  className="hidden px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 w-full text-left transition-all duration-300"
                >
                  Gallery
                </a>
                <button className="w-full mt-4 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:shadow-lg">
                  Join Us
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-gray-900 transition-all duration-500"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 hover:scale-105 transition-transform duration-500">
                  {siteData.hero.title.split("Design & Technology")[0]}
                  <span className="text-blue-600 dark:text-blue-400">Design & Technology</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up delay-200">
                  {siteData.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Join Us
                  </button>
                  <a
                    href={siteData.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-md font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg"
                  >
                    <MessageCircle size={20} />
                    <span>Join our WhatsApp Group</span>
                  </a>
                </div>
              </div>
              <div className="relative animate-on-scroll">
                <div className="rounded-lg shadow-2xl bg-gray-900 dark:bg-black border border-gray-800 overflow-hidden font-mono w-full max-w-[560px]">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 border-b border-gray-700 text-xs text-gray-300">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-gray-400">main.jsx</span>
                  </div>
                  <div className="p-6 text-[11px] md:text-sm leading-relaxed min-h-[360px] flex flex-col">
                    <TypingCode
                      code={`// simple welcome banner\nconst org = 'TDH';\nfunction welcome(){\n  console.log('Preparing environment...');\n  setTimeout(()=>console.log('Welcome to ' + org + '!'),200);\n}\nwelcome();`}
                      speed={16}
                      lineDelay={40}
                      startDelay={200}
                      showLineNumbers
                      outputLines={[
                        'Preparing environment...',
                        'Welcome to TDH!'
                      ]}
                      consoleTitle="node main.jsx"
                      className="text-gray-200 flex-1"
                      heightClass="h-80"
                      ariaLabel="Animated welcome code"
                      loop
                      restartDelay={2200}
                    />
                    <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                      <div className="flex items-center gap-2 bg-gray-800/70 rounded-md px-3 py-2">
                        <Users className="text-blue-400" size={16} />
                        <span className="text-gray-200"><strong>{siteData.hero.stats.members}</strong> members</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-800/70 rounded-md px-3 py-2">
                        <Code className="text-green-400" size={16} />
                        <span className="text-gray-200"><strong>{siteData.hero.stats.projects}</strong> projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:scale-105 transition-transform duration-300">
                Our Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Innovative solutions created by our talented members
              </p>
            </div>

            {/* Project Filter Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
              {projectTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedProjectTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 ${
                    selectedProjectTag === tag
                      ? "bg-blue-600 dark:bg-blue-500 text-white shadow-lg"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-300 dark:border-gray-600 hover:shadow-md"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-on-scroll group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full hover:scale-110 transition-transform duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                      >
                        <span className="text-sm">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-20 bg-white dark:bg-black transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:scale-105 transition-transform duration-300">
                Events & Workshops
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Join our upcoming events and expand your skills
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-on-scroll group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.images[0] || "/placeholder.svg"}
                      alt={event.name}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">
                        {new Date(event.date).toLocaleDateString()} at {event.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {event.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {event.currentParticipants}/{event.maxParticipants} registered
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{event.location}</span>
                    </div>
                    <span
                      aria-disabled="true"
                      className="w-full block text-center bg-gray-400 dark:bg-gray-700 text-gray-100 py-2 rounded-md font-medium cursor-not-allowed select-none"
                    >
                      Registration Closed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:scale-105 transition-transform duration-300">
                Meet the Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The passionate individuals driving innovation at TDH
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team
                .filter((member) => member.featured)
                .map((member, index) => (
                  <div
                    key={member.id}
                    className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-on-scroll group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={member.images[0] || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
                      <div className="flex justify-center space-x-4">
                        <a
                          href={member.linkedin}
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125"
                        >
                          <Linkedin size={20} />
                        </a>
                        <a
                          href={member.github}
                          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-125"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-black transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:scale-105 transition-transform duration-300">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Have questions or want to collaborate? We'd love to hear from you!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="hover:scale-105 transition-transform duration-300">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:shadow-md"
                    />
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:shadow-md"
                    />
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:shadow-md"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Membership Form & Contact Info */}
              <div className="space-y-8 animate-on-scroll">
                <div className="hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Join TDH</h3>
                  <form onSubmit={handleMembershipSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="member-name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="member-name"
                          name="name"
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm transition-all duration-300 hover:shadow-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="member-email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="member-email"
                          name="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm transition-all duration-300 hover:shadow-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="major"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Major/Field of Study
                      </label>
                      <input
                        type="text"
                        id="major"
                        name="major"
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm transition-all duration-300 hover:shadow-md"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="interests"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Areas of Interest
                      </label>
                      <textarea
                        id="interests"
                        name="interests"
                        rows={3}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm transition-all duration-300 hover:shadow-md"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 dark:bg-green-500 text-white py-2 rounded-md font-medium hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg"
                    >
                      Apply for Membership
                    </button>
                  </form>
                </div>

                <div className="hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 hover:scale-110 transition-transform duration-300">
                      <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                      <span className="text-gray-600 dark:text-gray-300">{siteData.contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                      <span className="text-gray-600 dark:text-gray-300">{siteData.contact.location}</span>
                    </div>
                  </div>
                </div>

                <div className="hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href={siteData.contact.socialLinks.instagram}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href={siteData.contact.socialLinks.linkedin}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href={siteData.contact.socialLinks.github}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-125"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Join Our WhatsApp Community</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Stay updated with the latest events, projects, and opportunities!
                  </p>
                  <a
                    href={siteData.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 dark:bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <MessageCircle size={20} />
                    <span>Join WhatsApp Group</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="md:col-span-2 animate-on-scroll">
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    src="/tdh-logo.png"
                    alt="TDH Logo"
                    className="h-8 w-8 dark:invert"
                  />
                  <h3 className="text-lg font-bold hover:scale-105 transition-transform duration-300">The Designnovation Hub</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  The Designnovation Hub - Empowering innovation through design and technology.
                </p>
                <div className="flex space-x-4">
                  <a
                    href={siteData.contact.socialLinks.instagram}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={siteData.contact.socialLinks.linkedin}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={siteData.contact.socialLinks.github}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="animate-on-scroll">
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {["Home", "Projects", "Events", "Team", "Contact"].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                  <li>
                    <a
                      href="/about"
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/gallery"
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>

              {/* (Removed code logo block as requested) */}
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center animate-on-scroll">
              <p className="text-gray-300 text-sm">© 2025 TDH - The Designnovation Hub. All rights reserved.</p>
              <p className="text-gray-300 text-sm mt-2 md:mt-0">Designed by TDH Web Team</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}


