<script>
  import { onMount, onDestroy } from "svelte";
  import { createEventDispatcher } from "svelte";
  import cloud from "d3-cloud";
  import { select } from "d3-selection";
  import { scaleOrdinal } from "d3-scale";
  import * as CS from "d3-scale-chromatic";
  import { layouts } from "$lib/stores.js";

  $: outerWidth = 0;
  $: innerWidth = 0;

  // event dispatcher
  const dispatch = createEventDispatcher();

  // color scheme
  const color_scheme = {
    schemeCategory10: CS.schemeCategory10,
    schemeAccent: CS.schemeAccent,
    schemeDark2: CS.schemeDark2,
    schemePaired: CS.schemePaired,
    schemePastel1: CS.schemePastel1,
    schemePastel2: CS.schemePastel2,
    schemeSet1: CS.schemeSet1,
    schemeSet2: CS.schemeSet2,
    schemeSet3: CS.schemeSet3,
    schemeTableau10: CS.schemeTableau10,
  };

  // props
  export let width = 900;
  export let words = [];
  export let height = 250;
  export let font = "Montserrat";
  export let maxFontSize = 40;
  export let minRotate = 0;
  export let maxRotate = 0;
  export let scheme = "schemeTableau10";
  export let padding = 2;
  export let backgroundColor = "#fff";

  //words = words.map(w => { w.text = w.text.toUpperCase(); return w; })

  // count max word occurence
  const maxWordCount = words.reduce((prev, cur) =>
    prev.count < cur.count ? prev.count : cur.count
  );

  // text color scheme
  const fill = scaleOrdinal(color_scheme[scheme]);

  // events
  const onWordClick = (d) => dispatch("click", d);
  const onWordMouserOver = (d) => dispatch("mouseover", d);
  const onWordMouseOut = (d) => dispatch("mouseout", d);
  const onWordMouseMove = (d) => dispatch("mousemove", d);

  let layout = null

  $: cwidth =
    outerWidth > 1152
      ? 1000
      : outerWidth > 500
      ? outerWidth - 100
      : outerWidth - 50;
  $: cheight = cwidth < 800 ? 400 : cwidth < 500 ? 600 : 250;

  async function makeLayout() {
    const lid = [cwidth, cheight].join(':')
    let l = null
    await layouts.update(larr => {

      console.log(Object.keys(larr))
      if (larr && larr[lid]) {
        console.log('making from stored layout')
        l = larr[lid]

      } else {

        l = cloud()
          .size([cwidth, cheight])
          .words(words)
          .padding(padding)
          .rotate(() => ~~(Math.random() * maxRotate) + minRotate)
          .font(font)
          .fontSize(
            //(d) =>  Math.floor((d.count / maxWordCount) * maxFontSize)
            (d) => d.count + 15
          );

        larr[lid] = l
      }

      console.log(Object.keys(larr))
      return larr
    })
    return l
  }

  function draw(words) {
    //select("#wordcloud").selectAll("*").remove();

    select("#wordcloud")
      .append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
      .append("g")
      .attr(
        "transform",
        "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")"
      )
      .selectAll("text")
      .data(words)
      .enter()
      .append("text")
      .style("font-size", (d) => d.size + "px")
      .style("font-family", font)
      .style("fill", "#393F67")
      .style("cursor", "pointer")
      //.style("fill", (_d, i) => fill(i))
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        (d) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"
      )
      .text((d) => d.text)
      .on("click", onWordClick)
      .on("mouseover", onWordMouserOver)
      .on("mouseout", onWordMouseOut)
      .on("mousemove", onWordMouseMove);
  }

  async function drawAll() {
    layout = (await makeLayout()).on("end", draw);
    layout.start();
  }

  // mount
  let show = false;
  let interval = null;
  onMount(async () => {
    let fwidth = 0;
    setTimeout(() => {
      interval = setInterval(() => {
        if (outerWidth !== fwidth) {
          drawAll();
          fwidth = outerWidth;
        }
      }, 500);
    }, 100);
    setTimeout(() => {
      drawAll();
      fwidth = outerWidth;
      show = true;
    }, 0);
  });

  onDestroy(() => {
    clearTimeout(interval);
  });
</script>

<svelte:window bind:innerWidth bind:outerWidth />

<div class="height: {cheight}px;">
  <div
    id="wordcloud"
    style="background-color: {backgroundColor}; width: {cwidth}px; height: {cheight}px;"
    class="justify-end {show
      ? 'opacity-100'
      : 'opacity-0'} transition transition-all"
  />
</div>

<style>
  div#wordcloud {
    width: fit-content;
    height: fit-content;
  }
  #wordcloud > svg > g > text {
    cursor: pointer;
  }
</style>
