'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { myAction } from './actions'
import { Select, AsyncSelect } from '@/components/ui/select'
import { use, useEffect } from 'react'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'chocolate1', label: 'Chocolate1' },
    { value: 'strawberry1', label: 'Strawberry1' },
    { value: 'vanilla1', label: 'Vanilla1' },
    { value: 'chocolate2', label: 'Chocolate2' },
    { value: 'strawberry2', label: 'Strawberry2' },
    { value: 'vanilla2', label: 'Vanilla2' }
]

export default function ProductForm() {

    return (
        <form action={myAction} className="flex flex-col space-y-4 w-1/2">
            <div className="space-y-1">
                <Label htmlFor="user">User</Label>
                <Input id="user" name="user" required />
            </div>
            <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name="password" />
            </div>

            <div className="space-y-1">
                <Button type="submit">Save password</Button>
            </div>

            <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Select

                    name="colors"
                    options={options}
                />
            </div>
        </form>
    )
}