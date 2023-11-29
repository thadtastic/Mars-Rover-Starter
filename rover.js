//const Message = require("./message")

class Rover {
 constructor(position){
   this.position = position;
   this.mode = "NORMAL";
   this.generatorWatts = 110;
  // this.completed = Boolean;
   // should this.completed be here as well??
 }
  receiveMessage(message){
//plugs in the message obj and returns an object with two properties. 
// how do you point to the key/value from an object within a method
//how do you make a method return an object.
let response =  {

   message:message.name,
   // roverStatus is an element of results
   // how does the method give roverStatus only when STATUS_CHECK command it used??
   results: []
} 
for (let i = 0; i < message.commands.length; i++){
   if (message.commands[i].commandType === "STATUS_CHECK"){
      response.results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})
   }
   if (message.commands[i].commandType === "MODE_CHANGE"){
      // how do you update the default value of this.mode??
      this.mode = message.commands[i].value;
      response.results.push({completed: true})
   }
   if(message.commands[i].commandType === "MOVE" && this.mode === "LOW_POWER"){
      response.results.push({completed: false})
   }
   if(message.commands[i].commandType === "MOVE" && this.mode === "NORMAL"){
      this.position = message.commands[i].value;
      response.results.push({completed: true})
   }
   
   //this should be last
   //  else{
   //    response.results.push(message.commands[i])
   // }
}
return response
 }
}

module.exports = Rover;