import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'idea',
  title: 'Idea',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description (for cards)',
      type: 'text',
      description: 'Brief description shown on idea cards (max 150 characters)',
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description (for detail page)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Detailed description shown on the idea detail page',
    }),
    defineField({
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Minimalist', value: 'minimalist' },
            { title: 'Brutalist', value: 'brutalist' },
            { title: 'Neumorphism', value: 'neumorphism' },
            { title: 'Glassmorphism', value: 'glassmorphism' },
            { title: 'Retro / Vintage', value: 'retro' },
            { title: 'Futuristic / Sci-Fi', value: 'futuristic' },
            { title: 'Dark Mode UI', value: 'dark-mode' },
            { title: 'Corporate / Professional', value: 'corporate' },
            { title: 'Playful / Cartoonish', value: 'playful' },
            { title: 'Skeuomorphic', value: 'skeuomorphic' },
            { title: 'Typographic', value: 'typographic' },
            { title: 'High Contrast', value: 'high-contrast' },
            { title: 'Magazine / Editorial', value: 'editorial' },
            { title: 'Experimental', value: 'experimental' },
            { title: 'Custom', value: 'custom' },
            { title: 'Other', value: 'other' },
          ],
        },
      }),
      
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Add relevant tags to help categorize this idea',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'When this idea was published',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Idea',
      type: 'boolean',
      description: 'Mark this idea as featured to highlight it',
      initialValue: false,
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Who created this idea',
    }),
    defineField({
      name: 'inspiration',
      title: 'Inspiration Notes',
      type: 'text',
      description: 'What inspired this idea or how it came about',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'image',
      category: 'category',
    },
    prepare(selection) {
      const { author, category } = selection
      return {
        ...selection,
        subtitle: author && category ? `${author} • ${category}` : author || category,
      }
    },
  },
  orderings: [
    {
      title: 'Publication Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Publication Date, Old',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
