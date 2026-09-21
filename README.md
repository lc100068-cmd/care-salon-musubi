# Care salon 結 -musubi- LP

佐賀市鍋島のサロン「Care salon 結 -musubi-」のスマートフォン最適化ランディングページです。
LP画像4枚（LP_01〜LP_04）を隙間なく縦に並べ、画像内のLINEボタンに公式LINEへのリンク領域を重ねています。

## 公開URL

https://lc100068-cmd.github.io/care-salon-musubi/

## 構成

- `index.html` — LP本体（4パネル構成・alt・OGP・LINEリンク）
- `styles.css` — レスポンシブ表示（モバイルファースト、最大幅1122px）とLINEリンク領域
- `script.js` — 追従LINEボタンの表示制御とCTAクリック計測
- `assets/LP_01.webp`〜`LP_04.webp` — LP画像（1122×1402）
- `assets/LP_0X-750.webp` — スマホ向け軽量版（srcsetで自動切替）
- `.github/workflows/pages.yml` — GitHub Pagesへの自動デプロイ
- `.nojekyll` — Jekyll処理の無効化

## 実装のポイント

- 画像間の隙間は0px（`display:block` + `line-height:0` + `vertical-align:top`）
- 横幅100%、`max-width: 1122px`（画像の実寸）で中央寄せ
- `width`/`height`属性指定でレイアウトシフト（CLS）を抑制
- 1枚目は`fetchpriority="high"`＋preload、2枚目以降は`loading="lazy"`
- 画像内のLINEボタン位置は％指定のため、どの画面幅でもボタンとリンク領域が一致
- 1枚目を過ぎてから最終CTAが見えるまでの間、画面下部に追従LINEボタンを表示
- 各画像に内容が分かるaltテキストを設定

## LINE

公式LINE: https://line.me/R/ti/p/@588ismqe

## ローカル確認

```bash
python3 -m http.server 8000
# http://127.0.0.1:8000/
```

## デプロイ

`main` ブランチへの更新時にGitHub Actions経由でGitHub Pagesへ自動デプロイされます。
