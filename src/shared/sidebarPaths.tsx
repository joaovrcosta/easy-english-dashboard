import { FaTachometerAlt, FaUsers, FaBell, FaChartBar } from 'react-icons/fa'
import { AiFillSchedule } from 'react-icons/ai'

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
    path: '/schedule',
    icon: <AiFillSchedule />,
    title: 'Horários/Eventos',
  },
  {
    path: '/orders',
    icon: <FaBell />,
    title: 'Notificações',
  },
  {
    path: '/total-sales',
    icon: <FaChartBar />,
    title: 'Total de Vendas',
  },
]
