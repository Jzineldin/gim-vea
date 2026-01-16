import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Alla fält är obligatoriska" },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Ogiltig e-postadress" },
                { status: 400 }
            );
        }

        // In production, you would integrate with an email service like:
        // - Resend
        // - SendGrid
        // - Nodemailer with SMTP
        // For now, we log the submission and return success
        console.log("Contact form submission:", { name, email, message });

        return NextResponse.json(
            { message: "Tack för ditt meddelande! Jag återkommer inom kort." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Ett fel uppstod. Vänligen försök igen." },
            { status: 500 }
        );
    }
}
