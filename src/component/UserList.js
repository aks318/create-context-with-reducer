import React, { useContext, useEffect } from 'react'
import { Context as UserContext } from '../contexts/UserContext'

const UserList = () => {

    const {state : UserState,
        FetchUserData
    } = useContext(UserContext)

    useEffect(() => {
        FetchUserData()
    } , [])
  return (
    <div>
        <table style={{width:"100%"}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th> 
                    <th>Company</th>
                    <th>Phone no.</th>
                    <th>Website</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {UserState.user && UserState.user.map(user => (
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.company.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.address.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserList