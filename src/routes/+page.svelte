<script lang="ts">
	import type { PageData } from "./$types";


    export let data: PageData;
    $: ({ pubs } = data);
</script>
<h2>Home</h2>
<form action="/pub" method="POST">
    <input type="text" name="content" />
    <button type="submit">Publish</button>
</form>
<ul>
    {#each pubs as pub}
        <li>{pub.content}</li>
    {/each}
</ul>
