import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

function escapeCsv(value: string): string {
  // Wrap in quotes and escape internal quotes by doubling them
  return `"${value.replace(/"/g, '""')}"`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter a short message." },
        { status: 400 }
      );
    }

    // CSV file location: data/messages.csv in project root
    const dataDir = path.join(process.cwd(), "data");
    const csvPath = path.join(dataDir, "messages.csv");

    // Ensure data directory exists
    await fs.mkdir(dataDir, { recursive: true });

    // Check if CSV exists, if not initialize header
    let fileExists = false;
    try {
      await fs.access(csvPath);
      fileExists = true;
    } catch {
      fileExists = false;
    }

    if (!fileExists) {
      const header = "Timestamp,Name,Email,Message\n";
      await fs.writeFile(csvPath, header, "utf-8");
    }

    // Append message record
    const timestamp = new Date().toISOString();
    const row = `${escapeCsv(timestamp)},${escapeCsv(name.trim())},${escapeCsv(
      email.trim()
    )},${escapeCsv(message.trim())}\n`;

    await fs.appendFile(csvPath, row, "utf-8");

    return NextResponse.json({
      success: true,
      message: "Message received and logged.",
    });
  } catch (error) {
    console.error("Error writing contact message to CSV:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
