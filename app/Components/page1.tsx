'use client';


import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Page1() {
    const [file, uploadFile]: any = useState();
    const [link, updateLink]: any = useState();
    const [bool, setBool] = useState(true);
    const [arr, updateArray]: any = useState();
    const [uploadBool, setUploadBool] = useState(false);
    const [fname, updateFname] = useState("");
    const submit = () => {
        const formData = new FormData();
        formData.append("file", file);

        fetch("./api/upload", {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                window.location.reload();
            })
    }

    useEffect(() => {
        /*
        const readFolder: any = async () => {
            return fetch("/api/upload")
                .then(res => res.json())
                .then(data => { return data })
        }

        const res = readFolder();
        res.then((res: any) => console.log(res.data[0]));
        */

        (async () => {
            const req = await fetch('./api/download', {
                method: "POST",
                body: ""
            })
            const res = await req.json();
            const fileList: any[] = res.message;

            fileList.forEach((files, ind) => {
                fileList[ind] = <li> <Link href={'./api/download?file=' + `${files}`}> <a download={`${files}`}> {files} </a> </Link> </li>
            })
            updateLink(fileList);
        })();



    }, [file]);

    return (
        <>
            <div className="flex items-center justify-center w-96">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600" onDragOver={(e) => e.preventDefault()} onDrop={(e) => {
                    e.preventDefault();
                    const data: any = e.dataTransfer.files;

                    uploadFile(data[0]);

                    updateFname(data[0].name);
                    setUploadBool(true);

                }}>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">

                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xl text-gray-500 dark:text-gray-400">word doc or docx </p>

                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={(e) => {
                        e.preventDefault();
                        const data: any = e.target.files;
                        uploadFile(data[0]);
                        updateFname(data[0].name);
                        setUploadBool(true);
                    }} />
                </label>





            </div>
            
            <div className="flex flex-col">
                <span> {uploadBool && <> {fname} </>} </span>
                <button onClick={submit}> Upload </button>
                <section>
                    {bool && <ul> {link} </ul>}
                </section>

            </div>

        </>
    )
}
