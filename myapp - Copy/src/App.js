
import './App.css';

import { TaskForm } from './API/TaskForm';
import {TaskList} from './API/TaskList';

function App() {
  return (
    <div className="App">
      <TaskForm></TaskForm>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
