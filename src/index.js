import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { OrderProvider } from "./contexts/OrderContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import { AllUsersProvider } from "./contexts/AllUsersContext";
import { FoodProvider } from "./contexts/FoodContext";
import { DrawerProvider } from "./contexts/DrawerContext";

ReactDOM.render(
  <React.StrictMode>
    <LoadingProvider>
      <UserProvider>
        <OrderProvider>
          <AllUsersProvider>
            <FoodProvider>
              <DrawerProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </DrawerProvider>
            </FoodProvider>
          </AllUsersProvider>
        </OrderProvider>
      </UserProvider>
    </LoadingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
