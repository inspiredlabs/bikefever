<script>
// ./Search.svelte
import { useContext } from './simpleContext.svelte.js';

// Get the public API from the context.
const context = useContext();

// Internal state for this component.
let search;
let placeholder = "Search    focus: \\";	

function handleKeypress(event) {
  if (event.key === '/' || event.key === '\\') {
    event.preventDefault();
    search.focus();
  }
}

function handleChange(event) {
  const currentValue = event.currentTarget.value;

  // Check for the special "command" characters.
  if (currentValue === '/' || currentValue === '\\') {
    /* 1. Update the central state to be empty.
      * This causes Svelte to re-render the input with an empty value.
      */
    context.setSearchInput('');    

    // 2. Perform the UI side-effect of changing the placeholder.
    if (search) search.placeholder = placeholder;

  } else {
    // 3. DO NOT USE AN implicit `return` here, it'll contradict: `focus`.
    context.setSearchInput(currentValue);
  }
}


// UX: prevent form submit
function clearSearch(event) {
  event.preventDefault(); 
  context.setSearchInput('');
  search.value = '';
}
</script>

<svelte:window onkeydown={handleKeypress} />

<form>
  <label for="search" class="sr-only">Search</label>
  <div class="flex items-center">
    <input

      bind:this={search}
      type="search"
      {placeholder}
      id="search"
      aria-describedby="search"
      value={context.getSearchInput()}
      oninput={handleChange}
      class="highlight"
    />
    <button
      onclick={ clearSearch }
      aria-label="Clear search"
      class="ml3 pointer input-reset
            flex items-center justify-center
            pa2 ba bw2 b--transparent
            bg-black hover-bg-red transition white br-100"
      >&#10005;</button>
  </div>
</form>

<style>
form { margin: auto 0; width: 100% }
input[type='search'] {
  display: block;
  width: 100%;
  padding: 0.75em;
  border-radius: 8px;
  border: 1px solid #555;
  box-sizing: border-box;
}
button { width: 2rem; height: 2rem; }
/* learn: geektnt.com/how-to-remove-x-from-search-input-field-on-chrome-and-ie.html */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }

::placeholder:active,
::placeholder:focus {
  color: black;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder:active,
:-ms-input-placeholder:focus { /* Internet Explorer 10-11 */
color: black;
}

::-ms-input-placeholder:active,
::-ms-input-placeholder:focus	{ /* Microsoft Edge */
  color: black
}
</style>