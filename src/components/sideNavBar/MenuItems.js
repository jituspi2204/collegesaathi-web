import { FiBell, FiSearch , FiHome, FiSmile, FiTrendingUp } from 'react-icons/fi'
const MenuItems = [
    {
        title: 'Home',
        url: '/',
        cName: 'navLink',
        icon: <FiHome size='25' />

    },
    {
        title: 'Search',
        url: '/search',
        cName: 'navLink',
        icon: <FiSearch size='25' />
    },
    {
        title: 'Account',
        url: '/account',
        cName: 'navLink',
        icon: <FiSmile size='25' />
    },
    {
        title: 'Rank',
        url: '/rank-list',
        cName: 'navLink',
        icon: <FiTrendingUp size='25' />
    },
    {
        title: 'Notifications',
        url: '/notifications',
        cName: 'navLink',
        icon: <FiBell  size='25' />
    },
]

export default MenuItems