import type { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
    group: 'Blog'
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      required: true,
      relationTo: 'media'
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true
    },
    {
      name: 'summary',
      type: 'textarea',
      localized: true,
      required: true
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      required: true
    },
    {
      name: 'category',
      type: 'relationship',
      required: true,
      relationTo: 'blogCategories',
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'tags',
      type: 'text',
      localized: true,
      required: true,
      hasMany: true,
      admin: {
        position: 'sidebar'
      }
    },
    slugField(),
  ],
} 