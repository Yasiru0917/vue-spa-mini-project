import type { Product } from '../types/Product'

import iPhone17ProMax from '../assets/17 pro max.jpg'
import iPhone17Pro from '../assets/17 pro.jpg'
import iPhone17 from '../assets/17.jpg'
import iPhone16ProMax from '../assets/16 pro max.png'
import iPhone16Pro from '../assets/16 pro.jpg'
import iPhone16 from '../assets/16.jpg'
import iPhone15ProMax from '../assets/15 pro max.jpg'
import iPhone15Pro from '../assets/15 pro.jpg'
import iPhone15 from '../assets/15.jpg'
import iPhone14ProMax from '../assets/14 pro max.jpg'
import iPhone14 from '../assets/14.jpg'
import iPhone13ProMax from '../assets/13promax.jpg'

export const products = [
  {
    id: 1,
    name: 'iPhone 17 Pro Max',
    price: 650000,
    image: iPhone17ProMax,
    colors: ['#FF7A00', '#C0C0C0', '#1E3A8A'],
    camera: '48MP triple camera with 8× optical zoom',
    performance: 'A19 Pro chip with vapor chamber cooling',
    battery: 'Up to 39 hours video playback',
    design: 'Heat-forged aluminum unibody design',
    highlights: [
      'Best zoom system ever on iPhone',
      'Advanced thermal performance',
      'Largest battery in iPhone history',
      'Pro-level video recording'
    ]
  },

  {
    id: 2,
    name: 'iPhone 17 Pro',
    price: 590000,
    image: iPhone17Pro,
    colors: ['#FF7A00', '#C0C0C0', '#1E3A8A'],
    camera: '48MP triple system with 4×–8× optical zoom',
    performance: 'A19 Pro chip optimized for efficiency',
    battery: 'Up to 33 hours video playback',
    design: 'Lightweight aluminum frame',
    highlights: [
      'Compact Pro performance',
      'Flagship A19 Pro chip',
      'Professional camera system',
      'Better portability'
    ]
  },

  {
    id: 3,
    name: 'iPhone 17',
    price: 520000,
    image: iPhone17,
    colors: ['#C8B6FF','#A8E6CF', '#A0D8EF', '#FFFFFF','#1F2937'],
    camera: 'Dual 48MP system with Night Mode',
    performance: 'A18 chip for smooth performance',
    battery: 'All-day battery life',
    design: 'Glass + aluminum modern design',
    highlights: [
      'Balanced performance',
      'Great camera upgrade',
      'Affordable flagship option',
      'Dynamic Island experience'
    ]
  },

  {
    id: 4,
    name: 'iPhone 16 Pro Max',
    price: 540000,
    image: iPhone16ProMax,
    colors: ['#8E8E93', '#C0C0C0', '#3B3B3B', '#D4AF37'],
    camera: '48MP Pro camera with 5× telephoto zoom',
    performance: 'A18 Pro chip for gaming and AI tasks',
    battery: 'All-day heavy usage battery',
    design: 'Titanium premium finish',
    highlights: [
      'Titanium body',
      'Pro camera system',
      'Strong battery life',
      'Excellent for creators'
    ]
  },

  {
    id: 5,
    name: 'iPhone 16 Pro',
    price: 480000,
    image: iPhone16Pro,
    colors: ['#8E8E93', '#C0C0C0', '#3B3B3B', '#D4AF37'],
    camera: '48MP main + ultra-wide + telephoto',
    performance: 'A18 Pro chip high efficiency',
    battery: 'Good all-day usage',
    design: 'Light titanium frame',
    highlights: [
      'Compact Pro device',
      'Strong performance',
      'Premium build',
      'Great camera system'
    ]
  },

  {
    id: 6,
    name: 'iPhone 16',
    price: 410000,
    image: iPhone16,
    colors: ['#FFB6C1', '#ADD8E6', '#90EE90', '#FFFFFF', '#000000'],
    camera: '48MP dual camera system',
    performance: 'A17 chip smooth performance',
    battery: 'Reliable daily battery',
    design: 'Aluminum + glass design',
    highlights: [
      'Affordable flagship',
      'Great camera upgrade',
      'Smooth performance',
      'Modern design'
    ]
  },

  {
    id: 7,
    name: 'iPhone 15 Pro Max',
    price: 437635,
    image: iPhone15ProMax,
    colors: ['#8E8E93', '#C0C0C0', '#3B3B3B', '#2F4F4F'],
    camera: '48MP Pro camera with 5× zoom',
    performance: 'A17 Pro chip for gaming',
    battery: 'Long-lasting battery life',
    design: 'Titanium lightweight frame',
    highlights: [
      'Gaming performance boost',
      'Titanium design',
      'Pro camera system',
      'USB-C support'
    ]
  },

  {
    id: 8,
    name: 'iPhone 15 Pro',
    price: 392635,
    image: iPhone15Pro,
    colors: ['#8E8E93', '#C0C0C0', '#3B3B3B', '#2F4F4F'],
    camera: '48MP camera system with 3× zoom',
    performance: 'A17 Pro chip compact power',
    battery: 'Good battery efficiency',
    design: 'Ultra-light titanium body',
    highlights: [
      'Lightest Pro iPhone',
      'Powerful chip',
      'ProMotion display',
      'Strong build quality'
    ]
  },

  {
    id: 9,
    name: 'iPhone 15',
    price: 364635,
    image: iPhone15,
    colors: ['#FADADD', '#FFFACD', '#D0F0C0', '#ADD8E6', '#000000'],
    camera: '48MP main camera with Portrait mode',
    performance: 'A16 Bionic chip',
    battery: 'All-day usage',
    design: 'Colorful glass design',
    highlights: [
      'Dynamic Island feature',
      'Improved camera',
      'USB-C charging',
      'Smooth performance'
    ]
  },

  {
    id: 10,
    name: 'iPhone 14 Pro Max',
    price: 328135,
    image: iPhone14ProMax,
    colors: ['#5E5E5E', '#D4AF37', '#6A5ACD', '#000000'],
    camera: '48MP main camera + telephoto',
    performance: 'A16 Bionic chip',
    battery: 'Strong all-day battery',
    design: 'Stainless steel frame',
    highlights: [
      'Dynamic Island introduction',
      'Always-on display',
      'Strong camera system',
      'Premium build'
    ]
  },

  {
    id: 11,
    name: 'iPhone 14',
    price: 265135,
    image: iPhone14,
    colors: ['#87CEEB', '#800000', '#FFFFFF', '#000000', '#9370DB'],
    camera: 'Dual 12MP camera system',
    performance: 'A15 Bionic chip',
    battery: 'Good daily usage battery',
    design: 'Aluminum frame',
    highlights: [
      'Reliable performance',
      'Crash detection safety',
      'Good camera quality',
      'Affordable option'
    ]
  },

  {
    id: 12,
    name: 'iPhone 13 Pro Max',
    price: 280000,
    image: iPhone13ProMax,
    colors: ['#87A96B', '#C0C0C0', '#1F2937', '#ADD8E6'],
    camera: '12MP Pro camera with macro mode',
    performance: 'A15 Bionic chip',
    battery: 'Excellent battery life',
    design: 'Stainless steel body',
    highlights: [
      'ProMotion display',
      'Strong battery life',
      'Cinematic mode video',
      'Flagship durability'
    ]
  }
]


export function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 400) // simulate loading delay
  })
}


export function getProductById(id: number): Promise<Product | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id))
    }, 200)
  })
}