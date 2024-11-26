import {Product} from '../types/Product'

interface ProductItemProps{
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({product}) =>{



    return (
        <div>
                <p><span>{product.id}</span> <span>{product.name}</span><span>{product.image}</span><span>{product.color}</span></p>
        </div>
    )
}

export default ProductItem;