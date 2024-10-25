import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { store } from "@/store";

type TProvidersProps = PropsWithChildren;

const RootProvider = ({ children }: TProvidersProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RootProvider;
