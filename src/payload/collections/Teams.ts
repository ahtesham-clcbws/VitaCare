import type { CollectionConfig } from 'payload'

export const Teams: CollectionConfig = {
  slug: 'teams',
  admin: {
    useAsTitle: 'name',
    group: 'Others'
  },
  fields: [
    {
      name: 'image',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'name',
      type: 'text',
      localized: true,
      required: true
    },
    {
      name: 'designation',
      type: 'text',
      localized: true,
      required: true
    },
    {
      name: 'speciality',
      type: 'text',
      localized: true,
      required: true
    }
  ],
} 