import { readFileSync, readdirSync } from 'fs';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req:NextRequest) {
  try {
    const url = new URL(req.url) ;
    return NextResponse.json({urls:url},{status:200}) ; 
  } catch (e) {
    return NextResponse.json({message: 500});
}
