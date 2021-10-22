import React from "react";
import Aside from "../aside/aside";
import GuitarList from "../guitar-list/guitar-list";

const Catalog = () => {
    return (
        <div className='catalog'>
        <Aside />
        <GuitarList />
        </div>
    )
}

export default Catalog;