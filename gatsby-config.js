module.exports = {
  siteMetadata: {
    title: 'mattischrome',
    description:
      'Not making sense since forever',
    url: 'https://mattischrome.com',
    author: 'Matthew Dorey',
    intro: 'Mattischrome: Matthew Dorey\'s review blog',
    menuLinks: [
      {
        name: 'mattischrome',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
    ],
    footerLinks: [
      {
        name: 'mattischrome',
        url: 'https://mattischrome.com/',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
  ],
}
