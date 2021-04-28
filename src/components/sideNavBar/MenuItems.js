import { FiBell, FiBook, FiFileText, FiHome, FiSmile } from 'react-icons/fi'
const MenuItems = [
    {
        title: 'Notifications',
        url: '/notifications',
        cName: 'navLink',
        icon: <FiBell  size='25' />
    },
    {
        title: 'Study Material',
        url: '/study-material',
        cName: 'navLink',
        icon: <FiBook size='25' />
    },
    {
        title: 'Home',
        url: '/',
        cName: 'navLink',
        icon: <FiHome size='25' />

    },
    {
        title: 'Report Card',
        url: '/report-card',
        cName: 'navLink',
        icon: <FiFileText size='25' />
    },
    {
        title: 'Account',
        url: '/account',
        cName: 'navLink',
        icon: <FiSmile size='25' />
    }
]

export default MenuItems