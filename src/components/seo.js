import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
        { href: '//fonts.googleapis.com/css?family=Poppins:300,400,400i,500,600,700,800&display=swap', rel: 'stylesheet' },
        { href: '//fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800', rel: 'stylesheet' },
      ]}
    >
      <link rel="stylesheet" href="assets/lib/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/lib/fontawesome/css/all.min.css" />
      <link rel="stylesheet" href="assets/lib/cubeportfolio/css/cubeportfolio.min.css" />
      <link rel="stylesheet" href="assets/lib/nav/css/navigation.css" />
      <link rel="stylesheet" href="assets/lib/flaticon/flaticon.css" />
      <link rel="stylesheet" href="assets/lib/slick/slick.css" />
      <link rel="stylesheet" href="assets/lib/slick/slick-theme.css" />

      {/* Theme CSS */}
      <link rel="stylesheet" href="assets/css/customanimation.css" />
      <link rel="stylesheet" href="assets/css/style.css" />
      <link rel="stylesheet" href="assets/css/responsive.css" />

      {/* Color */}
      <link rel="stylesheet" href="assets/css/color-yellow.css" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
