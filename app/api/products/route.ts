import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const sampleData = [
    { id: 1, productName: "Item 1", price: "$10" },
    { id: 2, productName: "Item 2", price: "$20" },
    { id: 3, productName: "Item 3", price: "$30" },
    { id: 4, productName: "Item 4", price: "$500" },
    { id: 5, productName: "Item 5", price: "$60" },
    { id: 6, productName: "Item 6", price: "$70" },
    { id: 7, productName: "Item 7", price: "$80" },
    { id: 8, productName: "Item 8", price: "$90" },
    { id: 9, productName: "Item 9", price: "$99" },
    { id: 10, productName: "Item 10", price: "$200" },
  ];

  return NextResponse.json(sampleData, { status: 200 });
}
