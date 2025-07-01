'use client'

import { HyperText } from '@/components/magicui/hyper-text'
import { TextAnimate } from '@/components/magicui/text-animate'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import { Search, Filter, X } from 'lucide-react'

// Fetch ideas from Sanity
async function getIdeas() {
  const ideas = await client.fetch(`
    *[_type == "idea"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      "imgUrl": image.asset->url,
      shortDescription,
      category,
      publishedAt,
      tags,
      author,
      featured
    }
  `)
  return ideas
}

const Ideas = () => {
  const [ideas, setIdeas] = useState<any[]>([])
  const [filteredIdeas, setFilteredIdeas] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const ideasData = await getIdeas()
        setIdeas(ideasData)
        setFilteredIdeas(ideasData)
      } catch (error) {
        console.error('Error fetching ideas:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchIdeas()
  }, [])

  // Get unique categories and tags
  const categories = ['all', ...Array.from(new Set(ideas.map(idea => idea.category).filter(Boolean)))]
  const allTags = ideas.flatMap(idea => idea.tags || []).filter(Boolean)
  const uniqueTags = Array.from(new Set(allTags))

  // Filter ideas based on search term, category, and tags
  useEffect(() => {
    let filtered = ideas

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(idea =>
        idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (idea.tags && idea.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(idea => idea.category === selectedCategory)
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(idea =>
        idea.tags && idea.tags.some((tag: string) => selectedTags.includes(tag))
      )
    }

    setFilteredIdeas(filtered)
  }, [ideas, searchTerm, selectedCategory, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedTags([])
  }

  const hasActiveFilters = searchTerm || selectedCategory !== 'all' || selectedTags.length > 0

  if (loading) {
    return (
      <main className='flex justify-center items-center flex-col min-h-screen p-4'>
        <div className='w-full max-w-6xl'>
          <div className='border-2 border-black dark:border-white p-5'>
            <p className='text-black dark:text-white'>Loading ideas...</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='flex justify-center items-center flex-col min-h-screen p-4'>
      {/* Header Section */}
      <div className='flex flex-col justify-center items-center border-4 border-black dark:border-white p-4 sm:p-6 md:p-10 mt-20 sm:mt-32 md:mt-44 h-64 sm:h-80 md:h-96 w-full max-w-6xl'>
        <h1 className='font-bold text-sm sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-5 text-black dark:text-white'>Back Rooms</h1>
        <HyperText characterSet={["I", "M", "A", "G", "I", "N", "E"]} className='text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-black dark:text-white'>IDEAS</HyperText>

        <TextAnimate animation="blurInUp" by="character" once className='font-bold text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-5 text-black dark:text-white text-center'>
          We Share Ideas here
        </TextAnimate>
      </div>

      {/* Search and Filter Section */}
      <div className='w-full max-w-6xl mt-8 sm:mt-12 md:mt-20 space-y-4 sm:space-y-6'>
        {/* Search Bar */}
        <div className='border-2 border-black dark:border-white p-3 sm:p-4 md:p-5'>
          <div className='flex items-center gap-2 sm:gap-3'>
            <Search className='text-black dark:text-white' size={18} />
            <input
              type="text"
              placeholder="Search ideas by title, description, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='flex-1 bg-transparent border-none outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base'
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className='text-black dark:text-white hover:opacity-70'
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Filter Toggle */}
        <div className='flex items-center justify-between'>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className='flex items-center gap-2 border-2 border-black dark:border-white p-2 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-sm sm:text-base'
          >
            <Filter size={16} />
            Filters
          </button>
          
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className='flex items-center gap-2 border-2 border-black dark:border-white p-2 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-sm sm:text-base'
            >
              <X size={16} />
              Clear All
            </button>
          )}
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className='border-2 border-black dark:border-white p-3 sm:p-4 md:p-5 space-y-4 sm:space-y-6'>
            {/* Category Filter */}
            <div>
              <h3 className='text-base sm:text-lg font-medium text-black dark:text-white mb-2 sm:mb-3'>Category</h3>
              <div className='flex flex-wrap gap-2'>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-2 sm:px-3 py-1 border-2 text-xs sm:text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-black dark:bg-white text-white dark:text-black'
                        : 'border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags Filter */}
            {uniqueTags.length > 0 && (
              <div>
                <h3 className='text-base sm:text-lg font-medium text-black dark:text-white mb-2 sm:mb-3'>Tags</h3>
                <div className='flex flex-wrap gap-2'>
                  {uniqueTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-2 sm:px-3 py-1 border-2 text-xs sm:text-sm transition-colors ${
                        selectedTags.includes(tag)
                          ? 'bg-black dark:bg-white text-white dark:text-black'
                          : 'border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Results Count */}
        <div className='border-2 border-black dark:border-white p-2 sm:p-3'>
          <p className='text-black dark:text-white text-sm sm:text-base'>
            Showing {filteredIdeas.length} of {ideas.length} ideas
          </p>
        </div>
      </div>

      {/* Ideas Grid */}
      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full max-w-6xl my-6 sm:mt-8 md:my-14 gap-4 sm:gap-6'>
        {filteredIdeas.map((idea: any, index: number) => (
          <Link href={`/ideas/${idea.slug}`} key={index}>
            <div className='border-2 border-black dark:border-white p-3 sm:p-4 md:p-5 cursor-pointer transition-transform duration-200 h-[500px] sm:h-[550px] md:h-[600px] flex flex-col relative'>
              {/* Featured Tag */}
              {idea.featured && (
                <div className='absolute top-2 right-2 z-10'>
                  <span className='bg-black dark:bg-white text-white dark:text-black px-2 py-1 text-xs font-medium'>
                    Featured
                  </span>
                </div>
              )}
              
              <div className='flex-shrink-0 mb-3 sm:mb-4 md:mb-5'>
                <Image 
                  src={idea.imgUrl} 
                  alt={idea.shortDescription} 
                  height={400} 
                  width={300} 
                  className='w-full h-48 sm:h-56 md:h-64 object-cover' 
                />
              </div>
              <div className='flex-1 flex flex-col'>
                <div className='flex-1'>
                  {/* Title - Primary Information */}
                  <h2 className='font-bold text-lg sm:text-xl text-black dark:text-white mb-2 line-clamp-2 leading-tight'>{idea.title}</h2>
                  
                  {/* Description - Secondary Information */}
                  <p className='text-gray-900/90 dark:text-gray-300 text-sm sm:text-base line-clamp-3 mb-4 leading-relaxed'>{idea.shortDescription}</p>
                  
                  {/* Meta Information - Tertiary Information */}
                  <div className='space-y-2 text-xs sm:text-sm'>
                    {idea.category && (
                      <div className='flex items-center'>
                        <span className='font-medium text-gray-700 dark:text-gray-300 mr-2'>Category:</span>
                        <span className='text-gray-600 dark:text-gray-400'>{idea.category}</span>
                      </div>
                    )}
                    {idea.author && (
                      <div className='flex items-center'>
                        <span className='font-medium text-gray-700 dark:text-gray-300 mr-2'>By:</span>
                        <span className='text-gray-600 dark:text-gray-400'>{idea.author}</span>
                      </div>
                    )}
                    {idea.publishedAt && (
                      <div className='flex items-center'>
                        <span className='font-medium text-gray-700 dark:text-gray-300 mr-2'>Date:</span>
                        <span className='text-gray-600 dark:text-gray-400'>{new Date(idea.publishedAt).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className='mt-auto pt-4'>
                  <button className="bg-black dark:bg-white text-white dark:text-black p-2 w-full hover:bg-white dark:hover:bg-black hover:text-black hover:border-black dark:hover:text-white active:opacity-50 text-sm sm:text-base font-medium transition-colors duration-200">Steal Idea</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* No Results */}
      {filteredIdeas.length === 0 && (
        <div className='w-full max-w-6xl mt-6 sm:mt-8 md:mt-10'>
          <div className='border-2 border-black dark:border-white p-6 sm:p-8 md:p-10 text-center'>
            <p className='text-black dark:text-white text-base sm:text-lg mb-4'>No ideas found matching your criteria</p>
            <button
              onClick={clearFilters}
              className='border-2 border-black dark:border-white p-2 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-sm sm:text-base'
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default Ideas