export default {
  widgets: [
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
                  buildHookId: '604b39d57415c68711f0fe19',
                  title: 'Sanity Studio',
                  name: 'repobot-web-studio',
                  apiId: '3442fe3c-9aea-495e-8848-ca5a8aeb4906'
                },
                {
                  buildHookId: '604b39d5d8031a88ffd19d65',
                  title: 'Blog Website',
                  name: 'repobot-web',
                  apiId: '3a5a979c-623a-4a73-8ad8-93d21f528bf2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adham-ta/repobot-web',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://repobot-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
