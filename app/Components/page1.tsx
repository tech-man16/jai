'use client';

import React, { useState, useEffect } from 'react';

export default function Page1() {
  
  const [file, uploadFile]: any = useState();
  const [fname, updateFname] = useState("");
  const [uploadBool, setUploadBool] = useState(false);
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
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600" onDragOver={(e) => e.preventDefault()} onDrop={(e) => {
                    e.preventDefault();
                    const data: any = e.dataTransfer.files;

                    uploadFile(data[0]);

                    updateFname(data[0].name);
                    setUploadBool(true);

                }}>
          <input id="dropzone-file" type="file" className="hidden" onChange={(e) => {
              e.preventDefault();
              const data: any = e.target.files;
              uploadFile(data[0]);
              updateFname(data[0].name);
              setUploadBool(true);
          }} />
        </label>
      <button onClick={submit}> Next page
      </button>


    </>
  );
}
