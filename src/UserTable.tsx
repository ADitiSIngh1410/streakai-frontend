import React, { useEffect } from 'react';
import UserRow from './UserRow';
import { User } from './App';

interface UserTableProps {
  users: User[];
  deleteUser: (index: number) => void;
}

const UserTable: React.FC<UserTableProps> = React.memo(({ users, deleteUser }) => {
  useEffect(()=>{ 
    
   },[users])
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) =>{
          
          return(
          <UserRow 
            key={index} 
            user={user} 
            onDelete={() => deleteUser(index)} 
          />
        )})}
      </tbody>
    </table>
  );
});

export default UserTable;
