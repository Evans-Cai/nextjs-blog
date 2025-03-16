import { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata: Metadata = genPageMetadata({ title: 'Developer Tools Collection' })

const tools = [
  {
    title: 'Triangle Generator',
    description: 'Generate css triangles styles for elements and pseudo-elements',
    path: '/tools/triangle-generator',
    icon: '▲',
  },
  {
    title: 'Color Shades Generator',
    description: 'Generate tints and shades of a given color',
    path: '/tools/color-shades-generator',
    icon: '🎨',
  },
  {
    title: 'Gradient Generator',
    description: 'Generate linear and radial css gradients',
    path: '/tools/gradient-generator',
    icon: '🌈',
  },
  {
    title: 'Page Dividers',
    description: 'Tool to generate page dividers with css and svg images',
    path: '/tools/page-dividers',
    icon: '✂️',
  },
  {
    title: 'SVG Compressor',
    description:
      'Compress SVG images with SVGO tool, convert to react component immediately after if needed',
    path: '/tools/svg-compressor',
    icon: '📐',
  },
  {
    title: 'SVG to JSX',
    description:
      'Convert SVG icons and illustrations to react components (or components for other libraries with JSX support)',
    path: '/tools/svg-to-jsx',
    icon: '⚛️',
  },
  {
    title: 'Base64 Encoding',
    description: 'Convert images or files to base64, generate styles to use as background image',
    path: '/tools/b64-encoding',
    icon: '📄',
  },
  {
    title: 'Fake Data Generator',
    description: 'Generate wide variety of realistic fake data: address, avatars, names, phones...',
    path: '/tools/fake-data-generator',
    icon: '🎲',
  },
  {
    title: 'Symbols Collection',
    description:
      'Collection of commonly used html symbols: arrows, marks, currency signs and many others',
    path: '/tools/html-symbols',
    icon: '💠',
  },
  {
    title: 'Lorem Ipsum',
    description: 'Generate different kinds of lorem ipsum text',
    path: '/tools/lorem-ipsum',
    icon: '📝',
  },
  {
    title: 'CSS Cursors',
    description: 'All existing CSS cursor property values collection',
    path: '/tools/css-cursors',
    icon: '👆',
  },
  {
    title: 'Keyboard Events Codes',
    description: 'JavaScript events keycode values',
    path: '/tools/events-keycode',
    icon: '⌨️',
  },
]

export default function ToolsPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Developer Tools
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A collection of free web development tools to help streamline your workflow
        </p>
      </div>

      <div className="py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.path}
              href={tool.path}
              className="group transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-3 flex items-center">
                  <span className="mr-3 text-3xl">{tool.icon}</span>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {tool.title}
                  </h2>
                </div>
                <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                  {tool.description}
                </p>
                <div className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  Try it out &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
