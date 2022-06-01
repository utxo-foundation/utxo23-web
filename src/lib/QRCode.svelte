<script>
  import QRCode from "qrcode-svg";

  import { onMount, onDestroy, afterUpdate } from "svelte";

  export let value = null;
  let svg = null;

  function render() {
    if (value) {
      svg = new QRCode({
        content: value,
        padding: 1,
        ecl: "M",
        join: true,
      }).svg();
    }
  }

  onMount(() => {
    render();
  });
</script>

<div>{@html svg}</div>
