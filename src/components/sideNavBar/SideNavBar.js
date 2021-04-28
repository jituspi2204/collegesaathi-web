import React from 'react'
import MenuItems from './MenuItems'
import { Link } from 'react-router-dom'
import styles from './SideNavBar.module.css'
import Logo from '../../assets/images/logo.png'
import { FiArrowLeftCircle } from 'react-icons/fi'
import cx from 'classnames'

const ButtomNavBar = () => {
    return (
        <nav className={styles.navBar}> 
            <ul className={styles.navBarItems}>
                {/* <li className={styles.logo}> */}
                    {/* <Link to='/'> */}
                        {/* <img src={Logo} alt='Logo' width='50px'/> */}
                    {/* </Link> */}
                {/* </li> */}
                { MenuItems.map((item, index) => {
                    return (
                        <li className={styles.navItem}>
                            <Link className={styles.navLink} to={item.url}>
                                <div className={styles.navItemIcon}>
                                {item.icon}
                                </div>
                                <div className={styles.navItemTitle}>
                                {item.title}
                                </div>
                            </Link>
                        </li>
                    )
                })}
                <hr/>
               <li className={styles.navItem}>
                   <div className={styles.navLink}>
                        <button className={cx(styles.collapseBtn, styles.navItemIcon)}>
                            <FiArrowLeftCircle size='30' />
                        </button>
                        <div className={ styles.navItemTitle }>
                            Collapse
                        </div>
                   </div>
               </li> 
            </ul>
        </nav>
    )
}

export default ButtomNavBar
