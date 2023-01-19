import logo from './logo.svg';
import './App.css';
import Header from './My Components/Header';
import Footer from './My Components/Footer';
import Todoitem from './My Components/Todoitem';
import Todos from './My Components/Todos'

function App() {
  
  return (
    <>
<Header title="My Todo List"/>

<Todos/>
<Footer/>
   </>
  );
}

export default App;
