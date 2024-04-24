import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import './Autocomplete.scss';

function Index(props) {
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState();

    const clickHandler = (name, id) => {
        setSelect(name)
        setClick(!click)
    }

    return (
        <div className='selectoptionBox'>
            <div className="selectoptionTitle">{props.title}</div>
            <div className="inputSelectbox">
                <div className="inputTextbox">
                    <input type="text" value={select ? select : props.value} name="" id="" className='inputText' />
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