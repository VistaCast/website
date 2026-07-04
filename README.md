# VistaCast Marketing Website

Next.js 静态官网，部署至 Cloudflare Pages 项目 `vistacast-website`，生产域名 [vistacast.dev](https://vistacast.dev)。

## 开发

```bash
pnpm install
pnpm dev          # http://localhost:13107
```

## 手动部署（本地）

```bash
# PowerShell
$env:NODE_ENV="production"
pnpm build
npx wrangler pages deploy out --project-name=vistacast-website --branch=master --commit-dirty=true
```

生产分支必须是 **`master`**（与本仓默认分支一致）。

## GitHub Actions 自动部署

推送到 **`master`**（或在 Actions 页手动 **Run workflow**）会自动构建并更新 Cloudflare Pages 生产环境。

在仓库 **Settings → Secrets and variables → Actions** 配置：

| Secret | 说明 |
| :--- | :--- |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token（权限：Account → Cloudflare Pages → Edit） |
| `CLOUDFLARE_ACCOUNT_ID` | `af0e854078b49637d63673c75566906b` |

域名、DNS、`*.pages.dev` 重定向等在 Cloudflare Dashboard 维护，CI 只负责静态资源部署。

## v0

本仓库关联 [v0 项目](https://v0.app/chat/projects/prj_ge4XqUXgXpRxNMgEXe1ammQKu8Tj)，可在 v0 中继续迭代 UI。
