import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      author: 'Shiva',
      date: '2024-03-15',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components. This comprehensive guide covers useState, useEffect, and custom hooks.',
      category: 'React',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'TypeScript: Tips and Tricks',
      author: 'Shiva',
      date: '2024-03-10',
      excerpt: 'Discover advanced TypeScript patterns and techniques to write safer, more maintainable code. Perfect for developers looking to level up their TypeScript skills.',
      category: 'TypeScript',
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Building Scalable Node.js Applications',
      author: 'Shiva',
      date: '2024-03-05',
      excerpt: 'Explore best practices for building scalable Node.js applications including architecture patterns, database optimization, and deployment strategies.',
      category: 'Backend',
      readTime: '15 min read'
    },
    {
      id: 4,
      title: 'Mastering Tailwind CSS',
      author: 'Shiva',
      date: '2024-02-28',
      excerpt: 'A deep dive into Tailwind CSS utility-first approach. Learn how to build beautiful, responsive designs without leaving your HTML.',
      category: 'CSS',
      readTime: '10 min read'
    },
    {
      id: 5,
      title: 'Web Performance Optimization Guide',
      author: 'Shiva',
      date: '2024-02-20',
      excerpt: 'Learn proven techniques to optimize your web applications for better performance. Includes code splitting, lazy loading, and caching strategies.',
      category: 'Performance',
      readTime: '14 min read'
    },
    {
      id: 6,
      title: 'Introduction to GraphQL',
      author: 'Shiva',
      date: '2024-02-10',
      excerpt: 'Get started with GraphQL and learn why it\'s becoming the standard for API queries. Includes practical examples and best practices.',
      category: 'GraphQL',
      readTime: '11 min read'
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'React': 'bg-blue-500',
      'TypeScript': 'bg-purple-500',
      'Backend': 'bg-green-500',
      'CSS': 'bg-pink-500',
      'Performance': 'bg-orange-500',
      'GraphQL': 'bg-red-500'
    }
    return colors[category] || 'bg-gray-500'
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Blog
        </h1>
        <p className="text-gray-400 mb-12 text-lg">Articles about web development, JavaScript, React, and more</p>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition group"
            >
              {/* Category Badge */}
              <div className="mb-3">
                <span className={`${getCategoryColor(post.category)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
                {post.title}
              </h3>

              {/* Meta Information */}
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <FaCalendar className="text-blue-400" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <FaUser className="text-blue-400" />
                  {post.author}
                </span>
                <span>{post.readTime}</span>
              </div>

              {/* Excerpt */}
              <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition cursor-pointer">
                Read More <FaArrowRight size={14} />
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  )
}
