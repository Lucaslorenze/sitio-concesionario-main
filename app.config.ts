export default defineAppConfig({
  // Sección concesionario dedicada a los datos propios de la empresa, redes sociales, contactos, etc.
  concesionario: {
    id: 476,
    razonSocial: "Lonco Hue S.A",

    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      x: "https://x.com",
    },

    sucursales: [
      {
        nombre: "Casa Central",
        ubicacion: "Valentín Alsina, Buenos Aires",
        direccion: "Avda. Remedios de Escalada 3750",
        telefono: "4515-3300",
        mail: "ventas@loncohue.com.ar",
        horario: "Ventas: Lunes a viernes de 09:00 a 18:00. Talleres: Lunes a viernes de 08:00 a 12:00 y 13:00 a 18:00",
      },
      {
        nombre: "Humboldt",
        ubicacion: "Palermo, CABA",
        direccion: "Humboldt 2279",
        telefono: "11-4473-0537",
        mail: "humboldt@loncohue.com.ar",
        horario: "Talleres: Lunes a viernes de 08:00 a 12:30 y 13:30 a 18:00",
      },
      {
        nombre: "Avenida Libertador",
        ubicacion: "Palermo, CABA",
        direccion: "Av. Del Libertador 2244",
        telefono: "11-4801-7001",
        mail: "libertador@loncohue.com.ar",
        horario: "Venta de autos: Lunes a viernes de 09:00 a 19:30 - Sabados de 10:00 a 16:00",
      },
    ],

    // Botón de contacto flotante vía WhatsApp.
    // Definir "https://wa.me/12345678" o dejar vacío para no mostrar el botón.
    contactoFlotante: {
      autos: "https://wa.me/12345678",
      vans: "https://wa.me/12345678",
      camiones: "https://wa.me/12345678",
    },
  },

  // En la siguiente sección se configura la estructura de páginas y menúes de la web.
  unidadesNegocio: {
    autos: true,
    vans: true,
    camiones: true,
    buses: true,
  },
  legales: {
    razonSocial: "*** RAZÓN SOCIAL ***",
    domicilio: "*** DOMICILIO LEGAL, UBICACIÓN ***",
    email: "*** MAIL LEGAL ***",
    telefono: "*** TELÉFONO LEGAL ***",
    responsableDataProtection: "*** RESPONSABLE PROTECCIÓN DE DATOS ***",
    linkDirectrizProteccionDeDatos: "#",
  },
  pilot: {
    appkey: "4A390AF7-9056-42F3-AA07-53B7C02D23BF",
    action: "create",
    autos: {
      pilot_contact_type_id: "1",
      pilot_business_type_id: "6",
      pilot_suborigin_id: "FI0FA5R2CNBO5HSSG",
      pilot_notes: "Formulario de Contacto del sitio institucional",
    },
    vans: {
      pilot_contact_type_id: "1",
      pilot_business_type_id: "6",
      pilot_suborigin_id: "FI0FA5R2CNBO5HSSG",
      pilot_notes: "Formulario de Contacto del sitio institucional",
    },
    camiones: {
      pilot_contact_type_id: "1",
      pilot_business_type_id: "6",
      pilot_suborigin_id: "FI0FA5R2CNBO5HSSG",
      pilot_notes: "Formulario de Contacto del sitio institucional",
    },
  },
});
