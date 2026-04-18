import type { Product } from '../types/Product'

export const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 17 Pro Max',
    price: 650000,
    image: '/src/assets/17 pro max.jpg'
  },
  {
    id: 2,
    name: 'iPhone 17 Pro',
    price: 590000,
    image: '/src/assets/17 pro.jpg'
  },
  {
    id: 3,
    name: 'iPhone 17',
    price: 520000,
    image: '/src/assets/17.jpg'
  },
  {
    id: 4,
    name: 'iPhone 16 Pro Max',
    price: 540000,
    image: '/src/assets/16 pro max.png'
  },
  {
    id: 5,
    name: 'iPhone 16 Pro',
    price: 480000,
    image: '/src/assets/16 pro.jpg'
  },
  {
    id: 6,
    name: 'iPhone 16',
    price: 410000,
    image: '/src/assets/16.jpg'
  },
  {
    id: 7,
    name: 'iPhone 15 Pro Max',
    price: 437635,
    image: '/src/assets/15 pro max.jpg'
  },
  {
    id: 8,
    name: 'iPhone 15 Pro',
    price: 392635,
    image: '/src/assets/15 pro.jpg'
  },
  {
    id: 9,
    name: 'iPhone 15',
    price: 364635,
    image: '/src/assets/15.jpg'
  },
  {
    id: 10,
    name: 'iPhone 14 Pro Max',
    price: 328135,
    image: '/src/assets/14 pro max.jpg'
  },
  {
    id: 11,
    name: 'iPhone 14',
    price: 265135,
    image: '/src/assets/14.jpg'
  },
  {
    id: 12,
    name: 'iPhone 13 Pro Max',
    price: 280000,
    image: '/src/assets/13promax.jpg'
  }
]

// ============================
// 📦 API FUNCTIONS
// ============================

/**
 * Get all products (simulate API call)
 */
export function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 400) // simulate loading delay
  })
}

/**
 * Get product by ID
 */
export function getProductById(id: number): Promise<Product | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id))
    }, 200)
  })
}