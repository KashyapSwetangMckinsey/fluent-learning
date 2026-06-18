import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

/** Allow all users to read learning items displayed in the portal */
Acl({
    $id: Now.ID['learning_item_read_acl'],
    type: 'record',
    table: 'x_378497_fl_learn_learning_item',
    operation: 'read',
    decisionType: 'allow',
    active: true,
    adminOverrides: true,
    description: 'Allow users to view learning items in the Fluent Learn portal',
    script: () => true,
})
