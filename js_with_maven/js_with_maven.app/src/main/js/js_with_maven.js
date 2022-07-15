// import {MyModule} from "@js_with_maven/ui";
// import {App} from "@eclipse-scout/core";

// Ctrl-Space does not auto import MyModule.
let module = new MyModule();
module.sayHello();

// Another example with code from a library.
// Initially it does not work either. After waiting some minutes it suddenly works.
let app = new App();
app.init();

// Uncomment dependency in pom.xml and try again to import MyModule, it will work
