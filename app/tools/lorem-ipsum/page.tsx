import { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'
import dynamic from 'next/dynamic'

const LoremIpsum = dynamic(() => import('./components/LoremIpsum'), {
  ssr: false,
})

export const metadata: Metadata = genPageMetadata({ title: 'Lorem Ipsum Generator' })

export default function LoremIpsumPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Lorem Ipsum Generator
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Generate placeholder text with various themes and styles. Choose from different generators
          including classic Lorem Ipsum, Pokemon, and more.
        </p>
      </div>

      <div className="container py-12">
        <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
          <LoremIpsum />
        </div>
      </div>
    </div>
  )
}
