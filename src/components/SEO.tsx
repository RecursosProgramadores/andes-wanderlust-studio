import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

const SEO = ({ title, description, canonical }: SEOProps) => {
    useEffect(() => {
        // Standard SEO Tags
        document.title = title;

        // Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", description);
        } else {
            metaDesc = document.createElement("meta");
            metaDesc.setAttribute("name", "description");
            metaDesc.setAttribute("content", description);
            document.head.appendChild(metaDesc);
        }

        // Open Graph Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute("content", title);
        }

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute("content", description);
        }

        // Canonical link
        let link = document.querySelector("link[rel='canonical']");
        const canonicalUrl = canonical || `https://machupicchutraveltour.com${window.location.pathname}`;

        if (!link) {
            link = document.createElement("link");
            link.setAttribute("rel", "canonical");
            document.head.appendChild(link);
        }
        link.setAttribute("href", canonicalUrl);

    }, [title, description, canonical]);

    return null;
};

export default SEO;
