import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import Home from "./features/Home/Home";
import Product from "./features/Product/Product";
import Contact from "./features/Contact/Contact";
import About from "./features/About/About";
import Login from "./features/Login/Login";
import Register from "./features/Register/Register";
import Blog from "./features/Blog/Blog";

function App() {
      return (
          <div className="App">
                <Header/>
                <Switch>
                      <Route exact path="/" render={(props) => <Home/>}/>
                      <Route exact path="/product" render={(props) => <Product/>}/>
                      <Route exact path="/blog" render={(props) => <Blog/>}/>
                      <Route exact path="/contact" render={(props) => <Contact/>}/>
                      <Route exact path="/about" render={(props) => <About/>}/>
                      <Route exact path="/login" render={(props) => <Login/>}/>
                      <Route exact path="/register" render={(props) => <Register/>}/>
                </Switch>
                <Footer/>
          </div>
      );
}

export default App;
