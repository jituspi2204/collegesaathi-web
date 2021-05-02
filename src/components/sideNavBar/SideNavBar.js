import React from 'react'
import MenuItems from './MenuItems'
import { Link } from 'react-router-dom'

const SideNavBar = () => {
    return (
        <div className="md:max-h-screen md:my-auto">
            <nav className="flex flex-row max-w-screen justify-center items-center md:flex-col">  
                { MenuItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link to={item.url} >
                                <SideBarIcon title={item.title} icon={item.icon} />
                            </Link>
                        </div>
                    )
                })}
            </nav>
        </div>
    )
}

const SideBarIcon = ({title, icon}) => {
    return (
        <div className="group m-2 py-2 px-1 flex flex-col items-center rounded cursor-pointer w-12 sm:w-20">
            <div className="mb-2 group-hover:animate-bounce">
                {icon}
            </div>
            <p className="opacity-0 transition duration-200 group-hover:opacity-100 tracking-wider">{title}</p>
        </div>
    )
}

export default SideNavBar 
