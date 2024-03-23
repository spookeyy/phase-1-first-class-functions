//LAB SOLUTION

const receivesAFunction = callBack => callBack();
function returnsANamedFunction() {
    return function iHaveAName() {
      console.log("I have a name!");
    };
  }
  function returnsAnAnonymousFunction() {
    return () => console.log("I am Anonymous");
  }
  //------------------------------------------------------------
  //LEARNING 
//Inline Function 
//arrow function
exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
  });
  
  // Or even shorter:
  exerciseRoutine(() => console.log("Stretch! Work that core!"));

//Returning Functions
function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
      breakfast = "kale smoothie";
    } else {
      breakfast = "granola";
    }
  
    exerciseRoutine(exercise);
  
    // we could give this function a name if we wanted to, but since
    // it's only available _inside_ morningRoutine(), we don't need to
    return function () {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
  }


