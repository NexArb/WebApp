import React from 'react'
import { useFormStatus } from 'react-dom'

type ButtonProps = Readonly<{
  classButton: string
  classText: string
  text: string
  onClick?: () => void
}>

function CustomButton({ classButton, classText, text, onClick }: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className={`rounded-full outline-none ${classButton}`}
      disabled={pending}
      onClick={() => onClick?.()}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        <div
          className={`text-lg font-medium leading-relaxed text-white ${classText}`}
        >
          {text}
        </div>
      )}
    </button>
  )
}

export default CustomButton
