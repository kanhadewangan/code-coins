import { NextRequest, NextResponse } from "next/server"


async function GET( req:NextRequest,res:NextResponse){
    return NextResponse.json('Hello, world!')
}

