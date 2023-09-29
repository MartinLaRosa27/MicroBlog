import MisPosteos from "./components/MisPosteos";
import NuevoPosteo from "./components/NuevoPosteo";
import EditarPosteo from "./components/EditarPosteo";
import Login from "./components/login/Login";

export const routes = [
  {
    path: "/",
    component: MisPosteos,
  },
  {
    path: "/nuevo-posteo",
    component: NuevoPosteo,
  },
  {
    path: "/editar-posteo/:id",
    component: EditarPosteo,
  },
  {
    path: "/login",
    component: Login,
  },
];
