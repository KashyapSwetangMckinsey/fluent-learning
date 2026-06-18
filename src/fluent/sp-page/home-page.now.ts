import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { learningItemsWidget } from '../sp-widget/learning-items/widget.now'

export const flLearnHomePage = SPPage({
    pageId: 'fl_learn_home',
    title: 'Learning Items',
    public: true,
    shortDescription: 'Browse learning items from the Fluent Learn application',
    containers: [
        {
            $id: Now.ID['fl_learn_home_container'],
            name: 'Main Content',
            width: 'container',
            order: 1,
            rows: [
                {
                    $id: Now.ID['fl_learn_home_row'],
                    order: 1,
                    columns: [
                        {
                            $id: Now.ID['fl_learn_home_col'],
                            size: 12,
                            instances: [
                                {
                                    $id: Now.ID['fl_learn_home_widget_instance'],
                                    widget: learningItemsWidget,
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
