import { Sidebar } from '@/components/Sidebar'
import { Heading } from '@/components/atoms/Heading'
import { LandingLayout } from '@/layouts/landing'

export default function IndexPage() {
  return (
    <>
      <Heading color="black">Home</Heading>
    </>
  )
}

IndexPage.getLayout = (page: React.ReactNode) => (
  <LandingLayout>{page}</LandingLayout>
)
