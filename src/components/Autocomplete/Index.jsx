import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdClose } from "react-icons/io";
import './Autocomplete.scss';

function Index(props) {
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(null);

    const clickHandler = (name, id) => {
        setSelect(name)
        setClick(!click)
        props.getuserId(id)
    }

    const searchUser = (userlist, value) => {

    }

    const clearInput =()=>{
        setSelect(null)
    }

    return (
        <div className='selectoptionBox'>
            <div className="selectoptionTitle">{props.title}</div>
            <div className="inputSelectbox">
                <div className="inputTextbox">
                    <input type="text" value={select ? select : null} name="" id="" className='inputText' onChange={() => searchUser(props.options)} />
                    <div className="iconClose" style={{ display: (select === null ? "none" : 'flex') }} onClick={() => clearInput()}><IoMdClose /></div>
                </div>

                <div className="arrowDropbox" onClick={() => setClick(!click)}>
                    <IoMdArrowDropdown className='arrowDropdown' style={{ transform: (click === true ? "rotate(180deg)" : 'rotate(0)') }} />
                </div>
            </div>

            <div className="optionsBox" style={{ display: (click === true ? "flex" : 'none') }}>
                {
                    props.options?.map((option, index) => (
                        <div className="option" key={index} value={option.id} onClick={() => clickHandler(option[props.type], option.id)}  >{option[props.type]}</div>
                    ))
                }

            </div>
        </div>
    )
}

export default Index