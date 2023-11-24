const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });
// Create a new object from the command class to test if the commandType key/value it being set.
  test("constructor sets command type", function(){
    let newObj = new Command("do stuff", 150)
   // console.log(newObj["commandType"]);
    expect( newObj["commandType"]).toEqual("do stuff")
    // create your own input here to test the command class. you are testing how the class creates the objects
  });
  test("constructor sets a value passed in as the 2nd argument", function(){
    let newObj2 = new Command("do more stuff", 300)
   // console.log(newObj2.value)
    expect(newObj2.value).toEqual(300)
  })
});
