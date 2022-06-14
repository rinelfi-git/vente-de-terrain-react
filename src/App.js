import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import UserSpace from './components/UserSpace'
import './assets/css/fontawesome.css'
import './assets/css/material-icons.css'
import './assets/css/icheck-bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/adminlte.min.css'
import './assets/css/main.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/application" component={UserSpace} />
        <Route strict={true} path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
