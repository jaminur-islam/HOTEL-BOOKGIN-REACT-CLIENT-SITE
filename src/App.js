import "./App.css";
import Header from "./components/Header/Header";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import ContextProvider from "./Context/ContextProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Book from "./components/book/Book";
import PrivetRouter from "./components/PrivetRouter/PrivetRouter";
import Mybook from "./components/mybook/Mybook";
import Manage from "./components/manage/Manage";
import Add from "./components/add/Add";
import Error from "./components/error/Error";

function App() {
  return (
    <ContextProvider>
      <Router>
      <Header></Header>

        <Switch>
          <Route path="/home">
            <Banner></Banner>
            <Services></Services>
          </Route>

          <Route exact path="/">
            <Banner></Banner>
            <Services></Services>
          </Route>
            
          <Route path='/add'>
             <Add></Add>
          </Route>

          <PrivetRouter path="/book/:id">
            <Book> </Book>
          </PrivetRouter>
          
          <PrivetRouter path='/manage'>
          <Manage></Manage>
          </PrivetRouter>
          
        
          <PrivetRouter path="/mybook">
            <Mybook> </Mybook>
          </PrivetRouter>

          <Route path="/login">
            <Login> </Login>
          </Route>


          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
