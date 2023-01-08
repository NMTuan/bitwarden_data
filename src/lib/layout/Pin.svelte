<script>
    export let state = true // true 展开
    const togglePin = () => {
        state = !state
    }
    $: localStorage.setItem('pin', state ? '1' : '0')
</script>

<div class="i-ri-menu-line text-xl cursor-pointer" on:click={togglePin} />
