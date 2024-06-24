import { NextRequest,NextResponse } from "next/server";
import path from "path";
import { writeFile,readdir } from "fs/promises";

export const POST = async (req: any, res: any) => {
    try {
        const url = new URL(req.url);
        const formData = await req.formData();
        const file = formData.get("file");
        if (!file) {
            // If no file is received, return a JSON response with an error and a 400 status code
            return NextResponse.json({ error: "No files received." }, { status: 400 });
        }
        const buffer = Buffer.from(await file.arrayBuffer());
    
        try {
            await writeFile(path.join(__dirname,'/app/api/assets/', file.name), buffer);
            return NextResponse.json({ message: 'Uploaded Successfully', status: 200 }, { status: 200 })
        }
        catch (e) {
            console.log(process.cwd(), '/assets/', file.name);
            console.log('\n\n\n', e)
            return NextResponse.json({ message: 'Uploaded Failed', status: 500, "error":e , location:  path.join(__dirname, '/app/api/assets/', file.name)}, { status: 500 })
        }
        
    } catch(e){
        return NextResponse.json({ message: 'Loading...', status: 505 ,error: e}, { status: 505 });
    }
}
