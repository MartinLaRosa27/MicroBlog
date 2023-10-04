import "./App.scss";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import Login from "./components/login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { PosteoContext } from "./context/PosteoContext";
import { UserContext } from "./context/UserContext";

function App() {
  const isLoged = () => {
    return false;
  };

  return (
    <BrowserRouter>
      <PosteoContext>
        <UserContext>
          {isLoged() && <Header />}
          <main className="main">
            <Switch>
              {routes.map((route, i) => (
                <Route exact path={route.path} key={i}>
                  {route.isLoged && !isLoged() ? (
                    <Login />
                  ) : (
                    <route.component />
                  )}
                </Route>
              ))}
            </Switch>
          </main>
          {isLoged() && <Footer />}
        </UserContext>
      </PosteoContext>
    </BrowserRouter>
  );
}

export default App;
