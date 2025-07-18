import {Rule} from '@sanity/types'

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
      name: 'previewImages',
      title: 'Preview Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: '詳細モーダルで表示する画像を追加できます',
    },
    {
      name: 'previewVideo', // 単数形に変更
      title: 'Preview Video', // 単数形に変更
      type: 'file', // array型から単一のfile型に変更
      options: {
        accept: 'video/*',
      },
      description: '詳細モーダルで表示する動画を追加できます（推奨：MP4形式、最大サイズ：100MB）',
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
      name: 'isNew',
      title: 'New Tag',
      type: 'boolean',
      description: 'NEWタグを表示するかどうか',
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
