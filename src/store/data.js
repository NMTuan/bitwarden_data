/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 13:10:09
 * @LastEditTime: 2023-01-08 17:03:03
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \bitwarden_data_de_duplication\src\store\data.js
 */
import { writable, derived } from 'svelte/store'

// const createData = () => {
//     const { subscribe, set, update } = writable({
//         encrypted: false,
//         folders: [],
//         items: []
//     })

//     return {
//         subscribe,
//         set
//     }
// }

// export const data = createData()
// export const folders = derived(data, (d) => {
//     return d.folders
// })
// export const items = derived(data, (d) => d.items)

export const data = writable({
    encrypted: false,
    folders: [],
    items: []
})

export const folders = derived(data, (d) => d.folders)
