import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/default'
import { NextPageWithLayout } from '../_app'
import ClassesPage from '@/views/classes'

const TabelaFipeScreen: NextPageWithLayout = () => {
  return <ClassesPage />
}

TabelaFipeScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default TabelaFipeScreen
