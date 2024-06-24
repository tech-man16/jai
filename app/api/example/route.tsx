import { readFileSync, readdirSync } from 'fs';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req:NextRequest) {
  const url = new URL(req.url) ;
  return NextResponse.json({urls:url},{status:200}) ; 
}
