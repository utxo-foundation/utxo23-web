<script>
  import { page } from "$app/stores";
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import Transition from "$lib/Transition.svelte";
  import "../app.css";
  
  export let data;
</script>

<div class="layout min-h-screen bg-custom-darkestpurple print:bg-white">
    <div class="inset-0 bg-white">
      <Header />

      <main>
        <Transition key={$page.url}>
          <slot />
        </Transition>
      </main>
    </div>
    <Footer {data} />
  </div>