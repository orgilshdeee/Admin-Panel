import { useState } from "react";

export const LoadingContext = React.createContext();

export default function LoadingCtx() {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </LoadingContext.Provider>
  );
}
