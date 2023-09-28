import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardMedia,
    CardMediaContent
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
import { getIntl } from '../../../locale/intl'
import { FormattedMessage } from 'react-intl'

export default async function Home() {

    const intl = await getIntl()

    return (
        <main className="space-y-10 mx-3 2xl:mx-auto max-w-screen-2xl flex flex-col mt-6">
            <section>
                <Card
                    className="w-full border-0"
                    orientation="responsive"
                    variant="secondary"
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
                                <Input
                                    id="email"
                                    type="email"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>{intl.formatMessage({ id: 'newsletter.form.submit', defaultMessage: "Jetzt anmelden" })}</Button>
                        </CardFooter>
                    </div>
                </Card>
            </section>


        </main >
    )
}
