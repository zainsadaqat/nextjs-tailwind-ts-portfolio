# Portfolio build with (NextJS, TypeScript, and TailwindCSS)


## Getting Started

Go to terminal and run the following commands:

```
git clone git@github.com:zainsadaqat/nextjs-tailwind-ts-portfolio.git
```

```
cd nextjs-tailwind-ts-portfolio
```

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## **Author**

### _ZAIN SADAQAT_

- GitHub: [@zainsadaqat](https://github.com/zainsadaqat)<br/>

- Twitter: [@zain_sadaqat](https://twitter.com/zain_sadaqat)<br/>

- LinkedIn: [@zain-sadaqat](https://www.linkedin.com/in/zain-sadaqat/)<br/>

- AngelList: [@zain-sadaqat](https://angel.co/u/zain-sadaqat)<br/>

- Instagram: [@zain.web.dev](https://www.instagram.com/zain.web.dev)<br/>

Create NextJS App with TypeScript

```
npx create-next-app@latest --typescript project_name
```

Install TailwindCSS

```
npm install -D tailwindcss postcss autoprefixer
```

Now generate tailwindCSS config files

```
npx tailwindcss init -p
```

Add all template paths tailwind.config.js

```
content: [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
           ],
```

Add CSS directives to globals.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## You Install Nextjs with Tailwind Preconfig Setup

You install nextjs with tailwind pre config setup for the project. The nextjs team provided all examples. In setup, all configs are added by default in your project.
```
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```
# or
```
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
