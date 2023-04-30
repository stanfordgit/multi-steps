import VInputText from './VInputText';
import VSelect from './VSelect';
import VButton from './VButton';
import VCheckbox from './VCheckbox';
import VToggleSwitch from './VToggleSwitch'

const plugins = {
    install(app) {
       app.component('v-input-text', VInputText);
       app.component('v-select', VSelect);
       app.component('v-button', VButton);
       app.component('v-checkbox', VCheckbox);
       app.component('v-toggle-switch', VToggleSwitch);
    }
  };
  
  export default plugins;