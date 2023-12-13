import React, { useEffect } from 'react'

import { useUserStore } from '@/lib/store'

function Modal() {
  const { showModal, toggleModal } = useUserStore()

  // Add event listener on component mount and remove on unmount
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleModal()
      }
    }

    window.addEventListener('keydown', handleEsc)

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [toggleModal]) // Empty dependency array ensures this runs once on mount and cleanup on unmount

  if (!showModal) return null

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement
    if (target.id === 'wrapper') {
      // If it's a keyboard event, only handle if 'Enter' or 'Space' was pressed
      if (
        event instanceof KeyboardEvent &&
        !['Enter', ' '].includes(event.key)
      ) {
        return
      }
      toggleModal()
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement
    if (target.id === 'wrapper') {
      toggleModal()
    }
  }

  return (
    <button
      id="wrapper"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className="fixed z-30 inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      tabIndex={0}
    >
      
    </button>
  )
}

export default Modal
