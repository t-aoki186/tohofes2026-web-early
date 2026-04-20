<script>
	const { data } = $props();

	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';

	let pageTitle = 'サイトポリシー';
</script>

<svelte:head>
	<title>{pageTitle} | {data.site_title}</title>
	<meta property="og:title" content="{pageTitle} | {data.site_title}" />
</svelte:head>

<main class="mt-15 mr-1 ml-1 min-h-screen">
	<div class="container m-auto mt-25 border-b-2 border-b-(--main-text-color)">
		<p class="tf26-page-title" style="color: black; margin-bottom: 0;">{pageTitle}</p>
	</div>
	<section class="container mx-auto mt-25 mb-25">
		<div class="flex flex-col">
			<a href="/site/privacy" class="mb-4 font-bold underline"
				><i class="fa-solid fa-arrow-up-right-from-square mr-1 text-sm"
				></i>プライバシーポリシーはこちら</a
			>
			<p class="mb-2">
				このウェブサイト（以下「本サイト」）は、桐朋中学・高等学校 桐朋祭実行委員会（以下「当委員会」）が作成・管理・運営しています。本サイトをご利用いただく際は、以下の規定に同意したものとみなします。ご質問やご意見などがございましたら、ページ下部のお問い合わせフォームもしくはメールアドレスよりお気軽にお問い合わせください。なお、本サイトポリシー（以下「本ポリシー」といいます。）の内容を予告なしに変更する場合がありますので、あらかじめご了承ください。
			</p>
			<h3 class="mb-2 text-lg font-bold">第1条（免責事項）</h3>
			<p class="mb-2">
				<strong>情報の正確性:</strong>本サイトに掲載する情報の正確さは万全を期していますが、情報の利用によって生じた損害について、当委員会は一切の責任を負いません。
				<br />
				<strong>内容の変更:</strong>本サイトの内容は予告なく変更・中止される場合があります。
				<br />
				<strong>外部リンク:</strong>本サイトからリンクされた外部サイトで提供される情報やサービスについて、当委員会は一切の責任を負いかねます。
			</p>
			<h3 class="mb-2 text-lg font-bold">第2条（動作環境）</h3>
			<p class="mb-2">
				1.本サイトは、Microsoft Edge/Google Chrome/Safari/Mozilla
				Firefoxの最新版で動作することを確認しています。（拡張機能やFirefoxの派生形ブラウザでの動作保証はできかねます。）お使いのブラウザやOSによっては、見方が異なったり、正常に動作しなかったりすることがあります。
				<br />
				2.本サイトは、より快適にご利用いただくためにJavaScriptを使用しています。お使いのブラウザの設定においてJavaScriptが有効となってない場合、正しく表示、または操作できないことがあります。
			</p>
			<h3 class="mb-2 text-lg font-bold">第3条（アクセスデータについて）</h3>
			<p class="mb-2">Google Analyticsの利用を開始し次第、本ポリシーへ内容を追加します。</p>
			<h3 class="mb-2 text-lg font-bold">第4条（個人情報等の取得・管理について）</h3>
			<p class="mb-2">お問い合わせフォームを実装し次第、本ポリシーへ内容を追加します。</p>
			<h3 class="mb-2 text-lg font-bold">第5条（著作権について）</h3>
			<p class="mb-2">
				本サイトに記載されている文章・写真・イラスト・ロゴ・動画等の著作権は、原則として当委員会または正当な権利者に帰属します。
				<br />
				私的利用など法律で認められる範囲を超えて、無断で転載・複製・二次利用することを禁止します。
			</p>
			<h3 class="mb-2 text-lg font-bold">第6条（禁止事項）</h3>
			<p class="mb-2">
				ユーザーは、本サイトの利用にあたり、以下の行為をしてはなりません。
				<br />
				1.本サイトの内容等、本サイトに含まれる著作権、商標権ほか知的財産権を侵害する行為
				<br />
				2.当委員会、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
				<br />
				3.当委員会の運営を妨害するおそれのある行為
				<br />
				4.不正アクセスをし、またはこれを試みる行為
				<br />
				5.不正な目的を持って本サイトを利用する行為
				<br />
				6.本サイトに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
				<br />
				7.その他、当委員会が不適切と判断する行為
			</p>
			<h3 class="mb-2 text-lg font-bold">第7条（本サイトへのリンク）</h3>
			<div class="mb-2">
				本サイトへのリンクは、原則として自由です。ただし、以下のいずれかに該当、もしくは該当する恐れのあるウェブサイトでのリンクの設定は禁止します。
				<ul class="list-disc ml-6 mt-1">
					<li>当委員会、または第三者を誹謗中傷し、あるいは信用の失墜を目的とする内容を含んだサイト</li>
					<li>公序良俗および社会倫理に反する内容を含んだサイト</li>
					<li>違法、または違法な可能性を有するコンテンツを含むサイト</li>
					<li>フレーム内で本サイトが展開されるなど、当委員会のコンテンツであることが不明確となるサイト</li>
				</ul>
			</div>
			<h3 class="mb-2 text-lg font-bold">第8条（準拠法・裁判管轄）</h3>
			<p class="mb-2">
				1.本ポリシーの解釈にあたっては、日本法を準拠法とします。
				<br />
				2.本サイトに関して紛争が生じた場合には、学校所在地を管轄する裁判所を専属的合意管轄とします。
			</p>

		</div>
	</section>
</main>
<ol class="main-breadcrumb container mx-auto">
	<li><a href="/">ホーム</a></li>
	<li>{pageTitle}</li>
</ol>
