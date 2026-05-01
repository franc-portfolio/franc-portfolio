import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const usePageTransition = () => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState<'enter' | 'exit' | 'idle'>('enter')

  useEffect(() => {
    if (location !== displayLocation) {
      const exitTimer = setTimeout(() => {
        setTransitionStage('exit')
      }, 0)

      const transitionTimer = setTimeout(() => {
        setDisplayLocation(location)
        setTransitionStage('enter')
      }, 300) // Match the pageOut animation duration

      return () => {
        clearTimeout(exitTimer)
        clearTimeout(transitionTimer)
      }
    }
  }, [location, displayLocation])

  return { transitionStage, displayLocation }
}
