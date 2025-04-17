export default async function (m, { conn }) {
         if (m.text && m.text.toLowerCase().includes('bot')) {
             const replyMessage = '¡Hola! ¿Me llamaste? 😊';
             await conn.sendMessage(m.chat, { text: replyMessage }, { quoted: m });
         }
     }