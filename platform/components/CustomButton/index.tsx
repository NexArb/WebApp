import React from 'react'
import { useFormStatus } from 'react-dom'

const CustomFooter = () => {
	const { pending } = useFormStatus()

	return (
		<button
			type="submit"
			className="group flex items-center justify-center gap-2 h-[65px] w-[248px] rounded-full outline-none transition-all hover:scale-105 bg-gradient-to-l from-emerald-400 via-blue-500 to-purple-500"
			disabled={pending}
		>
			{pending ? (
				<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
			) : (
				<div className="group-hover:text-xl text-white text-lg font-medium leading-relaxed">
					Let&apos;s Meet!
				</div>
			)}
		</button>
	)
}

export default CustomFooter
