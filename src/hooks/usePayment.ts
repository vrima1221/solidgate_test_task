import { useState } from "react";
import { simulatePayment } from "../utils/simulatePayment";

export const usePayment = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('')

  const clear = () => {
    setSuccess(false)
    setError('')
  }

  const pay = async () => {
    console.log("PAYMENT");
    
    try {
      await simulatePayment();
      setSuccess(true);
    } catch (error) {
      setError("Server error")
    }
  };

  return { pay, success, error, clear };
};
