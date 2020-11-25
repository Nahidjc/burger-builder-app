import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>

    </div>
  );
}

export default App;
