export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'blurEffect',
      title: 'Blur Effect',
      type: 'boolean',
      description: '画像にぼかしをいれるか判定する',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^(\d{4})(\d{2})$/, {
          name: 'YYYYMM',
          invert: false,
        }),
      description: 'YYYYMMの表記(例：202208)',
    },
  ],
}
