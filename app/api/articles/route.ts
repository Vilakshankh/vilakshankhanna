import { NextResponse } from 'next/server'
import { readdirSync } from 'fs'
import { join } from 'path'

export async function GET() {
  try {
    const articlesDir = join(process.cwd(), 'app', 'articles')
    
    // Read all directories in the articles folder
    const articleDirs = readdirSync(articlesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
    
    // Dynamically import meta.ts from each article directory
    const articles = await Promise.all(
      articleDirs.map(async (slug) => {
        try {
          const metaModule = await import(`@/app/articles/${slug}/meta`)
          return metaModule.meta
        } catch (error) {
          console.error(`Failed to load meta for ${slug}:`, error)
          return null
        }
      })
    )
    
    // Filter out any failed imports and sort by date (newest first)
    const validArticles = articles
      .filter(article => article !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    return NextResponse.json(validArticles)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}

