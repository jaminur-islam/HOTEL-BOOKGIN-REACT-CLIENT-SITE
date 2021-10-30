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

function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
          </Route>

          <Route exact path="/">
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
          </Route>

          <PrivetRouter path="/book/:id">
            <Book> </Book>
          </PrivetRouter>

          <Route path="/mybook">
            <Mybook> </Mybook>
          </Route>

          <Route path="/login">
            <Login> </Login>
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
