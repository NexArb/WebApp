import React from 'react'
import { useFormStatus } from 'react-dom'

type ProjectItem = Readonly<{
  classButton: string
  classText: string
  text: string
}>

function CustomButton({ classButton, classText, text }: ProjectItem) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className={`mx-auto flex items-center justify-center gap-2 rounded-full outline-none ${classButton}`}
      disabled={pending}
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
