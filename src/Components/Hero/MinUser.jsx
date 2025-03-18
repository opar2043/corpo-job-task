import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Card from '../User/Card';

const MinUser = () => {
    const [users , setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    },[])

    console.log(users);
  return (
    <div className='my-4'>
       <div className='flex justify-between my-4'>
        <h2 className='text-2xl  font-bold mb-4'>User Data</h2>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </div>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
            {
                users && users.slice(0,6).map(user => <Card key={user.id} user={user}></Card>)
            }
         </div>
         <div className='flex justify-center mt-6'>
         <NavLink to={'/user'}>
         <button className='btn btn-outline'>View All User</button>
         </NavLink>
         </div>
    </div>
  )
}

export default MinUser