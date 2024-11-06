// import { redirect } from 'next/dist/server/api-utils'
import { Router } from 'next/router'
import type { CollectionAfterOperationHook, CollectionConfig } from 'payload'
const afterOperationHook: CollectionAfterOperationHook = async ({
  args,
  operation,
  req,
}) => {
  if (operation == 'create') {
    // return window.location.href = '/admin/collections/blogCategories';
    // Router.
    // <Router redirect="/admin/collections/blogCategories" />
    // Router.push('/admin/collections/blogCategories')
  }
}
export const BlogCategories: CollectionConfig = {
  slug: 'blogCategories',
  admin: {
    useAsTitle: 'name',
    group: 'Blog'
  },
  hooks: {
    afterOperation: [afterOperationHook]
  },
  fields: [
    {
      name: 'name',
      localized: true,
      type: 'text',
      required: true
    }
  ],
}