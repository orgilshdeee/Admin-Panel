import { createContext, useContext, useState } from "react";

export const FoodContext = createContext();

export function useFood() {
  return useContext(FoodContext);
}

export const FoodProvider = (props) => {
  const [food, setFood] = useState();
  return (
    <FoodContext.Provider value={[food, setFood]}>
      {props.children}
    </FoodContext.Provider>
  );
};

// import { createContext, useState, useContext } from "react";

// export const OrderContext = createContext({});

// export function useOrder() {
//   return useContext(OrderContext);
// }

// export const OrderProvider = (props) => {
//   const [order, setOrder] = useState();
//   return (
//     <OrderContext.Provider value={[order, setOrder]}>
//       {props.children}
//     </OrderContext.Provider>
//   );
// };
