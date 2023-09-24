
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { myAction } from './actions'


export default function ProductForm() {

    return (
        <form action={myAction} className="flex flex-col space-y-4">
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
        </form>
    )
}