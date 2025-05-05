/**
 * Utility functions for validating URLs and article existence
 */

/**
 * Check if a URL is valid and the resource exists
 * @param url The URL to validate
 * @returns Promise that resolves to a validation result object
 */
export const validateUrl = async (url: string): Promise<{
  isValid: boolean;
  validatedUrl: string;
  searchFallback?: string;
}> => {
  // First check if the URL is properly formatted
  try {
    new URL(url);
  } catch (e) {
    return {
      isValid: false,
      validatedUrl: '',
      searchFallback: `Search: "${url}"`
    };
  }

  try {
    // Use fetch with HEAD method to check if the URL exists
    // This is wrapped in a timeout to prevent long-hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      mode: 'no-cors' // This is needed for cross-origin requests
    });
    
    clearTimeout(timeoutId);
    
    // If we get here without an error, the URL is likely valid
    return {
      isValid: true,
      validatedUrl: url
    };
  } catch (error) {
    // If fetch fails, create a search fallback
    const searchTerms = extractSearchTerms(url);
    return {
      isValid: false,
      validatedUrl: '',
      searchFallback: `Search: "${searchTerms}"`
    };
  }
};

/**
 * Extract search terms from a URL for fallback search
 * @param url The URL to extract search terms from
 * @returns A search query string
 */
const extractSearchTerms = (url: string): string => {
  try {
    const urlObj = new URL(url);
    // Extract domain and path parts
    const domain = urlObj.hostname.replace('www.', '').split('.')[0];
    const pathParts = urlObj.pathname
      .split('/')
      .filter(part => part && !part.match(/^\d+$/)) // Filter out empty parts and dates
      .map(part => part.replace(/[-_]/g, ' ')); // Replace dashes and underscores with spaces
    
    return `${domain} ${pathParts.join(' ')}`;
  } catch (e) {
    // If URL parsing fails, return the original URL
    return url;
  }
};

/**
 * Create a Google search URL from search terms
 * @param searchTerms The search terms to use
 * @returns A Google search URL
 */
export const createSearchUrl = (searchTerms: string): string => {
  return `https://www.google.com/search?q=${encodeURIComponent(searchTerms)}`;
};
