import React, { useCallback, useEffect, useRef } from "react";

const useTimeOut = (callBack, delay) => {
  const callBackRef = useRef();
  const timeOutRef = useRef();

  useEffect(() => {
    callBackRef.current = callBack;
  }, [callBack]);

  const setOwnTimeout = useCallback(() => {
    timeOutRef.current = window.setTimeout(() => callBackRef.current(), delay);
  }, [delay]);

  const removeOwnTimeOut = useCallback(() => {
    if (timeOutRef.current) {
      console.log("timout clear");
      window.clearTimeout(timeOutRef.current);
    }
  }, []);

  useEffect(() => {
    setOwnTimeout();
    return removeOwnTimeOut;
  }, [removeOwnTimeOut, setOwnTimeout, delay]);

  const resetTimeout = useCallback(() => {
    removeOwnTimeOut();
    setOwnTimeout();
  }, [removeOwnTimeOut, setOwnTimeout]);

  return {
    resetTimeout,
    clearTimeout: removeOwnTimeOut
  };
};

export default useTimeOut;
