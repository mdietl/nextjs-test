'use client'
/* eslint-disable @next/next/no-img-element */
import { Button, ButtonProps } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardMedia,
    CardMediaContent,
    CardProps
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getIntl } from '../../locale/intl'
import { useIntl } from 'react-intl'
import { useState } from 'react'

export default function Home() {

    const [cardVariant, setCardVariant] = useState<NonNullable<CardProps['variant']>>('primary')
    const [cardOrientation, setCardOrientation] = useState<NonNullable<CardProps['orientation']>>('responsive')
    const intl = useIntl()

    return (
        <main className="space-y-10 mx-3 2xl:mx-auto max-w-screen-2xl flex flex-col mt-6">
            <section className="space-y-4">
                <Card
                    className="w-full border-0"
                    variant={cardVariant}
                    orientation={cardOrientation}
                >
                    <CardMedia>
                        <img src="https://cdn-blob.austria.info/cms-uploads-prod/default/0002/91/thumb_190979_default_header_big.jpeg?cachebuster=1694613663" alt="image" />
                        <CardMediaContent className="bottom-0 flex flex-col justify-end p-6 text-white bg-gradient-to-b from-slate-900/0 to-slate-900">
                            <span className="text-3xl">
                                {intl.formatMessage({ id: 'newsletter.card.header', defaultMessage: "Verpassen Sie nichts!" })}
                            </span>
                        </CardMediaContent>

                    </CardMedia>
                    <div className="m-auto">
                        <CardHeader>
                            <CardTitle>
                                {intl.formatMessage({ id: 'newsletter.card.title', defaultMessage: "Newsletter Anmeldung" })}
                            </CardTitle>
                            <CardDescription>
                                {intl.formatMessage({ id: 'newsletter.card.subtitle', defaultMessage: "Bleiben Sie immer informiert." })}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">
                                    {intl.formatMessage({ id: 'newsletter.form.email.label', defaultMessage: "E-Mail Adresse" })}
                                </Label>
                                <Input id="email" type="email" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>{intl.formatMessage({ id: 'newsletter.form.submit', defaultMessage: "Jetzt anmelden" })}</Button>
                        </CardFooter>
                    </div>
                </Card>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="space-y-1">
                        <Label htmlFor="variant">Variant</Label>
                        <Select
                            onValueChange={(value: typeof cardVariant) => setCardVariant(value)}
                            value={cardVariant}
                            name="variant"
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Variant" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="primary">primary</SelectItem>
                                <SelectItem value="secondary">secondary</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="orientation">Orientation</Label>
                        <Select
                            onValueChange={(value: typeof cardOrientation) => setCardOrientation(value)}
                            value={cardOrientation}
                            name="orientation"
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Orientation" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="responsive">responsive</SelectItem>
                                <SelectItem value="vertical">vertical</SelectItem>
                                <SelectItem value="horizontal">horizontal</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl">Button Component</h2>
                <div className="flex items-center gap-2">
                    <Button size="sm">Button</Button>
                    <Button>Button</Button>
                    <Button size="lg">Button</Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="secondary" size="sm">Button</Button>
                    <Button variant="secondary">Button</Button>
                    <Button variant="secondary" size="lg">Button</Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Button</Button>
                    <Button variant="outline">Button</Button>
                    <Button variant="outline" size="lg">Button</Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="destructive" size="sm">Button</Button>
                    <Button variant="destructive">Button</Button>
                    <Button variant="destructive" size="lg">Button</Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">Button</Button>
                    <Button variant="ghost">Button</Button>
                    <Button variant="ghost" size="lg">Button</Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="link" size="sm">Button</Button>
                    <Button variant="link">Button</Button>
                    <Button variant="link" size="lg">Button</Button>
                </div>
            </section>
        </main >
    )
}
