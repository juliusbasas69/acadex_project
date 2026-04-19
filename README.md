# 📘 Acadex Frontend - Next.js Setup Instructions

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

---

# 🧩 8. Backend + Infrastructure Setup (Spring Boot + Docker)

This section explains how to run the backend and required infrastructure services (Redis, Prometheus, Grafana).

---

# 🐳 1. Start Infrastructure (Docker)

Go to the infrastructure folder:

```bash
cd infrastructure
```

Start services:

```bash
docker-compose up -d
```

This will run:

- Redis (Cache)
- Prometheus (Metrics)
- Grafana (Dashboard)

---

# 🌐 2. Access Services

After running Docker:

- Redis → `localhost:6379`
- Prometheus → `http://localhost:9090`
- Grafana → `http://localhost:3001`

Default Grafana login:

- Username: `admin`
- Password: `admin`

---

# ⚙️ 3. Run Spring Boot Backend

Go to backend folder:

```bash
cd backend
```

Run the application:

```bash
./mvnw spring-boot:run
```

or (if Maven is installed globally):

```bash
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

# 📊 4. Monitoring Setup

Spring Boot exposes metrics at:

```
http://localhost:8080/actuator/prometheus
```

Prometheus automatically scrapes this endpoint.

Grafana is used to visualize metrics from Prometheus.

---

# 🔐 5. Redis Usage

Redis is used for:

- caching user data
- improving performance

If Redis is down:

- backend automatically falls back to database

---

# 🚀 6. Full System Startup Order

Always start in this order:

1. Docker infrastructure

```bash
docker-compose up -d
```

2. Backend (Spring Boot)

```bash
mvn spring-boot:run
```

3. Frontend (Next.js)

```bash
npm run dev
```

---

# 🧠 Summary

- Docker runs Redis + Prometheus + Grafana
- Spring Boot runs backend APIs
- Next.js runs frontend UI
- All services communicate via localhost
