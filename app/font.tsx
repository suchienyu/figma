import { Poppins } from 'next/font/google'
import { Roboto } from 'next/font/google'
export const poppins = Poppins({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400', '500', '700'],
    display: 'swap',
  });

export const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })