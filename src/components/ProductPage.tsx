import React from 'react'
import { useParams } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

interface ProductPageProps {
  setIsCartOpen: (isOpen: boolean) => void;
}

const products = [
  {
    id: 1,
    name: 'Smart Thermostat',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 199.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: 'Security Camera',
    image: 'https://images.unsplash.com/photo-1558000143-a78f8299c40b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 149.99,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: 4.2,
    reviews: 95
  },
  {
    id: 3,
    name: 'Smart Lock',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 179.99,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    rating: 4.7,
    reviews: 203
  },
  {
    id: 4,
    name: 'Smart Lighting Kit',
    image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 129.99,
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    rating: 4.4,
    reviews: 167
  }
]

const ProductPage: React.FC<ProductPageProps> = ({ setIsCartOpen }) => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const { theme } = useTheme();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="container mx-auto px-6 py-8">Product not found</div>;
  }

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-gray-800 text-white';
      case 'lilac':
        return 'bg-purple-50 text-purple-900';
      case 'red':
        return 'bg-red-50 text-red-900';
      case 'blue':
        return 'bg-blue-50 text-blue-900';
      default:
        return 'bg-white text-gray-800';
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    setIsCartOpen(true);
  };

  return (
    <div className={`${getThemeClasses()} py-8`}>
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center">
          <div className="w-full h-64 md:w-1/2 lg:h-96">
            <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={product.image} alt={product.name} />
          </div>
          <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-3">
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            </div>
            <div className="mt-4">
              <p>{product.description}</p>
            </div>
            <div className="mt-4 flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
              ))}
              <span className="ml-2">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div className="mt-6">
              <button
                onClick={handleAddToCart}
                className="px-8 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                {t('products.addToCart')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage