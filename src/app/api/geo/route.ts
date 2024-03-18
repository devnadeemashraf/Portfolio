import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  // Do whatever you want
  const ipgeolocationAPIKey = "ed3bc375808b4d3d951c363d778da100";

  let ip = request.headers.get("x-forwarded-for");
  ip = ip == "::1" ? "127.0.0.1" : ip;

  if (ip != "") {
    const location = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${ipgeolocationAPIKey}&ip=${ip}`
    );

    return NextResponse.json({ location }, { status: 200 });
  } else {
    return NextResponse.json({ location: "" }, { status: 200 });
  }
}

// To handle a POST request to /api
export async function POST(request: NextRequest) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
