import React from 'react'

type InputProps = Readonly<{
  name: string
  type: string
  placeholder: string
}>

export default function Input ({
  name,
  type,
  placeholder
}: InputProps): React.JSX.Element {
  return (
    <input
      className="borderBlack mt-4 h-14 rounded-full border-2 border-gray-200 px-4"
      name={name}
      type={type}
      required
      maxLength={500}
      placeholder={placeholder}
    />
  )
}
