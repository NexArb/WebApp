import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import Cookies from 'js-cookie'

let locales = ['en', 'tr', 'de']
export const defaultLocale = 'en'

const protectedRoutes = ['/arbswap/dashboard']

const getLocale = (request: Request): string => {
  const headers = new Headers(request.headers)
  const acceptLanguage = headers.get('accept-language')

  if (acceptLanguage) {
    headers.set('accept-language', acceptLanguage.replaceAll('_', '-'))
  }

  const headersObject = Object.fromEntries(headers.entries())
  const languages = new Negotiator({ headers: headersObject }).languages()
  return match(languages, locales, defaultLocale)
}

export const middleware = (req: NextRequest) => {
  const cookie = Cookies.get('token')
  let locale = getLocale(req) ?? defaultLocale
  const pathname = req.nextUrl.pathname

  if (!cookie && protectedRoutes.includes(pathname)) {
    // const absoluteURL = new URL('/', req.nextUrl.origin)
    // return NextResponse.redirect(absoluteURL.toString())
  }

  if (pathname.startsWith('/_next/') || pathname.startsWith('/public/')) {
    return null // Do not rewrite URLs for static assets
  }

  const newUrl = new URL(`/${locale}${pathname}`, req.nextUrl)

  return NextResponse.rewrite(newUrl)
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
