const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
  test("constructor sets position and default values for mode and generatorWatts", function(){
    // create object from rover class to test the constructor and other default values
    let roverObj = new Rover(1500);
    expect(roverObj.position).toBe(1500);
    expect(roverObj.mode).toBe("NORMAL");
    expect(roverObj.generatorWatts).toBe(110);
  })
  // TEST 8
  test("response returned by receiveMessage contains the name of the message", function(){
    let commands = [new Command("STATUS_CHECK" ), new Command("MOVE", 1500)];
    let msg1 = new Message("test message name",commands)
    let rover = new Rover(5000);
    let response = rover.receiveMessage(msg1);
    //console.log(response.message);
    expect(response.message).toEqual("test message name")
  })
  //TEST 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let commands = [new Command("STATUS_CHECK"), new Command("MODE_CHANGE", "NORMAL")];
    let msg2 = new Message("update",commands);
    let rover = new Rover(5000);
    let response = rover.receiveMessage(msg2);
  // console.log(msg2);
    expect(response.results.length).toEqual(commands.length)
  })
  // TEST 10
  test("responds correctly to the status check command", function(){
    // status check response is {completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}}
    let commands = [new Command("STATUS_CHECK")];
    let msg3 = new Message("checking status", commands);
    let rover = new Rover(1500);
    let response = rover.receiveMessage(msg3);
    //console.log(response.results);
    expect(response.results).toEqual([{completed: true, roverStatus: {mode: "NORMAL", generatorWatts: 110, position: 1500}}])
  })
  //TEST 11
  test("responds correctly to the mode change command", function(){
    let commands = [new Command("MODE_CHANGE", "LOW_POWER")];
    let msg4 = new Message("changing modes", commands);
    let rover = new Rover(80000);
    let response = rover.receiveMessage(msg4);
    expect(response.results).toEqual([{completed: true}]);
    expect(rover.mode).toEqual("LOW_POWER");
  })
  //TEST 12
  test("responds with a false completed value when attempting to move in LOW_POWER mode", function(){
    let commands = [new Command("MOVE", 4500)];
    let msg5 = new Message("try moving rover on low batt",commands);
    let rover = new Rover(1);
    rover.mode = "LOW_POWER";
    let response = rover.receiveMessage(msg5);
    expect(response.results).toEqual([{completed: false}]);
    expect(rover.position).toEqual(1);
 })
 //TEST 13
 test("responds with the position for the move command", function(){
  let commands = [new Command("MOVE", 4500)];
  let msg6 = new Message("try moving rover",commands);
  let rover = new Rover(1);
  let response = rover.receiveMessage(msg6);
  expect(response.results).toEqual([{completed: true}]);
  expect(rover.position).toEqual(4500);
 })
});
