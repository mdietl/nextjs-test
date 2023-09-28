import { NavItem } from './types'
import Link from 'next/link'
import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


import { cx } from 'class-variance-authority'
import { FormattedMessage } from 'react-intl'


export const HeaderNavigationMenuItem: React.FC<NavItem> = ({ label, href }) => {
    return (
        <>
            <NavigationMenuItem>
                <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink className={cx(navigationMenuTriggerStyle(), 'text-[1.105rem]')}>
                        {label}
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        </>
    )
}
