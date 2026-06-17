import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { uppercaseTitle } from '../../server/uppercase-title'

/**
 * Before insert/update: converts the title field to uppercase.
 */
BusinessRule({
    $id: Now.ID['uppercase_title_br'],
    name: 'Uppercase Learning Item Title',
    table: 'x_fluent_learn_learning_item',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    active: true,
    script: uppercaseTitle,
})
