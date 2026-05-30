<script lang="ts"> 
	export let data;
	const item = data.item;

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	import { mdToHtml } from '$lib/utils/markdown';

	// Swiper関連のインポートを追加
	import Swiper from 'swiper';
	import { Navigation, Pagination, Autoplay } from 'swiper/modules';

	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	/*s:カルーセル*/
	let swiperContainer: HTMLDivElement | null = null;
	let swiperInstance: any = null;

	//カルーセルの内容
	const slides = [
		{
			id: 1,
			title: '外部公開用鯖',
			image: item.thumbnail ||'https://pic.atserver186.jp/img/tohofes/thumbnail/webp/no-image.webp'
		},
		{
			id: 2,
			title: '個人用鯖',
			image: 'https://pic.atserver186.jp/img/atserver/root/carousel/server_2.webp'
		}
	];
	
	onMount(() => {
		if (swiperContainer) {
			swiperInstance = new Swiper(swiperContainer, {
				modules: [Navigation, Pagination, Autoplay],
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				pagination: { el: '.swiper-pagination', clickable: true },
				autoplay: { delay: 3000, disableOnInteraction: false },
				spaceBetween: 20,
				slidesPerView: 1,  // ← 修正: slidersPreview → slidesPerView
				loop: true
			});
		}
		
		// クリーンアップ関数
		return () => {
			if (swiperInstance) {
				swiperInstance.destroy(true, true);
			}
		};
	});
	/*e:カルーセル*/
</script>

<!-- 以下、HTML部分はそのままでも動作しますが、念のため全体を記載 -->
<svelte:head>
	<title>{item.title} | {data.site_title}</title>
	<meta property="og:title" content="{item.title} | {data.site_title}" />
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{item.title}</p>
	</div>
	<section class="container mx-auto mt-15 mb-25">
		<div class="orgp-top-content">
			<div class="orgp-top-grid-item">
				<div class="w-full">
					<!--s:カルーセル-->
					<div class="carousel-wrapper">
						<div class="swiper ats-swiper" bind:this={swiperContainer}>
							<div class="swiper-wrapper">
								{#each slides as s}
									<div class="swiper-slide">
										<div class="slide-card overflow-hidden rounded-lg bg-white shadow-md">
											{#if s.image}
												<img
													src={s.image}
													alt={s.title}
													class="slide-img h-full w-full object-cover"
												/>
											{/if}
										</div>
									</div>
								{/each}
							</div>
							<div class="swiper-pagination"></div>
							<div class="swiper-button-prev"></div>
							<div class="swiper-button-next"></div>
						</div>
					</div>
					<!--e:カルーセル-->
				</div>
			</div>
			<div class="orgp-top-grid-item">
				<p class="text-lg text-(--main-text-color)">
					<i class="fa-solid fa-tag"></i>{item.category}
				</p>
				<p class="text-lg text-(--main-text-color)">
					<i class="fa-solid fa-location-dot mr-1 text-xs"></i>{item.location}
				</p>
			</div>
		</div>
		<div class="prose mt-4 min-w-full">{@html mdToHtml(item.body)}</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li><a href="/organizations">参加団体</a></li>
	<li>{item.title}</li>
</ol>

<style>
@view-transition {
	navigation: auto;
}

:global(.ats-swiper) {
	--swiper-navication-color: var(--main-text-color);
	--swiper-pagination-color: var(--main-text-color);
}

:global(.ats-swiper .swiper-button-next),
:global(.ats-swiper .swiper-button-prev) {
	color: var(--sub-text-color);
}

/* Swiper navigation & pagination responsive size */
:global(.ats-swiper .swiper-button-next),
:global(.ats-swiper .swiper-button-prev) {
	font-size: 2.2rem;
	width: 44px;
	height: 44px;
}
:global(.ats-swiper .swiper-pagination-bullet) {
	width: 12px;
	height: 12px;
}

@media (max-width: 1024px) {
	:global(.ats-swiper .swiper-button-next),
	:global(.ats-swiper .swiper-button-prev) {
		font-size: 1.5rem;
		width: 32px;
		height: 32px;
	}
	:global(.ats-swiper .swiper-pagination-bullet) {
		width: 9px;
		height: 9px;
	}
}

@media (max-width: 600px) {
	:global(.ats-swiper .swiper-button-next),
	:global(.ats-swiper .swiper-button-prev) {
		font-size: 1.1rem;
		width: 24px;
		height: 24px;
	}
	:global(.ats-swiper .swiper-pagination-bullet) {
		width: 7px;
		height: 7px;
	}
}

.carousel-wrapper {
	width: 60vw;
	margin: 0 auto;
}

.slide-card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
}

@media (max-width: 1024px) {
	.carousel-wrapper {
		width: 90vw;
	}
}

.orgp-top-content {
	display: grid;
	grid-template-columns: 4fr 3fr; /* 左:右 = 4:3 */
	gap: 2rem; /* アイテム間に余白を追加する場合 */
}
</style>