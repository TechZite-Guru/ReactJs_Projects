import logo from './logo.svg';
import './App.css';

import { UsersForm } from './API/UsersForm';
import {UsersList} from './API/UsersList';
import {UsersUpdate} from './API/UsersUpdate';
import { UserDelete } from './API/UserDelete';

function App() {
  return (
    <div className="App">
      <UsersForm></UsersForm>
      <UsersUpdate></UsersUpdate>
      <UserDelete></UserDelete>
      <UsersList></UsersList>
    </div>
  );
}

export default App;
