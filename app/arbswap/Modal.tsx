import React, { FormEvent, FormEventHandler, useEffect } from 'react'

import { useUserStore } from '@/lib/store'

function Modal() {
  const { showModal, toggleModal, login, emailOrPhone, setEmailOrPhone, rememberDevice, setRememberDevice } = useUserStore()

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

  // If clicked outside don't show modal anymore
  if (!showModal) return null

  // If it's a keyboard event, only handle if 'Enter' or 'Space' was pressed
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement
    if (target.id === 'wrapper') {
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

  const handleSubmit: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault()
    const formData: FormData = new FormData(e.target as HTMLFormElement)
    const formValues: { [k: string]: FormDataEntryValue } = Object.fromEntries(formData)

    const { username, password } = formValues

    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password })
      })

      if (res.status === 201) {
        const data = await res.json()
        login(data.access_token)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section
      id="wrapper"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className="fixed z-30 inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      tabIndex={0}
    >
      <div className="w-[449px] bg-indigo-300 bg-opacity-20 rounded-[38px] border border-white backdrop-blur-[100px] h-[595px] flex-row">

        <form onSubmit={handleSubmit}>
          <label>
            Email or Phone number:
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={emailOrPhone}
              onChange={setEmailOrPhone}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder='Enter your password'
              required
            />
          </label>
          <label>
            Remember this device:
            <input
              type="checkbox"
              checked={rememberDevice}
              onChange={(e) => setRememberDevice(e.target.checked)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  )
}

export default Modal
