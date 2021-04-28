import React from 'react'
import Card from '../components/card/Card'
import Header from '../components/header/Header'
import { } from 'react-icons'
import { FiLogOut } from 'react-icons/fi'

const AccountSettings = () => {
    return (
        <div>
           <Header title='Account Settings' />
           <Card title='Allow Storage permission' />
           <Card title='Have Query ? Contact Us' />
           <Card title='Terms & Conditions' />
           <Card title='Privacy Policy' />
           <Card title='Logout' titleIcon={[<FiLogOut />]} />
        </div>
    )
}

export default AccountSettings
