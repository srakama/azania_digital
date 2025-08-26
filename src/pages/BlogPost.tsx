import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface BlogPostData {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: JSX.Element;
  tags: string[];
  relatedPosts: string[];
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const blogPosts: Record<string, BlogPostData> = {
    'react-18-concurrent-features': {
      id: 'react-18-concurrent-features',
      title: 'Mastering React 18: Concurrent Features & Performance Optimization',
      subtitle: 'Explore React 18\'s revolutionary concurrent features, automatic batching, and Suspense improvements',
      date: 'March 20, 2024',
      readTime: '12 min read',
      category: 'Advanced React',
      author: 'AzaniaDigital Team',
      tags: ['React 18', 'Concurrent Mode', 'Performance', 'Suspense', 'TypeScript'],
      relatedPosts: ['nextjs-14-app-router-guide', 'ai-integration-react-guide'],
      content: (
        <div>
          <h2>Introduction to React 18 Concurrent Features</h2>
          <p>
            React 18 introduces groundbreaking concurrent features that fundamentally change how React handles rendering and user interactions. 
            These features enable React to prepare multiple versions of the UI at the same time, making your applications more responsive and performant.
          </p>

          <h3>1. Automatic Batching</h3>
          <p>
            One of the most significant improvements in React 18 is automatic batching. Previously, React only batched updates inside event handlers. 
            Now, React batches all updates, including those in promises, timeouts, and native event handlers.
          </p>
          
          <div style={{
            background: '#1E293B',
            color: '#E2E8F0',
            padding: '1.5rem',
            borderRadius: '8px',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '0.875rem',
            margin: '1.5rem 0',
            overflow: 'auto'
          }}>
            <div style={{ color: '#64748B', marginBottom: '1rem' }}>// Before React 18 - No batching in promises</div>
            <div><span style={{ color: '#F472B6' }}>setTimeout</span>(() => {`{`}</div>
            <div style={{ marginLeft: '1rem' }}>
              <span style={{ color: '#38BDF8' }}>setCount</span>(c => c + 1); <span style={{ color: '#64748B' }}>// Re-render</span>
            </div>
            <div style={{ marginLeft: '1rem' }}>
              <span style={{ color: '#38BDF8' }}>setFlag</span>(f => !f); <span style={{ color: '#64748B' }}>// Re-render</span>
            </div>
            <div>{`}, 1000);`}</div>
            <br />
            <div style={{ color: '#64748B', marginBottom: '1rem' }}>// React 18 - Automatic batching</div>
            <div><span style={{ color: '#F472B6' }}>setTimeout</span>(() => {`{`}</div>
            <div style={{ marginLeft: '1rem' }}>
              <span style={{ color: '#38BDF8' }}>setCount</span>(c => c + 1); <span style={{ color: '#64748B' }}>// Batched</span>
            </div>
            <div style={{ marginLeft: '1rem' }}>
              <span style={{ color: '#38BDF8' }}>setFlag</span>(f => !f); <span style={{ color: '#64748B' }}>// Batched - Single re-render</span>
            </div>
            <div>{`}, 1000);`}</div>
          </div>

          <h3>2. startTransition API</h3>
          <p>
            The <code>startTransition</code> API allows you to mark updates as non-urgent, letting React prioritize more important updates like user input.
          </p>

          <div style={{
            background: '#1E293B',
            color: '#E2E8F0',
            padding: '1.5rem',
            borderRadius: '8px',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '0.875rem',
            margin: '1.5rem 0',
            overflow: 'auto'
          }}>
            <div><span style={{ color: '#F472B6' }}>import</span> {`{ startTransition, useTransition }`} <span style={{ color: '#F472B6' }}>from</span> <span style={{ color: '#A3E635' }}>'react'</span>;</div>
            <br />
            <div><span style={{ color: '#F472B6' }}>function</span> <span style={{ color: '#38BDF8' }}>SearchResults</span>() {`{`}</div>
            <div style={{ marginLeft: '1rem' }}>
              <span style={{ color: '#F472B6' }}>const</span> [<span style={{ color: '#38BDF8' }}>isPending</span>, <span style={{ color: '#38BDF8' }}>startTransition</span>] = <span style={{ color: '#38BDF8' }}>useTransition</span>();
            </div>
            <div style={{ marginLeft: '1rem' }}>
              <span style={{ color: '#F472B6' }}>const</span> [<span style={{ color: '#38BDF8' }}>query</span>, <span style={{ color: '#38BDF8' }}>setQuery</span>] = <span style={{ color: '#38BDF8' }}>useState</span>(<span style={{ color: '#A3E635' }}>''</span>);
            </div>
            <div style={{ marginLeft: '1rem' }}>
              <span style={{ color: '#F472B6' }}>const</span> [<span style={{ color: '#38BDF8' }}>results</span>, <span style={{ color: '#38BDF8' }}>setResults</span>] = <span style={{ color: '#38BDF8' }}>useState</span>([]);
            </div>
            <br />
            <div style={{ marginLeft: '1rem' }}>
              <span style={{ color: '#F472B6' }}>const</span> <span style={{ color: '#38BDF8' }}>handleSearch</span> = (<span style={{ color: '#38BDF8' }}>value</span>) => {`{`}
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span style={{ color: '#38BDF8' }}>setQuery</span>(value); <span style={{ color: '#64748B' }}>// Urgent update</span>
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span style={{ color: '#38BDF8' }}>startTransition</span>(() => {`{`}
            </div>
            <div style={{ marginLeft: '3rem' }}>
              <span style={{ color: '#38BDF8' }}>setResults</span>(<span style={{ color: '#38BDF8' }}>searchAPI</span>(value)); <span style={{ color: '#64748B' }}>// Non-urgent</span>
            </div>
            <div style={{ marginLeft: '2rem' }}>{`});`}</div>
            <div style={{ marginLeft: '1rem' }}>{`};`}</div>
            <div>{`}`}</div>
          </div>

          <h3>3. Suspense Improvements</h3>
          <p>
            React 18 enhances Suspense with better support for server-side rendering and concurrent features. 
            You can now use Suspense for data fetching more effectively.
          </p>

          <h3>4. useDeferredValue Hook</h3>
          <p>
            This hook lets you defer updating a part of the UI. It's particularly useful for expensive operations that don't need to be synchronous with user input.
          </p>

          <div style={{
            background: '#1E293B',
            color: '#E2E8F0',
            padding: '1.5rem',
            borderRadius: '8px',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '0.875rem',
            margin: '1.5rem 0',
            overflow: 'auto'
          }}>
            <div><span style={{ color: '#F472B6' }}>import</span> {`{ useDeferredValue, useState }`} <span style={{ color: '#F472B6' }}>from</span> <span style={{ color: '#A3E635' }}>'react'</span>;</div>
            <br />
            <div><span style={{ color: '#F472B6' }}>function</span> <span style={{ color: '#38BDF8' }}>App</span>() {`{`}</div>
            <div style={{ marginLeft: '1rem' }}>
              <span style={{ color: '#F472B6' }}>const</span> [<span style={{ color: '#38BDF8' }}>query</span>, <span style={{ color: '#38BDF8' }}>setQuery</span>] = <span style={{ color: '#38BDF8' }}>useState</span>(<span style={{ color: '#A3E635' }}>''</span>);
            </div>
            <div style={{ marginLeft: '1rem' }}>
              <span style={{ color: '#F472B6' }}>const</span> <span style={{ color: '#38BDF8' }}>deferredQuery</span> = <span style={{ color: '#38BDF8' }}>useDeferredValue</span>(query);
            </div>
            <br />
            <div style={{ marginLeft: '1rem' }}>
              <span style={{ color: '#F472B6' }}>return</span> (
            </div>
            <div style={{ marginLeft: '2rem' }}>
              &lt;<span style={{ color: '#38BDF8' }}>div</span>&gt;
            </div>
            <div style={{ marginLeft: '3rem' }}>
              &lt;<span style={{ color: '#38BDF8' }}>input</span> <span style={{ color: '#F472B6' }}>value</span>={`{query}`} <span style={{ color: '#F472B6' }}>onChange</span>={`{e => setQuery(e.target.value)}`} /&gt;
            </div>
            <div style={{ marginLeft: '3rem' }}>
              &lt;<span style={{ color: '#38BDF8' }}>SearchResults</span> <span style={{ color: '#F472B6' }}>query</span>={`{deferredQuery}`} /&gt;
            </div>
            <div style={{ marginLeft: '2rem' }}>
              &lt;/<span style={{ color: '#38BDF8' }}>div</span>&gt;
            </div>
            <div style={{ marginLeft: '1rem' }}>
              );
            </div>
            <div>{`}`}</div>
          </div>

          <h3>Performance Best Practices</h3>
          <ul>
            <li><strong>Use startTransition for non-urgent updates</strong> - Search results, filtering, sorting</li>
            <li><strong>Leverage useDeferredValue</strong> - For expensive computations that can be delayed</li>
            <li><strong>Optimize with React.memo</strong> - Prevent unnecessary re-renders</li>
            <li><strong>Code splitting with Suspense</strong> - Load components only when needed</li>
          </ul>

          <h3>Migration Tips</h3>
          <p>
            Upgrading to React 18 is straightforward, but here are key considerations:
          </p>
          <ol>
            <li>Update to React 18 and ReactDOM 18</li>
            <li>Replace ReactDOM.render with createRoot</li>
            <li>Test automatic batching behavior</li>
            <li>Gradually adopt concurrent features</li>
            <li>Update TypeScript types if using TypeScript</li>
          </ol>

          <h3>Conclusion</h3>
          <p>
            React 18's concurrent features represent a major leap forward in React's evolution. 
            By understanding and implementing these features, you can build more responsive, 
            performant applications that provide better user experiences.
          </p>
        </div>
      )
    }
  };

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div style={{ paddingTop: '80px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: 'white',
        paddingTop: '4rem',
        paddingBottom: '4rem'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
              <Link to="/blog" style={{ 
                color: '#38BDF8', 
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                ← Back to Blog
              </Link>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                background: 'rgba(14, 165, 233, 0.2)',
                color: '#38BDF8',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                {post.category}
              </span>
            </div>

            <h1 style={{
              fontSize: '3rem',
              fontWeight: '900',
              marginBottom: '1rem',
              lineHeight: '1.1'
            }}>
              {post.title}
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#94A3B8',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              {post.subtitle}
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#94A3B8' }}>By</span>
                <span style={{ color: 'white', fontWeight: '600' }}>{post.author}</span>
              </div>
              <div style={{ color: '#94A3B8' }}>{post.date}</div>
              <div style={{ color: '#94A3B8' }}>{post.readTime}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: '#374151'
            }}>
              {post.content}
            </div>

            {/* Tags */}
            <div style={{ 
              marginTop: '3rem', 
              paddingTop: '2rem', 
              borderTop: '1px solid #E5E7EB' 
            }}>
              <h4 style={{ marginBottom: '1rem', color: '#1F2937' }}>Tags</h4>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {post.tags.map((tag) => (
                  <span key={tag} style={{
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
