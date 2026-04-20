<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = 'テーマ';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
	<meta property="og:title" content="{pageTitle} | {data.site_title}" />
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-15 mb-25">
		<div class="mt-4 min-w-full">
			<h1 class="tf26-section-title">テーマについて</h1>
			<br />
			<p class="mb-4 leading-[1.8rem]">
				第 75 回桐朋祭実行委員会では、まずテーマで表現したい要素について「桐朋祭が盛り上がる様子」
				「細かいところまで気を配り完成していく様子」 「すべてのものや人が活かされる様子」
				を重視することにしました。
				その上で話し合いを重ね、「桐朋生一人一人が個性を出しつつも、それが結束することで美しい調和と流れを伴った力を生み出す」という意味を込めた結うというテーマに決定しました。
				結うはYouともかかっており、昨年度の舞(My)の桐朋祭からお客さん一人一人に重きを置いたあなたの桐朋祭を作り上げようという目標でもあります。ぜひあなたの桐朋祭を存分に楽しんでください！
			</p>
			<hr class="main-hr" />
			<h1 class="tf26-section-title mt-4">桐朋祭とは</h1>
			<br />
			<a href="/about" class="link-main">
				<div class="link-main-underline">
					<i class="fa-solid fa-arrow-right-long"></i>
					<span>桐朋祭についてはこちらをご覧ください</span>
				</div>
			</a>
		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>

<style>
</style>
