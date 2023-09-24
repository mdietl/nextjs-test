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

import { Menu } from 'lucide-react'
import { Button } from './ui/button'

export const MenuDrawer: React.FC<{}> = () => {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost"><Menu /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you are done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    JOJO
                </div>
                <SheetFooter>
                    Footer
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}