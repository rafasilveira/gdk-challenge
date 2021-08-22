# GDK Challenge

This is a code challenge to create and read payments. It features a React frontend with a small API and a MongoDB instance. 

## Video evidence
https://www.loom.com/share/7af6eb00a62943ea956a38a5032d3b3b

## [Live demo](https://gdk-challenge-pg5acdx4i-rafasilveira.vercel.app/)

## Tech Stack
- React, Styled Components, SWR
- NextJS 
- MongoDB running on Atlas
- Deployed with Vercel

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running locally
Clone the repo
```bash
gh repo clone rafasilveira/gdk-challenge
```

Then, create a `.env.local` file at the project root with the following shape:
```
MONGODB_URI=<your mongo uri>
MONGODB_DB=gdk-test=<your mongo db name>
```

Then, install and run
```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
