import type { GlobalConfig } from "payload"

const BrandSettings: GlobalConfig = {
  slug: 'brandSetting',
  admin: {
    group: 'Settings'
  },
  fields: [
    {
      name: 'siteTtitle',
      type: 'text',
      required: true
    },
    {
      name: 'logo',
      type: 'text',
      required: true
    },
    {
      name: 'logoDark',
      type: 'text',
      required: true
    },
    {
      name: 'icon',
      type: 'text',
      required: true
    }
  ],
}

export default BrandSettings;