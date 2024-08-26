import React from 'react';
import { User } from './App';

interface UserRowProps {
  user: User;
  onDelete: () => void;
}

const UserRow: React.FC<UserRowProps> = React.memo(({ user, onDelete }) => {
console.log("rendered",user)

  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
});

export default UserRow;
