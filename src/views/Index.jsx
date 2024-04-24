import React from 'react'
import axios from "axios";
import Autocomplete from "../components/Autocomplete/Index";
import { useEffect, useState } from "react";
import './mainpage.scss';

function Index() {
    const [data, setData] = useState()

    const users = [
        { id: 1, username: "Lee Miracle" },
        { id: 2, username: "Zhang Tumbler" },
        { id: 3, username: "Wang Berrycloth" },
        { id: 4, username: "Müller Fernsby" },
        { id: 5, username: "Smirnov Dankworth" },
        { id: 6, username: "Smith Sallow" },
        { id: 7, username: "Hernandez Relish" },
        { id: 8, username: "Gonzalez MacQuoid" },
        { id: 9, username: "Garcia Birdwhistle" },
        { id: 10, username: "Nguyen Loughty" }
    ]

    useEffect(() => {
        listoftextuser()
    }, {})

    const listoftextuser = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(
                res => {
                    setData(res.data)
                    console.log(res.data)
                }
            )
    }

    return (
        <div className="mainPage">
            <Autocomplete options={users} data={data} type={'username'} title={'select username:'} />
        </div>

    )
}

export default Index