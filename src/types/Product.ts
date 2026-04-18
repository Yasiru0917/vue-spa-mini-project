export interface Product {
  id: number
  name: string
  price: number
  image: string

  highlights?: string[]
  camera?: string
  performance?: string
  battery?: string
  design?: string
  colors?: string[]
}