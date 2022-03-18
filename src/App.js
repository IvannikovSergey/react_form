import CreateUser from "./Components/Users/CreateUser";
import UserList from "./Components/Users/UserList";
import { useState } from 'react';

function App(props) {

  const [newUserList, setNewUserList] = useState([]);

  const createUserList = (name, age) => {
    setNewUserList((prevUserList) => {
      return [...prevUserList, { name: name, age: age, id: Math.random().toString() }];
    });
  }

  return (
    <>
      <CreateUser onCreateUser={createUserList} />
      <UserList users={newUserList} />
    </>
  );
}

export default App;
