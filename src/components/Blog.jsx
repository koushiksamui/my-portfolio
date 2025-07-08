import React, { useState } from 'react';
import { Calendar, Clock, Tag, ArrowRight, Filter, BookOpen, ExternalLink } from 'lucide-react';
import { blogPosts, blogCategories, featuredPosts } from '../data/blogData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts.filter(post => post.status === 'published')
    : blogPosts.filter(post => post.category.toLowerCase().replace(' ', '-') === selectedCategory && post.status === 'published');

  const BlogCard = ({ post, featured = false }) => (
    <div className={`glass-card rounded-xl p-6 hover:bg-secondary-800/50 transition-all duration-300 group ${
      featured ? 'border-2 border-primary-600/50' : ''
    }`}>
      {featured && (
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
          <span className="text-primary-400 text-sm font-medium">Featured Post</span>
        </div>
      )}
      
      <div className="relative mb-4">
        <div className="w-full h-48 bg-gradient-to-br from-primary-600/20 to-purple-600/20 rounded-lg flex items-center justify-center overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full flex items-center justify-center text-6xl gradient-text hidden">
            <BookOpen />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-3 text-sm text-secondary-400">
        <div className="flex items-center space-x-1">
          <Calendar className="w-4 h-4" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{post.readTime}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Tag className="w-4 h-4" />
          <span>{post.category}</span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
        {post.title}
      </h3>
      
      <p className="text-secondary-300 mb-4 line-clamp-3 leading-relaxed">
        {post.excerpt}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.slice(0, 3).map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-secondary-800 text-secondary-300 rounded-full text-xs">
            #{tag}
          </span>
        ))}
        {post.tags.length > 3 && (
          <span className="px-2 py-1 bg-secondary-800 text-secondary-300 rounded-full text-xs">
            +{post.tags.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setSelectedPost(post)}
          className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <div className="text-sm text-secondary-500">
          by {post.author}
        </div>
      </div>
    </div>
  );

  const BlogModal = ({ post, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-secondary-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-secondary-800 rounded-lg hover:bg-secondary-700 transition-colors"
          >
            <span className="text-white text-xl">×</span>
          </button>

          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4 text-sm text-secondary-400">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>{post.category}</span>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
            <p className="text-secondary-400 text-lg mb-6">{post.excerpt}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="text-secondary-300 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-secondary-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">KS</span>
                </div>
                <div>
                  <div className="text-white font-medium">{post.author}</div>
                  <div className="text-secondary-400 text-sm">Full-Stack DevOps Developer</div>
                </div>
              </div>
              <div className="text-secondary-500 text-sm">
                Published on {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="blog" className="py-20 bg-secondary-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-secondary-400 max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences in DevOps, full-stack development, and cloud technologies
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Featured Posts</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-2 bg-secondary-800 rounded-lg p-1">
            <Filter className="w-4 h-4 text-secondary-400 mx-2" />
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'text-secondary-300 hover:text-white hover:bg-secondary-700'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl text-secondary-600 mb-4">📝</div>
            <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
            <p className="text-secondary-400">Try selecting a different category</p>
          </div>
        )}

        {/* Blog Modal */}
        {selectedPost && (
          <BlogModal 
            post={selectedPost} 
            onClose={() => setSelectedPost(null)} 
          />
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Stay Updated?</h3>
            <p className="text-secondary-400 mb-8">
              I regularly share insights about DevOps, cloud technologies, and full-stack development. 
              Connect with me on LinkedIn or GitHub to stay updated with my latest posts and projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://linkedin.com/in/koushik-samui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Follow on LinkedIn</span>
              </a>
              <a
                href="https://github.com/koushik-samui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 border border-primary-600 text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Follow on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
