import React from 'react'
import MenuItems from './MenuItems'
import { Link } from 'react-router-dom'

const ButtomNavBar = () => {
    return (
        <nav  > 
            <ul  >
                { MenuItems.map((item, index) => {
                    return (
                        <li  >
                            <Link  >
                                <div  >
                                {item.icon}
                                </div>
                                <div  >
                                {item.title}
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default ButtomNavBar
