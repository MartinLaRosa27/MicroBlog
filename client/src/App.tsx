import "./App.scss";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { PosteoContext } from "./context/PosteoContext";
import { UserContext } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <PosteoContext>
        <UserContext>
          <Header />
          <main className="main">
            <Switch>
              {routes.map((route, i) => (
                <Route exact path={route.path} key={i}>
                  <route.component />
                </Route>
              ))}
            </Switch>
          </main>
          <Footer />
        </UserContext>
      </PosteoContext>
    </BrowserRouter>
  );
}

export default App;
