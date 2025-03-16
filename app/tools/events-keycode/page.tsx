import { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'
import dynamic from 'next/dynamic'

const KeyboardEvents = dynamic(() => import('./components/KeyboardEvents'), {
  ssr: false,
})

export const metadata: Metadata = genPageMetadata({ title: 'Keyboard Events Codes' })

export default function KeyboardEventsPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Keyboard Events Codes
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Test and discover JavaScript keyboard event keycodes. Press any key to see its event
          properties and codes for your web applications.
        </p>
      </div>

      <div className="container py-12">
        <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
          <KeyboardEvents />
        </div>
      </div>
    </div>
  )
}
