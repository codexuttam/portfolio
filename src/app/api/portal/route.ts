import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const ADMIN_PASSWORD = "Uttam@7781";

function parseCsv(text: string): string[][] {
  const lines: string[][] = [];
  let currentRow: string[] = [];
  let currentField = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      currentField += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      currentRow.push(currentField);
      currentField = "";
    } else if ((char === "\r" || char === "\n") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") i++;
      currentRow.push(currentField);
      if (currentRow.length > 1 || currentRow[0] !== "") {
        lines.push(currentRow);
      }
      currentRow = [];
      currentField = "";
    } else {
      currentField += char;
    }
  }

  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.length > 1 || currentRow[0] !== "") {
      lines.push(currentRow);
    }
  }

  return lines;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { password } = body;

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: "Invalid admin password." },
        { status: 401 }
      );
    }

    const csvPath = path.join(process.cwd(), "data", "messages.csv");
    let content = "";

    try {
      content = await fs.readFile(csvPath, "utf-8");
    } catch {
      return NextResponse.json({
        success: true,
        messages: [],
        count: 0,
      });
    }

    const rows = parseCsv(content);
    if (rows.length <= 1) {
      return NextResponse.json({
        success: true,
        messages: [],
        count: 0,
      });
    }

    // Skip header row
    const dataRows = rows.slice(1);
    const messages = dataRows
      .map((row) => ({
        timestamp: row[0] || "",
        name: row[1] || "",
        email: row[2] || "",
        message: row[3] || "",
      }))
      .filter((m) => m.name || m.email || m.message)
      // Reverse so newest appears first
      .reverse();

    return NextResponse.json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    console.error("Portal API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to read portal data." },
      { status: 500 }
    );
  }
}

// Download raw CSV route
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const password = searchParams.get("password");

  if (password !== ADMIN_PASSWORD) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const csvPath = path.join(process.cwd(), "data", "messages.csv");
  try {
    const file = await fs.readFile(csvPath, "utf-8");
    return new NextResponse(file, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="messages.csv"',
      },
    });
  } catch {
    return new NextResponse("Timestamp,Name,Email,Message\n", {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="messages.csv"',
      },
    });
  }
}

