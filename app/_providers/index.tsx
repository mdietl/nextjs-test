'use client'
import { ComponentProps, PropsWithChildren } from 'react'
import { DirectionProvider } from '@radix-ui/react-direction'
import ClientIntlProvider from '../../locale/clientIntlProvider'
import { MessageFormatElement } from 'react-intl'

export const GlobalProviders: React.FC<PropsWithChildren<{ dir: 'ltr' | 'rtl', locale: string, messages: Record<string, MessageFormatElement[]> | Record<string, string> }>> = ({ children, dir, locale, messages }) => (
    <ClientIntlProvider locale={locale} messages={messages}>
        <DirectionProvider dir={dir}>
            {children}
        </DirectionProvider>
    </ClientIntlProvider>
)