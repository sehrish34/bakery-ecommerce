import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toastReset } from "../../store/slice/toast";

import './toast.css';

const ToastNotification = () => {
  const dispatch = useDispatch(); 
  const toastState = useSelector((state) => state.toast); 
  const { toast, text, color } = toastState;

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        dispatch(toastReset());
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [toast, dispatch]);


  if (!toast) return null;


  return (
    <div style={{ backgroundColor: color }} className='toast'>
      {text}
    </div>
  );
};

export default ToastNotification;