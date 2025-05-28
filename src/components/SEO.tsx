import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  location?: 'East Towne' | 'Park Street';
  image?: string;
}

export function SEO({ 
  title = 'Inspire Barber & Beauty Salon - Professional Hair Care Services',
  description = 'Experience exceptional hair care and beauty services at Inspire Barber & Beauty Salon. Professional cuts, styling, and beauty treatments in Madison, WI.',
  location = 'East Towne',
  image = '/images/inspire logo.png'
}: SEOProps) {
  const siteUrl = 'https://inspiresalon.com';
  const fullTitle = `${title} | Inspire Barber & Beauty Salon ${location}`;
  const canonicalUrl = `${siteUrl}${location === 'Park Street' ? '/park-street' : ''}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Additional Meta Tags */}
      <meta name="keywords" content="barber shop, hair salon, haircuts, styling, beauty services, Madison, Wisconsin" />
      <meta name="author" content="Inspire Barber & Beauty Salon" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Geo Meta Tags */}
      <meta name="geo.region" content="US-WI" />
      <meta name="geo.placename" content={`${location}, Wisconsin`} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/images/inspire logo.png" />
    </Helmet>
  );
}