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
                  buildHookId: '5e55ef348d282a1fba613fb8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zb74ryeu',
                  apiId: 'ce71d7ab-8f61-4d96-a837-0f837d7b2c4e'
                },
                {
                  buildHookId: '5e55ef34f8b739ad8d4a263d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tugh7v91',
                  apiId: 'a4782fe3-84e9-41d4-9246-37c27a2997fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mingyeungs/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tugh7v91.netlify.com', category: 'apps'}
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
