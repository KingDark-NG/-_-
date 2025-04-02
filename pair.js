const express = require("express");
const fs = require("fs");
const { exec } = require("child_process");
let router = express.Router();
const pino = require("pino");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  delay,
  makeCacheableSignalKeyStore,
  Browsers,
  jidNormalizedUser,
} = require("@whiskeysockets/baileys");
const { upload } = require("./mega");

function removeFile(FilePath) {
  if (!fs.existsSync(FilePath)) return false;
  fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get("/", async (req, res) => {
  let num = req.query.number;
  async function 🕳️📍𝐊𝐢𝐧𝐠𝐝𝐚𝐫𝐤✗𝐍𝐆Pair() {
    const { state, saveCreds } = await useMultiFileAuthState(`./session`);
    try {
      let 🕳️📍𝐊𝐢𝐧𝐠𝐝𝐚𝐫𝐤✗𝐍𝐆PairWeb = makeWASocket({
        auth: {
          creds: state.creds,
          keys: makeCacheableSignalKeyStore(
            state.keys,
            pino({ level: "fatal" }).child({ level: "fatal" })
          ),
        },
        printQRInTerminal: false,
        logger: pino({ level: "fatal" }).child({ level: "fatal" }),
        browser: Browsers.macOS("Safari"),
      });

      if (!🕳️📍𝐊𝐢𝐧𝐠𝐝𝐚𝐫𝐤✗𝐍𝐆PairWeb.authState.creds.registered) {
        await delay(1500);
        num = num.replace(/[^0-9]/g, "");
        const code = await 🕳️📍𝐊𝐢𝐧𝐠𝐝𝐚𝐫𝐤✗𝐍𝐆PairWeb.requestPairingCode(num);
        if (!res.headersSent) {
          await res.send({ code });
        }
      }

      🕳️📍𝐊𝐢𝐧𝐠𝐝𝐚𝐫𝐤✗𝐍𝐆PairWeb.ev.on("creds.update", saveCreds);
      🕳️📍𝐊𝐢𝐧𝐠𝐝𝐚𝐫𝐤✗𝐍𝐆PairWeb.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect } = s;
        if (connection === "open") {
          try {
            await delay(10000);
            const sessionPrabath = fs.readFileSync("./session/creds.json");

            const auth_path = "./session/";
            const user_jid = jidNormalizedUser(RobinPairWeb.user.id);

            function randomMegaId(length = 6, numberLength = 4) {
              const characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
              let result = "";
              for (let i = 0; i < length; i++) {
                result += characters.charAt(
                  Math.floor(Math.random() * characters.length)
                );
              }
              const number = Math.floor(
                Math.random() * Math.pow(10, numberLength)
              );
              return `${result}${number}`;
            }

            const mega_url = await upload(
              fs.createReadStream(auth_path + "creds.json"),
              `${randomMegaId()}.json`
            );

            const string_session = mega_url.replace(
              "https://mega.nz/file/",
              ""
            );

            const sid = `*🕳️📍𝐊𝐢𝐧𝐠 𝐝𝐚𝐫𝐤 ✗ 𝐍𝐆 [The powerful WA BOT]*\n\n👉 ${string_session} 👈\n\n*This is the your Session ID, copy this id and paste into config.js file*\n\n*You can ask any question using this link*\n\n*wa.me/message/94727002456,94783223915*\n\n*You can join my whatsapp group*\n\n*https://chat.whatsapp.com/KO7OBsMJMLF7xU3nzYMldo*`;
            const mg = `🛑 *Do not share this code to anyone[ඕක කාටවත් දෙන්න එපා බල්ලො😒] 🛑`;
            const dt = await 🕳️📍𝐊𝐢𝐧𝐠𝐝𝐚𝐫𝐤✗𝐍𝐆PairWeb.sendMessage(user_jid, {
              image: {
                url: "https://raw.githubusercontent.com/Dark-Robin/Bot-Helper/refs/heads/main/autoimage/Bot%20robin%20WP.jpg",
              },
              caption: sid,
            });
            const msg = await 🕳️📍𝐊𝐢𝐧𝐠𝐝𝐚𝐫𝐤✗𝐍𝐆PairWeb.sendMessage(user_jid, {
              text: string_session,
            });
            const msg1 = await 🕳️📍𝐊𝐢𝐧𝐠𝐝𝐚𝐫𝐤✗𝐍𝐆PairWeb.sendMessage(user_jid, { text: mg });
          } catch (e) {
            exec("pm2 restart prabath");
          }

          await delay(100);
          return await removeFile("./session");
          process.exit(0);
        } else if (
          connection === "close" &&
          lastDisconnect &&
          lastDisconnect.error &&
          lastDisconnect.error.output.statusCode !== 401
        ) {
          await delay(10000);
          RobinPair();
        }
      });
    } catch (err) {
      exec("pm2 restart Robin-md");
      console.log("service restarted");
      🕳️📍𝐊𝐢𝐧𝐠𝐝𝐚𝐫𝐤✗𝐍𝐆Pair();
      await removeFile("./session");
      if (!res.headersSent) {
        await res.send({ code: "Service Unavailable" });
      }
    }
  }
  return await RobinPair();
});

process.on("uncaughtException", function (err) {
  console.log("Caught exception: " + err);
  exec("pm2 restart Robin");
});

module.exports = router;
