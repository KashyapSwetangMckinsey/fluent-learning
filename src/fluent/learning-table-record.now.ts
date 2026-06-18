import { Record } from '@servicenow/sdk/core'

/**
 * Seeds one sample row when the app is installed.
 */
Record({
    table: 'x_378497_fl_learn_learning_item',
    $id: Now.ID['learning_item_seed'],
    data: {
        title: 'My first Fluent record',
        notes: 'Edit this project and run npm run build to compile changes.',
        priority: 1,
        due_date: '06-17-2026 12:00:00',
    },
})
