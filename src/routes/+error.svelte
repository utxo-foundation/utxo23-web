<script>
    import { page } from '$app/stores';
    console.log($page.error);
</script>
  
<div class="max-w-7xl m-auto py-16 text-center">
    <h2 class="text-4xl text-custom-darkpurple font-bold">{$page.error.message}</h2>
    <div class="m-10 text-white">
        <a href="/" class="bg-gradient-to-br from-custom-green to-custom-purple hover:bg-custom-purple hover:bg-custom-darkpurple hover:bg-none px-8 py-4 rounded-xl drop-shadow-lg shadow">&lt;&lt; Na úvodní stránku</a>
    </div>
</div>