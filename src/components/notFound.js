import React from 'react';
import NO_DATA from '../assets/images/no-data.svg';
import FOLDER from "../assets/images/folder.svg";

const NotFound = ({title,folder}) => {
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-70vh rounded py-8">
            <img src={folder ? FOLDER : NO_DATA} className="w-1/4 mb-4"/>
            <h1 className="text-sm font-normal ">{title}</h1>
        </div>
    )
}

export default NotFound;

