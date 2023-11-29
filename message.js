const Command = require('./command.js')

class Message {
   constructor(name, commands = []){
      this.name = name;
      if (!name){
         throw Error("Name is Required.");
      }
      this.commands = commands;
   }
}

module.exports = Message;