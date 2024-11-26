import { Product } from "../types/Product";

interface ProductListProps{
    products: Product[];
}



const ProductList: React.FC<ProductListProps> = ({products}) =>{

    return(
        <div>
            {products.map((product)=><div>
                <h3><span>{product.id} :</span> <span>{product.name}</span></h3>
                <p><img src={product.image} alt={product.name} /></p>
                <p>{product.color}</p>

            </div>)}
        </div>
    )
}

export default ProductList;