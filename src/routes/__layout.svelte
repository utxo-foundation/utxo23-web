<script>
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import "../app.css";
  import api from "$lib/api.js";
  import { page } from "$app/stores";
  import {
    userData,
    userDataLocal,
    apiStatus,
    loadInfo,
    bundle,
  } from "$lib/stores";
  import { loadOrders, loadApiStatus } from "$lib/orders";
  import { onMount, onDestroy } from "svelte";

  let uds = null;

  let int1 = null;
  let apiLoadRetry = 0;
  let apiOffline = false;

  async function apiLoad() {
    try {
      await loadApiStatus();
      await loadOrders($userData);
    } catch (e) {
      if (apiLoadRetry > 5) {
        console.log("Too much retries, shutdown..");
        apiOffline = true;
        return null;
      }
      console.log(`API cannot be accessed .. retrying [#${apiLoadRetry}] ..`);
      apiLoadRetry = apiLoadRetry + 1;
      setTimeout(() => apiLoad(), 250);
      return null;
    }

    apiLoadRetry = 0;
    return true;
  }

  async function baseLoad() {
    api.loadBundle($page.url.hostname === "localhost");
    await apiLoad();

    return true;
  }

  onMount(async () => {
    baseLoad();

    int1 = setInterval(() => {
      baseLoad();
    }, 60 * 2000);

    const userDataLS = localStorage.getItem("userData");
    if (userDataLS) {
      userData.set(JSON.parse(userDataLS));
    }

    uds = userData.subscribe((ud) => {
      localStorage.setItem("userData", JSON.stringify(ud));
    });

    setTimeout(() => {
      loadInfo.set({ loaded: true });
    }, 300);
  });

  onDestroy(() => {
    //userData.unsubscribe(uds)
    clearInterval(int1);
  });

  // load orders
</script>

{#if $bundle}
  <div class="layout min-h-screen bg-gray-900">
    <div class="inset-0 bg-white">
      <Header />

      <main>
        <slot />
      </main>
    </div>
    <Footer />
  </div>
{/if}

<style>
</style>
