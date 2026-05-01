import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import '../styles/dropdown.css'

interface DropdownMenuProps {
  trigger: React.ReactNode
  items: Array<{
    id: string
    label: React.ReactNode
    onClick: () => void
    isActive?: boolean
  }>
  align?: 'left' | 'right'
}

export default function DropdownMenu({
  trigger,
  items,
  align = 'left',
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      const dropdownWidth = 150 // min-width from CSS
      const dropdownHeight = 120 // approximate height
      const padding = 8 // padding from viewport edge
      
      let left = align === 'left' ? rect.left : rect.right - dropdownWidth
      let top = rect.bottom + 4
      
      // Adjust if dropdown goes beyond right edge
      if (left + dropdownWidth + padding > window.innerWidth) {
        left = window.innerWidth - dropdownWidth - padding
      }
      
      // Adjust if dropdown goes beyond left edge
      if (left < padding) {
        left = padding
      }
      
      // Adjust if dropdown goes beyond bottom edge
      if (top + dropdownHeight + padding > window.innerHeight) {
        top = rect.top - dropdownHeight - 4
      }
      
      setPosition({ top, left })
    }
  }, [isOpen, align])

  const handleItemClick = (callback: () => void) => {
    callback()
    setIsOpen(false)
  }

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-trigger"
        aria-expanded={isOpen}
      >
        {trigger}
      </button>

      {isOpen &&
        createPortal(
          <div
            className={`dropdown-content floating-dropdown dropdown-${align}`}
            style={{
              position: 'fixed',
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: 1000,
            }}
          >
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.onClick)}
                className={`dropdown-item ${item.isActive ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>,
          document.body
        )}
    </>
  )
}
