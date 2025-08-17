"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Filter, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function GalleryPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")

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

  const categories = ["All", "Workshops", "Events", "Projects", "Team", "Awards", "Partnerships"]
  const years = ["All", "2025", "2024", "2023", "2022", "2021", "2020"]

  const galleryItems = [
    {
      id: 1,
      title: "Design Thinking Workshop 2025",
      category: "Workshops",
      year: "2025",
      date: "March 15, 2025",
      location: "Innovation Lab",
      participants: 45,
      description: "A comprehensive workshop on design thinking methodologies and their application in real-world projects.",
      image: "/placeholder.svg?height=400&width=600&text=Design+Workshop+2025",
      tags: ["Design Thinking", "Innovation", "Workshop"],
    },
    {
      id: 2,
      title: "AI & ML Bootcamp",
      category: "Workshops",
      year: "2025",
      date: "February 28, 2025",
      location: "Tech Auditorium",
      participants: 60,
      description: "Intensive 3-day bootcamp covering machine learning fundamentals and practical applications.",
      image: "/placeholder.svg?height=400&width=600&text=AI+ML+Bootcamp",
      tags: ["AI", "Machine Learning", "Bootcamp"],
    },
    {
      id: 3,
      title: "Innovation Showcase 2024",
      category: "Events",
      year: "2024",
      date: "December 10, 2024",
      location: "Main Hall",
      participants: 200,
      description: "Annual showcase featuring student projects and innovations from across the university.",
      image: "/placeholder.svg?height=400&width=600&text=Innovation+Showcase+2024",
      tags: ["Showcase", "Innovation", "Projects"],
    },
    {
      id: 4,
      title: "Smart Campus Navigation System",
      category: "Projects",
      year: "2024",
      date: "November 15, 2024",
      location: "Campus-wide",
      participants: 12,
      description: "IoT-based indoor navigation system developed by TDH members for university campus.",
      image: "/placeholder.svg?height=400&width=600&text=Smart+Campus+Navigation",
      tags: ["IoT", "Navigation", "Hardware"],
    },
    {
      id: 5,
      title: "Collaborative Code Editor",
      category: "Projects",
      year: "2024",
      date: "October 20, 2024",
      location: "Online Platform",
      participants: 8,
      description: "Real-time collaborative coding platform with video chat integration.",
      image: "/placeholder.svg?height=400&width=600&text=Collaborative+Code+Editor",
      tags: ["Web Development", "Collaboration", "Real-time"],
    },
    {
      id: 6,
      title: "Team Building Retreat",
      category: "Team",
      year: "2024",
      date: "September 5, 2024",
      location: "Mountain Resort",
      participants: 25,
      description: "Annual team building retreat to strengthen bonds and foster collaboration.",
      image: "/placeholder.svg?height=400&width=600&text=Team+Building+Retreat",
      tags: ["Team Building", "Retreat", "Collaboration"],
    },
    {
      id: 7,
      title: "Best Innovation Award 2024",
      category: "Awards",
      year: "2024",
      date: "August 15, 2024",
      location: "Tech Conference",
      participants: 5,
      description: "TDH won the Best Innovation Award at the National Tech Conference 2024.",
      image: "/placeholder.svg?height=400&width=600&text=Best+Innovation+Award",
      tags: ["Award", "Recognition", "Innovation"],
    },
    {
      id: 8,
      title: "Partnership with TechCorp",
      category: "Partnerships",
      year: "2024",
      date: "July 10, 2024",
      location: "TechCorp HQ",
      participants: 10,
      description: "Strategic partnership agreement with TechCorp for student internship programs.",
      image: "/placeholder.svg?height=400&width=600&text=TechCorp+Partnership",
      tags: ["Partnership", "Internship", "Industry"],
    },
    {
      id: 9,
      title: "UX/UI Design Workshop",
      category: "Workshops",
      year: "2023",
      date: "December 5, 2023",
      location: "Design Studio",
      participants: 35,
      description: "Hands-on workshop on user experience and user interface design principles.",
      image: "/placeholder.svg?height=400&width=600&text=UX+UI+Workshop",
      tags: ["UX/UI", "Design", "Workshop"],
    },
    {
      id: 10,
      title: "Hackathon 2023",
      category: "Events",
      year: "2023",
      date: "November 20, 2023",
      location: "Innovation Center",
      participants: 150,
      description: "48-hour hackathon bringing together students from various disciplines.",
      image: "/placeholder.svg?height=400&width=600&text=Hackathon+2023",
      tags: ["Hackathon", "Competition", "Innovation"],
    },
    {
      id: 11,
      title: "Sustainable Tech Project",
      category: "Projects",
      year: "2023",
      date: "October 10, 2023",
      location: "Campus Green",
      participants: 15,
      description: "Hardware project focused on sustainable technology and energy conservation.",
      image: "/placeholder.svg?height=400&width=600&text=Sustainable+Tech",
      tags: ["Sustainability", "Hardware", "Energy"],
    },
    {
      id: 12,
      title: "Alumni Meet 2023",
      category: "Team",
      year: "2023",
      date: "September 15, 2023",
      location: "Alumni Center",
      participants: 50,
      description: "Annual alumni meet to connect current members with successful TDH alumni.",
      image: "/placeholder.svg?height=400&width=600&text=Alumni+Meet+2023",
      tags: ["Alumni", "Networking", "Community"],
    },
  ]

  const filteredItems = galleryItems.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory
    const yearMatch = selectedYear === "All" || item.year === selectedYear
    return categoryMatch && yearMatch
  })

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
              <h1 className="text-xl font-bold">The Designnovation Hub Gallery</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A visual journey through our events, workshops, projects, and achievements. 
            Explore the moments that define TDH's journey of innovation and creativity.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{galleryItems.length} Events</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users size={16} />
              <span>1000+ Participants</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span>Multiple Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No items found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Try adjusting your filters to see more results.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedYear("All")
                }}
                className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-sm rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-full">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{item.participants} participants</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Gallery Statistics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Numbers that tell our story
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {galleryItems.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Total Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {years.length - 1}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                1000+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Participants</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join TDH and create memories that will be featured in our gallery. 
            Start your journey of innovation and creativity today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Join TDH
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