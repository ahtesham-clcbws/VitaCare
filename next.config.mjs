import { withPayload } from '@payloadcms/next/withPayload';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/app/(website)/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
};

// Compose both plugins
export default withPayload(withNextIntl(nextConfig));
