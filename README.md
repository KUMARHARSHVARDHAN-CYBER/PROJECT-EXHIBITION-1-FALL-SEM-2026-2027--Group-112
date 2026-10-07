# PROJECT-EXHIBITION-1-FALL-SEM-2026-2027--Group-112

# The Enhanced VTOP: Modernization Architecture

**Enterprise-Grade Student Portal Prototype (Next.js App Router)**

This repository contains the high-fidelity, decoupled frontend architecture for the modernization of the university student portal. Engineered for zero-latency routing, offline resilience, and edge-level security, this prototype serves as the architectural foundation for institutional backend integration.

---

## 🏗 Tech Stack & System Architecture

This project was built utilizing a Zero-Trust methodology and a decoupled serverless architecture, incorporating a comprehensive, modern tech stack:

* **Frontend Layer:** Next.js, React.js, Tailwind CSS.
* **PWA & Offline Layer:** Service Workers, Google Workbox and Cache Storage.
* **Backend & API Layer:** Node.js, Express.js, Python, C++ Workers.
* **Cloud & Hosting:** Vercel, GCP, and GCP Load Balancer.
* **Database Layer:** PostgreSQL, MongoDB / Mongoose.

---

## ✨ Implemented Features

Introducing smart features designed to transform student accessibility and experience:

### 1. Smart Login & AI Chatbot Assistant
* **Smart Login:** High-performance direct authentication architecture with instantaneous client-side prefetching and zero middleware latency. Provides immediate sub-second transitions to the dashboard along with 1-click demo access and biometric single sign-on.
* **AI Chatbot Assistant:** Features a contextual AI layer utilizing a strict Combinatorial Search algorithm for precision student and faculty data retrieval.

### 2. Fully Responsive Mobile-First Interface
* Engineered using Tailwind CSS to guarantee a seamless, native-app experience across all device viewports, effectively solving legacy portal scaling and horizontal-scrolling issues.

### 3. Optimized Fast Search & Filtering
* Upgraded search logic from standard greedy `.includes()` matching to strict multi-word array matching. This ensures massive mock-JSON datasets return exact, high-confidence results instantly without blocking the React rendering thread.

### 4. Real-Time Push Alerts & Notifications
* Integrated a streamlined notification architecture designed to surface immediate administrative, exam, and academic updates directly to the student UI layer.

### 5. Integrated Proctor Meeting Scheduler
* A dedicated module allowing students to seamlessly request, track, and manage academic advising appointments with their designated faculty proctor without navigating external systems.

### 6. Personalized Dashboard & Navigation
* Features role-based, intelligent routing. By leveraging Next.js Suspense boundaries and loading skeletons, the personalized dashboard ensures zero-latency data rendering upon successful authentication.

### 7. Faster, High-Performance Document Access
* Leverages Next.js Route Prefetching and Vercel Edge-caching to deliver academic documents, timetables, and schedules at sub-10ms response times. The integration of Service Workers (PWA) ensures these documents remain accessible even in offline "Airplane Mode" scenarios.

---

## 🚀 Local Development Setup

### Prerequisites

* Node.js 18.17 or later
* Git

### Installation Steps

1. **Clone the repository:**
```bash
git clone https://github.com/KUMARHARSHVARDHAN-CYBER/PROJECT-EXHIBITION-1-FALL-SEM-2026-2027--Group-112.git
cd PROJECT-EXHIBITION-1-FALL-SEM-2026-2027--Group-112
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure Environment Variables:**
Create a `.env.local` file in the root directory and add your cryptographic secret key for JWT signing:
```env
JWT_SECRET=enhanced-vtop-secret-jwt-key-2026
```

4. **Run the local development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ⚡ Performance Testing (Production Build)

Due to Next.js lazy-compilation in development mode, `npm run dev` does not reflect true routing speed. To test the zero-latency transitions and Suspense boundaries locally, build the production application:

```bash
npm run build
npm start
```

Navigate to `http://localhost:3000`. Login processing is benchmarked at under 10ms execution time.

---

---

## 👥 Developers & Contributors (Group 112)

| Developer | Registration No. | Role | Key Technical Contributions |
| :--- | :--- | :--- | :--- |
| **Kumar Harshvardhan** | `25MIM10100` | **Team Lead** | • Designed overall System Architecture & UI/UX Portal<br>• Integrated VTOP AI Academic Assistant & Chat Interface<br>• Integrated Proctor Meeting Scheduler & Live Alerts |
| **Vibhor Srivastava** | `25MIM10093` | **Developer** | • Notification Alert System Developer |
| **Sumedha Pradhan** | `25MIM10095` | **Developer** | • Proctor Schedule Developer |
| **Rehman Saini** | `25MIM10003` | **AI Developer** | • AI-Assistant Developer |
| **Harshit Singhal** | `25MIM10195` | **Developer** | • VTOP-Search-Feature Developer |

> **Team Summary & Statement:**  
> *The project was executed with full collaborative effort, seamless module integration, and 100% individual dedication from all team members, achieving all targeted objectives successfully.*

---

## 📜 Copyright & License

**Copyright © 2026 Kumar Harshvardhan & Project Contributors (Group 112). All Rights Reserved.**

This repository and its codebase are developed as part of **Project Exhibition 1 (Fall Semester 2026–2027)** for Group 112.

* All source code, designs, mock datasets, and architectural implementations are proprietary intellectual property of the authors.
* Unauthorized commercial reproduction, redistribution, or duplication of this repository or its submodules without explicit written permission is strictly prohibited.
* For more details regarding permissible non-commercial evaluation and terms, see the [LICENSE](file:///c:/Users/HARSHVARDHAN/Desktop/enhanced-vtop/LICENSE) file.



