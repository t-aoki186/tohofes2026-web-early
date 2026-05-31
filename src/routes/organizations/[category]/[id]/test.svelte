<script lang="ts">
	export let data;
	const item = data.item;

	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Navigation, Pagination, Autoplay } from 'swiper/modules';

	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	/*s:カルーセル*/
	let swiperContainer: HTMLDivElement | null = null;
	let swiperInstance: any = null;

	// top_imgを配列に変換する関数
	function getImageArray(): string[] {
		if (!item.top_img) {
			// top_imgがない場合はサムネイルまたはデフォルト画像
			return [
				item.thumbnail || 'https://pic.atserver186.jp/img/tohofes/thumbnail/webp/no-image.webp'
			];
		}

		// カンマ区切りの文字列を配列に変換
		const images = item.top_img.split(',').map((img: string) => img.trim());

		// 空の要素を除外
		return images.filter((img: string) => img.length > 0);
	}

	// 動的にスライドを生成
	const slides = getImageArray().map((imageUrl: string, index: number) => ({
		id: index + 1,
		title: index === 0 ? item.title : `${item.title} - ${index + 1}`, // 1枚目はタイトル、それ以降はタイトル+番号
		image: imageUrl
	}));

	// デバッグ用（必要に応じて）
	console.log('Generated slides:', slides);

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
				slidesPerView: 1,
				loop: slides.length > 1 // 画像が1枚の場合はループしない
			});
		}

		return () => {
			if (swiperInstance) {
				swiperInstance.destroy(true, true);
			}
		};
	});
	/*e:カルーセル*/
</script>

<!-- HTML部分 -->
<div class="carousel-wrapper">
	<div class="swiper ats-swiper" bind:this={swiperContainer}>
		<div class="swiper-wrapper">
			{#each slides as s}
				<div class="swiper-slide">
					<div class="slide-container">
						<!-- 背景のぼかし画像 -->
						<div class="slide-blur-bg" style="background-image: url({s.image});"></div>

						<!-- メイン画像（アスペクト比を維持） -->
						<div class="slide-img-wrapper">
							<img src={s.image} alt={s.title} class="slide-img" loading="lazy" />
						</div>

						<!-- キャプション（オプション） -->
						<div class="slide-caption">
							<h2 class="caption-title">{s.title}</h2>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="swiper-pagination"></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</div>

<style>
	/* カルーセル全体のコンテナ */
	.carousel-wrapper {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}

	/* Swiperコンテナ */
	:global(.ats-swiper) {
		--swiper-navigation-color: white;
		--swiper-pagination-color: white;
		overflow: visible !important;
	}

	/* スライド1つ1つのコンテナ */
	.slide-container {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%; /* 16:9 = 9/16 = 0.5625 */
		background: #1a1a1a;
		overflow: hidden;
		border-radius: 12px;
	}

	/* 背景のぼかし画像 */
	.slide-blur-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: blur(20px) brightness(0.7);
		transform: scale(1.1); /* ぼかしのエッジを隠す */
		z-index: 1;
	}

	/* メイン画像のラッパー */
	.slide-img-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	/* メイン画像 */
	.slide-img {
		max-width: 100%;
		max-height: 100%;
		width: auto;
		height: auto;
		object-fit: contain; /* 画像のアスペクト比を維持 */
		border-radius: 8px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
	}

	/* キャプション（画像の下に表示） */
	.slide-caption {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 1rem;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
		color: white;
		z-index: 3;
		text-align: center;
	}

	.caption-title {
		margin: 0;
		font-size: 1.25rem;
		font-weight: 600;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
	}

	/* レスポンシブ対応 */
	@media (max-width: 768px) {
		.caption-title {
			font-size: 1rem;
		}

		.slide-caption {
			padding: 0.75rem;
		}
	}

	/* ナビゲーションボタンのスタイル（任意） */
	:global(.ats-swiper .swiper-button-next),
	:global(.ats-swiper .swiper-button-prev) {
		color: white;
		background: rgba(0, 0, 0, 0.3);
		width: 44px;
		height: 44px;
		border-radius: 50%;
		transition: all 0.3s ease;
	}

	:global(.ats-swiper .swiper-button-next:hover),
	:global(.ats-swiper .swiper-button-prev:hover) {
		background: rgba(0, 0, 0, 0.6);
	}

	:global(.ats-swiper .swiper-button-next:after),
	:global(.ats-swiper .swiper-button-prev:after) {
		font-size: 20px;
	}

	/* ページネーション */
	:global(.ats-swiper .swiper-pagination-bullet) {
		background: white;
		opacity: 0.7;
	}

	:global(.ats-swiper .swiper-pagination-bullet-active) {
		background: white;
		opacity: 1;
	}
</style>
