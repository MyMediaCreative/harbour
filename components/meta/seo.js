import Head from "next/head"

export const Seo = ({ seo }) => {
    const siteName = "Climate Warriors";
    const fullSeo = {
        // Page title
        metaTitle: `${seo.title} | ${siteName}`,
        // Get image for sharing URL
        shareImage: "https://res.cloudinary.com/mymediacreative/image/upload/v1657729344/the%20harbour/home%20page/home_collage_ntmu9l.png",
        // meta description, if this page has one
        metaDescription: "Want to know where you fit in the climate movement? Take this quiz to find out.",
    }

  return (
    <Head>
        <title>{fullSeo.metaTitle}</title>
        <meta property="og:title" content={fullSeo.metaTitle} />
        <meta name="twitter:title" content={fullSeo.metaTitle} />

        <meta name="description" content={fullSeo.metaDescription} />
        <meta property="og:description" content={fullSeo.metaDescription} />
        <meta name="twitter:description" content={fullSeo.metaDescription} />

        <meta property="og:image" content={fullSeo.shareImage} />
        <meta name="twitter:image" content={fullSeo.shareImage} />
        <meta name="image" content={fullSeo.shareImage} />

        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />


    </Head>
  )
}

