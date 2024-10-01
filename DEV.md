# Development Memo

```sh
npx create-remix@latest
cd remix-app-base
bun run dev

bun add @nextui-org/react framer-motion
bun add remixicon
```

- [Remix](https://remix.run/)
- [Ant Design](https://ant.design/)


- [nextUI](https://nextui.org/)
- [RemixIcon](https://remixicon.com/)

## Phase2

```sh
bun add @prisma/client
npx prisma init --datasource-provider sqlite
```

```sh
## スキーマ更新
npx prisma db pull
## clinet更新
npx prisma generate
```
