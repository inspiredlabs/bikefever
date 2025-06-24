<script>
// Radiocheck.svelte
// const uID = Math.floor(Math.random() * 100)
const urlize = (str = "") => str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");

export let type = 'radio'; // type="radio" by default
export let value;
export let label;		
export let userChoice;	

let checked;

</script>


<div class="flex items-center relative no-clutter pv2">
  <label
		for={urlize(label)}
		class="pointer w-100
					 flex items-center justify-between
					 ba bw2 b--transparent">
    <div
			style="color: { userChoice === true || userChoice == urlize(label) ? '' : 'gray'};"
			class="mr2 ttc transition"
			>{@html label}</div>
    <div class="flex items-center">
			{#if type === 'radio'}
	      <input type="radio"
					bind:group={userChoice}
		      id={urlize(label)}
		      {value}				
	        class="visually-hidden"
	      />
			{:else}
				<input type="checkbox"
					bind:checked={userChoice}
		      id={urlize(label)}
		      {value}				
	        class="visually-hidden"
	      />
			{/if}
      <svg
        class="checkbox-animation h2 w2 z-1 absolute pa0 ml0"
        viewBox="0 0 128 128">
        <use xlink:href="#{type === 'checkbox' ? 'check-thick' : 'disk'}"></use>
      </svg>
      <aside
				class="h2 w2
							 pa0 bg-white
							 b--silver
							 ba bw1-ns
							 {type === 'checkbox' ? 'br3' : 'br-100'}">
      </aside>
    </div>
  </label>
</div>

<style>
	
/*
label:focus,
label:active {
	background: rgba( 0, 0, 0, 0.05);
} */

/*
ColeBemis.com feather collection:
https://inspiredlabs.co.uk/j/feather/
in SVG defs `.spirites` */
.checkbox-animation {
	/* clip: rect(0 0 0 0);  */
	/* background-image: rgba(0,0,0, 0); */
  fill:currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -ms-transform: scale(0);
  -webkit-transform: scale(0);
  transform: scale(0);
  
  -ms-transition: all .3s ease;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}
.visually-hidden:checked ~ .checkbox-animation {
  -ms-transform: scale(.55);
  -webkit-transform: scale(.55);
  transform: scale(.55);
}
.visually-hidden {
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; 
  width: 1px;
}

/****** Checkbox/Radio hint ******/

/* input[type="checkbox"]:active ~ aside,
input[type="checkbox"]:focus ~ aside {
  border-color: white;
  background-color:black;
} */

/* input[type="checkbox"]:hover ~ aside {
  border-color: white;
  background-color:transparent;
} */

/* WebKit native focus styles 
@media (-webkit-min-device-pixel-ratio:0) {
  .focus-style {
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
  }
} */
</style>

<!-- Defs.svelte -->
<svg class="spirites" style="display: none;">
	<defs>
		<g id="check-thick" fill="currentcolor">
			<path d="M111 17 51 78 17 44 0 60l51 51 77-77z"/>
		</g>
		<g id="check-thin" fill="currentcolor">
			<path d="M116 22 51 88 12 49 0 60l51 51 77-77-12-12z"/>
		</g>
	  <g id="disk" fill="currentcolor"><circle cx="64" cy="64" r="64"/></g>
	</defs>
</svg>

	<!-- compress: svgomg.net/ -->