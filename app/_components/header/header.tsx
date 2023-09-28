'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


import { NavDrawer } from './navDrawer'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import { cx } from 'class-variance-authority'
import { FormattedMessage, useIntl } from 'react-intl'
import { NavItem } from './types'
import { HeaderNavigationMenuItem } from './headerNavigationMenuItem'
import { LanguageSwitcher } from '../languageSwitcher'



export const Header: React.FC<{}> = () => {
    const intl = useIntl()

    const menuItems: Array<NavItem> = useMemo(() => ([
        { label: intl.formatMessage({ id: 'nav.recovery', defaultMessage: 'Erholung' }), href: '/erholung' },
        { label: intl.formatMessage({ id: 'nav.inpiration', defaultMessage: 'Inspiration' }), href: '/inspiration' },
        { label: intl.formatMessage({ id: 'nav.movement', defaultMessage: 'Bewegung' }), href: '/bewegung' },
        { label: intl.formatMessage({ id: 'nav.culinary', defaultMessage: 'Kulinarik' }), href: '/kulinarik' },
        { label: intl.formatMessage({ id: 'nav.sustainability', defaultMessage: 'Nachhaltigkeit' }), href: '/nachhaltigkeit' },
    ]), [])

    return (
        <header className="flex items-center justify-center w-full py-2 shadow-md px-1 2xl:px-0">
            <NavigationMenu className="grid grid-cols-6 max-w-screen-2xl w-full" >
                <NavigationMenuList className=" justify-start">
                    <NavigationMenuItem className="min-w-max">
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className="">
                                <Image
                                    priority
                                    src={logo}
                                    alt="austria.info"
                                    style={{ width: 150, height: 50 }}
                                />
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <div className="col-span-4">
                    <NavigationMenuList className="hidden lg:flex ">
                        {menuItems.map((item, index) => (
                            <HeaderNavigationMenuItem key={index} {...item} />
                        ))}

                    </NavigationMenuList>
                </div>
                <NavigationMenuList className="justify-end">
                    <NavigationMenuItem className="lg:hidden" asChild>
                        <LanguageSwitcher />
                    </NavigationMenuItem>
                    <NavigationMenuItem className="lg:hidden">
                        <NavigationMenuLink className="bg-none">
                            <NavDrawer />
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu >
        </header >
    )
}
