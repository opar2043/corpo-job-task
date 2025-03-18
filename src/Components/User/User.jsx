import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Card from './Card';

const User = () => {
    const [users , setUsers] = useState([]);
    const [search , setSearch] = useState('');
    const [dbSearch , setDbSearch] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    },[])

    useEffect(()=>{
      const timer = setTimeout(() => {
        setDbSearch(search)
      }, 500);

      return ()=> clearTimeout(timer);
    }, [search])

    const filterUser = users.filter(user => 
      user.name.toLowerCase().includes(dbSearch.toLowerCase())
    )

  return (
    <div>
       <div className='flex justify-between my-4 md:my-10'>
        <h2 className='text-xl md:text-3xl  font-bold mb-4'>User Data</h2>
        <input 
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by User Name" 
        className="input input-bordered md:w-full w-1/2 max-w-xs"
         />
      </div>
         <div className='grid grid-cols-2 md:grid-cols-4 gap-5 '>
            {
              filterUser.length > 0 ? (
                filterUser.map(user => <Card key={user.id} user={user}></Card>)
              ) : 
              <p className="text-gray-500 text-center col-span-3">No users found</p>
            }
         </div>
    </div>
  )
}

export default User