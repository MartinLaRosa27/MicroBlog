import MisPosteos from "./components/MisPosteos";
import NuevoPosteo from "./components/NuevoPosteo";
import EditarPosteo from "./components/EditarPosteo";
import Login from "./components/login/Login";

export const routes = [
  {
    path: "/",
    component: MisPosteos,
    isLoged: true,
  },
  {
    path: "/nuevo-posteo",
    component: NuevoPosteo,
    isLoged: true,
  },
  {
    path: "/editar-posteo/:id",
    component: EditarPosteo,
    isLoged: true,
  },
  {
    path: "/login",
    component: Login,
    isLoged: false,
  },
];
