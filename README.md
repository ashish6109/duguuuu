## NovaTrade (distinct clone of tradenova.club)

This is a full-stack app with a React + Vite frontend and an Express + TypeScript backend. It provides distinct branding and layout while implementing similar functionality: auth, pricing plans, and a signals dashboard.

### Quick start

1) Backend

```bash
cd backend
cp .env.example .env # then edit
npm install
npm run dev
```

2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

### Environment

Create `backend/.env` with:

```
PORT=4000
JWT_SECRET=please_change_me
CORS_ORIGIN=http://localhost:5173
```

### Notes

- This uses in-memory stores for simplicity. Replace with a database for production.
- The UI and copy are intentionally different from the reference site to avoid duplication.

# butkino1
i am very happy 
