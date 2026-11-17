import { useEffect } from 'react'
export function usePageMeta(title: string, desc: string) {
  useEffect(() => {
    document.title = `${title} | Pondok Khitan Setro`
    document.querySelector('meta[name="description"]')?.setAttribute('content', desc)
  }, [title, desc])
}
