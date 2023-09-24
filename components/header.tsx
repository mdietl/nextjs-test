'use client'

import React from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { MenuDrawer } from './menuDrawer'

export const Header: React.FC<{}> = () => {
    const maxSum = (arr: number[]) => {
        let bSum = -Infinity
        let cSum = 0
        for (let i = 0; i < arr.length - 1; i++) {
            cSum = Math.max(arr[i], cSum + arr[i])
            bSum = Math.max(cSum, bSum)
        }
        return bSum
    }
    return (
        <header className="flex items-center justify-between w-full px-12 py-4 shadow-md m-auto">
            <NavigationMenu className="max-w-none justify-normal grid-cols-3 w-full [&>*]:w-full" >
                <NavigationMenuList className="col-span-2 justify-normal">

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul>
                                <li>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Documentation
                                        </NavigationMenuLink>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Documentation
                                        </NavigationMenuLink>
                                    </Link>
                                </li>

                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hidden md:block">
                        <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                        <NavigationMenuContent >
                            <ul className="w-[calc(100vw-12rem)]">
                                <li>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Documentation
                                        </NavigationMenuLink>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Documentation
                                        </NavigationMenuLink>
                                    </Link>
                                </li>

                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList>
                <NavigationMenuList className="justify-end flex sm:hidden">

                    <NavigationMenuItem className="">
                        <NavigationMenuLink className="bg-none">
                            <MenuDrawer />
                        </NavigationMenuLink>

                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu >
        </header >
    )
}