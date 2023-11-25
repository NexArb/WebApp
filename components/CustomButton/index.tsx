import React from 'react'
import { useFormStatus } from 'react-dom'

type ProjectItem = Readonly<{
  className: string
  text: string
}>

function CustomButton({ className, text }: ProjectItem) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className={`group mx-auto flex items-center justify-center gap-2 rounded-full outline-none transition-all hover:scale-105 ${className}`}
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        <div className="text-lg font-medium leading-relaxed text-white group-hover:text-xl">
          {text}
        </div>
      )}
    </button>
  )
}

export default CustomButton
