export default {
  name: 'post',
  type: 'document',
  title: 'Post', // Capitalized 'Post' for consistency
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}], // Specify the type of blocks in the array
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
  ],
}
