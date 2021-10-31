import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Footer from './shared/Footer/Footer';
import AddPakage from './Pages/AddPakage/AddPakage';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import MyPakage from './Pages/MyPakage/MyPakage';
import ManagePakage from './Pages/ManagePakage/ManagePakage';


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/pakage'>
            <MyPakage></MyPakage>
          </Route>
          <Route path='/managepakage'>
            <ManagePakage></ManagePakage>
          </Route>
          <Route path='/addPakage'>
            <AddPakage></AddPakage>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/booking/:pakageID'>
            <Booking></Booking>
          </PrivateRoute>    
                 
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
