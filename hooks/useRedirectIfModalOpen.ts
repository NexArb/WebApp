// import { useRouter, usePathname } from 'next/navigation'
// import { useModalStore } from '@/hooks/userStore'
// import { useEffect } from 'react'

// const useRedirectIfModalOpen = () => {
//   const router = useRouter()
//   const pathname = usePathname()
//   const { showModal } = useModalStore()
//   const {isSubmitting} = useFormStore()

//   console.log(pathname)
//   console.log(showModal)

//   useEffect(() => {
//     if (
//       pathname === '/arbswap/dashboard/pricing' &&
//       showModal &&
//       isSubmitting
//     ) {
//       router.push('/arbswap/dashboard')
//     }
//   }, [pathname, showModal])
// }

// export default useRedirectIfModalOpen
