# ノーマウント参加者管理アプリ(フロント)

## 本番 URL

[https://nomount-participant-front.vercel.app/](https://nomount-participant-front.vercel.app/)

## セットアップ方法

```
git clone https://github.com/reachscript-jak/nomount-participant-front.git
cd nomount-participant-front
yarn install
yarn dev
```

・上記実行後、開発環境にアクセス
http://localhost:3000

## 自動フォーマット設定

1. ESLint のプラグイン追加
1. Prettier のプラグイン追加
1. stylelint のプラグイン追加
1. setting.json の `"setting"` に ↓ を設定(ワークスペース作成してワークスペース毎の setting.json を変更すること推奨)

```
{
  // *各自のfolders等setting以外の記述があれば

  "settings": {
    // linter
    "eslint.packageManager": "yarn", // ESLintライブラリ解決時に使うパッケージマネージャ
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    },
    // formatter
    "editor.defaultFormatter": "esbenp.prettier-vscode", // デフォルトフォーマッターをPrettier
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.formatOnType": true,
    // Prettier対象外言語
    "prettier.disableLanguages": ["markdown"]
  }
}
```

## 開発ルール各種

### Git 開発フロー

- [Git Feature Flow](https://developers.gnavi.co.jp/entry/GitFeatureFlow/koyama)ベースで進める(テスト環境は今はなし)
  - 基本的に main から feature ブランチを切って作業し、プルリクをあげる
- feature ブランチ命名規則
  - 「feature/修正内容概要」の形で命名
    - ex) feature/create-detail-page
- 作業担当者は自分でプルリクを作成する
  - 特別局所的でない場合 Reviewer には基本全員を指定(見れる人がレビュー)
  - Asignees には自分を指定
- 作業担当者は Approve 後、ブランチのマージが可能になるので各自でマージをする
  - feature ブランチのマージは Squash and Merge で行う
