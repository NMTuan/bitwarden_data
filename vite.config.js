/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-06 10:38:06
 * @LastEditTime: 2023-01-06 11:13:50
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \bitwarden_data_de_duplication\vite.config.js
 */
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Unocss from 'unocss/vite'
import { extractorSvelte } from '@unocss/core'
import presetUno from '@unocss/preset-uno'
// import presetAttributify from '@unocss/preset-attributify'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
        Unocss({
            extractors: [extractorSvelte],
            presets: [
                presetUno()
                // presetAttributify()
            ],
            transformers: [transformerDirectives(), transformerVariantGroup()]
        })
    ]
})
