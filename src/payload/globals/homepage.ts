import type { GlobalConfig } from "payload"

const Homepage: GlobalConfig = {
  slug: 'homepage',
  admin: {
    group: 'Settings'
  },
  fields: [
    // Banners
    {
      name: 'banners',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'content',
          type: 'textarea',
          required: true,
          localized: true,
        },
        {
          name: 'image', // required
          type: 'upload', // required
          relationTo: 'media', // required
          required: true,
          filterOptions: {
            mimeType: { contains: 'image' },
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'button_text',
              label: 'Button Text',
              type: 'text',
              required: true,
              localized: true,
              maxLength: 255,
            },
            {
              name: 'button_link',
              label: 'Button Link',
              type: 'text',
              required: true,
              maxLength: 255,
            },
          ]
        }
      ],
    },
    // About Section
    {
      name: 'aboutSection',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          localized: true,
        },
        {
          name: 'image', // required
          type: 'upload', // required
          relationTo: 'media', // required
          required: true,
          filterOptions: {
            mimeType: { contains: 'image' },
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'button_text',
              label: 'Button Text',
              type: 'text',
              required: true,
              localized: true,
              maxLength: 255,
            },
            {
              name: 'button_link',
              label: 'Button Link',
              type: 'text',
              required: true,
              maxLength: 255,
            },
          ]
        }
      ],
    },
    // About Section
    {
      name: 'Section',
      type: 'group',
      fields: [
        {
          name: 'image', // required
          type: 'upload', // required
          relationTo: 'media', // required
          required: true,
          filterOptions: {
            mimeType: { contains: 'image' },
          },
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'text',
              type: 'textarea',
              required: true,
              localized: true,
            },
          ],
        }
      ]
    }
  ],
}

export default Homepage;