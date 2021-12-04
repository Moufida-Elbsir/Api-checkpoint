import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
       const fetchUsers=async()=>{
            try {
              const res=await axios.get('https://jsonplaceholder.typicode.com/users')  
            setUsers(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
        setLoading(false)
    // const getUsers=()=>{
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(data => setUsers(data))
    // .catch((err)=>console.log(err))
    // }
    // getUsers()
    // setLoading(false)
    // console.log(users)
}, [])

    return (
        <div className="App">{loading? <h1>loading...</h1>:
        users.map(el=>
            <div style={{border:"1px solid black"}}>
            <h3 style={{color:"blue"}}>{el.name}</h3>
            <h5>{el.email}</h5>
            <h5>{el.address.street}</h5>
            </div>
            )
        }
            
        </div>
    )
}

export default UserList
