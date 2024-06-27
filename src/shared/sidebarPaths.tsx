import { FaTachometerAlt, FaUsers, FaBell, FaChartBar } from 'react-icons/fa'
import { AiFillSchedule } from 'react-icons/ai'
import { TbBooks } from 'react-icons/tb'

export const routes = [
  {
    path: '/dashboard',
    icon: <FaTachometerAlt />,
    title: 'Dashboard',
  },
  {
    path: '/students',
    icon: <FaUsers />,
    title: 'Alunos',
  },
  {
    path: '/classes',
    icon: <TbBooks />,
    title: 'Turmas',
  },
  {
    path: '/schedule',
    icon: <AiFillSchedule />,
    title: 'Horários/Eventos',
  },
  {
    path: '/total-sales',
    icon: <FaChartBar />,
    title: 'Total de Vendas',
  },
]
