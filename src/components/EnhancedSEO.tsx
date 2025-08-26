import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: any;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = '',
  url = 'https://azaniadigital.co.za',
  image = 'https://azaniadigital.co.za/images/azaniadigital-og-image.jpg',
  type = 'website',
  author = 'AzaniaDigital',
  publishedTime,
  modifiedTime,
  structuredData
}) => {
  // Default structured data for the organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://azaniadigital.co.za/#organization",
        "name": "AzaniaDigital",
        "url": "https://azaniadigital.co.za",
        "logo": {
          "@type": "ImageObject",
          "url": "https://azaniadigital.co.za/images/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Professional web development services in South Africa specializing in React, TypeScript, Next.js, and modern web technologies.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ZA",
          "addressRegion": "Western Cape",
          "addressLocality": "Cape Town"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+27786511482",
          "contactType": "customer service",
          "availableLanguage": ["English", "Afrikaans"]
        },
        "sameAs": [
          "https://wa.me/27786511482",
          "https://linkedin.com/company/azaniadigital",
          "https://github.com/azaniadigital"
        ],
        "foundingDate": "2020",
        "numberOfEmployees": "5-10",
        "areaServed": {
          "@type": "Country",
          "name": "South Africa"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://azaniadigital.co.za/#website",
        "url": "https://azaniadigital.co.za",
        "name": "AzaniaDigital",
        "description": "Professional web development services in South Africa",
        "publisher": {
          "@id": "https://azaniadigital.co.za/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://azaniadigital.co.za/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "@id": "https://azaniadigital.co.za/#service",
        "name": "Web Development Services",
        "description": "Professional web development, e-commerce solutions, and digital marketing services",
        "provider": {
          "@id": "https://azaniadigital.co.za/#organization"
        },
        "serviceType": "Web Development",
        "areaServed": {
          "@type": "Country",
          "name": "South Africa"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Website Development",
                "description": "Bespoke website development using React, TypeScript, and modern technologies"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce Development",
                "description": "Full-featured online stores with payment integration and inventory management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Application Development",
                "description": "Complex web applications with advanced functionality and integrations"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Optimization",
                "description": "Search engine optimization to improve visibility and rankings"
              }
            }
          ]
        }
      }
    ]
  };

  // Merge custom structured data with default
  const finalStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData;

  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'AzaniaDigital', true);
    updateMetaTag('og:locale', 'en_ZA', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', url, true);

    // Article specific tags
    if (type === 'article') {
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
      updateMetaTag('article:author', author, true);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Structured Data
    let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(finalStructuredData);

    // Additional performance and mobile optimization tags
    updateMetaTag('theme-color', '#0EA5E9');
    updateMetaTag('msapplication-TileColor', '#0EA5E9');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Preconnect to external domains for performance
    const addPreconnect = (href: string) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        document.head.appendChild(link);
      }
    };

    addPreconnect('https://fonts.googleapis.com');
    addPreconnect('https://fonts.gstatic.com');
    addPreconnect('https://wa.me');
    addPreconnect('https://www.google-analytics.com');

  }, [title, description, keywords, url, image, type, author, publishedTime, modifiedTime, finalStructuredData]);

  return null; // This component doesn't render anything
};

export default EnhancedSEO;
