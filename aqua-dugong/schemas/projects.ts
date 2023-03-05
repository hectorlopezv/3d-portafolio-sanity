export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
          name: 'color',
        },
        {
          type: 'string',
          name: 'name',
        },
      ],
      title: 'Tags',
    },
    {
      name: 'image',
      type: 'string',
      title: 'Image',
    },
    {
      name: 'points',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Points',
    },
  ],
}
