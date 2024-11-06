import type { CollectionConfig } from 'payload'

export const Partners: CollectionConfig = {
  slug: 'partners',
  admin: {
    useAsTitle: 'title',
    group: 'Others'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true
    },
    {
      name: 'description',
      type: 'text',
      localized: true,
      required: true
    },
    {
      name: 'image',
      type: 'upload',
      required: true,
      relationTo: 'media',
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'logo',
      type: 'upload',
      required: true,
      relationTo: 'media',
      admin: {
        position: 'sidebar'
      }
    }
  ],
}