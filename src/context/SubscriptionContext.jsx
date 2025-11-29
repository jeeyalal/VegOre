// src/context/SubscriptionContext.jsx
import { createContext, useContext, useState } from "react";

const SubscriptionContext = createContext();

export function SubscriptionProvider({ children }) {
  const [planData, setPlanData] = useState({
    plan: null,
    duration: 30,
    meals: { lunch: true, dinner: false },
    days: Array(7).fill(true),
    addons: [],
    address: {},
    preferences: {}
  });

  return (
    <SubscriptionContext.Provider value={{ planData, setPlanData }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export const useSubscription = () => useContext(SubscriptionContext);

