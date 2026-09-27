import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ? site.toString() : 'https://huangguoju.cyou/';
  const cleanSiteUrl = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`;

  const robots = `User-agent: *
Allow: /
Disallow: /404/

User-agent: Googlebot
Allow: /

User-agent: bingbot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: yisouspider
Allow: /

Sitemap: ${cleanSiteUrl}sitemap-index.xml
Sitemap: ${cleanSiteUrl}sitemap.xml
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
