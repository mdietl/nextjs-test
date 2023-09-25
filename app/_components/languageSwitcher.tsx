'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useCurrentLocale } from 'next-i18n-router/client'
import i18nConfig from '@/i18nConfig'
import { ChangeEvent } from 'react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FormattedMessage, useIntl } from 'react-intl'
import { Languages } from 'lucide-react'

export const LanguageSwitcher: React.FC<{}> = () => {
    const router = useRouter()
    const currentPathname = usePathname()
    const intl = useIntl()

    const handleChange = (newLocale: string) => {
        // set cookie for next-i18n-router
        const days = 30
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        const expires = '; expires=' + date.toUTCString()
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

        router.push(
            currentPathname.replace(`/${intl.locale}`, `/${newLocale}`)
        )
        router.refresh()
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline"><Languages /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel><FormattedMessage id="languageSwitcher.choosePreferredLanguage" defaultMessage="Wählen sie Ihre Sprache aus" /></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={intl.locale} onValueChange={handleChange}>
                    <DropdownMenuRadioItem value="de">DE</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="en">EN</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="ar">AR</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}