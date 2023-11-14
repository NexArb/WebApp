import CustomFooter from '@/components/CustomFooter'
import CustomTextField from '@/components/CustomTextfield'

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-main">
      <CustomTextField />
      <CustomFooter />
    </main>
  )
}
