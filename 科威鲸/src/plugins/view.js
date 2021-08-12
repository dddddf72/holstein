import Vue from 'vue'
import { 
    Button, 
    Table,
    Cascader,
    Steps,
    Step
} from 'view-design';

Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Cascader', Cascader);
Vue.component('Steps', Steps);
Vue.component('Step', Step);

// import preview from 'vue-photo-preview'
// import 'vue-photo-preview/dist/skin.css'
// Vue.use(preview)

import VuePreview from 'vue-preview'

Vue.use(VuePreview)