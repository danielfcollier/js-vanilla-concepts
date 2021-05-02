// A String is Not an Error

function errorHandler() {
  // Wrong Attempt
  try {
    throw "Error";
  }  
  catch(err){
    console.log("--- Wrong Attempt ---");
    console.log(err);
  }

  // Good Handling
  try {
    throw new Error("Error");
  }  
  catch(err){
    console.log("--- Good Handling ---");
    console.log(err);
  }
}

/*
node Error.js      
--- Wrong Attempt ---
Error
--- Good Handling ---
Error: Error
    at errorHandler (C:\Users\Daniel Collier\Google Drive\PROGRAMMING\Apps Script\Error.js:15:11)     
    at Object.<anonymous> (C:\Users\Daniel Collier\Google Drive\PROGRAMMING\Apps Script\Error.js:22:1)
    at Module._compile (node:internal/modules/cjs/loader:1091:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1120:10)
    at Module.load (node:internal/modules/cjs/loader:971:32)
    at Function.Module._load (node:internal/modules/cjs/loader:812:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47
*/
