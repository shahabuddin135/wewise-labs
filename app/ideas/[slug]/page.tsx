'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, Copy } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

const IdeaDetail = () => {
  const params = useParams()
  const slug = params.slug
  const [idea, setIdea] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchIdea = async () => {
      try {
        const ideaData = await client.fetch(`
          *[_type == "idea" && slug.current == $slug][0] {
            title,
            "slug": slug.current,
            "imgUrl": image.asset->url,
            shortDescription,
            longDescription,
            category,
            tags,
            publishedAt,
            author,
            inspiration,
            featured
          }
        `, { slug })
        setIdea(ideaData)
      } catch (error) {
        console.error('Error fetching idea:', error)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchIdea()
    }
  }, [slug])

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (loading) {
    return (
      <main className='flex justify-center items-center flex-col min-h-screen p-4'>
        <div className='w-full max-w-6xl'>
          <div className='border-2 border-black dark:border-white p-5'>
            <p className='text-black dark:text-white'>Loading...</p>
          </div>
        </div>
      </main>
    )
  }

  if (!idea) {
    return (
      <main className='flex justify-center items-center flex-col min-h-screen p-4 my-0'>
        <div className='w-full max-w-6xl'>
          <div className='border-2 border-black dark:border-white p-5'>
            <h1 className='text-xl sm:text-2xl font-bold text-black dark:text-white mb-4'>Idea not found</h1>
            <Link href="/ideas">
              <button className='flex items-center gap-2 p-2 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'>
                <ArrowLeft size={16} />
                Back to Ideas
              </button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='flex justify-center items-center flex-col min-h-screen p-4 my-20'>
      {/* Back Button */}
      <div className='w-full max-w-6xl mt-8 sm:mt-12 md:mt-20 mb-6 sm:mb-8'>
        <Link href="/ideas">
          <button className='flex items-center gap-2 p-2 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-sm sm:text-base'>
            <ArrowLeft size={16} />
            Back to Ideas
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className='w-full max-w-6xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12'>
          {/* Image Section */}
          <div className='space-y-4'>
            <div className='border-2 border-black dark:border-white p-3 sm:p-4 md:p-5'>
              <Image 
                src={idea.imgUrl} 
                alt={idea.title}
                width={600}
                height={800}
                className='w-full h-auto object-cover'
              />
            </div>
          </div>

          {/* Content Section */}
          <div className='space-y-4 sm:space-y-6'>
            <div className='border-2 border-black dark:border-white p-3 sm:p-4 md:p-5'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-2'>
                {idea.title}
              </h1>
              <p className='text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4'>
                {idea.category} • {idea.publishedAt ? new Date(idea.publishedAt).toLocaleDateString() : 'No date'}
              </p>
              {idea.author && (
                <p className='text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4'>
                  By: {idea.author}
                </p>
              )}
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base'>
                {idea.shortDescription}
              </p>
            </div>

            {idea.longDescription && (
              <div className='border-2 border-black dark:border-white p-3 sm:p-4 md:p-5'>
                <h2 className='text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4'>
                  About this idea
                </h2>
                <div className='text-gray-700 dark:text-gray-300 leading-relaxed prose prose-gray dark:prose-invert max-w-none'>
                  <PortableText 
                    value={idea.longDescription}
                    components={{
                      block: {
                        h2: ({children}) => <h2 className="text-lg sm:text-xl font-semibold text-black dark:text-white mt-4 sm:mt-6 mb-2 sm:mb-3">{children}</h2>,
                        h3: ({children}) => <h3 className="text-base sm:text-lg font-medium text-black dark:text-white mt-3 sm:mt-4 mb-1 sm:mb-2">{children}</h3>,
                        normal: ({children}) => <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{children}</p>,
                        blockquote: ({children}) => <blockquote className="border-l-4 border-black dark:border-white pl-3 sm:pl-4 italic text-gray-600 dark:text-gray-400 my-3 sm:my-4 text-sm sm:text-base">{children}</blockquote>,
                      },
                      list: {
                        bullet: ({children}) => <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 space-y-1 text-sm sm:text-base">{children}</ul>,
                        number: ({children}) => <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 space-y-1 text-sm sm:text-base">{children}</ol>,
                      },
                      listItem: ({children}) => <li className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{children}</li>,
                    }}
                  />
                </div>
              </div>
            )}

            {idea.tags && idea.tags.length > 0 && (
              <div className='border-2 border-black dark:border-white p-3 sm:p-4 md:p-5'>
                <h3 className='text-base sm:text-lg font-medium text-black dark:text-white mb-3 sm:mb-4'>
                  Tags
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {idea.tags.map((tag: string, index: number) => (
                    <span 
                      key={index}
                      className='px-2 sm:px-3 py-1 border-2 border-black dark:border-white text-black dark:text-white text-xs sm:text-sm'
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className='space-y-3 sm:space-y-4'>
              <button
                className="flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black p-2 w-full hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white active:opacity-50 text-sm sm:text-base font-medium transition-colors duration-200"
                onClick={handleShare}
              >
                <Copy className="w-5 h-5" />
                {copied ? "Link Copied!" : "Share Idea"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IdeaDetail 