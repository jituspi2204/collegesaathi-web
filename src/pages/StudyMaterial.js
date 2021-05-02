import React from 'react'
import Header from '../components/header/Header'
import SubHeading from '../components/subHeading/SubHeading'

const StudyMaterial = () => {
    
    return (
        <div>
           <Header title="Search" /> 
           <SubHeading title="Search Study Material" />

           <form className="grid gap-4 md:gap-10 grid-cols-4 bg-gray-700 p-5 mb-8 lg:w-2/3 rounded">
                <div className="flex flex-col">
                    <label htmlFor="materialType" className="text-xs">Material Type</label>
                    <select id="materialType" className="w-20 my-2 text-white rounded bg-gray-500">
                        <option>Notes</option>
                        <option>Question Paper</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="materialType" className="text-xs">Semester</label>
                    <select id="materialType" className="w-20 my-2 text-white rounded bg-gray-500">
                        <option>Sem - 1</option>
                        <option>Sem - 2</option>
                    </select>
                </div> <div className="flex flex-col">
                    <label htmlFor="materialType" className="text-xs">Subject</label>
                    <select id="materialType" className="w-20 my-2 text-white rounded bg-gray-500">
                        <option>27102 - ETCS111 - Fundamental of Computing</option>
                        <option>Question Paper</option>
                    </select>
                </div> <div className="flex flex-col">
                    <label htmlFor="materialType" className="text-xs">Unit</label>
                    <select id="materialType" className="w-20 my-2 text-white rounded bg-gray-500">
                        <option>Unit 1</option>
                        <option>Question Paper</option>
                    </select>
                </div>
                <button className="bg-yellow-400 text-black font-semibold rounded p-2 my-4 col-span-2">Search</button>
                <button className="bg-yellow-400 text-black font-semibold rounded p-2 my-4 col-span-2">Request Admin</button>
 
           </form>
        </div>
    )
}

export default StudyMaterial
