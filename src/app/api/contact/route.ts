import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

        // Validate message length
        if (message.length > 5000) {
            return NextResponse.json(
                { error: "Meddelandet är för långt (max 5000 tecken)" },
                { status: 400 }
            );
        }

        // Check if Resend API key is configured
        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is not configured");
            // Still log the submission for reference
            console.log("Contact form submission (no email sent):", { name, email, message });
            return NextResponse.json(
                { message: "Tack för ditt meddelande! Jag återkommer inom kort." },
                { status: 200 }
            );
        }

        // Initialize Resend inside the function to avoid build-time errors
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send email via Resend
        const { data, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL || "GIM-VEA <noreply@gim-vea.com>",
            to: process.env.CONTACT_EMAIL || "monika@gim-vea.com",
            replyTo: email,
            subject: `Ny kontaktförfrågan från ${name}`,
            html: `
                <h2>Ny kontaktförfrågan från webbplatsen</h2>
                <p><strong>Namn:</strong> ${name}</p>
                <p><strong>E-post:</strong> ${email}</p>
                <p><strong>Meddelande:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p style="color: #666; font-size: 12px;">Detta meddelande skickades från kontaktformuläret på gim-vea.com</p>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Ett fel uppstod vid skickandet. Vänligen försök igen." },
                { status: 500 }
            );
        }

        console.log("Email sent successfully:", data);
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
