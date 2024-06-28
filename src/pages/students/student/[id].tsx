import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/default'
import { NextPageWithLayout } from '@/pages/_app'
import StudentPage from '@/views/students/student'

const TabelaFipeScreen: NextPageWithLayout = () => {
  return <StudentPage />
}

TabelaFipeScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default TabelaFipeScreen
