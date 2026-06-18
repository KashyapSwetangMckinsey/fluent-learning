import { DateTimeColumn, IntegerColumn, StringColumn, Table } from '@servicenow/sdk/core'

/**
 * Creates a custom table on your instance: x_378497_fl_learn_learning_item
 */
export const x_378497_fl_learn_learning_item = Table({
    name: 'x_378497_fl_learn_learning_item',
    label: 'Learning Item',
    schema: {
        title: StringColumn({ label: 'Title', mandatory: true }),
        notes: StringColumn({ label: 'Notes' }),
        priority: IntegerColumn({ label: 'Priority', default: 3 }),
        due_date: DateTimeColumn({ label: 'Due Date' }),
    },
})
