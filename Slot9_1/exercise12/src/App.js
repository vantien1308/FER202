import Counter from './Components/Counter';
import ControllerInput from './Components/ControllerInput';
import ToggleVisibility from './Components/ToggleVisibility';
import TodoList from './Components/TodoList';
import ColorSwitcher from './Components/ColorSwitcher';
import SearchFilter from './Components/SearchFilter';
import DragDropList from './Components/DragDropList';


function App() {
  return (
    <div>
      <Counter />
      <ControllerInput />
      <ToggleVisibility />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragDropList />
    </div>
  );
}
export default App;