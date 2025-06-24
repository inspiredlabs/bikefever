// ./rssfeed.js
/**
 * Fetches and processes articles from a predefined list of RSS feeds.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of feed items.
 */
import sources from './sources.json';
/* TYPICALLY:
[
	{
		"name": "Scott Phillips Substack",
		"url": "https://inspiredlabs.substack.com/feed"
	},
	{
		"name": "",
		"url": ""
	}
]
*/

export async function getRssItems() {
  // --- 1. The expanded list of feed sources ---
  const feedSources = sources;

  // --- 2. Expanded color palette for more variety ---
  const feedColors = [
    '#00aaff', '#ff4e50', '#00d2d3', '#ff9f43', '#5f27cd', '#22a6b3',
    '#e056fd', '#686de0', '#30336b', '#95afc0', '#eb4d4b', '#badc58',
    '#f0932b', '#be2edd', '#130f40'
  ];

  try {
    const allFeeds = await Promise.all(
      feedSources.map(async (feed, index) => {
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.status === 'ok' && Array.isArray(data.items)) {
          // Tag each item with its origin feed name and a color
          return data.items.map(item => ({
            ...item,
            feedName: feed.name,
            feedColor: feedColors[index % feedColors.length]
          }));
        }
        return []; // Return an empty array if a feed fails
      })
    );

    // Flatten the array of arrays and sort all items by publication date
    const flattenedItems = allFeeds.flat();
    flattenedItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    
    return flattenedItems;

  } catch (error) {
    console.error('Failed to fetch or parse RSS feeds:', error);
    return []; // Return an empty array on a critical failure
  }
}