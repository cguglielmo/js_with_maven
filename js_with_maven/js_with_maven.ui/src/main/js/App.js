import {App as ScoutApp, MessageBoxes} from '@eclipse-scout/core';

export default class App extends ScoutApp {

  constructor() {
    super();
    this.apiUrl = '../api/';
    this.appPrefix = 'js_with_maven.';
  }

  sayHello() {
    MessageBoxes.openOk(this.sessions[0].desktop, 'Hi there');
  }

}
