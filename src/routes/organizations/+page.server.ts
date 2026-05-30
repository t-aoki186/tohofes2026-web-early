import { fetchOrganizations } from "$lib/server/organizations";

export async function load({ url }) {
  const categoryParam = url.searchParams.get("category");
  const search = url.searchParams.get("search");

  //除外カテゴリ
  const excludeCategories = ["stage", "student-lessons"];

  //全データを取得し、指定されたカテゴリを除外
  const allData = await fetchOrganizations();
  const filteredData = allData.filter((item: any) => 
    !excludeCategories.includes(item.category)
  );

  let results = filteredData;

  //category/typeでの検索
  if (categoryParam) {
    results = allData.filter((item: any) => {
      //パラメータが jsonの "category" または "type" のいずれかに一致するか確認
      return item.category === categoryParam || item.type === categoryParam;
    });
  }

  //キーワード検索
  if (search) {
    const lower = search.toLowerCase();
    results = results.filter((item: any) =>
      item.title?.toLowerCase().includes(lower) ||
      item.body?.toLowerCase().includes(lower) ||
      item.location?.toLowerCase().includes(lower)
    );
  }

  return { results, category: categoryParam, search };
}