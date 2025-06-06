import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Mastering React 18: Concurrent Features & Performance",
      excerpt: "Deep dive into React 18's concurrent features, automatic batching, startTransition, and useDeferredValue. Learn to build lightning-fast React applications with proper state management and performance optimization techniques.",
      fullContent: `
        <h2>React 18 Revolutionary Features</h2>
        <p>React 18 introduces groundbreaking concurrent features that fundamentally change how React handles rendering. These features enable React to prepare multiple versions of the UI simultaneously, making applications more responsive.</p>

        <h3>1. Automatic Batching</h3>
        <p>React 18 automatically batches all updates, including those in promises, timeouts, and native event handlers. This reduces re-renders and improves performance significantly.</p>

        <pre><code>// Before React 18 - Multiple re-renders
setTimeout(() => {
  setCount(c => c + 1); // Re-render
  setFlag(f => !f);     // Re-render
}, 1000);

// React 18 - Single re-render
setTimeout(() => {
  setCount(c => c + 1); // Batched
  setFlag(f => !f);     // Batched
}, 1000);</code></pre>

        <h3>2. startTransition API</h3>
        <p>Mark updates as non-urgent, allowing React to prioritize user input over expensive operations like search results or data filtering.</p>

        <pre><code>import { startTransition, useTransition } from 'react';

function SearchComponent() {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setQuery(value); // Urgent update
    startTransition(() => {
      setResults(searchAPI(value)); // Non-urgent
    });
  };
}</code></pre>

        <h3>3. useDeferredValue Hook</h3>
        <p>Defer updating expensive components that don't need to be synchronous with user input.</p>

        <pre><code>function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ExpensiveComponent query={deferredQuery} />
    </div>
  );
}</code></pre>

        <h3>Performance Best Practices</h3>
        <ul>
          <li>Use startTransition for search, filtering, and sorting operations</li>
          <li>Implement useDeferredValue for expensive computations</li>
          <li>Leverage React.memo to prevent unnecessary re-renders</li>
          <li>Code split with Suspense for better loading experiences</li>
          <li>Use React DevTools Profiler to identify bottlenecks</li>
        </ul>

        <h3>Migration Guide</h3>
        <ol>
          <li>Update to React 18 and ReactDOM 18</li>
          <li>Replace ReactDOM.render with createRoot</li>
          <li>Test automatic batching behavior</li>
          <li>Gradually adopt concurrent features</li>
          <li>Update TypeScript types</li>
        </ol>

        <p>React 18's concurrent features represent a major evolution in React development. By implementing these features, you can build more responsive, performant applications that provide superior user experiences.</p>
      `,
      date: "March 20, 2024",
      readTime: "12 min read",
      category: "React",
      image: "⚛️"
    },
    {
      id: 2,
      title: "Next.js 14 App Router: Production-Ready Applications",
      excerpt: "Complete guide to Next.js 14's App Router, Server Components, and streaming. Build scalable full-stack applications with TypeScript, advanced caching strategies, and modern deployment techniques.",
      fullContent: `
        <h2>Next.js 14 App Router Deep Dive</h2>
        <p>Next.js 14's App Router represents a paradigm shift in React development, introducing Server Components, improved caching, and better developer experience.</p>

        <h3>1. App Router Architecture</h3>
        <p>The new file-based routing system uses the app directory with layout.tsx, page.tsx, and loading.tsx files for better organization and performance.</p>

        <pre><code>app/
├── layout.tsx          // Root layout
├── page.tsx           // Home page
├── about/
│   └── page.tsx       // About page
├── blog/
│   ├── layout.tsx     // Blog layout
│   ├── page.tsx       // Blog listing
│   └── [slug]/
│       └── page.tsx   // Individual blog post
└── api/
    └── posts/
        └── route.ts   // API endpoint</code></pre>

        <h3>2. Server Components</h3>
        <p>Server Components run on the server, reducing bundle size and improving performance. They can directly access databases and APIs.</p>

        <pre><code>// app/blog/page.tsx - Server Component
import { getPosts } from '@/lib/api';

export default async function BlogPage() {
  const posts = await getPosts(); // Direct database access

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}</code></pre>

        <h3>3. Advanced Caching Strategies</h3>
        <p>Next.js 14 provides multiple caching layers for optimal performance:</p>

        <ul>
          <li><strong>Request Memoization</strong> - Automatic deduplication of fetch requests</li>
          <li><strong>Data Cache</strong> - Persistent cache across requests and deployments</li>
          <li><strong>Full Route Cache</strong> - Pre-rendered routes at build time</li>
          <li><strong>Router Cache</strong> - Client-side cache for visited routes</li>
        </ul>

        <pre><code>// Revalidate data every hour
export async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 }
  });
  return res.json();
}

// Revalidate on demand
import { revalidateTag } from 'next/cache';

export async function createPost(data) {
  await savePost(data);
  revalidateTag('posts'); // Invalidate posts cache
}</code></pre>

        <h3>4. Streaming and Suspense</h3>
        <p>Stream components as they become ready, improving perceived performance.</p>

        <pre><code>import { Suspense } from 'react';
import { PostList } from './components/PostList';
import { Sidebar } from './components/Sidebar';

export default function BlogPage() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <Suspense fallback={<PostsSkeleton />}>
          <PostList />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
      </div>
    </div>
  );
}</code></pre>

        <h3>5. TypeScript Integration</h3>
        <p>Next.js 14 provides excellent TypeScript support with automatic type generation for routes and API endpoints.</p>

        <pre><code>// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const posts = await getPosts();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const post = await createPost(body);
  return NextResponse.json(post, { status: 201 });
}</code></pre>

        <h3>Production Deployment</h3>
        <p>Deploy Next.js 14 applications with confidence using these strategies:</p>

        <ul>
          <li>Use Vercel for seamless deployment and edge functions</li>
          <li>Configure environment variables properly</li>
          <li>Implement proper error boundaries</li>
          <li>Set up monitoring with Sentry or similar tools</li>
          <li>Use CDN for static assets</li>
        </ul>

        <p>Next.js 14's App Router provides a robust foundation for building modern web applications. The combination of Server Components, advanced caching, and streaming creates exceptional user experiences while maintaining developer productivity.</p>
      `,
      date: "March 18, 2024",
      readTime: "15 min read",
      category: "Next.js",
      image: "🚀"
    },
    {
      id: 3,
      title: "AI Integration: OpenAI, Claude & Custom Models in React",
      excerpt: "Learn to integrate AI capabilities into React applications. From OpenAI GPT-4 to Claude API, build intelligent features with proper error handling, streaming responses, and cost optimization.",
      fullContent: `
        <h2>Building AI-Powered React Applications</h2>
        <p>Integrating AI into React applications opens up incredible possibilities. This guide covers implementing OpenAI, Claude, and custom AI models with best practices for production use.</p>

        <h3>1. OpenAI Integration</h3>
        <p>Start with OpenAI's powerful GPT models for text generation, analysis, and conversation.</p>

        <pre><code>// lib/openai.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateText(prompt: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to generate text');
  }
}</code></pre>

        <h3>2. Streaming Responses</h3>
        <p>Implement streaming for better user experience with long AI responses.</p>

        <pre><code>// components/AIChat.tsx
import { useState } from 'react';

export function AIChat() {
  const [messages, setMessages] = useState([]);
  const [isStreaming, setIsStreaming] = useState(false);

  const sendMessage = async (prompt: string) => {
    setIsStreaming(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const reader = response.body?.getReader();
      let currentMessage = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        currentMessage += chunk;

        setMessages(prev => [
          ...prev.slice(0, -1),
          { role: 'assistant', content: currentMessage }
        ]);
      }
    } catch (error) {
      console.error('Streaming error:', error);
    } finally {
      setIsStreaming(false);
    }
  };
}</code></pre>

        <h3>3. Claude API Integration</h3>
        <p>Anthropic's Claude offers excellent reasoning capabilities and safety features.</p>

        <pre><code>// lib/claude.ts
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function askClaude(prompt: string) {
  try {
    const message = await anthropic.messages.create({
      model: "claude-3-sonnet-20240229",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    });

    return message.content[0].text;
  } catch (error) {
    console.error('Claude API error:', error);
    throw new Error('Failed to get Claude response');
  }
}</code></pre>

        <h3>4. Error Handling & Fallbacks</h3>
        <p>Implement robust error handling for production AI applications.</p>

        <pre><code>// hooks/useAI.ts
import { useState, useCallback } from 'react';

export function useAI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateResponse = useCallback(async (prompt: string) => {
    setLoading(true);
    setError(null);

    try {
      // Try OpenAI first
      return await generateText(prompt);
    } catch (openaiError) {
      console.warn('OpenAI failed, trying Claude:', openaiError);

      try {
        // Fallback to Claude
        return await askClaude(prompt);
      } catch (claudeError) {
        console.error('All AI services failed:', claudeError);
        setError('AI services are temporarily unavailable');
        return null;
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { generateResponse, loading, error };
}</code></pre>

        <h3>5. Cost Optimization</h3>
        <p>Manage AI API costs effectively with these strategies:</p>

        <ul>
          <li><strong>Token Management</strong> - Monitor and limit token usage</li>
          <li><strong>Caching</strong> - Cache similar requests to avoid duplicate API calls</li>
          <li><strong>Model Selection</strong> - Use appropriate models for different tasks</li>
          <li><strong>Rate Limiting</strong> - Implement user-based rate limiting</li>
          <li><strong>Prompt Optimization</strong> - Write efficient prompts</li>
        </ul>

        <pre><code>// lib/cache.ts
const responseCache = new Map();

export async function getCachedResponse(prompt: string) {
  const cacheKey = hashPrompt(prompt);

  if (responseCache.has(cacheKey)) {
    return responseCache.get(cacheKey);
  }

  const response = await generateText(prompt);
  responseCache.set(cacheKey, response);

  // Cache for 1 hour
  setTimeout(() => responseCache.delete(cacheKey), 3600000);

  return response;
}</code></pre>

        <h3>6. Custom Model Integration</h3>
        <p>Integrate custom or open-source models using Hugging Face or local deployments.</p>

        <pre><code>// lib/huggingface.ts
import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function generateWithCustomModel(prompt: string) {
  try {
    const response = await hf.textGeneration({
      model: 'microsoft/DialoGPT-medium',
      inputs: prompt,
      parameters: {
        max_new_tokens: 100,
        temperature: 0.7,
      },
    });

    return response.generated_text;
  } catch (error) {
    console.error('Hugging Face API error:', error);
    throw new Error('Custom model generation failed');
  }
}</code></pre>

        <h3>Security Considerations</h3>
        <ul>
          <li>Never expose API keys in client-side code</li>
          <li>Implement proper authentication and authorization</li>
          <li>Sanitize user inputs to prevent prompt injection</li>
          <li>Monitor API usage and set spending limits</li>
          <li>Implement content filtering for inappropriate responses</li>
        </ul>

        <p>AI integration in React applications opens up endless possibilities for creating intelligent, responsive user experiences. By following these patterns and best practices, you can build robust AI-powered features that delight users while maintaining performance and cost efficiency.</p>
      `,
      date: "March 15, 2024",
      readTime: "18 min read",
      category: "AI",
      image: "🤖"
    }
  ];

  const categories = ["All", "Technology", "Design", "Security", "Marketing", "Development", "Maintenance"];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: `
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
          `,
          animation: 'float 6s ease-in-out infinite'
        }}></div>

        {/* Knowledge Grid Pattern */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: `
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px',
          opacity: '0.3'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {/* Knowledge Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '50px',
              padding: '0.5rem 1.5rem',
              marginBottom: '2rem',
              color: '#C084FC',
              fontSize: '0.875rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              <span style={{ fontSize: '1rem' }}>📚</span>
              Knowledge Hub
            </div>

            <h1 style={{
              fontSize: '4.5rem',
              fontWeight: '900',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #C084FC 0%, #8B5CF6 25%, #6366F1 50%, #3B82F6 75%, #0EA5E9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.1',
              textShadow: '0 0 40px rgba(139, 92, 246, 0.3)'
            }}>
              Tech Insights & <br />
              <span style={{
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #0EA5E9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Development Guides
              </span>
            </h1>

            {/* Blog Categories */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              {[
                { name: 'React Tutorials', color: '#38BDF8' },
                { name: 'Next.js Guides', color: '#10B981' },
                { name: 'AI Integration', color: '#8B5CF6' },
                { name: 'Performance Tips', color: '#F59E0B' },
                { name: 'Best Practices', color: '#EF4444' }
              ].map((category, index) => (
                <span key={category.name} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  color: category.color,
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  backdropFilter: 'blur(10px)',
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
                }}>
                  {category.name}
                </span>
              ))}
            </div>

            <p style={{
              fontSize: '1.375rem',
              color: '#CBD5E1',
              marginBottom: '3rem',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto 3rem',
              fontWeight: '500'
            }}>
              Stay ahead with <span style={{ color: '#C084FC', fontWeight: '600' }}>cutting-edge development practices</span>,
              <span style={{ color: '#38BDF8', fontWeight: '600' }}> framework tutorials</span>, and
              <span style={{ color: '#34D399', fontWeight: '600' }}>industry insights</span> from our expert team.
            </p>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}>
              <a href="#blog-posts" className="btn btn-primary btn-lg" style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #C084FC 100%)',
                boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
                border: 'none',
                textDecoration: 'none'
              }}>
                <span style={{ marginRight: '0.5rem' }}>📖</span>
                Explore Articles
              </a>
              <a href="#newsletter" className="btn btn-secondary btn-lg" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#E2E8F0',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                textDecoration: 'none'
              }}>
                <span style={{ marginRight: '0.5rem' }}>📧</span>
                Subscribe
              </a>
            </div>

            {/* Blog Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '2rem',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              {[
                { number: '50+', label: 'Articles', color: '#C084FC' },
                { number: '10k+', label: 'Readers', color: '#38BDF8' },
                { number: 'Weekly', label: 'Updates', color: '#34D399' },
                { number: 'Free', label: 'Access', color: '#F59E0B' }
              ].map((stat, index) => (
                <div key={stat.label} style={{
                  textAlign: 'center',
                  animation: `fadeIn 0.8s ease-out ${index * 0.2}s both`
                }}>
                  <div style={{
                    fontSize: '1.75rem',
                    fontWeight: '900',
                    color: stat.color,
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#CBD5E1',
                    fontWeight: '600'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section style={{ padding: '2rem 0', background: 'white', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                style={{
                  padding: '0.5rem 1.5rem',
                  border: '2px solid #E2E8F0',
                  borderRadius: '25px',
                  background: category === 'All' ? 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)' : 'white',
                  color: category === 'All' ? 'white' : '#1E293B',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem'
                }}
                onMouseEnter={(e) => {
                  if (category !== 'All') {
                    e.currentTarget.style.borderColor = '#0EA5E9';
                    e.currentTarget.style.color = '#0EA5E9';
                  }
                }}
                onMouseLeave={(e) => {
                  if (category !== 'All') {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.color = '#1E293B';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section id="blog-posts" className="section">
        <div className="container">
          <div className="grid grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="card" style={{ cursor: 'pointer' }}>
                <div style={{
                  fontSize: '3rem',
                  textAlign: 'center',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
                  borderRadius: '12px'
                }}>
                  {post.image}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                    color: 'white',
                    borderRadius: '15px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {post.category}
                  </span>
                  <span style={{ color: '#1E293B', fontSize: '0.875rem', fontWeight: '500' }}>
                    {post.readTime}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: '#1E293B',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h3>

                <p style={{
                  color: '#1E293B',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}>
                  {post.excerpt}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid #E2E8F0'
                }}>
                  <span style={{ color: '#1E293B', fontSize: '0.875rem', fontWeight: '500' }}>
                    {post.date}
                  </span>
                  <button
                    onClick={() => {
                      const modal = document.createElement('div');
                      modal.style.cssText = `
                        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                        background: rgba(0,0,0,0.8); z-index: 1000;
                        display: flex; align-items: center; justify-content: center;
                        padding: 2rem; overflow-y: auto;
                      `;
                      modal.innerHTML = `
                        <div style="
                          background: white; border-radius: 12px; max-width: 800px;
                          width: 100%; max-height: 90vh; overflow-y: auto;
                          padding: 2rem; position: relative;
                        ">
                          <button onclick="this.closest('div').remove()" style="
                            position: absolute; top: 1rem; right: 1rem;
                            background: #f3f4f6; border: none; border-radius: 50%;
                            width: 40px; height: 40px; cursor: pointer;
                            font-size: 1.2rem; color: #6b7280;
                          ">×</button>
                          <h1 style="color: #1f2937; margin-bottom: 1rem; font-size: 2rem; font-weight: 700;">
                            ${post.title}
                          </h1>
                          <div style="margin-bottom: 2rem; color: #6b7280; font-size: 0.9rem;">
                            ${post.category} • ${post.readTime} • ${post.date}
                          </div>
                          <div style="line-height: 1.7; color: #374151;">
                            ${post.fullContent}
                          </div>
                        </div>
                      `;
                      modal.onclick = (e) => e.target === modal && modal.remove();
                      document.body.appendChild(modal);
                    }}
                    style={{
                      color: '#0EA5E9',
                      background: 'none',
                      border: 'none',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      cursor: 'pointer'
                    }}
                  >
                    Read Full Article →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section" style={{
        background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #6366F1 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Stay Updated
            </h2>
            <p style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              opacity: '0.9'
            }}>
              Subscribe to our newsletter and get the latest web development tips,
              trends, and insights delivered directly to your inbox.
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              maxWidth: '400px',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: '1',
                  minWidth: '250px',
                  padding: '0.875rem 1rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  color: '#1E293B',
                  backgroundColor: 'white'
                }}
              />
              <button className="btn" style={{
                background: 'white',
                color: '#0EA5E9',
                fontWeight: '600',
                border: 'none'
              }}>
                📧 Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}>
        <div className="container">
          <h2 className="section-title">Featured Resources</h2>
          <p className="section-subtitle">
            Essential guides and resources to help you succeed in the digital world.
          </p>

          <div className="grid grid-cols-3">
            <div className="card">
              <div className="card-icon">📚</div>
              <h3 className="card-title">Web Development Guide</h3>
              <p className="card-text">
                Complete guide to modern web development practices, tools, and frameworks.
              </p>
              <Link to="/resources/web-dev-guide" className="btn btn-primary">
                Download Free
              </Link>
            </div>

            <div className="card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">SEO Checklist</h3>
              <p className="card-text">
                Step-by-step checklist to optimize your website for search engines.
              </p>
              <Link to="/resources/seo-checklist" className="btn btn-primary">
                Get Checklist
              </Link>
            </div>

            <div className="card">
              <div className="card-icon">💡</div>
              <h3 className="card-title">Design Inspiration</h3>
              <p className="card-text">
                Curated collection of modern website designs and UI/UX patterns.
              </p>
              <Link to="/resources/design-inspiration" className="btn btn-primary">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
