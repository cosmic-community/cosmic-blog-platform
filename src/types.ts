// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
  thumbnail?: string
}

// Post interface
export interface Post extends CosmicObject {
  type: 'posts'
  metadata: {
    content: string
    excerpt?: string
    featured_image?: {
      url: string
      imgix_url: string
    }
    author?: Author
    categories?: Category[]
    published_date?: string
  }
}

// Author interface
export interface Author extends CosmicObject {
  type: 'authors'
  metadata: {
    name: string
    bio?: string
    email?: string
    avatar?: {
      url: string
      imgix_url: string
    }
    twitter?: string
    linkedin?: string
  }
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories'
  metadata: {
    name: string
    description?: string
    icon?: {
      url: string
      imgix_url: string
    }
  }
}

// API response type
export interface CosmicResponse<T> {
  objects: T[]
  total: number
}