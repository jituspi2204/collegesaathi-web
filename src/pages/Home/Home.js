import React from 'react'
import { FiMinimize, FiRefreshCcw } from 'react-icons/fi'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'

const Home = () => {

    const title='ETCS111 - Fundamental of Computing'
    const titleIcon = [ < FiMinimize /> , '3' ]
    const content = { 'Name': 'Ankit', 'Class': 'CSE 2'}
    return (
        <div>
            <Header title='Home'>
                <button 
                    onClick={() => console.log('click')}>
                    <FiRefreshCcw size='20'/>
                </button>
            </Header>     
            <Card title={title}
                titleIcon={titleIcon}
                content={content}
            />
        </div>
    )
}

export default Home
