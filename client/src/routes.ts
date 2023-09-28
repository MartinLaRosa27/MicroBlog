import MisPosteos from "./components/MisPosteos";
import NuevoPosteo from "./components/NuevoPosteo";

export const routes = [
  {
    path: "/",
    component: MisPosteos,
  },
  {
    path: "/nuevo-posteo",
    component: NuevoPosteo,
  },
];
