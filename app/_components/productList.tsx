import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardImage,
    CardImageContent
} from "@/components/ui/card"
import { Product } from '../../types/product'
import Link from 'next/link'


export const ProductList: React.FC<{ slug?: string }> = async (props) => {
    const res = await fetch('https://fakestoreapi.com/products')
    const products: Array<Product> = await res.json()


    return (
        <>
            <div className="max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
                {props.slug}
                {products.map((product, i) => (

                    <div key={product.id}>
                        <Card
                            className="h-96"
                            variant={i % 2 === 0 ? 'secondary' : undefined}
                        >
                            <a href={`products/${product.id}`}>
                                <CardImage className="h-2/5 overflow-hidden">
                                    <CardImageContent className="bottom-0 flex flex-col justify-end p-6 w-full text-white bg-gradient-to-b from-slate-900/0 to-slate-900">
                                        <span className="text-2xl"> {product.title}</span>
                                    </CardImageContent>
                                    <Image
                                        src={product.image} alt="image"
                                        width={200}
                                        height={200}
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                    />

                                </CardImage>
                            </a>
                            <div className="h-3/5 flex flex-col justify-between">
                                <CardContent className="space-y-2 pt-6">
                                    <CardDescription className="line-clamp-3">

                                        {product.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="justify-end">
                                    <Link href={`products/${product.id}`}>€ {product.price}</Link>
                                </CardFooter>
                            </div>

                        </Card>
                    </div>

                ))}
            </div>

        </>
    )
}