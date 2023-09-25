'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Link, Menu } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import { HeaderNavigationMenuItem } from './header/headerNavigationMenuItem'
import { LanguageSwitcher } from './languageSwitcher'
import { NavItem } from './header/types'
import { useIntl } from 'react-intl'
import { useMemo } from 'react'

export const MenuDrawer: React.FC<{}> = () => {
    const intl = useIntl()
    const menuItems: Array<NavItem> = useMemo(() => ([
        { label: intl.formatMessage({ id: 'nav.recovery', defaultMessage: 'Erholung' }), href: '/erholung' },
        { label: intl.formatMessage({ id: 'nav.inpiration', defaultMessage: 'Inspiration' }), href: '/inspiration' },
        { label: intl.formatMessage({ id: 'nav.movement', defaultMessage: 'Bewegung' }), href: '/bewegung' },
        { label: intl.formatMessage({ id: 'nav.culinary', defaultMessage: 'Kulinarik' }), href: '/kulinarik' },
        { label: intl.formatMessage({ id: 'nav.sustainability', defaultMessage: 'Nachhaltigkeit' }), href: '/nachhaltigkeit' },
    ]), [])
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost"><Menu /></Button>
            </SheetTrigger>
            <SheetContent>

                <NavigationMenu orientation="vertical" className="" >

                    <NavigationMenuList className="justify-center">
                        {menuItems.map((item, index) => (
                            <HeaderNavigationMenuItem key={index} {...item} />
                        ))}
                    </NavigationMenuList>

                </NavigationMenu >
            </SheetContent>
        </Sheet>
    )
}

