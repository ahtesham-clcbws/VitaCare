import type { GlobalConfig } from "payload"

const ContactInfo: GlobalConfig = {
  slug: 'contactInfo',
  admin: {
    group: 'Settings'
  },
  fields: [
    {
      name: 'phoneNumbers',
      type: 'text',
      hasMany: true,
      required: true
    },
    {
      name: 'emailAddresses',
      type: 'text',
      hasMany: true,
      required: true
    },
    {
      name: 'addresses',
      type: 'text',
      hasMany: true,
      required: true
    },
  ],
}

export default ContactInfo;