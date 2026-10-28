# The Tirumalasetti Chronicle 🗞️

> **"All The Data Fit To Compute"**  
> Personal Portfolio and Research Dispatch of **Mihir Tirumalasetti** — Data Scientist & Machine Learning Engineer specializing in enterprise credit decisioning, 3D neuroanatomical connectomics, and autonomous multimodal systems.

Built with a **colorful New York Times editorial broadsheet aesthetic**, seamless dark mode ("Morning Broadsheet" ☀️ vs. "Evening Broadside" 🌙), interactive career timeline, and an investigative project catalog.

---

## 🏛️ Editorial & Architectural Highlights

- **The New York Times Aesthetic**:
  - Classic broadsheet masthead with volume, late research edition markings, and live data science market ticker.
  - Authentic double-line borders (`border-nyt-double`), hairline column rules, and editorial drop caps.
  - Editorial color palette: Financial Amber, Neural Indigo, Laboratory Emerald, Autonomous AI Violet, and Breaking Red.
  - Dual-mode newsprint: Paper Parchment (`#FAF7F0`) for Morning Broadsheet and Deep Obsidian (`#0D0F14`) for Evening Broadside.
- **Career Timeline (10 Dispatches)**:
  - Interactive chronological timeline featuring positions at **Ally Financial**, **UT Dallas Ganglia Guardian Lab**, **UT Southwestern Medical Center**, **Sports Analytics Club**, **Artificial Intelligence Society (AIS)**, and **SOFAB**.
  - Category filtering (Enterprise & FinTech, Academic Research, Leadership & Governance, Mentorship).
  - Search filter by keyword, tool, or metric.
- **Investigative Projects Archive (8 Reports)**:
  - Feature articles for **AxonAtlas2**, **Parkinson's Behavioral Clusters ML Framework** (Jindal Award Winner), **UTSW BioDesign IoT Telemetry**, **AIS-sponsor** (Gemini Autonomous Agent), **MagentaMonitor** (HackUTD), **GuardianVision2**, **DeepClean**, and **SceneFusion**.
  - Modal technical dossiers with methodology, architecture breakdown, and verified outputs.
- **Scientific Spotlight**:
  - Focus on forthcoming visual connectome paper co-authored with researchers from the **Allen Institute for Neural Dynamics** and **Columbia University**.
- **Interactive Technical Arsenal**:
  - 42 indexed tools, algorithms, and libraries across Machine Learning, Computer Vision, Data Systems, and Languages with one-click copy.
- **Blazing Fast Performance**:
  - 100% statically pre-rendered with zero runtime latency, optimized for instantaneous Vercel delivery.

---

## 🚀 One-Click Deploy to Vercel

This repository is pre-configured for zero-configuration deployment to [Vercel](https://vercel.com/):

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import the GitHub repository: `c3rry/mihir-tirumalasetti`.
3. Framework Preset: **Next.js** (automatically detected).
4. Click **Deploy**.

Vercel will automatically build the static pages and deploy the application globally on its Edge Network.

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18.17+ or v20+)
- npm / yarn / pnpm

### Setup
```bash
# Clone the repository
git clone https://github.com/c3rry/mihir-tirumalasetti.git
cd mihir-tirumalasetti

# Install dependencies
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the broadsheet in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 🗂️ Project Structure

```
mihir-tirumalasetti/
├── src/
│   ├── app/
│   │   ├── globals.css         # Broadsheet styles, double rules, drop caps & textures
│   │   ├── layout.tsx          # Google Fonts (Playfair Display, Lora, JetBrains Mono, Inter)
│   │   └── page.tsx            # Main Broadsheet Page assembly
│   ├── components/
│   │   ├── BroadsheetHeader.tsx    # Broadsheet masthead, ticker, weather & theme switcher
│   │   ├── EditorialFooter.tsx     # Letter to the editor dispatch desk & colophon
│   │   ├── ExperienceTimeline.tsx  # Chronological timeline with datelines & category filters
│   │   ├── FrontPageLead.tsx       # Lead article, drop cap, pull quotes & key indicators
│   │   ├── ProjectModal.tsx        # Special investigative report deep-dive modal
│   │   ├── ProjectsSection.tsx     # Feature story grid with search & category filters
│   │   ├── ResearchSpotlight.tsx   # Ganglia Guardian Lab, Allen Inst., Jindal Award & UTSW
│   │   ├── SkillsLedger.tsx        # 4-quadrant technical commodities ledger
│   │   ├── SocialIcons.tsx         # Inline crisp SVG icons for GitHub & LinkedIn
│   │   └── ThemeContext.tsx        # Morning/Evening theme context with localStorage sync
│   └── data/
│       └── resume.ts           # Structured data model for all 10 positions & 8 projects
├── tailwind.config.ts          # Custom NYT colors, fonts, and dark mode class
├── package.json
└── README.md
```

---

## 📜 Published Record & Contact

- **Author**: Mihir Tirumalasetti
- **LinkedIn**: [linkedin.com/in/mihir-tirumalasetti](https://www.linkedin.com/in/mihir-tirumalasetti/)
- **GitHub**: [github.com/c3rry](https://github.com/c3rry)
- **Ganglia Guardian Lab**: [labs.utdallas.edu/ganglia-guardian-lab](https://labs.utdallas.edu/ganglia-guardian-lab/)
- **EPICS UTSW Project**: [epics.utdallas.edu](https://epics.utdallas.edu/)
- **SOFAB Governance**: [soc.utdallas.edu/for-organizations](https://soc.utdallas.edu/for-organizations/)

*Typeset in Playfair Display, Lora, JetBrains Mono, and Inter.*
