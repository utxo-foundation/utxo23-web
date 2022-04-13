<script>
  import { onMount, onDestroy } from "svelte";
  import { createEventDispatcher } from "svelte";
  import cloud from "d3-cloud";
  import { select } from "d3-selection";
  import { scaleOrdinal } from "d3-scale";
  import * as CS from "d3-scale-chromatic";

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
  export let padding = 10;
  export let backgroundColor = "#fff";

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

  $: cwidth =
    outerWidth > 1152
      ? 1000
      : outerWidth > 500
      ? outerWidth - 100
      : outerWidth - 50;
  $: cheight = cwidth < 800 ? 400 : cwidth < 500 ? 600 : 250;

  function makeLayout() {
    return cloud()
      .size([cwidth, cheight])
      .words(words)
      .padding(padding)
      .rotate(() => ~~(Math.random() * maxRotate) + minRotate)
      .font(font)
      .fontSize(
        //(d) =>  Math.floor((d.count / maxWordCount) * maxFontSize)
        (d) => d.count + 15
      );
  }

  let layout = null;

  function draw(words) {
    select("#wordcloud").selectAll("*").remove();

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

  function drawAll() {
    layout = makeLayout().on("end", draw);
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
      }, 100);
    }, 0);
    setTimeout(() => {
      show = true;
    }, 200);
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
      : 'opacity-0'} transition transition-all duration-500"
  />
</div>

<style>
  div#wordcloud {
    width: fit-content;
    height: fit-content;
  }
</style>
