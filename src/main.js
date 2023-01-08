/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-06 10:38:06
 * @LastEditTime: 2023-01-06 17:27:54
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \bitwarden_data_de_duplication\src\main.js
 */
import App from './App.svelte'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'simplebar/dist/simplebar.css'

const app = new App({
    target: document.getElementById('app')
})

export default app
