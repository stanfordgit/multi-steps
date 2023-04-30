import VInputText from './VInputText';
import VSelect from './VSelect';
import VButton from './VButton';

const plugins = {
    install(app) {
       app.component('v-input-text', VInputText);
       app.component('v-select', VSelect);
       app.component('v-button', VButton);
    }
  };
  
  export default plugins;