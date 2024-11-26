import './App.css'
import ProductList from './components/ProductList'
import { Product } from './types/Product'

function App() {
  const products: Product[] = [
    {id: 1, name: 'kapa 1',image:'../assets/ProductImages/samurai6.jpg', color:['red'] },
    {id: 2, name: 'kapa 2',image:'../assets/ProductImages/samurai6.jpg', color:['blue'] }
]

  return (
    <>
      <ProductList products={products}/>
    </>
  )
}

export default App
