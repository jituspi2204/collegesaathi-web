import React, { useState } from 'react'
import Header from '../components/header/Header'
import SubHeading from '../components/subHeading/SubHeading'
import StudyMaterial from './StudyMaterial'
import Result from './Result'

const Search = () => {
    const [searchType, setSearchType ] = useState('result')

    return (
        <div>
            <Header title="Search" />
            <div className="flex flex-row items-center justify-between lg:w-2/3">
                <SubHeading title="Search" />
                <div className="flex flex-row mb-3">
                    <div onClick={() => setSearchType('study-material')} className={`${searchType === 'study-material' ? 'text-black bg-yellow-400 font-semibold' : 'bg-gray-500'} px-3 rounded cursor-pointer mx-3 `}>Study Material</div>
                    <div onClick={() => setSearchType('result')} className={`${searchType === 'result' ? 'text-black bg-yellow-400 font-semibold' : 'bg-gray-500'} px-3 rounded cursor-pointer`}>Result</div>
                </div>
            </div>
            <section>
                {searchType === 'study-material' && <StudyMaterial />}
                {searchType === 'result' && <Result load={true} />}
            </section>
            
        </div>
    )
}

export default Search
