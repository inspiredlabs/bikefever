<script>
// ./+page.svelte
import { createContext } from './simpleContext.svelte.js';
import Search from './Search.svelte';
import { getRssItems } from './rssfeed.js';

// --- State Management for asynchronous data ---
let items = $state([]);
let filteredItems = $state([]); // Use a separate state for filtered items
let isLoading = $state(true);
let searchInput = $state('');
  
// --- Preserve Context ---
// Note: We will filter on the local 'items' state, not context.getItems(),
// to more easily handle the asynchronous data loading.
const context = createContext(items);

// Use an effect to fetch data and initialize both item lists
$effect(async () => {
  isLoading = true;
  const fetchedItems = await getRssItems();
  items = fetchedItems;
  filteredItems = fetchedItems; // Initially, filtered list is the full list
  isLoading = false;
});

// Sync with context's searchInput reactively
$effect(() => {
  searchInput = context.getSearchInput();
});

// --- Derive filtered items reactively based on searchInput ---
$effect(() => {
  const query = searchInput.toLowerCase();

  // If the search query is empty, show all items.
  if (!query) {
    filteredItems = items;
    return;
  }

  // Filter based on multiple fields, checking for their existence first.
  filteredItems = items.filter(item => {
    const title = item.title?.toLowerCase() || '';
    const description = item.description?.toLowerCase() || '';
    const content = item.content?.toLowerCase() || '';
    const feedName = item.feedName?.toLowerCase() || '';
    const author = item.author?.toLowerCase() || '';

    return title.includes(query) ||
            description.includes(query) ||
            content.includes(query) ||
            feedName.includes(query) ||
            author.includes(query);
  });
});
</script>

<!-- `items` are WORKING: <pre>{JSON.stringify(items, null, 2)}</pre> -->

<main class="system flex flex-column justify-around ma0">
  <div class="bg-gray sticky z-1 w-100">
    <section class="flex measure-wide ml-auto mr-auto pa3">
      <img src="https://bikefever.tech/images/logo.webp" class="w-25" alt="Bike Fever" />
      <Search />
    </section>	
  </div>	
  <section class="z-0 relative ml-auto mr-auto">
    {#if isLoading}
      <p>Loading feeds, please wait...</p>
    {:else}
      <ul class="list pa3 measure-wide">
        <!-- Now loop over `filteredItems` and display results -->
        {#each filteredItems as {
          title, link, author,
          pubDate, description,
          content, feedName, feedColor
        }}
          <li class="pa3 br4 mb3 bg-white overflow-hidden" >
            <a href="{link}" class="link" style="color: #383838">
              <h2 class="dark-gray">{@html title}</h2>
              <h3 class="gray">{@html description}</h3>
              <!--p>{@html content}</p-->
            </a>
            <small class="b">
              <cite style="color: {feedColor}">{@html feedName}<!--span style="display: {author ? 'inline-block' : 'none'}">: {@html author}</span--></cite>
              <date>{new Date(pubDate).toLocaleString()}</date>	
            </small>
          </li>
        {:else}
          <!-- Show a message if the filter returns no results -->
          <li>No items match your search.</li>
        {/each}
      </ul>
    {/if}
  </section>
</main>
  
<style>
:global(body) {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f8f8f8;
}
.sticky {	
  position: sticky;
  top: 0;
}
</style>
  
<!-- <svelte:head>
  <link rel='stylesheet' href='https://instantwebapp.com/css/tachyon.shower.css'>
</svelte:head> -->