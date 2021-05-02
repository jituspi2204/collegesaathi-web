import React from 'react'
import { FiDownload, FiFileText } from 'react-icons/fi'
import Header from '../../components/header/Header'
import SubHeading from '../../components/subHeading/SubHeading'

const Home = () => {

  
    return (
        <div className="max-w-full">
           
           <Header title="Home" />
           <SubHeading title="Overvew" />
            <div className="grid grid-cols-2 bg-gray-700 p-5 lg:w-2/3   mb-8 rounded">
                <p>Name</p>
                <p >Ankit Vashisht</p>
                <p>Class</p>
                <p>CSE 2</p>
            </div>

            <SubHeading title="My Files" />
            <div className="bg-gray-700 p-5 mb-8 lg:w-2/3 rounded">
                <div className="flex justify-between">
                    <p className="font-semibold">ETCS111 - Fundamenetal of Computing</p>
                    <div className="w-6 h-6  bg-yellow-400 text-black rounded-full">
                      <p className="text-center font-bold">1</p> 
                    </div>
                </div>
                <hr className="my-2" />
                <div className="flex p-2">
                    <div><FiFileText color='#FBBF24' size='80' /></div>
                    <div className="mx-5">
                        <p>Fundamental of Computing</p>
                        <p>Notes * Unit 1</p>
                        <div className="flex w-max cursor-pointer bg-yellow-400 font-semibold text-black p-1 rounded">
                            <FiDownload  />
                            <button className="mx-2"> Download</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home
