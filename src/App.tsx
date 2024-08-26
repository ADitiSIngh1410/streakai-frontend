import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';

export interface User {
  username: string;
  email: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const prevUsersRef = useRef<User[]>([]);  // Ref to track previous users array

  const addUser = useCallback((user: User) => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers, user];

      if (prevUsers !== newUsers) {
        prevUsersRef.current = newUsers;
        return newUsers;
      }
      return prevUsers;
    });
  }, []);

  const deleteUser = useCallback((index: number) => {
    setUsers((prevUsers) => {
      const newUsers = prevUsers.filter((_, i) => i !== index);
      
      if (prevUsers !== newUsers) {
        prevUsersRef.current = newUsers;
        return newUsers;
      }
      return prevUsers;
    });
  }, []);

  const memoizedUsers = useMemo(() => users, [users]);

  useEffect(()=>{

  },[memoizedUsers])

  return (
    <div className="App">
      <h1>User Management</h1>
      <AddUserForm addUser={addUser} />
      <UserTable users={memoizedUsers} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
