'use client';

import { useState } from "react";


export default function Page1() {

  const [msg, updateMsg] = useState("")
  const submit = async()=>{
    const formData = new FormData();
    formData.append("file", file);
    
    fetch("./app/api/download?file=sepm_lab.doc", {
        method: "POST",
        body: formData,
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            window.location.reload();
        })
  }
  return (
    <>
      <button onClick={submit}> Next page
      </button>

      {msg}
    </>
  );
}
