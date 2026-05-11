# SEO Optimization Guide - TerraSight Consultancy

## ✅ What Has Been Implemented

### 1. **Meta Tags & SEO Basics**
- ✅ Enhanced title tag with location and keywords
- ✅ Comprehensive meta description (155 characters optimal)
- ✅ Extended keyword list targeting geology consultancy in India
- ✅ Author, robots, and language meta tags
- ✅ Canonical URL to prevent duplicate content issues

### 2. **Social Media Optimization**
- ✅ **Open Graph tags** (Facebook, LinkedIn sharing)
  - og:type, og:url, og:title, og:description, og:image
  - og:site_name, og:locale (en_IN for India)
- ✅ **Twitter Card tags** for better Twitter sharing
  - Large image card format
  - Dedicated Twitter title and description

### 3. **Geographic SEO**
- ✅ Geo meta tags with your location (Tiruchirappalli, Tamil Nadu)
- ✅ Coordinates: 10.787155, 78.672211
- ✅ Region code: IN-TN

### 4. **Structured Data (Schema.org)**
- ✅ **ProfessionalService** schema with:
  - Business name, description, contact info
  - Physical address and geo-coordinates
  - Service types and area served
- ✅ **Service catalog** schema listing all three service categories
- ✅ JSON-LD format (Google's preferred method)

### 5. **Semantic HTML**
- ✅ Language attribute: `lang="en-IN"`
- ✅ ARIA labels on SVG icons for accessibility
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Semantic HTML5 elements (nav, section, footer)

### 6. **Technical SEO Files**
- ✅ `robots.txt` - Guides search engine crawlers
- ✅ `sitemap.xml` - Helps search engines discover pages
- ✅ `.htaccess` - Performance optimizations (GZIP, caching)

### 7. **Performance Optimizations**
- ✅ Font preconnect for faster loading
- ✅ Browser caching rules in .htaccess
- ✅ GZIP compression enabled

---

## ⚠️ ACTION REQUIRED - Update These Items

### 1. **Update URLs** (Replace placeholder with your actual GitHub Pages URL)
Find and replace `https://yourusername.github.io/website/` with your actual URL in:
- Line 20: Canonical URL
- Lines 23-28: Open Graph URLs
- Lines 31-35: Twitter Card URLs
- Lines 47-48: Structured Data URLs
- `robots.txt`: Sitemap URL
- `sitemap.xml`: All URL entries

**Example:** If your GitHub username is `kavin-ts` and repo is `terrasight-website`:
Replace with: `https://kavin-ts.github.io/terrasight-website/`

### 2. **Create Social Media Image** (og-image.jpg)
- Create a 1200x630px image for social media sharing
- Should include: TerraSight logo, tagline, and professional geology imagery
- Save as `og-image.jpg` in the root directory
- Update references in HTML if you use a different filename

### 3. **Create Favicon Files**
Generate favicons using a tool like [favicon.io](https://favicon.io/):
- `favicon-32x32.png` (32x32px)
- `favicon-16x16.png` (16x16px)
- `apple-touch-icon.png` (180x180px)
- Optional: `favicon.ico` for older browsers

Place all favicon files in the root directory (`e:\website\`)

### 4. **Create Logo File** (Optional)
- Create a logo image: `logo.png`
- Recommended size: 250x250px or larger
- Update line 48 in index.html with actual logo path

### 5. **Add Social Media Links** (Optional but recommended)
In the structured data (line 85), update the empty `sameAs` array:
```json
"sameAs": [
  "https://www.linkedin.com/company/terrasight-consultancy",
  "https://twitter.com/terrasight",
  "https://www.facebook.com/terrasight"
]
```

### 6. **Update Sitemap Date**
In `sitemap.xml`, update `<lastmod>2024-12-12</lastmod>` to the current date whenever you make changes.

---

## 📊 SEO Testing & Validation

### Test Your SEO Implementation:

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test your structured data (JSON-LD)

2. **Google Search Console**
   - Submit your sitemap: `https://yoursite.com/sitemap.xml`
   - Monitor indexing status and search performance

3. **Meta Tags Checker**
   - URL: https://metatags.io/
   - Preview how your site appears on Google, Facebook, Twitter

4. **PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Check performance and SEO scores

5. **Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly
   - Ensure mobile responsiveness

---

## 🎯 SEO Best Practices Checklist

### On-Page SEO
- ✅ Unique, descriptive title (50-60 characters)
- ✅ Meta description (150-160 characters)
- ✅ H1 tag (one per page)
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Alt text for images (add when you create og-image)
- ✅ Internal linking (nav menu)
- ✅ Mobile responsive design
- ✅ Fast loading speed

### Technical SEO
- ✅ robots.txt file
- ✅ XML sitemap
- ✅ Canonical URLs
- ✅ Structured data (Schema.org)
- ✅ HTTPS (enable when deployed)
- ✅ Clean URL structure

### Content SEO
- ✅ Keyword-rich content
- ✅ Clear service descriptions
- ✅ Contact information visible
- ✅ Location information
- ✅ Professional, authoritative content

---

## 📈 Ongoing SEO Maintenance

### Monthly Tasks:
1. Check Google Search Console for errors
2. Monitor keyword rankings
3. Update content if services change
4. Check for broken links
5. Review page speed performance

### When Updating Content:
1. Update sitemap.xml `<lastmod>` dates
2. Keep meta descriptions accurate
3. Maintain keyword relevance
4. Update structured data if services change

---

## 🔍 Target Keywords

Your website is optimized for these primary keywords:
- geology consultancy India
- geospatial analysis services
- hydrogeology consultant
- EIA consultant India
- environmental impact assessment
- groundwater mapping
- remote sensing India
- NDVI NDWI mapping
- Google Earth Engine services
- GIS consultancy
- mining geology services
- LULC mapping India

---

## 📞 Next Steps

1. **Update all URLs** with your actual GitHub Pages URL
2. **Create and upload** og-image.jpg (1200x630px)
3. **Generate and upload** favicon files
4. **Test** using the tools listed above
5. **Submit sitemap** to Google Search Console
6. **Monitor** search performance weekly

---

## Additional Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

**Last Updated:** December 12, 2024
**SEO Status:** ✅ Optimized (Pending URL updates and image creation)
