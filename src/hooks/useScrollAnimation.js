import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const current = ref.current
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [threshold])

  return [ref, isVisible]
}

export const useScrollAnimationMultiple = (threshold = 0.1) => {
  const refs = useRef([])
  const [visibleIndices, setVisibleIndices] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleIndices((prev) => new Set([...prev, index]))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    refs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      refs.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [threshold])

  const addRef = (index) => (el) => {
    if (el) refs.current[index] = el
  }

  return [addRef, visibleIndices]
}
