import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import initAuth from "./Components/Firebase/firebase.init";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home/Home";
import Spinner from "./Components/Spinner/Spinner";

initAuth();

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    setIsLoaded(false);
  }, []);
  return (
    <div className="App">
      {!isLoaded ? (
        <div className="flex items-center justify-center space-x-2">
          <Spinner></Spinner>
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/blogs">
                <Blogs></Blogs>
              </Route>
              <Route path="/about"></Route>
              <Route exact path="*"></Route>
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
