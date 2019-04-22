module.exports = {
  siteMetadata: {
    title: 'Expecto Frontendum',
    authors: 'Kasia Zadurska & Robert Kirsz',
    description: 'A blog about all things frontend',
    siteUrl: 'https://expectofrontendum.com/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: 'ADD YOUR TRACKING ID HERE',
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Expecto Frontendum',
        short_name: 'Expecto Frontendum',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#005882',
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    // Makes every JSON file found in "content/" be queryable with GraphQL (foo.json => FooJson)
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'content/',
      },
    },
    'gatsby-plugin-styled-components',
  ],
  mapping: {
    // Maps blog post's "author" value to an object from "content/authors.json"
    'MarkdownRemark.frontmatter.author': 'AuthorsJson',
  },
}
