//necessario ao balonmessage do ordersummary
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <>
        <Routes />
        <ToastContainer />
      </>
    </div>
  );
}

export default App;
