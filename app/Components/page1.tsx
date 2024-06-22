'use client';

import { useState } from "react";


export default function Page1() {

  const [msg, updateMsg] = useState("")

  return (
    <>
      <button onClick={async() => {
        const req = await fetch('./api/download?file=sepm_lab.doc');
        const res = await req.json()
        console.log(res.message);
        //updateMsg(res.message) ;
      }}> Next page
      </button>

      {msg}
    </>
  );
}
