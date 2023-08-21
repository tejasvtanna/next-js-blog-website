import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata: Metadata = {
  title: "Tejas' Blog",
  description: 'Created by Tejas Tanna',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const name = () => {}

  return (
    <html lang="en">
      <body className=" dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
