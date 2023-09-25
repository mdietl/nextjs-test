import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '../_components/header/header'
import { GlobalProviders } from '../_providers'
import { getIntl } from '../../locale/intl'
import { currentLocale } from 'next-i18n-router'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UI Demo',
  description: 'UI Demo',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = currentLocale() || 'de'
  const intl = await getIntl()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  return (
    <html lang={locale} dir={dir}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="">
        <GlobalProviders dir={dir} locale={locale} messages={intl.messages} >
          <Header />
          {children}
        </GlobalProviders>
      </body>
    </html>
  )
}
