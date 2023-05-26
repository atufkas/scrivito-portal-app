import * as Scrivito from 'scrivito'

export const Page = Scrivito.provideObjClass('Page', {
  attributes: {
    body: ['widgetlist', { only: 'SectionWidget' }],
    childOrder: 'referencelist',
    hideInNavigation: 'boolean',
    title: 'string',
    linkIcon: 'string',
  },
  extractTextAttributes: ['body'],
})
