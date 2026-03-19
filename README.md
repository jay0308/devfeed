This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

#############################################################

What You'll Build
A platform where developers can:
→ Browse tech news/posts in a feed
→ Click a post to see it in a MODAL (intercepting routes)
→ Dashboard with independent widgets (parallel routes)
→ Like/unlike posts instantly (useOptimistic)
→ Submit posts via forms (Server Actions)
→ Protected routes for dashboard (Middleware)

Folder Structure
app/
├── middleware.js                    → Auth protection
│
├── (auth)/
│   ├── login/page.js               → Login page
│   └── register/page.js            → Register page
│
├── (root)/
│   ├── layout.js                   → Root layout
│   ├── page.js                     → Home feed
│   └── (.)post/[id]/page.js        → Intercepted modal ✅
│
├── post/
│   └── [id]/page.js                → Full post page ✅
│
├── dashboard/
│   ├── layout.js                   → Dashboard layout
│   ├── page.js                     → Main content
│   ├── @stats/page.js              → Parallel slot 1 ✅
│   └── @trending/page.js           → Parallel slot 2 ✅
│
└── actions/
    ├── postActions.js              → Server Actions ✅
    └── likeActions.js              → Server Actions ✅

Build It In This Order
Step 1 — Basic Setup & Layouts
✅ Root layout with navbar
✅ Home feed showing static posts
✅ Individual post full page
→ Concepts: layouts, server components, basic routing
Step 2 — Data Fetching & Caching
✅ Fetch posts from a free API (dev.to API is perfect!)
✅ Tag your fetches with revalidateTag
✅ Add loading.js for feed and post pages
→ Concepts: fetch caching, tags, Suspense/streaming
Step 3 — Middleware
✅ Protect /dashboard route
✅ Redirect to /login if no token
✅ Use matcher config (no if conditions!)
→ Concepts: middleware, edge runtime, matchers
Step 4 — Server Actions
✅ Create post form with Server Action
✅ Add input sanitization
✅ Add auth check inside action
✅ Call revalidateTag after post creation
→ Concepts: server actions, security, cache invalidation
Step 5 — useOptimistic
✅ Like button on each post
✅ Instant UI update with useOptimistic
✅ Server Action to persist like to DB
→ Concepts: useOptimistic, optimistic UI
Step 6 — Intercepting Routes
✅ Click post in feed → opens as modal
✅ Refresh/share URL → opens as full page
✅ Back button closes modal naturally
→ Concepts: intercepting routes, (.) syntax
Step 7 — Parallel Routes
✅ Dashboard with @stats slot
✅ Dashboard with @trending slot
✅ Each slot has own loading.js
→ Concepts: parallel routes, named slots, independent loading

Free APIs You Can Use
📰 Dev.to API → https://dev.to/api/articles
   → Free, no auth needed for reading
   → Perfect for posts/feed data

🔐 For Auth → use NextAuth.js
   → Easy setup with Next.js
   → Handles sessions/tokens for middleware

Concepts Covered Checklist
☐ Server & Client Components
☐ Nested Layouts
☐ loading.js + Suspense streaming
☐ Middleware + matcher
☐ fetch caching + revalidateTag
☐ Server Actions + security
☐ useOptimistic
☐ Intercepting Routes
☐ Parallel Routes