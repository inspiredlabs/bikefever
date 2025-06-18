
<!-- ,
    { name: 'Genoa Arts', url: 'http://zacusca-backend.bnqt.autos/feed/465fc560-f48a-4344-87e0-e6d8af54550a/rss' },
    { name: 'Genoa Everything', url: 'http://zacusca-backend.bnqt.autos/feed/22a6979e-c0ef-44f6-aac9-5a07f7bb6810/rss' },
    { name: 'Genoa History', url: 'http://zacusca-backend.bnqt.autos/feed/b0fc628e-07b4-4321-bd0e-f9c77d7a6d38/rss' },
    { name: 'Genoa Events', url: 'http://zacusca-backend.bnqt.autos/feed/eceb8d8e-d7a0-462f-bd03-c48592270ec1/rss' },
    { name: 'Genoa Food', url: 'http://zacusca-backend.bnqt.autos/feed/7c2a6615-d957-49b3-8fbd-d636259a56d1/rss' },
    { name: 'Genoa Non-Tourist', url: 'http://zacusca-backend.bnqt.autos/feed/eaef6560-b52f-4235-bf32-ae3cbe7062db/rss' },
    { name: 'Genoa Activities', url: 'http://zacusca-backend.bnqt.autos/feed/803fe4b3-c6f9-4e10-aec9-974c082d855d/rss' },
  // bike news
    { name: 'TrainerRoad', url: 'https://www.trainerroad.com/blog/feed' },
    { name: 'CyclingNews', url: 'https://www.cyclingnews.com/rss/all/' },
    { name: 'CyclingWeekly', url: 'https://www.cyclingweekly.com/feeds/tag/news' },
    { name: 'Bike Snob NYC', url: 'https://bikesnobnyc.com/feed' },
    { name: 'PezCycling News', url: 'https://feeds.feedburner.com/Pezcyclingnews' },
    { name: 'The Inner Ring', url: 'https://feeds.feedburner.com/inrng/i' },
    { name: 'Bike Hugger', url: 'https://bikehugger.com/feed' },
    { name: 'Seattle Bike Blog', url: 'https://seattlebikeblog.com/feed' },
    { name: 'BikeRadar (News)', url: 'https://www.bikeradar.com/news/rss/' },
    { name: 'BikeRadar (Road)', url: 'https://www.bikeradar.com/road/rss/' },
    { name: 'BikeRadar (MTB)', url: 'https://www.bikeradar.com/mtb/rss/' },
    { name: 'BikeRadar (Gravel)', url: 'https://www.bikeradar.com/gravel/rss/' },
    { name: 'Bike EU', url: 'https://www.bike-eu.com/rss' },
    { name: 'VeloWire', url: 'https://www.velowire.com/rss.php?l=en' },
    { name: 'Pinkbike', url: 'https://www.pinkbike.com/rss' }, -->
<script>
// ./page.svelte
let items = $state([]);
let isLoading = $state(true);

// --- 1. The expanded list of feed sources ---
// The new feeds have been added with a descriptive name for each.
const feedSources = [
  
  { name: 'Scott Phillips\' Substack', url: 'https://inspiredlabs.substack.com/feed' },
  { name: 'Genoa Arts', url: 'http://zacusca-backend.bnqt.autos/feed/465fc560-f48a-4344-87e0-e6d8af54550a/rss' },
  { name: 'Genoa Arts', url: 'http://zacusca-backend.bnqt.autos/feed/465fc560-f48a-4344-87e0-e6d8af54550a/rss' },
    { name: 'Genoa Everything', url: 'http://zacusca-backend.bnqt.autos/feed/22a6979e-c0ef-44f6-aac9-5a07f7bb6810/rss' },
    { name: 'Genoa History', url: 'http://zacusca-backend.bnqt.autos/feed/b0fc628e-07b4-4321-bd0e-f9c77d7a6d38/rss' },
    { name: 'Genoa Events', url: 'http://zacusca-backend.bnqt.autos/feed/eceb8d8e-d7a0-462f-bd03-c48592270ec1/rss' },
    { name: 'Genoa Food', url: 'http://zacusca-backend.bnqt.autos/feed/7c2a6615-d957-49b3-8fbd-d636259a56d1/rss' },
    { name: 'Genoa Non-Tourist', url: 'http://zacusca-backend.bnqt.autos/feed/eaef6560-b52f-4235-bf32-ae3cbe7062db/rss' },
    { name: 'Genoa Activities', url: 'http://zacusca-backend.bnqt.autos/feed/803fe4b3-c6f9-4e10-aec9-974c082d855d/rss' },
  /* bike news  */
    { name: 'TrainerRoad', url: 'https://www.trainerroad.com/blog/feed' },
    { name: 'CyclingNews', url: 'https://www.cyclingnews.com/rss/all/' },
    { name: 'CyclingWeekly', url: 'https://www.cyclingweekly.com/feeds/tag/news' },
    { name: 'Bike Snob NYC', url: 'https://bikesnobnyc.com/feed' },
    { name: 'PezCycling News', url: 'https://feeds.feedburner.com/Pezcyclingnews' },
    { name: 'The Inner Ring', url: 'https://feeds.feedburner.com/inrng/i' },
    { name: 'Bike Hugger', url: 'https://bikehugger.com/feed' },
    { name: 'Seattle Bike Blog', url: 'https://seattlebikeblog.com/feed' },
    { name: 'BikeRadar (News)', url: 'https://www.bikeradar.com/news/rss/' },
    { name: 'BikeRadar (Road)', url: 'https://www.bikeradar.com/road/rss/' },
    { name: 'BikeRadar (MTB)', url: 'https://www.bikeradar.com/mtb/rss/' },
    { name: 'BikeRadar (Gravel)', url: 'https://www.bikeradar.com/gravel/rss/' },
    { name: 'Bike EU', url: 'https://www.bike-eu.com/rss' },
    { name: 'VeloWire', url: 'https://www.velowire.com/rss.php?l=en' },
    { name: 'Pinkbike', url: 'https://www.pinkbike.com/rss' }
];

// --- 2. Expanded color palette for more variety ---
const feedColors = [
  '#00aaff', '#ff4e50', '#00d2d3', '#ff9f43', '#5f27cd', '#22a6b3',
  '#e056fd', '#686de0', '#30336b', '#95afc0', '#eb4d4b', '#badc58',
  '#f0932b', '#be2edd', '#130f40'
];


$effect.pre(async () => {
  isLoading = true;
  try {
    const allFeeds = await Promise.all(
      feedSources.map(async (feed, index) => {
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.status === 'ok' && Array.isArray(data.items)) {
          // The logic remains the same: tag each item with its origin info.
          return data.items.map(item => ({
            ...item,
            feedName: feed.name,
            feedColor: feedColors[index % feedColors.length] // Cycle through colors
          }));
        }
        return [];
      })
    );

    const flattenedItems = allFeeds.flat();
    flattenedItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    
    items = flattenedItems;

  } catch (error) {
    console.error('Failed to fetch or parse RSS feeds:', error);
    items = [];
  } finally {
    isLoading = false;
  }
});
</script>

<!--`items` are WORKING: <pre>{JSON.stringify(items, null, 2)}</pre>-->

<main>
  <heading>
    <h1>BikeFever.tech</h1>
    <!-- <h2>RSS Feed Aggregator</h2> -->
    <h2>Sans embedded intelligence (<code>#webAI</code>)</h2>
  </heading>
  
<section>
{#if isLoading}
  <p>Loading feeds, please wait...</p>
{:else}
  <ul>
    {#each items as item, index}
      <li>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style="color: {item.feedColor};"
        >
          {@html item.title}
        </a>
        <p>{@html item.description}</p>
        <small>
          From <span class="feed-source" style="color: {item.feedColor};">{item.feedName}</span>
          on {new Date(item.pubDate).toLocaleString()}
        </small>
      </li>
    {/each}
  </ul>
  {#if items.length === 0}
    <p>Could not load any feed items. Please check the browser console for errors.</p>
  {/if}
{/if}
</section>
</main>
  
<style>

main { width: 100% }

section {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  margin: 0 auto;
}

heading {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  margin: 0 auto;
}

@media screen and (min-width: 30em) {
  section {
    width: 88%;
  }
  heading {
    width: 88%;
  }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
  section {
    width: 66%;
  }
  heading {
    width: 66%;
  }
}

@media screen and (min-width: 60em) {
  section {
    width: 33%;
  }
  heading {
    width: 33%;
  }
}

:global(body) {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f8f8f8;
}


input[type='search'] {
  display: block;
  width: 100%;
  padding: 0.75em;
  border-radius: 8px;
  border: 1px solid #555;
  box-sizing: border-box;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  border-radius: 8px;
  margin-bottom: 1.5em;
  background-color: white;
  overflow: hidden;
}
a {
  font-weight: bold;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
p {
  margin: 0.5em 0;
}
small {
  color: #888;
  display: block;
  margin-top: 1em;
}

/***** EXTRA *****/

h1 {
  color: #111;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  border: 1px solid #eee;
  padding: 1.5em;
  margin-bottom: 1.5em;
  border-radius: 8px;
}
a {
  font-weight: bold;
  text-decoration: none;
  font-size: 1.25rem;
}
a:hover {
  text-decoration: underline;
}
p {
  margin: 0.5em 0 1em 0;
  line-height: 1.6;
  color: #555;
}
small {
  color: #999;
}
.feed-source {
  font-weight: bold;
  font-style: italic;
}
</style>
  