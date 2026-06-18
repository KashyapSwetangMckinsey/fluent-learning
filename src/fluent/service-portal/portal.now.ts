import '@servicenow/sdk/global'
import { ServicePortal } from '@servicenow/sdk/core'
import { flLearnHomePage } from '../sp-page/home-page.now'
import { flLearnMainMenu } from '../sp-instance-menu/main-menu.now'

/** Coral OOTB theme — verified on most instances */
const CORAL_THEME = '281507c44317d210ca4c1f425db8f2fd'

export const flLearnPortal = ServicePortal({
    $id: Now.ID['fl_learn_portal'],
    title: 'Fluent Learn',
    urlSuffix: 'fl_learn',
    theme: CORAL_THEME,
    homePage: flLearnHomePage,
    mainMenu: flLearnMainMenu,
    logoAltText: 'Fluent Learn Portal',
})
