// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { EXPERIMENTAL_TableFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import Collections from './payload/Collections'
import Globals from './payload/Globals'
import { DatabaseAdapterResult } from 'node_modules/payload/dist/database/types';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    theme: 'light'
  },
  collections: [...Collections],
  globals: [...Globals],
  editor: lexicalEditor({
    features: ({ defaultFeatures, rootFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature({ applyToFocusedEditor: true, disableIfParentHasFixedToolbar: true }),
      EXPERIMENTAL_TableFeature()
    ]
  }),

  localization: {
    locales: [
      {
        label: 'English',
        code: 'en'
      },
      {
        label: 'Dutch',
        code: 'nl'
      },
    ],
    defaultLocale: 'en', // required
    fallback: true,
  },
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),

  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})

