import React from 'react'
import Button from '../components/button/Button'
import Header from '../components/header/Header'
import { FiUpload } from 'react-icons/fi'
import Selection from '../components/selection/Selection'

const StudyMaterial = () => {
    

    const uploadFileHandler = () => {
        console.log('File Uploaded Successfully')
    }
    return (
        <div>
            <Header title='Study Material'>
                <Button type='iconButton' title={<FiUpload size='25'/>} onClickHandler={uploadFileHandler} />
            </Header>
            <Selection heading='Material Type' />
            <Selection heading='Semester' />
            <Selection heading='Subject' />
            <Selection heading='Unit' />
            <button>Search</button>
            <button>Send to Admin</button>
        </div>
    )
}

export default StudyMaterial
