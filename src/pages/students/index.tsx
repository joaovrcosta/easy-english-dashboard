import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/default'
import { NextPageWithLayout } from '../_app'
import StudentsPage from '@/views/students'

const TabelaFipeScreen: NextPageWithLayout = () => {
  return <StudentsPage />
}

TabelaFipeScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default TabelaFipeScreen
