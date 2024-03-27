
import './App.css'
import Navigator from './componants/Navigator';
import store from './redux/store';
import { Provider } from 'react-redux';
import logo from './img/logo2.jpeg'
function App() {

  return (
    <div className='App'>
   
      <header className='App-header'>
        <center>
      <img style={{width:"400px"}} src={logo}></img>
      </center>
        <Provider store={store}>
          <Navigator></Navigator>
        </Provider>
      </header>
    </div>
  );
}
export default App;

