export default async function (m, { conn }) {
       if (m.text.toLowerCase().includes('bot')) {
           const replyMessage = '¡Hola! ¿Me llamaste? 😊';
           await conn.sendMessage(m.chat, { text: replyMessage }, { quoted: m });
       }
   }

   // Configuración del plugin
   Object.assign(global.plugins, {
       'responderBot': {
           command: ['bot'], // Opcional, si quieres que sea comando
           tags: ['utility'], // Etiqueta para organizar
           help: ['bot'], // Ayuda que muestra el comando en el menú
           exp: 0, // Experiencia ganada
       }
   });