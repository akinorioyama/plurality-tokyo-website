import { redirect } from 'next/navigation'

export default function BlogRedirect() {
  redirect('/articles')
  return null
}
