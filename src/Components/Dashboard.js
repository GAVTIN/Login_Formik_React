import React, {useState, useEffect} from 'react'
import { v4 as uuid } from 'uuid';
import '../App.css'

const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return []
    }
};

export default function Dashboard() {
    const [item, setItem] = useState([])
    const [local, setLocal] = useState([])
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json`)
        .then(res=>res.json())
        .then(data => (setItem(data)))
        setLocal(getLocalItems())
    }, [])
    const final = [...item, ...local]
  return (
    <>
    <h1 style={{"text-align":"center", "padding-top":"2rem"}}>Details Page</h1>
    <div className='details-page'>
        {final.map(x => (
            <div className="card-style" key={uuid()}>
                <h3>Name:{x.name}</h3>
                <h3>Email:{x.email}</h3>
                <h3>Contact:{x.contact_number}</h3>
                <h3>Gender:{x.gender}</h3>
            </div>
        ))}
    </div>
    </>
  )
}
