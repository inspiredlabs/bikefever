// ./simpleContext.svelte.js
import { getContext, setContext } from 'svelte';

const CONTEXT_KEY = Symbol('context');

export function createContext() {
	
	/* With non-DOMs, there is no `$state`.
	 * The difference is CRITICAL:
	 * The "Dumb" Object: `Mixed Reality Games` state is a true POJO.
	 * It's just a container for data. It has no special powers.
	 * There's no magical connection to Svelte's compiler.
	 *
	 * The Trigger: When you execute `state.cameraYaw = value`
	 * nothing special happens, simply a value in memory is changed.
	 * That's it. Svelte's template has no idea this occurred.
	 * 
	 * There is no spoon.	 
	 * 
	 * The Consumer: The consumer is not Svelte's template.
	 * The consumer is a manual step function: `requestAnimationFrame`.
	 * The Result: reactivity is entirely "manual", driven by `rAF`.
	 * The "Update" function is called by the browser, right before
	 * a repaint and a property in the POJO is silently updated.
	 * 
	 * And? `rAF` fires and imperatively applies state then calls `render(scene, camera)`.
	 *
	 * The reverse is not true however, if you put a $state into `rAF`,
	 * expect depth-exceeded errors and other shit the compiler is NOT expecting.	 
	 * Ideally, the maintainers could lint this before it gets to the compiler.
	 */

	// If your GOAL is to update the DOM, use reactive `$state`:
	const state = $state({
    items: [],
    searchInput: ''
  }); // <----- internal state objects

  // The public API that components will use.
  // This provides the clean boundary you require.
  const context = {
		/**
     * Returns the current search term.
     * @returns {string}
     */
    getSearchInput: () => state.searchInput,

		/**
     * Updates the search term.
     * @param {string} newValue
     */
    setSearchInput: (newValue) => {
      state.searchInput = newValue;
    },

		/**
     * Returns the reactive list of all items.
     * @returns {any[]}
     */
    getItems: () => state.items,

    /**
     * Replaces the entire list of items.
     * @param {any[]} newItems
     */
    setItems: (newItems) => {
      state.items = newItems;
    }
  };

  // --- THE FIX ---
  // Use the correctly named `context` variable.
  setContext(CONTEXT_KEY, context);
  return context;
}

/**
 * Hook for child components to consume the state service's API.
 */
export function useContext() {
  return getContext(CONTEXT_KEY);
}