import React, { useState } from 'react';
import { User } from './App';

interface AddUserFormProps {
  addUser: (user: User) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = React.memo(({ addUser }) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleAddUser = () => {
    if (username && email) {
      addUser({ username, email });
      setUsername('');
      setEmail('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
});

export default AddUserForm;
