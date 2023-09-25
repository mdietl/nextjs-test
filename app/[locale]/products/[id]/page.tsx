import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardImage,
    CardImageContent
} from "@/components/ui/card"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Product } from '../../../../types/product'
import Link from 'next/link'
import Image from 'next/image'
import ProductForm from './productForm'



export const revalidate = 1000000

export default async function Products({ params }: { params: { id: string } }) {

    const res = await fetch(`https://fakestoreapi.com/products/${params.id.toString()}`, { next: { tags: [`products/${params.id}`] } })
    const product: Product = await res.json()

    return (
        <main className="flex min-h-screen flex-col items-center space-y-10 pt-6">
            <Card key={product.id} className="h-[250px] w-[500px]" orientation="horizontal">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <CardImage className="w-[40%]">
                                <CardImageContent className="bottom-0 flex flex-col justify-end p-6 w-full text-white bg-gradient-to-b from-slate-900/0 to-slate-900">
                                    <span className="text-2xl">{product.title}</span>
                                </CardImageContent>
                                <Image
                                    src={product.image} alt="image"

                                    fetchPriority="high"
                                    loading='eager'
                                    width={200}
                                    height={200}
                                    style={{ objectFit: 'cover' }}
                                />

                            </CardImage>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{product.description}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <div className="flex flex-col justify-between w-2/3 ">

                    <CardContent className="space-y-2 pt-6">
                        <CardDescription>
                            {product.description}
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="justify-end">
                        <Link href={`/products`}>€ {product.price}</Link>
                    </CardFooter>
                </div>
            </Card>
            <ProductForm />
        </main >
    )
}
// export async function generateStaticParams() {
//     // Call an external API endpoint to get posts
//     const res = await fetch(`https://fakestoreapi.com/products`)
//     const products: Array<Product> = await res.json()
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return products.map(product => ({ id: product.id.toString() }))
// }