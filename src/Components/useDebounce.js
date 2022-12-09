import React, { useEffect } from "react";
import useTimeOut from "./useTimeout";

const useDebounce = (callBack, delay, dependecies) => {
  const { clearTimeout, resetTimeout } = useTimeOut(callBack, delay);
  useEffect(resetTimeout, [...dependecies, resetTimeout]);
  useEffect(clearTimeout, [clearTimeout]);
};

export default useDebounce;
