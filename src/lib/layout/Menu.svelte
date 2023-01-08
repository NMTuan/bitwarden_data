<script>
    import { link } from 'svelte-spa-router'
    const menuTree = [
        {
            label: 'Bitwarden 数据处理',
            children: [
                { label: '首页', icon: '', to: '/' },
                { label: '测试', icon: '', to: '/test' }
            ]
        }
    ]
</script>

<div class="leading-none mt-2">
    {#each menuTree as menu}
        <div class="px-4 pt-5 pb-2 text-cool-gray-400 capitalize text-sm">
            {menu.label}
        </div>
        {#if Array.isArray(menu.children) && menu.children.length > 0}
            {#each menu.children as child}
                <div>
                    <a
                        href={child.to}
                        class="block p-4 flex items-center capitalize text-cool-gray-600 hover:bg-cool-gray-200"
                        use:link
                    >
                        <div>icon</div>
                        {child.label}
                    </a>
                </div>
            {/each}
        {/if}
    {/each}
</div>
