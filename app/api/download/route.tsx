import { readFileSync, readdirSync } from 'fs';

import { NextRequest, NextResponse } from 'next/server';

export const fetchCache = "force-no-store";

export async function GET(req:NextRequest){
  try{
    return NextResponse.json({message:`${req.url}`});
    /*
    const url = new URL(req.url)
    const filename = url.searchParams.get("file") ;
    const file = readFileSync(`./app/api/assets/${filename}`);
    const headers = new Headers();
    headers.append('Content-Disposition', `attachment; filename="${filename}"`);
    headers.append('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    headers.append('Content-Length', `${file.length}`)
    headers.append('Content-Transfer-Encoding', 'binary')
  
    return new Response(file, {
      headers,
    });
    */
  } catch(e){
    return NextResponse.json({message:"Failed"});
  }
}
