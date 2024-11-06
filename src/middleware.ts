import createMiddleware from 'next-intl/middleware';
import { routing } from './app/(website)/i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|nl)/:path*', '/((?!admin|img|_next/static|_next/image).*)']
  // matcher: ['/', '/(en|nl)(?!/admin)(/:path*)']
};