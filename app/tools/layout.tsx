import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return <div className="mx-auto h-full  w-full  px-4 sm:px-6 xl:px-0">{children}</div>
}
