# Nexora LMS — Crack Campus Placements

> A free, structured learning system for tier-2/3 engineering students who want a system — not just more content.

**Live Demo:** https://nexora-lms-v2.vercel.app/

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)

---

## What is Nexora LMS?

Nexora LMS is a free learning management system built specifically for engineering students at tier-2/3 colleges preparing for campus placements. It covers everything from DSA and system design to interview mindset, AI tools, and job search execution — structured across 6 interconnected learning pillars spanning 91 hours of curriculum.

---

## The 6 Learning Pillars

| Pillar | Hours | Tagline |
|---|---|---|
| **Tech & DSA** | 40h | Crack the coding round before the first call |
| **Interview Skills** | 12h | Know the game before you play it |
| **GenAI Usage** | 8h | Use AI to learn 3x faster and work 5x smarter |
| **Mindset** | 6h | The inner game that decides who gets the offer |
| **Soft Skills** | 10h | Communicate like someone who already has the job |
| **Interview Preparation** | 15h | Build the system, then work the system |

### Pillar Highlights

**Tech & DSA (40h)**
- Big O Notation, the 14 patterns that solve 80% of LeetCode problems
- Arrays, HashMaps, Linked Lists, Trees, Recursion
- Dynamic Programming: the 5-step method
- System Design 101 for campus rounds

**Interview Skills (12h)**
- The 4 stages of a technical interview
- Tell Me About Yourself — the 3-part formula
- STAR method for behavioural questions
- Salary negotiation for first-time job seekers

**GenAI Usage (8h)**
- Role-Context-Task-Format prompting framework
- GitHub Copilot setup + interview prep workflow
- AI-powered resume review and company research

**Mindset (6h)**
- The 3-step rejection recovery protocol
- Imposter syndrome at tier-2/3 colleges — why it hits harder
- The 2-hour daily placement prep stack

**Soft Skills (10h)**
- The Pyramid Principle: structure first, then speak
- Cold email writing that gets replies
- Group discussion strategy: stand out without shouting

**Interview Preparation (15h)**
- The 1-page resume formula for engineering students
- ATS optimisation: why 70% of resumes fail before a human reads them
- LinkedIn headline formula that attracts recruiters
- Self-mock interview framework
- The 15-company job tracker system
- Campus drive strategy: prioritise 30 companies in 6 weeks

---

## Key Features

- **6 structured pillars** — each with sections, lessons, learning outcomes, and time estimates
- **Progress tracking** — per-pillar progress bar, tracks lessons visited
- **Lesson pages** — key takeaways, resources, previous/next navigation
- **Responsive design** — mobile-first layout with collapsible sidebar navigation
- **Breadcrumb navigation** — always know where you are in the curriculum
- **100% free** — no login, no paywall, no ads

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.3 | UI framework |
| Vite | 5.4 | Build tool with HMR |
| Tailwind CSS | 3.4 | Utility-first styling |
| React Router DOM | 6.26 | Client-side routing |
| Lucide React | 0.511 | Icon library |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/yogishgowda009-creator/nexora-lms-v2.git
cd nexora-lms-v2

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:5173 in your browser.

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
nexora-lms-v2/
├── src/
│   ├── App.jsx          # Routes: /, /pillar/:slug, /pillar/:slug/lesson/:lessonId
│   ├── data/            # Pillar and lesson content
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── PillarPage.jsx
│   │   └── LessonPage.jsx
│   └── components/      # PillarCard, Sidebar, Breadcrumb, etc.
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
└── vercel.json
```

---

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic deployment.

Live: **https://nexora-lms-v2.vercel.app/**

---

## License

Free to use for personal learning. Built by [Nexora](https://nexora-lms-v2.vercel.app/).
