import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Helmet } from 'react-helmet';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>JosephDeveloper | Home</title>
      </Helmet>
      <ItemListContainer greeting={'Welcome to Joseph Developer'}></ItemListContainer>
      <NavBar/>
    </div>
  );
}

export default App;
