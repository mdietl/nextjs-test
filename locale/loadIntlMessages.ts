const i18nConfig = {
    locales: ["de", "en", "ar"],
    defaultLocale: "de",
    routingStrategy: "dynamicSegment",
}

const availableMessages = i18nConfig.locales.reduce((acc: Record<string, Record<string, string>>, locale) => {
    try {
        acc[locale] = require(`./compiled/${locale}.json`)
    } catch (e) {
        console.error(`Compiled intl messages not found: locale/compiled/${locale}.json`)
    }
    return acc
}, {})

type LoadI18nMessagesProps = {
    locale?: string
    defaultLocale?: string
}

type MessageConfig = { [key: string]: string }

export default async function loadIntlMessages(
    {
        locale,
        defaultLocale,
    }: LoadI18nMessagesProps,
    localeSubsets?: Array<string>): Promise<MessageConfig | undefined> {
    // If the default locale is being used we can skip it
    locale = locale || defaultLocale || 'en'
    try {
        const l = { ...availableMessages[locale] }

        if (localeSubsets) {
            const msgIds = Object.keys(l)
            msgIds.forEach(msgId => {
                if (localeSubsets.every(ls => {
                    return msgId.indexOf(ls) !== 0
                })) {
                    delete l[msgId]
                }
            })
        }

        return l
    } catch (error) {
        console.log(error, availableMessages[locale])
        console.info('Could not load compiled language files. Please runtranlsation script first"')
    }
}