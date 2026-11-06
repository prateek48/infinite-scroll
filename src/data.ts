const TOTAL = 100;

export interface ItemResponse {
  id: number;
  name: string;
  description: string;
}

export interface ApiResponse {
  items: ItemResponse[];
  hasMore: boolean;
  nextCursor: number|null;
}
const ITEMS = Array.from({ length: TOTAL }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  description: `This is the description for item ${i + 1}.`,
}));

/**
 * Mock paginated API for infinite scroll.
 * @param {number|null} cursor - Last id seen (null/undefined for first page).
 * @param {number} limit - Page size.
 * @returns {Promise<{ items: Array<{id:number,name:string,description:string}>, nextCursor: number|null, hasMore: boolean }>}
 */
export function fetchItems(cursor: number|null = null, limit = 10, delay = 500): Promise<ApiResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = cursor ?? 0; // cursor = last id returned
      const items = ITEMS.slice(start, start + limit);
      const last = items[items.length - 1];
      const hasMore = !!last && last.id < TOTAL;

      resolve({
        items,
        nextCursor: hasMore ? last.id : null,
        hasMore,
      });
    }, delay);
  });
}
