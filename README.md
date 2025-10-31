# Cosmic Blog Platform

![App Preview](https://imgix.cosmicjs.com/26fb8640-b637-11f0-ac0f-f7b89d2a648e-photo-1555066931-4365d14bab8c-1761900843955.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A lightning-fast blog platform built with Astro and powered by Cosmic CMS. This static site generator delivers exceptional performance while showcasing your blog content beautifully.

## ✨ Features

- **Astro Static Site Generation**: Lightning-fast page loads with minimal JavaScript
- **Blog Post Management**: Display and manage blog posts from Cosmic CMS
- **Author Profiles**: Showcase author information with dedicated profile pages
- **Category Organization**: Filter and browse posts by category
- **Responsive Design**: Beautiful experience across all devices
- **SEO Optimized**: Built-in meta tags and structured data
- **Image Optimization**: Automatic image optimization via imgix
- **Markdown Rendering**: Full support for markdown content
- **Social Integration**: Author social links (Twitter, LinkedIn)
- **Fast Navigation**: Client-side routing for instant page transitions

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=690478d3271316ad9f4ce936&clone_repository=69047a11271316ad9f4ce95b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a blog with posts, authors, and categories"

### Code Generation Prompt

> "Set up an Astro website powered by my existing content"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies Used

- **Astro 5.1**: Modern static site generator with island architecture
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Cosmic SDK**: Headless CMS integration
- **Markdown**: Content rendering with remark/rehype

## 📋 Prerequisites

- Node.js 18.14.1 or higher
- Bun package manager
- A Cosmic account with your blog content

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cosmic-blog-platform
```

2. Install dependencies:
```bash
bun install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Add your Cosmic credentials to `.env`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Start the development server:
```bash
bun run dev
```

Visit `http://localhost:4321` to see your blog.

## 📚 Cosmic SDK Examples

### Fetching All Posts

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Posts include nested author and categories data
```

### Fetching a Single Post

```typescript
const { object: post } = await cosmic.objects
  .findOne({ 
    type: 'posts',
    slug: 'post-slug' 
  })
  .depth(1)

// Access nested data
const authorName = post.metadata.author?.title
const categories = post.metadata.categories || []
```

### Fetching Posts by Category

```typescript
const { objects: posts } = await cosmic.objects
  .find({ 
    type: 'posts',
    'metadata.categories': categoryId
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Author Details

```typescript
const { object: author } = await cosmic.objects
  .findOne({
    type: 'authors',
    slug: 'author-slug'
  })

// Access author metadata
const bio = author.metadata.bio
const avatar = author.metadata.avatar?.imgix_url
const twitter = author.metadata.twitter
```

## 🔌 Cosmic CMS Integration

This application uses your existing Cosmic content model:

**Posts Object Type:**
- Content (markdown)
- Excerpt (textarea)
- Featured Image (file)
- Author (object - references authors)
- Categories (objects - references categories)
- Published Date (date)

**Authors Object Type:**
- Name (text)
- Bio (textarea)
- Email (text)
- Avatar (file)
- Twitter Handle (text)
- LinkedIn URL (text)

**Categories Object Type:**
- Name (text)
- Description (textarea)
- Icon (file)

All content is fetched at build time using the Cosmic SDK with depth=1 to include nested author and category data.

## 🚀 Deployment Options

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `bun run build`
4. Publish directory: `dist`
5. Add environment variables in Netlify dashboard

### Build for Production

```bash
bun run build
```

The static site will be generated in the `dist` directory.

## 📝 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run type-check` - Run TypeScript checks
- `bun run prebuild` - Type check before build

## 🎨 Customization

### Styling

The application uses Tailwind CSS. Customize the design in:
- `tailwind.config.mjs` - Tailwind configuration
- `src/styles/global.css` - Global styles

### Components

All components are in `src/components/`:
- `PostCard.astro` - Individual post preview
- `CategoryBadge.astro` - Category display
- `AuthorInfo.astro` - Author information display
- `Navigation.astro` - Site navigation
- `Footer.astro` - Site footer

### Layouts

The main layout is in `src/layouts/Layout.astro` and includes:
- SEO meta tags
- Open Graph tags
- Structured data
- Global styles

## 📄 License

MIT

<!-- README_END -->