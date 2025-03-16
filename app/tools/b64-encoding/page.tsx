import { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'
import dynamic from 'next/dynamic'

const Base64Encoder = dynamic(() => import('./components/Base64Encoder'), {
  ssr: false,
})

export const metadata: Metadata = genPageMetadata({ title: 'Base64 Encoding Tool' })

export default function Base64EncodingPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Base64 Encoding
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Convert images and files to base64 format. Generate CSS styles for using encoded images as
          background images in your web projects.
        </p>
      </div>

      <div className="container py-12">
        <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
          <Base64Encoder />
        </div>
      </div>
    </div>
  )
}
