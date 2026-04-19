# 🚀 Next.js Setup Instructions (After Cloning)

This is a simple guide on what to do after cloning the Next.js project for the Acadex frontend.

---

# 📥 1. Install dependencies

After cloning the repository, go inside the frontend folder:

```bash
cd frontend
npm install
```

This installs all required packages from `package.json`.

---

# ⚙️ 2. Environment setup

Create a `.env.local` file inside `frontend/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

---

# 🚀 3. Run the project

Start the development server:

```bash
npm run dev
```

Then open:

```
http://localhost:3000
```

---

# 🔐 4. Install JWT helper (if needed)

If your project uses authentication:

```bash
npm install jwt-decode
```

---

# 📁 5. Basic structure (expected)

```plaintext
frontend/
├── app/ (or pages/)
├── components/
├── lib/
├── public/
├── .env.local
├── package.json
```

---

# 🧠 6. Common commands

Install packages:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production:

```bash
npm start
```

---

# ⚠️ 7. Important notes

- Make sure backend (Spring Boot) is running on port 8080
- Frontend runs on port 3000
- Do NOT commit `.env.local`
- Always run `npm install` after cloning

---

# ✅ Summary

After cloning:

1. `cd frontend`
2. `npm install`
3. create `.env.local`
4. `npm run dev`
