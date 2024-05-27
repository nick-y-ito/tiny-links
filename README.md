# Tiny Links

This is a demo application that allows users to shorten long URLs. My interest in this project was to complete a full-stack application using TypeScript as quickly as possible while following the clean architecture and principles. I completed it in approximately **8 hours** in total.

## Tech Stack

### Front-End ([`/client`](https://github.com/nick-y-ito/tiny-links/tree/main/client))

- TypeScript
- Next.js 14 (App Router)
- Chakra UI

### Back-End ([`/server`](https://github.com/nick-y-ito/tiny-links/tree/main/server))

- TypeScript
- Express.js
- Prisma

### Database

- MongoDB (Atlas)

## Features

- Shortening URLs
- Accessing a shortened URL redirects to the original URL
- Updating the original URL with the same shortened URL
- [ ] *User authentication is not implemented*
- [ ] *Works only on localhost*

## Getting Started

### Front-End

```bash
cp .env.example .env.local
npm install
cd client
npm run dev
```

### Back-End

```bash
cp .env.example .env
cd server
npx prisma migrate dev
npm run dev
```

Fill in the `.env` file with the following values:

```
DATABASE_URL: <MongoDB connection string>
DEFAULT_USER_ID: <ObjectId>
```

## Database

Create the default user record for the User collection in the database manually.

```
_id: <ObjectId>
email: "foo.bar@example.com"
createdAt: 2024-05-27T00:00:00.000+00:00
updatedAt: 2024-05-27T00:00:00.000+00:00
```

### How it works

