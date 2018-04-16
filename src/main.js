const Eris = require("eris");
const BotData = require("../../PrivateData/BotData.json");

const bot = new setting(BotData.OtamuManagerBot);

function setting(botid){
    this.bot = new Eris(botid);
    this.bot.on("ready", function () {
        console.log("Ready!");
    });
    this.bot.on("messageCreate", function (msg) {
        var cmd = new Command();
    });
    this.prototype={
        getbot(){
            return this.bot;
        }
    }
}