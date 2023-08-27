import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/lib/styles/main.sass';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VDataTable, VDataTableServer, VDataTableVirtual } from 'vuetify/labs/components';

export default createVuetify({
    components: {
        ...components,
        VDataTable,
        VDataTableServer,
        VDataTableVirtual
    },
    directives,
})