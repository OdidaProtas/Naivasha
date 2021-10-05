import { lazy } from "react";

const LogoComponent = lazy(() => import("./LogoComponent/LogoComponent"));
const FormComponent = lazy(() => import("./FormComponent/FormComponent"));
const SubmitButton = lazy(
  () => import("./ButtonAndLoaderComponent/ButtonAndLoaderComponent")
);
const CarListComponent = lazy(
  () => import("./CarsListComponent/CarsListComponent")
);
const SnackBarComponent = lazy(
  () => import("./SnackBarComponent/SnackBarComponent")
);
export {
  LogoComponent,
  FormComponent,
  SubmitButton,
  CarListComponent,
  SnackBarComponent,
};
