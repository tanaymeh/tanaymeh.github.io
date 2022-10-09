module.exports = {
  SiteTitle: 'Tanay',
  Sitelogo: '#',
  SiteLogoText: 'Tanay',
  SiteAuthor: 'Tanay Mehta',
  SiteDescription: 'Deep Learner',
  defaultDescription: 'Deep Learning Guy', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    twitter: 'https://twitter.com/serious_mehta',
    github: 'https://github.com/heytanay',
    linkedin: 'https://www.linkedin.com/in/tanaymehta28/',
  },
  SiteAddress: {
    city: 'Jaipur',
    region: 'Rajasthan',
    country: 'India',
    zipCode: '302025',
  },
  SiteContact: {
    email: 'heyytanay@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2020',
};
