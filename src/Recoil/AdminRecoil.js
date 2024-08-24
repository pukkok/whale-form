import { atom } from "recoil";

const gridAtom  = atom({
    key: 'amdin-grid',
    default : 300
})

const isSideOpenAtom = atom({
    key: 'sidebar-open',
    default : true
})

const tabsAtom = atom({
    key: 'tab-list',
    default: []
})

const activeTabAtom = atom({
    key: 'active-tab',
    default: ''
})

export {
    gridAtom, isSideOpenAtom,
    tabsAtom, activeTabAtom

}