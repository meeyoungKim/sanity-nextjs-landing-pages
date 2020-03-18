export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e728f664ea663a446f21797',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-r8p4cbi9',
                  apiId: '5fe2b41f-6a16-49eb-a55b-1f4224d4fe7a'
                },
                {
                  buildHookId: '5e728f66efffe1a1c9dacb8a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p27ij1ea',
                  apiId: '219ee10d-c652-401d-92ff-443ee0ef5a32'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/meeyoungKim/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p27ij1ea.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
