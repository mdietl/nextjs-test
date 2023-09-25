'server-only'

import { createIntl } from '@formatjs/intl'
import { currentLocale } from 'next-i18n-router'
import loadIntlMessages from './loadIntlMessages'

import { cache } from 'react'
import 'server-only'

export const getIntl = cache(async (localeSubsets?: Array<string>) => {
    const locale = currentLocale() || 'de'

    const messages = await loadIntlMessages({
        locale,
        defaultLocale: 'de',
    }, localeSubsets)

    const intl = createIntl({
        locale: locale,
        messages: messages
    })

    return intl
})