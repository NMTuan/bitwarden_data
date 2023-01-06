<script>
    import Counter from './lib/Counter.svelte'
</script>

<main>
    <h1 class="border bg-sky-400 p-4 rounded">Vite + Svelte</h1>

    <div class="card">
        <Counter />
        <div class="text-red hover:(bg-red-200)">123</div>
    </div>
</main>

<style>
    div {
        @apply bg-sky-100;
    }
</style>
