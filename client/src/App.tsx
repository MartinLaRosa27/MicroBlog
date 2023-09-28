import "./App.scss";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { PosteoContext } from "./context/PosteoContext";

function App() {
  return (
    <BrowserRouter>
      <PosteoContext>
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
      </PosteoContext>
    </BrowserRouter>
  );
}

export default App;
