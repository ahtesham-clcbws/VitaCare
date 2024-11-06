import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Backend Only',
    hidden: true
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'Homepage Banner',
          value: 'Homepage Banner'
        },
        {
          label: 'Homepage About',
          value: 'Homepage About'
        },
        {
          label: 'Homepage Section',
          value: 'Homepage Section'
        },
        {
          label: 'Brands',
          value: 'Brands'
        },
        {
          label: 'Blogs',
          value: 'Blogs'
        },
        {
          label: 'Partners',
          value: 'Partners'
        },
        {
          label: 'Services',
          value: 'Services'
        },
        {
          label: 'Team Members',
          value: 'Team Members'
        }
      ],
      required: true
    },
  ],
  upload: true,
}
