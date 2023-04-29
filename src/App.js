import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import VendorList from './Pages/VendorList/VendorList';
import Footer from './Share/Footer/Footer';
import Header from './Share/Header/Header';
import './assets/style/app.css'

function App() {
  return (
    <div >
      <Header />
      <div className='main' >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/vendor-list">
            <VendorList/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
