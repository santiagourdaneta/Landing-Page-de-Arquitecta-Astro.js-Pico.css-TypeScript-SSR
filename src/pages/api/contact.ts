import type { APIContext } from 'astro';

// Usamos la configuración de server-side rendering si no se hizo globalmente
export const prerender = false; 

// Handler para peticiones POST
export async function POST({ request }: APIContext): Promise<Response> {
    
    let formData: FormData;

    try {
        formData = await request.formData(); 
    } catch (e) {
        console.error("❌ Error al procesar la solicitud de contacto: ", e);
        return new Response(JSON.stringify({
            message: "Error de formato en la solicitud.",
            error: (e as Error).message
        }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // 2. Extracción y validación de datos
    const nombre = formData.get('nombre')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const mensaje = formData.get('mensaje')?.toString().trim();

    if (!nombre || !email || !mensaje) {
        return new Response(JSON.stringify({
            message: "Faltan campos obligatorios.",
        }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // 3. Lógica de Negocio (Simulación)
    console.log(`✅ Nuevo mensaje de contacto recibido de: ${nombre} (${email})`);

    // 4. Respuesta de ÉXITO: Este es el mensaje correcto para POST (Status 200)
    return new Response(JSON.stringify({
        message: "¡Mensaje enviado con éxito! Recibirás una respuesta pronto.",
        status: 200
    }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

// Handler para peticiones GET (Devuelve 405)
export async function GET(): Promise<Response> {
    return new Response(JSON.stringify({
        message: "Este endpoint solo acepta solicitudes POST para el formulario de contacto."
    }), {
        status: 405, // Method Not Allowed
        headers: { 'Content-Type': 'application/json' }
    });
}