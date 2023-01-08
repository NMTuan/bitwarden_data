<script>
    import { onMount } from 'svelte'
    import Router from 'svelte-spa-router'
    import routes from './routes'
    import SimpleBar from 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
    import LayoutPin from './lib/layout/Pin.svelte'
    import LayoutMenu from './lib/layout/Menu.svelte'

    let pin = localStorage.getItem('pin') === '0' ? false : true
    let menuClass = []
    let mainClass = []

    $: {
        menuClass = [
            'fixed',
            'z-10',
            'h-full',
            'overflow-hidden',
            'w-0',
            'bg-cool-gray-100/90',
            'border-r-8',
            'border-cool-gray-300/50',
            'transition-all',
            'duration-500',
            'hover:(w-64 border-r)'
        ]
        if (pin) {
            menuClass.push('lg:(w-64 bg-cool-gray-200/50 !border-none)')
        }
    }
    $: {
        mainClass = [
            'flex-1',
            'h-full',
            'overflow-hidden',
            'ml-0',
            'transition-all',
            'duration-500'
        ]
        if (pin) {
            mainClass.push('lg:ml-64')
        }
    }

    onMount(() => {
        new SimpleBar(document.getElementById('menuSimplebar'))
        new SimpleBar(document.getElementById('mainSimplebar'))
    })
</script>

<div class="h-full flex">
    <!-- menu -->
    <div class={menuClass.join(' ')}>
        <div class="w-64 h-full ">
            <div id="menuSimplebar" class="h-full">
                <LayoutMenu />
            </div>
        </div>
    </div>
    <!-- main -->
    <div class={mainClass.join(' ')}>
        <div id="mainSimplebar" class="h-full">
            <div
                class="flex items-center justify-between p-4 leading-none backdrop-blur sticky left-0 top-0 right-0 z-10"
            >
                <div class="flex items-center">
                    <LayoutPin bind:state={pin} />
                    <div class="ml-4">Bitwarden 数据处理</div>
                </div>
                <div class="mr-2">
                    <div class="i-ri-github-fill text-2xl" />
                </div>
            </div>
            <div class="w-85% max-w-6xl mx-auto mt-6">
                <Router {routes} />
            </div>
        </div>
    </div>
</div>

<style>
    :global(html),
    :global(body),
    :global(#app) {
        @apply h-full overflow-hidden bg-cool-gray-50;
    }
</style>
