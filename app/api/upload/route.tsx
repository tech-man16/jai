import { NextResponse } from "next/server";
import path from "path";
import { writeFile,readdir } from "fs/promises";

export const POST = async (req: any, res: any) => {

    const formData = await req.formData();
    const file = formData.get("file");
    if (!file) {
        // If no file is received, return a JSON response with an error and a 400 status code
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());

    try {
        await writeFile(path.join(process.cwd(), 'app/api/assets/', file.name), buffer);
        return NextResponse.json({ message: 'Uploaded Successfully', status: 200 }, { status: 200 })
    }
    catch (e) {
        console.log(process.cwd(), '/assets/', file.name);

        console.log('\n\n\n', e)
        return NextResponse.json({ message: 'Uploaded Failed', status: 500 }, { status: 500 })
    }
}