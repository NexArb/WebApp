import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from 'negotiator';

let locales = ['en', 'tr', 'de'];
export let defaultLocale = 'en';

const getLocale = (request: Request): string => {
    const headers = new Headers(request.headers);
    const acceptLanguage = headers.get("accept-language");
    if (acceptLanguage) {
        headers.set('accept-language', acceptLanguage.replaceAll("_","-"));
    }

    const headersObject = Object.fromEntries(headers.entries());
    const languages = new Negotiator({headers: headersObject}).languages();
    return match(languages, locales, defaultLocale);
}

export const middleware = (request: NextRequest) => {
    let locale = getLocale(request) ?? defaultLocale;
    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith('/_next/') || pathname.startsWith('/public/')) {
        console.log('Skipping language rewriting for static asset:', pathname);
        return null; // Do not rewrite URLs for static assets
    }
    
    const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);

    return NextResponse.rewrite(newUrl);
}

export const config = {
    matcher: [
        '/((?!_next|api|public|_next/image|components|img|favicon.ico).*)',
    ],
}