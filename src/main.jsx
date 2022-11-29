import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './09-useContext/MainApp';
// import TodoApp from './08-useReducer/TodoApp';
// import VisuApoyoJavi from './08-useReducer/VisuApoyoJavi';
// import { Padre } from './07-tarea-memo/Padre';
// import InfoPago from '../Pruebas_CronosApp/InfoPago';
// import CallbackHook from './06-memos/CallbackHook';
// import MemoHook from './06-memos/MemoHook';
// import Memorize from './06-memos/Memorize';
// import Layout from './05-useLayoutEffect/Layout';
// import FocusScreen from './04-seRef/FocusScreen';
// import FormWithCustomHook from './02-useEffect/FormWithCustomHook';
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
// import SimpleForm from './02-useEffect/SimpleForm';
// import CounterApp from './01-useState/CounterApp';
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
// import HooksApp from './HooksApp';
import './index.css';

// import './08-useReducer/intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* // <React.StrictMode> */}
      <MainApp />
    {/* // </React.StrictMode>  */}
  </BrowserRouter>
)

