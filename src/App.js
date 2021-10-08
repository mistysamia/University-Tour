import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import University from './components/University/University';
import Header from './components/Header/Header';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Services from './components/Services/Services';
import Faculty from './components/Faculty/Faculty';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <University></University>
          </Route>
          <Route path="/university">
            <University></University>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/faculty">
            <Faculty></Faculty>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
