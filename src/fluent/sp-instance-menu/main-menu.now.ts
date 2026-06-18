import '@servicenow/sdk/global'
import { SPMenu } from '@servicenow/sdk/core'
import { flLearnHomePage } from '../sp-page/home-page.now'

export const flLearnMainMenu = SPMenu({
    $id: Now.ID['fl_learn_main_menu'],
    items: [
        {
            $id: Now.ID['fl_learn_menu_home'],
            label: 'Learning Items',
            type: 'page',
            page: flLearnHomePage,
            order: 100,
            glyph: 'book',
        },
    ],
})
