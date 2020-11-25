import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import { store } from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Main></Main>
        </BrowserRouter>
      </Provider>


    </div>
  );
}

export default App;
