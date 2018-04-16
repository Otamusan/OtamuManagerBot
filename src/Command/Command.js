class Command {
    constructor(str) {
        this.commandStr = str;
        this.token = this.getCommandArray();
    }
    getCommandArray() {
        var str = this.commandStr;
        var strArray = str.split(" ");
        strArray[0] = strArray[0].slice(1);
        return strArray;
    }
}