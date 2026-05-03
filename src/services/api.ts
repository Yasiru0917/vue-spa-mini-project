import type { Product } from '../types/Product'

export async function fetchProducts(): Promise<Product[]> {
  const categories = [
    'smartphones',
    'laptops',
    'tablets',
    'mobile-accessories',
    'mens-watches',
    'womens-watches'
  ]

  let allProducts: Product[] = []

  for (const category of categories) {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`)
    const data = await res.json()

    allProducts = [...allProducts, ...data.products]
  }

  return allProducts
}