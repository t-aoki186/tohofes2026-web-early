// fetch を使わず、直接インポートする
import newsData from '$lib/assets/json/news.json';

export async function fetchNews() {
  try {
    return newsData;
  } catch (e) {
    return [];
  }
}
