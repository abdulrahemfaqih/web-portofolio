// src/config/metadata.jsx
import { Helmet } from 'react-helmet';

export const SeoHelmet = () => (
    <Helmet>
        {/* Title */}
        <title>Abdul Rahem Faqih | Portfolio - Web Developer | React Developer | Frontend Engineer</title>

        {/* Meta Description */}
        <meta
            name="description"
            content="Portfolio Abdul Rahem Faqih - Web Developer | React Developer | Frontend Engineer. Explore my projects, experience, and articles."
        />

        {/* Meta Keywords */}
        <meta
            name="keywords"
            content="Abdul Rahem Faqih, abdulrahemfaqih, Faqih, web developer, react developer, frontend engineer, portfolio"
        />

        {/* Meta Author */}
        <meta name="author" content="Abdul Rahem Faqih" />

        {/* Open Graph / Facebook Meta Tags (for social sharing) */}
        <meta property="og:title" content="Abdul Rahem Faqih | Portfolio - Web Developer | React Developer | Frontend Engineer" />
        <meta
            property="og:description"
            content="Portfolio Abdul Rahem Faqih - Web Developer | React Developer | Frontend Engineer. Explore my projects, experience, and articles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abdulrahemfaqih.works" />
        <meta property="og:image" content="https://abdulrahemfaqih.works/me.jpg" />

        {/* Twitter Meta Tags (for social sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abdul Rahem Faqih | Portfolio - Web Developer | React Developer | Frontend Engineer" />
        <meta
            name="twitter:description"
            content="Portfolio Abdul Rahem Faqih - Web Developer | React Developer | Frontend Engineer. Explore my projects, experience, and articles."
        />
        <meta name="twitter:image" content="https://abdulrahemfaqih.works/me.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://abdulrahemfaqih.works" />
    </Helmet>
);