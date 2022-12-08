const express = require("express");
const app = express();

const ACCOUNT_SID = "AC4f6cd40422527c351a3e8b22484dcac7";
const AUTH_TOKEN = "2b3f82ae0a6fd02352256ad79447b898";
const PORT = "5000";
const NUMBER = ["+919324066513", "+918291523382", "+919967368148"];

const twilio = require("twilio");

const client = new twilio(ACCOUNT_SID, AUTH_TOKEN);

function sendMessage(message) {
  NUMBER.forEach((number) => {
    client.messages
      .create({
        body: message,
        from: "whatsapp:+14155238886",
        to: `whatsapp:${number}`,
      })
      .then((message) => console.log(`Messaged ${number}`, message.sid));
  });
}

app.get("/", (req, res) => {
  const crime = req.query.crime;

  const textMessage = `
ALERT!!! 🚨🚨🚨🚨
The following Crime has been identified in your vicinity:
*${crime}*

Please take appropriate action ASAP

Note: In case this is a false alarm, please tweak the settings of the crime detection application
  `;
  sendMessage(textMessage);
  res.send("Working");
});

app.listen(PORT, () => {
  console.log("Server listening on port 5000");
});
