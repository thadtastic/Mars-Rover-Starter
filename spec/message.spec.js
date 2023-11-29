const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
// TEST 4
test("throws error if a name is NOT passed into the constructor as the first parameter", function(){
    expect( function(){new Message();}).toThrow("Name is Required.");
})//TEST 5
test("constructor sets name", function() {
    let testMessage = new Message("Initial Task");
        expect(testMessage.name).toEqual("Initial Task");
})  //TEST 6
test("contains a commands array passed into the constructor as the 2nd argument", function(){
    let testCommands = [new Command("STATUS_CHECK", "FULL_POWER"), new Command("MOVE", 1200)];
    let initialMessage = new Message("first tasks", testCommands);
    expect(initialMessage.commands[0]).toEqual({"commandType": "STATUS_CHECK", "value": "FULL_POWER"});
    //console.log(initialMessage.commands);
    expect(initialMessage.commands[1]).toEqual({"commandType": "MOVE","value": 1200});
})
});
