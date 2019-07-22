module.exports = {
  siteMetadata: {
    title: 'Westegg Digital Garden'
  },
  plugins: [
    {
      resolve: '@westegg/gatsby-theme-core'
    },
    {
      resolve: '@westegg/gatsby-theme-digital-garden',
      options: {
        header: {
          home: {
            href: '/',
            label: '/img/logos/h.png'
          },
          links: [
            {
              href: '/blog',
              label: 'Writing'
            },
            {
              href: '/portfolio',
              label: 'Portfolio'
            },
            {
              href: '/notes',
              label: 'Notes'
            },
            {
              href: '/contact',
              label: 'Contact'
            }
          ]
        },
        postsPath: '/blog',
        projects: 'portfolio',
        projectsPath: '/portfolio'
      }
    }
  ]
}
