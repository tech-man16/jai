'use client';

import { useState } from "react";


export default function Page1() {

  const [msg, updateMsg] = useState("")

  return (
    <>
      <button onClick={async() => {
        const req = await fetch('./api/download');
        const res = await req.json()
        updateMsg(res.message) ;
      }}> Next page
      </button>

      {msg}
    </>
  );
}
