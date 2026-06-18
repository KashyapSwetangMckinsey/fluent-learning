import { Record } from '@servicenow/sdk/core'

Record({
    table: 'x_378497_fl_learn_learning_item',
    $id: Now.ID['learning_item_seed_2'],
    data: {
        title: 'Explore Service Portal',
        notes: 'Review the Fluent Learn portal widget and page definitions.',
        priority: 2,
        due_date: '06-20-2026 09:00:00',
    },
})

Record({
    table: 'x_378497_fl_learn_learning_item',
    $id: Now.ID['learning_item_seed_3'],
    data: {
        title: 'Deploy with now-sdk',
        notes: 'Run npm run build and npm run deploy after making changes.',
        priority: 3,
        due_date: '06-25-2026 17:00:00',
    },
})
