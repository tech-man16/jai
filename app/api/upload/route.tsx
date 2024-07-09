import { NextRequest,NextResponse } from "next/server";
import path from "path";
import { writeFile,readdir} from "fs/promises";
import fs from 'fs' ;
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
            /*
            await fs.writeFile(path.join(process.cwd(),'/app/api/assets/', file.name), buffer,(err)=>{
                if(err)
                    return NextResponse.json({ message: 'Error...', status: 505 ,error: err}, { status: 505 });
            });
            */

            //await fs.writeFileSync(path.join('/tmp',file.name),buffer);
            //const file0 = fs.readdirSync('/tmp') ;
            await fs.writeFileSync(path.join(process.cwd(),'/public/assets/',file.name),buffer);
            const file0 = fs.readdirSync(path.join(process.cwd(),'/public/assets')) ;
            return NextResponse.json({ message: 'Uploaded Successfully', status: 200, dirList: file0 }, { status: 200 }) ;
            
        }
        catch (e) {
            console.log(process.cwd(), '/assets/', file.name);
            console.log('\n\n\n', e)
            
            const file0 = fs.readdirSync(path.join(process.cwd(),'/public/assets')) ;
            
            return NextResponse.json({ message: 'Uploaded Failed', status: 500, "error":e , 
                                      location:  path.join(process.cwd(),'/public/assets/',file.name),
                                      fileList : file0,
                                     }, { status: 500 })
        }
        
    } catch(e){
        return NextResponse.json({ message: 'Loading...', status: 505 ,error: e}, { status: 505 });
    }
}
