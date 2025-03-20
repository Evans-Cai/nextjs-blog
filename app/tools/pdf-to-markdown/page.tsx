import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'
import Script from 'next/script'

export async function generateMetadata(): Promise<Metadata | undefined> {
  const title = 'PDF to Markdown - Fast & Free PDF to MD Converter'
  const description =
    'Convert PDFs to clean Markdown with formatting preserved. Free, secure, and no registration required. Perfect for developers and writers!'
  const publishedAt = new Date().toISOString()
  const modifiedAt = new Date().toISOString()
  const authors = [siteMetadata.author]
  return {
    title,
    description,
    keywords: ['pdf', 'markdown', 'convert'],
    openGraph: {
      title,
      description,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: siteMetadata.siteUrl + '/assets/images/social-banner.png',
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteMetadata.socialBanner],
    },
  }
}

const PdfToMarkdown = () => {
  return (
    <div className="mx-auto  h-full  w-full px-4 sm:px-6 xl:px-0">
      <Script src="/tools/pdf-to-markdown/bundle.js" />
      <div id="main" className="h-full min-h-[76vh] " />
    </div>
  )
}

export default PdfToMarkdown
