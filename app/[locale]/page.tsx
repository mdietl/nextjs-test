import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardImage,
    CardImageContent
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Car } from 'lucide-react'
import { getIntl } from '../../locale/intl'
import { FormattedMessage } from 'react-intl'

export default async function Home() {

    const intl = await getIntl()

    return (
        <main className="flex min-h-screen flex-col items-center space-y-10 mt-6">
            <Button>Button</Button>
            <div className="bg-primary"><h2>{intl.formatMessage({ id: 'title', defaultMessage: 'Title de' })}</h2></div>
            <Card className="w-1/3" orientation="horizontal">
                <CardImage>
                    <CardImageContent className="bottom-0 flex flex-col justify-end p-6 w-full text-white bg-gradient-to-b from-slate-900/0 to-slate-900">
                        <span className="text-2xl">Title</span>
                        <span className="text-lg text-slate-200">Sub title</span>
                    </CardImageContent>
                    <img
                        src="https://wallpapers.com/images/hd/google-landscape-7jesbtsbhuckirwc.jpg" alt="image"
                    />
                </CardImage>
                <div>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                            لكن لا بد أن أوضح لك أن كلs
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </div>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                        Make changes to your account here. Click save when you are done.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@peduarte" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Save changes</Button>
                </CardFooter>
            </Card>
            <Tabs defaultValue="account" className="w-full md:w-1/2 p-4" >
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account" asChild>
                    <Card>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you are done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" defaultValue="Pedro Duarte" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" defaultValue="@peduarte" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="password" asChild>
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you will be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Current password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs >

            <div className="prose space-y-4">
                <h1>Heading 1: The Quick Brown Fox</h1>
                <h2>Heading 2: Jumps Over the Lazy Dog</h2>
                <h3>Heading 3: Lorem Ipsum Dolor Sit</h3>
                <h4>Heading 4: Amet, Consectetur Adipiscing</h4>
                <h5>Heading 5: Elit. Sed Do Eiusmod</h5>
                <h6>Heading 6: Tempor Incididunt Ut Labore</h6>

                <p>This is a sample paragraph. <a href="#">This is a link.</a></p>

                <ul>
                    <li>Unordered list item 1</li>
                    <li>Unordered list item 2</li>
                    <li>Unordered list item 3</li>
                </ul>

                <ol>
                    <li>Ordered list item 1</li>
                    <li>Ordered list item 2</li>
                    <li>Ordered list item 3</li>
                </ol>

                <blockquote>
                    <p>This is a blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </blockquote>

                <pre>
                    This is a preformatted text block.
                    It preserves      spaces and line breaks.
                </pre>

                <abbr title="HyperText Markup Language">HTML</abbr> is fun!

                <em>This is emphasized text.</em>

                <strong>This is strong text.</strong>

                <del>This is deleted text.</del>

                <ins>This is inserted text.</ins>

                <mark>This text is marked.</mark>

                <code>&lt;code&gt;This is code&lt;/code&gt;</code>

                <sub>Subscript</sub> and <sup>superscript</sup> text.

                <small>This is small text.</small>

                <hr />

                <address>
                    Contact us at <a href="mailto:contact@example.com">contact@example.com</a>
                </address>
            </div>
        </main >
    )
}
