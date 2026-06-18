import { GlideRecord } from '@servicenow/glide'

export function uppercaseTitle(current: GlideRecord<'x_378497_fl_learn_learning_item'>) {
    const title = current.getValue('title')
    if (title) {
        current.setValue('title', title.toUpperCase())
    }
}
