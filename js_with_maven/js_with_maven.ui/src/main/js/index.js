export {default as MyModule} from './MyModule';

import * as self from './index.js';

export default self;
window.js_with_maven = Object.assign(window.js_with_maven || {}, self);
