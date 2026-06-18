(function () {
    data.items = []
    data.totalCount = 0
    data.errorMessage = ''

    try {
        var gr = new GlideRecord('x_378497_fl_learn_learning_item')
        gr.orderBy('priority')
        gr.orderByDesc('sys_created_on')
        gr.setLimit(50)
        gr.query()

        while (gr.next()) {
            data.items.push({
                sys_id: gr.getUniqueValue(),
                title: gr.getValue('title'),
                notes: gr.getValue('notes') || '',
                priority: gr.getValue('priority'),
                due_date: gr.getDisplayValue('due_date') || '',
            })
        }

        data.totalCount = data.items.length
    } catch (e) {
        gs.error('Fluent Learn widget error: ' + e.message)
        data.errorMessage = 'Unable to load learning items.'
    }
})()
