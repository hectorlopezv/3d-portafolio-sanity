export default {
  name: 'experiences',
  type: 'document',
  title: 'Experiences',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'company_name',
      type: 'string',
      title: 'Company Name',
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      },
      {
        name: 'date',
        type: 'string',
        title: 'Date',
      },
      {
        name: 'points',
        type: 'array',
        of: [{type: 'string'}],
        title: 'Points',
      },
  ],
}
