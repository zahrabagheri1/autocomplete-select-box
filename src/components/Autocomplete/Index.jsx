import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdClose } from "react-icons/io";
import './Autocomplete.scss';

function Index(props) {
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(null);
    // const [searchUser, setSearchUser] = useState("");
    const [users, setUsers] = useState(props.options)

    const clickHandler = (name, id) => {
        setSelect(name)
        setClick(!click)
        props.getuserId(id)
    }

    // const filterUser = props.options?.filter((option) => {
    //     const username = option[props.type].toLowerCase()
    //     const usernameType = searchUser.toLowerCase()
    //     setUsers(usernameType.includes(username))
    // })



    const filterUser = (searchUser) => {
        props.options?.map((option) => {
            const username = option[props.type].toLowerCase()
            const usernameType = searchUser.toLowerCase()
            // setUsers(usernameType.includes(username))
            console.log(usernameType.includes(username))
        })

    }

    return (
        <div className='selectoptionBox'>
            <div className="selectoptionTitle">{props.title}</div>
            <div className="inputSelectbox">
                <div className="inputTextbox" onClick={() => setSelect(null)} >
                    <input type="text" value={select ? select : null} name="" id="" className='inputText' onChange={(e) => filterUser(e.target.value)} />
                </div>

                <div className="arrowDropbox" onClick={() => setClick(!click)}>
                    <IoMdArrowDropdown className='arrowDropdown' style={{ transform: (click === true ? "rotate(180deg)" : 'rotate(0)') }} />
                </div>
            </div>

            <div className="optionsBox" style={{ display: (click === true ? "flex" : 'none') }}>
                {
                    users?.map((option, index) => (
                        <div className="option" key={index} value={option.id} onClick={() => clickHandler(option[props.type], option.id)}  >{option[props.type]}</div>
                    ))
                }

            </div>
        </div>
    )
}

export default Index