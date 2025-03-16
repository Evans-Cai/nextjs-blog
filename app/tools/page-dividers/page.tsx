import { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'
import dynamic from 'next/dynamic'

const PageDividers = dynamic(() => import('./components/PageDividers'), {
  ssr: false,
})

export const metadata: Metadata = genPageMetadata({ title: 'Page Dividers Generator' })

export default function PageDividersPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Page Dividers
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Generate beautiful page dividers using CSS and SVG. Create unique section separators for
          your web projects.
        </p>
      </div>

      <div className="container py-12">
        <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
          <PageDividers />
        </div>
      </div>
    </div>
  )
}
