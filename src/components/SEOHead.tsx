import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'AzaniaDigital - Professional Web Development & Digital Solutions in South Africa',
  description = 'Transform your business with AzaniaDigital\'s expert web development, e-commerce solutions, and digital marketing services. Based in South Africa, serving clients worldwide.',
  keywords = 'web development, digital marketing, e-commerce, South Africa, website design, SEO, mobile apps, digital transformation, online business, Cape Town, Johannesburg',
  image = '/images/azaniadigital-og-image.jpg',
  url = 'https://azaniadigital.co.za',
  type = 'website',
  author = 'AzaniaDigital Team',
  publishedTime,
  modifiedTime,
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AzaniaDigital",
    "description": "Professional web development and digital solutions company based in South Africa",
    "url": "https://azaniadigital.co.za",
    "logo": "https://azaniadigital.co.za/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27-78-651-1482",
      "contactType": "customer service",
      "areaServed": "ZA",
      "availableLanguage": ["English", "Afrikaans"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZA",
      "addressRegion": "Western Cape",
      "addressLocality": "Cape Town"
    },
    "sameAs": [
      "https://www.facebook.com/azaniadigital",
      "https://www.linkedin.com/company/azaniadigital",
      "https://twitter.com/azaniadigital",
      "https://www.instagram.com/azaniadigital"
    ],
    "founder": {
      "@type": "Person",
      "name": "AzaniaDigital Founder"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Information Technology",
    "services": [
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "Custom website development and web applications"
      },
      {
        "@type": "Service", 
        "name": "E-commerce Solutions",
        "description": "Online store development and e-commerce platforms"
      },
      {
        "@type": "Service",
        "name": "Digital Marketing",
        "description": "SEO, social media marketing, and digital advertising"
      },
      {
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "iOS and Android mobile application development"
      }
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      let meta = document.querySelector(`meta[${property ? 'property' : 'name'}="${name}"]`);
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
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph tags
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'AzaniaDigital', true);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', url);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Structured data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(finalStructuredData);

  }, [title, description, keywords, url, image, type, author, finalStructuredData]);

  return (
    <div style={{ display: 'none' }}>
      {/* This component only manages head tags via useEffect */}
    </div>
  );
};

export default SEOHead;
