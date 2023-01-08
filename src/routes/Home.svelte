<script>
    import { data, folders } from '../store/data.js'
    let files = []

    // $: {
    //     const file = files[0]
    //     if (file) {
    //         const reader = new FileReader()
    //         reader.readAsText(file, 'utf8') //gbk编码
    //         reader.onload = function () {
    //             data.set(JSON.parse(this.result))
    //             console.log($data) // 文本内容
    //         }
    //     }
    // }

    const handleChange = () => {
        const file = files[0]
        console.log('change')
        if (file) {
            const reader = new FileReader()
            reader.readAsText(file, 'utf8') //gbk编码
            reader.onload = function () {
                // data.set(JSON.parse(this.result))
                data.update((val) => {
                    return val
                })
            }
        }
    }
</script>

<div>
    <input type="file" bind:files on:change={handleChange} />
</div>
<!-- <div>{$folders}</div> -->
<pre>{$data}</pre>
{#each Array(100) as item, index}
    <p>{index + 1}</p>
{/each}
