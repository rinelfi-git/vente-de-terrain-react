import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login'
import UserSpace from './components/UserSpace'
import './assets/css/fontawesome.css'
import './assets/css/material-icons.css'
import './assets/css/icheck-bootstrap.min.css'
import './assets/css/adminlte.min.css'

function App() {
  return (
    <BrowserRouter>
      <Route strict={true} path="/" component={Login} />
      <Route path="/application/" component={UserSpace} />
    </BrowserRouter>
  );
}

export default App;
