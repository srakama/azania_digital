import React from 'react';
import { Link } from 'react-router-dom';

const ReactConcurrentFeatures: React.FC = () => {
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
                Advanced React
              </span>
            </div>

            <h1 style={{
              fontSize: '3rem',
              fontWeight: '900',
              marginBottom: '1rem',
              lineHeight: '1.1'
            }}>
              Mastering React 18: Concurrent Features & Performance Optimization
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#94A3B8',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Explore React 18's revolutionary concurrent features, automatic batching, and Suspense improvements. 
              Learn how to implement startTransition, useDeferredValue, and optimize your app's performance.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#94A3B8' }}>By</span>
                <span style={{ color: 'white', fontWeight: '600' }}>AzaniaDigital Team</span>
              </div>
              <div style={{ color: '#94A3B8' }}>March 20, 2024</div>
              <div style={{ color: '#94A3B8' }}>12 min read</div>
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
              <h2 style={{ color: '#1F2937', marginBottom: '1rem' }}>Introduction to React 18 Concurrent Features</h2>
              <p>
                React 18 introduces groundbreaking concurrent features that fundamentally change how React handles rendering and user interactions. 
                These features enable React to prepare multiple versions of the UI at the same time, making your applications more responsive and performant.
              </p>

              <h3 style={{ color: '#1F2937', marginTop: '2rem', marginBottom: '1rem' }}>1. Automatic Batching</h3>
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

              <h3 style={{ color: '#1F2937', marginTop: '2rem', marginBottom: '1rem' }}>2. startTransition API</h3>
              <p>
                The <code style={{ background: '#F3F4F6', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>startTransition</code> API allows you to mark updates as non-urgent, letting React prioritize more important updates like user input.
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

              <h3 style={{ color: '#1F2937', marginTop: '2rem', marginBottom: '1rem' }}>3. Suspense Improvements</h3>
              <p>
                React 18 enhances Suspense with better support for server-side rendering and concurrent features. 
                You can now use Suspense for data fetching more effectively with libraries like React Query or SWR.
              </p>

              <div style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '1.5rem',
                margin: '1.5rem 0'
              }}>
                <h4 style={{ color: '#1F2937', marginBottom: '1rem' }}>💡 Pro Tip</h4>
                <p style={{ margin: 0, color: '#4B5563' }}>
                  Use Suspense boundaries strategically to create better loading experiences. 
                  Place them at route levels or around expensive components that fetch data.
                </p>
              </div>

              <h3 style={{ color: '#1F2937', marginTop: '2rem', marginBottom: '1rem' }}>4. useDeferredValue Hook</h3>
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

              <h3 style={{ color: '#1F2937', marginTop: '2rem', marginBottom: '1rem' }}>Performance Best Practices</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Use startTransition for non-urgent updates</strong> - Search results, filtering, sorting</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Leverage useDeferredValue</strong> - For expensive computations that can be delayed</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Optimize with React.memo</strong> - Prevent unnecessary re-renders</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Code splitting with Suspense</strong> - Load components only when needed</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Use React DevTools Profiler</strong> - Identify performance bottlenecks</li>
              </ul>

              <h3 style={{ color: '#1F2937', marginTop: '2rem', marginBottom: '1rem' }}>Migration Tips</h3>
              <p>
                Upgrading to React 18 is straightforward, but here are key considerations:
              </p>
              <ol style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Update to React 18 and ReactDOM 18</li>
                <li style={{ marginBottom: '0.5rem' }}>Replace ReactDOM.render with createRoot</li>
                <li style={{ marginBottom: '0.5rem' }}>Test automatic batching behavior</li>
                <li style={{ marginBottom: '0.5rem' }}>Gradually adopt concurrent features</li>
                <li style={{ marginBottom: '0.5rem' }}>Update TypeScript types if using TypeScript</li>
              </ol>

              <h3 style={{ color: '#1F2937', marginTop: '2rem', marginBottom: '1rem' }}>Real-World Example: Search Component</h3>
              <p>
                Here's a complete example showing how to implement a performant search component using React 18 features:
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
                <div><span style={{ color: '#F472B6' }}>import</span> React, {`{ useState, useDeferredValue, useTransition }`} <span style={{ color: '#F472B6' }}>from</span> <span style={{ color: '#A3E635' }}>'react'</span>;</div>
                <br />
                <div><span style={{ color: '#F472B6' }}>function</span> <span style={{ color: '#38BDF8' }}>OptimizedSearch</span>() {`{`}</div>
                <div style={{ marginLeft: '1rem' }}>
                  <span style={{ color: '#F472B6' }}>const</span> [<span style={{ color: '#38BDF8' }}>query</span>, <span style={{ color: '#38BDF8' }}>setQuery</span>] = <span style={{ color: '#38BDF8' }}>useState</span>(<span style={{ color: '#A3E635' }}>''</span>);
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <span style={{ color: '#F472B6' }}>const</span> [<span style={{ color: '#38BDF8' }}>results</span>, <span style={{ color: '#38BDF8' }}>setResults</span>] = <span style={{ color: '#38BDF8' }}>useState</span>([]);
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <span style={{ color: '#F472B6' }}>const</span> [<span style={{ color: '#38BDF8' }}>isPending</span>, <span style={{ color: '#38BDF8' }}>startTransition</span>] = <span style={{ color: '#38BDF8' }}>useTransition</span>();
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <span style={{ color: '#F472B6' }}>const</span> <span style={{ color: '#38BDF8' }}>deferredQuery</span> = <span style={{ color: '#38BDF8' }}>useDeferredValue</span>(query);
                </div>
                <br />
                <div style={{ marginLeft: '1rem' }}>
                  <span style={{ color: '#F472B6' }}>const</span> <span style={{ color: '#38BDF8' }}>handleSearch</span> = (<span style={{ color: '#38BDF8' }}>value</span>) => {`{`}
                </div>
                <div style={{ marginLeft: '2rem' }}>
                  <span style={{ color: '#38BDF8' }}>setQuery</span>(value);
                </div>
                <div style={{ marginLeft: '2rem' }}>
                  <span style={{ color: '#38BDF8' }}>startTransition</span>(() => {`{`}
                </div>
                <div style={{ marginLeft: '3rem' }}>
                  <span style={{ color: '#64748B' }}>// Expensive search operation</span>
                </div>
                <div style={{ marginLeft: '3rem' }}>
                  <span style={{ color: '#F472B6' }}>const</span> <span style={{ color: '#38BDF8' }}>searchResults</span> = <span style={{ color: '#38BDF8' }}>performSearch</span>(value);
                </div>
                <div style={{ marginLeft: '3rem' }}>
                  <span style={{ color: '#38BDF8' }}>setResults</span>(searchResults);
                </div>
                <div style={{ marginLeft: '2rem' }}>{`});`}</div>
                <div style={{ marginLeft: '1rem' }}>{`};`}</div>
                <br />
                <div style={{ marginLeft: '1rem' }}>
                  <span style={{ color: '#F472B6' }}>return</span> (
                </div>
                <div style={{ marginLeft: '2rem' }}>
                  &lt;<span style={{ color: '#38BDF8' }}>div</span>&gt;
                </div>
                <div style={{ marginLeft: '3rem' }}>
                  &lt;<span style={{ color: '#38BDF8' }}>input</span>
                </div>
                <div style={{ marginLeft: '4rem' }}>
                  <span style={{ color: '#F472B6' }}>value</span>={`{query}`}
                </div>
                <div style={{ marginLeft: '4rem' }}>
                  <span style={{ color: '#F472B6' }}>onChange</span>={`{e => handleSearch(e.target.value)}`}
                </div>
                <div style={{ marginLeft: '4rem' }}>
                  <span style={{ color: '#F472B6' }}>placeholder</span>=<span style={{ color: '#A3E635' }}>"Search..."</span>
                </div>
                <div style={{ marginLeft: '3rem' }}>
                  /&gt;
                </div>
                <div style={{ marginLeft: '3rem' }}>
                  {`{isPending && <div>Searching...</div>}`}
                </div>
                <div style={{ marginLeft: '3rem' }}>
                  &lt;<span style={{ color: '#38BDF8' }}>SearchResults</span> <span style={{ color: '#F472B6' }}>results</span>={`{results}`} <span style={{ color: '#F472B6' }}>query</span>={`{deferredQuery}`} /&gt;
                </div>
                <div style={{ marginLeft: '2rem' }}>
                  &lt;/<span style={{ color: '#38BDF8' }}>div</span>&gt;
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  );
                </div>
                <div>{`}`}</div>
              </div>

              <h3 style={{ color: '#1F2937', marginTop: '2rem', marginBottom: '1rem' }}>Conclusion</h3>
              <p>
                React 18's concurrent features represent a major leap forward in React's evolution. 
                By understanding and implementing these features, you can build more responsive, 
                performant applications that provide better user experiences. Start by adopting 
                automatic batching, then gradually introduce startTransition and useDeferredValue 
                where appropriate.
              </p>

              <div style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                color: 'white',
                padding: '2rem',
                borderRadius: '12px',
                margin: '2rem 0',
                textAlign: 'center'
              }}>
                <h4 style={{ marginBottom: '1rem', color: 'white' }}>Ready to upgrade your React app?</h4>
                <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
                  Let AzaniaDigital help you implement React 18's concurrent features in your application.
                </p>
                <Link to="/contact" className="btn" style={{
                  background: 'white',
                  color: '#0EA5E9',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}>
                  Get Expert Help →
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div style={{ 
              marginTop: '3rem', 
              paddingTop: '2rem', 
              borderTop: '1px solid #E5E7EB' 
            }}>
              <h4 style={{ marginBottom: '1rem', color: '#1F2937' }}>Tags</h4>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['React 18', 'Concurrent Mode', 'Performance', 'Suspense', 'TypeScript'].map((tag) => (
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

export default ReactConcurrentFeatures;
