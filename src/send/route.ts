import { EmailTemplate } from '../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const reend = new Resend("re_XwsnspMH_GYZ15nGBH7EWdi6uvgKX4tAp");

export async function POST(req: Request) {
    try {
        const data = await req.json(); // Obtiene los datos del cuerpo de la solicitud
        const emailData = {
            from: 'Acme <onboarding@resend.dev>',
            to: [data.correo], // Utiliza el correo electrónico proporcionado en los datos
            subject: "Nuevo mensaje de contacto",
            react: EmailTemplate({ nombre: data.nombre, mensaje: data.mensaje,correo:data.correo }),
            text: ""
        };
        const response = await reend.emails.send(emailData);
        console.log(response);
        return NextResponse.json({ message: "ok" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: Error.toString() }, { status: 400 });
    }
}
