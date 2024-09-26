import { useState, useEffect } from "react";

function UseEffectElement() {
  const [cookies, setCookies] = useState(0);

  useEffect(() => {
    console.log("UseEffect called", cookies);

    return () => {
      console.log("UseEffect dies");
    };
  }, [cookies]);

  return (
    <div>
      <p>Cookies: {cookies}</p>
      <button
        onClick={(e) => {
          // setCookies(cookies + 1);
          setCookies((prevCookies) => prevCookies + 1);
        }}
        className="border rounded-md px-2 py-1"
      >
        Cookie
      </button>
    </div>
  );
}

export default UseEffectElement;
