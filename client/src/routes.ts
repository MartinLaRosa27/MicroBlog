import MisPosteos from "./components/MisPosteos";
import NuevoPosteo from "./components/NuevoPosteo";
import EditarPosteo from "./components/EditarPosteo";

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
];
