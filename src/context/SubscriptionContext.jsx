// src/context/SubscriptionContext.jsx
import { createContext, useContext, useState } from "react";

const SubscriptionContext = createContext();

export function SubscriptionProvider({ children }) {
  const [subscription, setSubscription] = useState({
    // Step 1: Plan Selection
    planType: null, // 'meal' | 'salad' | 'smoothie' | 'weightloss' | 'custom'
    planName: "",
    
    // Step 2: Customization
    duration: null, // 7 | 14 | 30
    dietType: null, // 'normal' | 'vegan' | 'jain'
    timeSlots: [], // ['breakfast', 'lunch', 'dinner']
    
    // Step 3: Menu & Notes
    selectedDishes: [],
    specialNotes: "",
    
    // Step 4: User Details
    userDetails: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      pincode: "",
      landmark: "",
    },
    
    // Step 5: Pricing
    basePrice: 0,
    totalPrice: 0,
    
    // Step 6: Payment
    paymentStatus: null,
    orderId: null,
  });

  const resetSubscription = () => {
    setSubscription({
      planType: null,
      planName: "",
      duration: null,
      dietType: null,
      timeSlots: [],
      selectedDishes: [],
      specialNotes: "",
      userDetails: {
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
        landmark: "",
      },
      basePrice: 0,
      totalPrice: 0,
      paymentStatus: null,
      orderId: null,
    });
  };

  return (
    <SubscriptionContext.Provider 
      value={{ 
        subscription, 
        setSubscription,
        resetSubscription 
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("useSubscription must be used within SubscriptionProvider");
  }
  return context;
};