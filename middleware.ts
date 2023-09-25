import { i18nRouter } from 'next-i18n-router'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, res: NextResponse) {
    return i18nRouter(req, {
        locales: ["de", "en", "ar"],
        defaultLocale: "de",
        prefixDefault: true,
        routingStrategy: 'dynamicSegment',
    })
}

// applies this middleware only to files in the app directory
export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)',
}
