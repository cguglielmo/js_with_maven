import MyModule from "@js_with_maven/ui/src/main/js/MyModule";
import {App} from "@js_with_maven/ui";

let module = new MyModule();
module.saySomething();

let app = new App();
app.init({
  bootstrap: {
    textsUrl: 'texts.json'
  }
});
app.on('init', () => app.sayHello());
