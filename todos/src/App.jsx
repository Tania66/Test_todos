
import { Provider } from "react-redux";
import "./App.css";
import TodosForm from "./components/TodosForm/TodosForm";
import TodosList from "./components/TodosList/TodosList";
import { store } from "./app/store";

function App() {

 
  

  return (

    <Provider store={store}>
<div className="app">
<h1 className="title">Task App</h1>
      <TodosForm />
      <TodosList/>
</div>
</Provider>

  );
}

export default App;
