import { Product } from '../../../types/product'
import { ProductList } from '../../_components/productList'
import { getUserContext } from '../../utils/getUserContext'



export default async function Products() {
    return (
        <main className="flex min-h-screen flex-col items-center space-y-10">
            <ProductList />
        </main >
    )
}
