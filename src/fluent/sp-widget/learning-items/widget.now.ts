import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const learningItemsWidget = SPWidget({
    $id: Now.ID['learning_items_widget'],
    name: 'Fluent Learn Items',
    id: 'fl-learn-items',
    htmlTemplate: Now.include('./template.html'),
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    customCss: Now.include('./styles.css'),
})
