function mostrarRed(red) {

    const contenido = document.getElementById("contenido");

    const redes = {

        facebook: {
            nombre: "Facebook",
            icono: "📘",
            color: "#1877f2",
            ventajas: [
                "Permite mantener contacto con familiares y amigos.",
                "Facilita la creación de comunidades y grupos.",
                "Permite compartir noticias, fotos y contenido."
            ],
            desventajas: [
                "Puede generar pérdida de tiempo.",
                "Existe riesgo de compartir demasiada información personal.",
                "Puede existir exposición a noticias falsas."
            ]
        },

        instagram: {
            nombre: "Instagram",
            icono: "📸",
            color: "#e1306c",
            ventajas: [
                "Permite compartir fotografías y vídeos.",
                "Es útil para promocionar proyectos y negocios.",
                "Facilita descubrir contenido creativo."
            ],
            desventajas: [
                "Puede generar una comparación excesiva con otras personas.",
                "Puede consumir mucho tiempo.",
                "Existe riesgo de exposición de información personal."
            ]
        },

        whatsapp: {
            nombre: "WhatsApp",
            icono: "💬",
            color: "#25d366",
            ventajas: [
                "Permite comunicarse rápidamente.",
                "Facilita las llamadas y videollamadas.",
                "Permite compartir documentos, imágenes y vídeos."
            ],
            desventajas: [
                "Puede generar demasiadas notificaciones.",
                "Puede producir distracciones.",
                "Los grupos pueden generar exceso de mensajes."
            ]
        },

        youtube: {
            nombre: "YouTube",
            icono: "▶️",
            color: "#ff0000",
            ventajas: [
                "Permite aprender mediante vídeos educativos.",
                "Ofrece entretenimiento para diferentes públicos.",
                "Permite a los usuarios crear y compartir contenido."
            ],
            desventajas: [
                "Puede provocar un uso excesivo de tiempo.",
                "No toda la información publicada es confiable.",
                "Puede mostrar contenido inapropiado."
            ]
        },

        telegram: {
            nombre: "Telegram",
            icono: "✈️",
            color: "#0088cc",
            ventajas: [
                "Permite enviar mensajes rápidamente.",
                "Permite crear grupos y canales.",
                "Facilita compartir archivos."
            ],
            desventajas: [
                "Puede utilizarse para difundir información falsa.",
                "Los grupos grandes pueden generar mucho contenido.",
                "Algunos usuarios pueden recibir mensajes no deseados."
            ]
        },

        twitter: {
            nombre: "Twitter / X",
            icono: "🐦",
            color: "#1da1f2",
            ventajas: [
                "Permite conocer noticias y acontecimientos rápidamente.",
                "Facilita participar en conversaciones públicas.",
                "Permite seguir temas de interés."
            ],
            desventajas: [
                "Puede existir información falsa o engañosa.",
                "Las discusiones pueden generar conflictos.",
                "Puede provocar un consumo excesivo de tiempo."
            ]
        }

    };


    const seleccion = redes[red];

    if (!seleccion) {
        return;
    }


    contenido.innerHTML = `

        <div class="contenido-icono"
             style="background: ${seleccion.color}20;">
            ${seleccion.icono}
        </div>

        <div style="width: 100%;">

            <span class="mini-titulo"
                  style="color: ${seleccion.color};">
                RED SOCIAL
            </span>

            <h2>${seleccion.nombre}</h2>

            <div style="
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 25px;
                margin-top: 20px;
            ">

                <div>
                    <h3 style="
                        color: #16a34a;
                        margin-bottom: 12px;
                    ">
                        ✓ Ventajas
                    </h3>

                    <ul style="
                        padding-left: 20px;
                        color: #6b7280;
                        line-height: 1.8;
                    ">
                        ${seleccion.ventajas
                            .map(item => `<li>${item}</li>`)
                            .join("")}
                    </ul>
                </div>


                <div>
                    <h3 style="
                        color: #dc2626;
                        margin-bottom: 12px;
                    ">
                        ⚠ Desventajas
                    </h3>

                    <ul style="
                        padding-left: 20px;
                        color: #6b7280;
                        line-height: 1.8;
                    ">
                        ${seleccion.desventajas
                            .map(item => `<li>${item}</li>`)
                            .join("")}
                    </ul>
                </div>

            </div>

        </div>
    `;


    contenido.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}