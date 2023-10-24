const NYTIMES_API_KEY = "rYSX8r8rAHuRJia37MymdsCAuuzGW4GE";
const NYTIMES_TOP_STORIES_BASE_URL =
  "https://api.nytimes.com/svc/topstories/v2";

export const NYTIMES_API_END_POINTS = [
  `${NYTIMES_TOP_STORIES_BASE_URL}/arts.json?api-key=${NYTIMES_API_KEY}`,
  `${NYTIMES_TOP_STORIES_BASE_URL}/home.json?api-key=${NYTIMES_API_KEY}`,
  `${NYTIMES_TOP_STORIES_BASE_URL}/science.json?api-key=${NYTIMES_API_KEY}`,
  `${NYTIMES_TOP_STORIES_BASE_URL}/us.json?api-key=${NYTIMES_API_KEY}`,
  `${NYTIMES_TOP_STORIES_BASE_URL}/world.json?api-key=${NYTIMES_API_KEY}`,
];
