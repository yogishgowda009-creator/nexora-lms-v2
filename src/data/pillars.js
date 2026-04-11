export const pillars = [
  {
    id: 'tech-dsa',
    slug: 'tech-dsa',
    title: 'Tech & DSA',
    tagline: 'Crack the coding round before the first call',
    targetAudience: 'Students who freeze on LeetCode medium problems and don\'t know where to start.',
    estimatedHours: 40,
    color: 'from-blue-500 to-cyan-500',
    whatYouWillCrack: [
      'Solve 80% of campus placement coding rounds using 14 core patterns',
      'Explain time and space complexity confidently in any interview',
      'Crack system design basics asked in top 50 product companies',
      'Go from stuck-on-easy to solving mediums in under 30 minutes',
    ],
    sections: [
      {
        id: 'tech-dsa-foundation',
        title: 'Foundation: Time Complexity & Problem Patterns',
        lessons: [
          {
            id: 'big-o',
            title: 'Big O Notation — What Interviewers Actually Check',
            type: 'read',
            duration: '25 min',
            summary: 'Most students memorize O(n) definitions but can\'t apply them on the spot. This lesson teaches you to eyeball any code block and state its complexity in 10 seconds — the skill interviewers test silently while you code.',
            keyTakeaway: 'Every nested loop is O(n²). Every halving is O(log n). Every hash lookup is O(1). Internalize these three and you handle 80% of complexity questions.',
            resources: [
              { label: 'NeetCode: Big O Notation', url: 'https://neetcode.io/courses/dsa-for-beginners/1' },
              { label: 'Big O Cheat Sheet', url: 'https://www.bigocheatsheet.com' },
            ],
          },
          {
            id: '14-patterns',
            title: 'The 14 Patterns That Solve 80% of LeetCode Problems',
            type: 'read',
            duration: '35 min',
            summary: 'Sliding window, two pointers, fast & slow pointers, merge intervals, cyclic sort, BFS, DFS, two heaps, subsets, modified binary search, top K elements, K-way merge, and dynamic programming — recognizing the pattern is 70% of the solution.',
            keyTakeaway: 'When you see \'subarray with max sum\' think sliding window. When you see \'sorted array + target\' think two pointers. Pattern recognition is the cheat code.',
            resources: [
              { label: 'NeetCode Roadmap', url: 'https://neetcode.io/roadmap' },
              { label: 'LeetCode Patterns GitHub', url: 'https://github.com/seanprashad/leetcode-patterns' },
            ],
          },
        ],
      },
      {
        id: 'tech-dsa-structures',
        title: 'Data Structures You Must Know Cold',
        lessons: [
          {
            id: 'arrays-strings',
            title: 'Arrays & Strings — The Foundation of Every Round 1',
            type: 'practice',
            duration: '3 hrs',
            summary: 'Arrays appear in 60% of campus placement first rounds. Cover two-pointer technique, prefix sums, sliding window, and in-place reversal — string problems test substring search, anagram detection, and palindrome checks.',
            keyTakeaway: 'Master prefix sum arrays — they convert O(n) range queries to O(1) and appear in 30% of array problems.',
            resources: [
              { label: 'LeetCode Array Problems', url: 'https://leetcode.com/tag/array/' },
              { label: 'NeetCode Arrays Playlist', url: 'https://www.youtube.com/playlist?list=PLot-Xpze53leF0FeHz2X0aG3zd0mr1AW_' },
            ],
          },
          {
            id: 'hashmap-hashset',
            title: 'HashMap & HashSet — Your Best Friend in Interviews',
            type: 'practice',
            duration: '2 hrs',
            summary: 'HashMap reduces most O(n²) brute force solutions to O(n). Two Sum, Group Anagrams, Top K Frequent Elements — all HashMap problems in disguise. Learn to identify when to trade memory for speed.',
            keyTakeaway: 'Whenever a problem asks \'find a pair\' or \'count frequency\', your first instinct should be HashMap.',
            resources: [
              { label: 'Two Sum — Classic Starter', url: 'https://leetcode.com/problems/two-sum/' },
              { label: 'Top K Frequent Elements', url: 'https://leetcode.com/problems/top-k-frequent-elements/' },
            ],
          },
          {
            id: 'linked-lists',
            title: 'Linked Lists — Pointers, Cycles, and Reversals',
            type: 'practice',
            duration: '2.5 hrs',
            summary: 'Cover reversal (iterative and recursive), cycle detection using Floyd\'s algorithm, finding the middle node, and merging two sorted lists. Drawing pointer state before every step is the differentiator between candidates who solve it and those who freeze.',
            keyTakeaway: 'Draw the pointer state before every step. Interviewers want to see you think visually — explain pointer movement out loud.',
            resources: [
              { label: 'Reverse a Linked List', url: 'https://leetcode.com/problems/reverse-linked-list/' },
              { label: 'Detect Cycle in Linked List', url: 'https://leetcode.com/problems/linked-list-cycle/' },
            ],
          },
          {
            id: 'trees-recursion',
            title: 'Trees & Recursion — The Interview Darling',
            type: 'practice',
            duration: '4 hrs',
            summary: 'Binary trees appear in 40% of product company rounds. Master BFS (level-order), DFS (pre/in/post-order), lowest common ancestor, and BSTs. Every tree problem has a recursive subproblem — trust the recursion.',
            keyTakeaway: 'For any tree problem, ask: what does this function return for a single node? Then trust recursion to handle the rest.',
            resources: [
              { label: 'NeetCode Trees Playlist', url: 'https://www.youtube.com/playlist?list=PLot-Xpze53lcIeFBOdUy4SicHd6_GX8gX' },
              { label: 'Binary Tree Level Order Traversal', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
            ],
          },
        ],
      },
      {
        id: 'tech-dsa-dp',
        title: 'Dynamic Programming — Demystified',
        lessons: [
          {
            id: 'dp-5-step',
            title: 'DP Without the Fear: The 5-Step Method',
            type: 'read',
            duration: '30 min',
            summary: 'The 5-step method: (1) identify overlapping subproblems, (2) define the state, (3) write the recurrence relation, (4) add memoization, (5) convert to bottom-up. Every DP problem follows this — you never need to invent a solution from scratch.',
            keyTakeaway: 'You need to identify that it IS a DP problem (optimal substructure + overlapping subproblems) and then apply the 5-step method.',
            resources: [
              { label: 'NeetCode DP Playlist', url: 'https://www.youtube.com/playlist?list=PLot-Xpze53lcrZSP0gCKOJBeLqxXoGcqD' },
              { label: 'Climbing Stairs — First DP Problem', url: 'https://leetcode.com/problems/climbing-stairs/' },
            ],
          },
        ],
      },
      {
        id: 'tech-dsa-sysdesign',
        title: 'System Design for Campus Placements',
        lessons: [
          {
            id: 'sysdesign-101',
            title: 'System Design 101: What Gets Asked in Campus Rounds',
            type: 'read',
            duration: '40 min',
            summary: 'Campus placement system design questions are not Netflix-scale — they ask: design a URL shortener, a parking lot, a ride-sharing app. The framework: requirements → capacity estimation → high-level design → deep dive into one component.',
            keyTakeaway: 'Always start by clarifying requirements — functional vs non-functional. Interviewers reward structured thinking over perfect answers.',
            resources: [
              { label: 'System Design Primer (GitHub)', url: 'https://github.com/donnemartin/system-design-primer' },
              { label: 'Design a URL Shortener', url: 'https://www.youtube.com/watch?v=fMZMm_0ZhK4' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'interview-skills',
    slug: 'interview-skills',
    title: 'Interview Skills',
    tagline: 'Know the game before you play it',
    targetAudience: 'Students who pass the coding round but go blank during HR and managerial rounds.',
    estimatedHours: 12,
    color: 'from-violet-500 to-purple-600',
    whatYouWillCrack: [
      'Answer \'Tell me about yourself\' in a way that makes the interviewer lean forward',
      'Use STAR method for any behavioral question without sounding rehearsed',
      'Handle \'What is your expected salary?\' without underselling or losing the offer',
      'Turn \'Do you have any questions for us?\' into a power move',
    ],
    sections: [
      {
        id: 'interview-game',
        title: 'Understanding the Interview Game',
        lessons: [
          {
            id: '4-stages',
            title: 'The 4 Stages of a Technical Interview',
            type: 'read',
            duration: '20 min',
            summary: 'Every technical interview has four acts: intro & culture fit (10 min), technical problem solving (30–40 min), system design or domain questions (15 min), and candidate questions (10 min). Knowing what\'s coming removes 80% of the panic.',
            keyTakeaway: 'The intro round is not small talk — your \'Tell me about yourself\' sets the tone for the entire interview.',
            resources: [
              { label: 'Exponent: How Tech Interviews Work', url: 'https://www.tryexponent.com/blog/how-technical-interviews-work' },
            ],
          },
          {
            id: 'tell-me-about-yourself',
            title: 'Tell Me About Yourself — The 3-Part Formula',
            type: 'practice',
            duration: '45 min',
            summary: 'Present (who you are + strongest skill) → Past (1–2 experiences that prove it) → Future (why THIS company and THIS role). Total time: 90 seconds. Practice out loud — your brain tricks you into thinking you\'re ready when you\'re not.',
            keyTakeaway: 'End with a bridge: \'...which is why I\'m excited about this role at [Company] — specifically the work on [specific product/team].\' It signals that you researched them.',
            resources: [
              { label: 'Jeff Su: Tell Me About Yourself', url: 'https://www.youtube.com/watch?v=kayOhGRcNt0' },
            ],
          },
        ],
      },
      {
        id: 'behavioural-star',
        title: 'Behavioral Questions & STAR Method',
        lessons: [
          {
            id: 'star-method',
            title: 'STAR Method — Story Structure That Works',
            type: 'practice',
            duration: '1.5 hrs',
            summary: 'Situation (1 sentence) → Task (your specific responsibility) → Action (what YOU did, not your team) → Result (quantified outcome). Most common mistake: spending 80% on Situation and 5% on Result. Spend 60% on Action and 30% on Result.',
            keyTakeaway: 'Prepare 5 master stories: academic project, internship, leadership, failure, and a collaboration challenge. Every behavioral question maps to one of these.',
            resources: [
              { label: 'STAR Method Guide — Indeed', url: 'https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique' },
            ],
          },
          {
            id: '20-behavioural',
            title: 'The 20 Behavioral Questions Every Interviewer Uses',
            type: 'read',
            duration: '30 min',
            summary: 'Tell me about a time you failed. Describe a conflict with a teammate. Give an example of going above and beyond. Tell me about a decision with incomplete information. These 20 questions cover 90% of behavioral rounds — prepare for all 20.',
            keyTakeaway: 'Map each of your 5 master stories to 4 questions each. You will never be caught unprepared.',
            resources: [
              { label: 'Amazon Leadership Principles Q&A', url: 'https://www.levels.fyi/blog/amazon-leadership-principles.html' },
            ],
          },
        ],
      },
      {
        id: 'negotiation',
        title: 'Negotiation & Offer Stage',
        lessons: [
          {
            id: 'salary-negotiation',
            title: 'Salary Negotiation for First-Time Job Seekers',
            type: 'read',
            duration: '25 min',
            summary: 'Never give the first number. When asked expected CTC, say: \'I\'m focused on finding the right fit — can you share the band for this role?\' If pushed, anchor 15–20% above your target. Companies expect negotiation — not negotiating is leaving money on the table.',
            keyTakeaway: 'Research the market rate on AmbitionBox before every interview. Knowledge is your only leverage.',
            resources: [
              { label: 'AmbitionBox Salary Checker', url: 'https://www.ambitionbox.com/salaries' },
              { label: 'Glassdoor India Salaries', url: 'https://www.glassdoor.co.in/Salaries/index.htm' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'genai-usage',
    slug: 'genai-usage',
    title: 'GenAI Usage',
    tagline: 'Use AI to learn 3x faster and work 5x smarter',
    targetAudience: 'Students who know AI tools exist but use them like a search engine instead of a co-pilot.',
    estimatedHours: 8,
    color: 'from-emerald-500 to-teal-500',
    whatYouWillCrack: [
      'Debug any code error in under 5 minutes using Claude or ChatGPT',
      'Use AI to understand any DSA concept faster than any YouTube video',
      'Generate, critique, and improve your resume using AI prompts',
      'Set up GitHub Copilot free and use it to code 2x faster',
    ],
    sections: [
      {
        id: 'prompt-engineering',
        title: 'Prompt Engineering for Students',
        lessons: [
          {
            id: 'rctf-framework',
            title: 'The Role-Context-Task-Format Framework',
            type: 'read',
            duration: '20 min',
            summary: 'Bad prompt: \'Explain binary search.\' Good prompt: \'You are a CS professor. Explain binary search using a real-world analogy, show Python code with inline comments, then give me 3 practice problems in increasing difficulty.\' Specificity transforms the output quality completely.',
            keyTakeaway: 'Every great prompt has: a ROLE for the AI, your CONTEXT, the specific TASK, and the FORMAT you want. Miss any one of these and you get a generic answer.',
            resources: [
              { label: 'Claude.ai', url: 'https://claude.ai' },
              { label: 'Learn Prompting Guide', url: 'https://learnprompting.org/docs/introduction' },
            ],
          },
          {
            id: 'ai-dsa-learning',
            title: 'AI-Powered DSA Learning: From Confused to Clear in 15 Minutes',
            type: 'tool',
            duration: '30 min',
            summary: 'Paste any LeetCode problem you\'re stuck on with this prompt: \'I tried to solve [problem]. Here is my approach: [code]. Don\'t give me the solution — ask me guiding questions that help me discover the answer.\' Socratic AI tutoring is faster than watching any solution video.',
            keyTakeaway: 'Never ask AI for the answer. Ask AI to be your tutor. You only grow when you struggle productively — the AI makes that struggle efficient.',
            resources: [
              { label: 'Claude.ai', url: 'https://claude.ai' },
              { label: 'ChatGPT', url: 'https://chatgpt.com' },
            ],
          },
        ],
      },
      {
        id: 'ai-coding',
        title: 'AI for Coding & Debugging',
        lessons: [
          {
            id: 'copilot-setup',
            title: 'GitHub Copilot Setup + Interview Prep Workflow',
            type: 'tool',
            duration: '45 min',
            summary: 'GitHub Copilot is free for students with the GitHub Student Developer Pack. Install the VS Code extension, link your student email, and activate. It autocompletes boilerplate so you focus on logic — and it can explain any code block via right-click → Copilot → Explain.',
            keyTakeaway: 'Get the GitHub Student Developer Pack immediately — Copilot, Azure credits, Namecheap domain, and 13 other tools at zero cost.',
            resources: [
              { label: 'GitHub Student Developer Pack', url: 'https://education.github.com/pack' },
              { label: 'GitHub Copilot Docs', url: 'https://docs.github.com/en/copilot' },
            ],
          },
        ],
      },
      {
        id: 'ai-resume',
        title: 'AI for Resume & Job Search',
        lessons: [
          {
            id: 'resume-review-prompt',
            title: 'Resume Review Prompt That Beats Any Career Counsellor',
            type: 'tool',
            duration: '40 min',
            summary: 'Paste your resume into Claude with: \'You are a senior technical recruiter at a top Indian product company. Review my resume for: (1) ATS keyword gaps for [target role], (2) weak action verbs, (3) bullets without quantified results, (4) overall positioning. Be brutally honest.\' Implement every suggestion.',
            keyTakeaway: 'Tell the AI your target role, company type, and experience level — generic prompts get generic feedback. Specificity is everything.',
            resources: [
              { label: 'Jobscan ATS Resume Checker', url: 'https://www.jobscan.co' },
              { label: 'Claude.ai', url: 'https://claude.ai' },
            ],
          },
          {
            id: 'ai-job-search',
            title: 'Using AI to Research Companies Before Interviews',
            type: 'tool',
            duration: '30 min',
            summary: 'Prompt: \'You are a career coach. I have an interview at [Company] for [Role]. Help me: (1) summarize their product and recent news, (2) predict 5 likely interview questions for this role, (3) identify what differentiates them from competitors.\' Run this 48 hours before every interview.',
            keyTakeaway: 'Interviewers can tell within 3 minutes whether you researched them. AI-powered research takes 20 minutes and makes you look like you spent 3 days.',
            resources: [
              { label: 'Claude.ai', url: 'https://claude.ai' },
              { label: 'G2: Company Reviews', url: 'https://www.g2.com' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'mindset',
    slug: 'mindset',
    title: 'Mindset',
    tagline: 'The inner game that decides who gets the offer',
    targetAudience: 'Students who know what to do but cannot make themselves consistently do it — caught in comparison, rejection spirals, or procrastination.',
    estimatedHours: 6,
    color: 'from-orange-500 to-amber-500',
    whatYouWillCrack: [
      'Break the rejection spiral with a 3-step recovery protocol',
      'Build a daily discipline system that requires zero motivation',
      'Identify and silence the imposter syndrome voice specific to tier-2/3 students',
      'Use the 12-week year framework to compress 3 months of progress into 30 days',
    ],
    sections: [
      {
        id: 'rejection',
        title: 'Dealing with Rejection',
        lessons: [
          {
            id: 'rejection-recovery',
            title: 'The 3-Step Rejection Recovery Protocol',
            type: 'read',
            duration: '20 min',
            summary: 'Step 1 — Allow 24 hours to feel the disappointment. Step 2 — Extract: what was the weakest part of my interview? Write it with a specific fix. Step 3 — Reframe: every rejection is a calibration, not a verdict. This protocol prevents 2-week inactivity spirals that kill job searches.',
            keyTakeaway: 'Rejection is data, not judgment. Extract the signal, discard the noise, and act on the signal within 48 hours.',
            resources: [
              { label: 'Atomic Habits — James Clear', url: 'https://jamesclear.com/atomic-habits' },
            ],
          },
          {
            id: 'imposter-syndrome',
            title: 'Imposter Syndrome at Tier-2/3 Colleges — Why It Hits Harder',
            type: 'read',
            duration: '25 min',
            summary: 'Imposter syndrome is compounded by system bias — interviewers from IITs unconsciously filter for cultural markers. The antidote is not more confidence — it is more evidence. Build a specific evidence portfolio: problems solved, projects shipped, skills demonstrated.',
            keyTakeaway: 'Build an evidence journal: every week, write one specific thing you did that proves you belong in the roles you\'re targeting. Re-read it before every interview.',
            resources: [
              { label: 'The Confidence Code (Blinkist)', url: 'https://www.blinkist.com/en/books/the-confidence-code-en' },
            ],
          },
        ],
      },
      {
        id: 'daily-discipline',
        title: 'Building Daily Discipline',
        lessons: [
          {
            id: '2hr-daily-stack',
            title: 'The 2-Hour Daily Placement Prep Stack',
            type: 'practice',
            duration: '30 min',
            summary: '6:00–6:30 AM: one LeetCode problem timed. 6:30–7:00 AM: one behavioral question out loud. 7:00–7:30 PM: one Nexora LMS module. 7:30–8:00 PM: one LinkedIn action. One week = 14 problems, 7 behavioral stories rehearsed, 7 study sessions, 7 network actions.',
            keyTakeaway: 'Consistency beats intensity. A 2-hour daily system beats a 10-hour Sunday binge every single time.',
            resources: [
              { label: '12 Week Year — Brian Moran', url: 'https://www.amazon.in/12-Week-Year-Others-Months/dp/1118509234' },
            ],
          },
          {
            id: 'comparison-trap',
            title: 'The Comparison Trap — Why Your Batchmates\' Offers Are Irrelevant',
            type: 'read',
            duration: '15 min',
            summary: 'Comparing your placement timeline to others destroys focus and creates artificial urgency that leads to bad decisions. The only comparison that matters: are you better than you were last week? This lesson gives you a weekly self-benchmark protocol.',
            keyTakeaway: 'Track your own weekly progress: problems solved, stories rehearsed, applications sent, skills improved. Your only competition is last week\'s version of you.',
            resources: [
              { label: 'Atomic Habits — James Clear', url: 'https://jamesclear.com/atomic-habits' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'soft-skills',
    slug: 'soft-skills',
    title: 'Soft Skills',
    tagline: 'Communicate like someone who already has the job',
    targetAudience: 'Students who can code but struggle to explain their thinking, get nervous in GDs, or write emails that get ignored.',
    estimatedHours: 10,
    color: 'from-green-500 to-emerald-500',
    whatYouWillCrack: [
      'Explain any technical concept to a non-technical person in 60 seconds',
      'Dominate group discussion rounds without being the loudest person in the room',
      'Write a cold email to a recruiter or senior engineer that gets a reply',
      'Present project work so interviewers ask the good kind of follow-up questions',
    ],
    sections: [
      {
        id: 'communication',
        title: 'Communication Fundamentals',
        lessons: [
          {
            id: 'pyramid-principle',
            title: 'The Pyramid Principle — Structure First, Then Speak',
            type: 'read',
            duration: '25 min',
            summary: 'Lead with your conclusion, then support with 3 arguments, each backed by evidence. Most students bury the conclusion at the end — the interviewer stops listening by then. Pyramid Principle: conclusion first, always.',
            keyTakeaway: 'In every interview answer, say the most important thing first. Then explain why. Never make the interviewer wait for the point.',
            resources: [
              { label: 'The Pyramid Principle — Barbara Minto', url: 'https://www.amazon.in/Pyramid-Principle-Logic-Writing-Thinking/dp/0273710516' },
            ],
          },
          {
            id: 'cold-email',
            title: 'How to Write a Cold Email That Gets Replies',
            type: 'practice',
            duration: '45 min',
            summary: 'Formula: specific subject line (mention their work) → first line genuinely referencing something about them → one sentence about yourself → one small clear ask (15-minute call) → no attachments in the first email. Response rate increases 3x with this approach.',
            keyTakeaway: 'The goal of a cold email is not to get a job. It is to get a conversation. One clear small ask always outperforms \'please find my resume attached.\'',
            resources: [
              { label: 'Hunter.io — Find Professional Emails', url: 'https://hunter.io' },
            ],
          },
        ],
      },
      {
        id: 'group-discussion',
        title: 'Group Discussion Strategy',
        lessons: [
          {
            id: 'gd-strategy',
            title: 'GD Strategy: How to Stand Out Without Shouting',
            type: 'practice',
            duration: '1 hr',
            summary: 'Three moves that win GDs: (1) Open strong in the first 30 seconds with a structured point. (2) Bridge and build on others\' points — acknowledge then extend. (3) Summarize in the last 2 minutes. Evaluators reward structured thinkers, not volume.',
            keyTakeaway: 'Quality beats quantity in GDs. Two structured, well-reasoned points beat five fragmented interjections every time.',
            resources: [
              { label: 'IndiaBix GD Topics', url: 'https://www.indiabix.com/group-discussion/topics/' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'interview-prep',
    slug: 'interview-prep',
    title: 'Interview Preparation',
    tagline: 'Build the system, then work the system',
    targetAudience: 'Students who apply randomly to 50 companies and hear nothing back, with no structured approach to the job search.',
    estimatedHours: 15,
    color: 'from-pink-500 to-rose-500',
    whatYouWillCrack: [
      'Build an ATS-optimized resume that clears the first filter in 30 companies',
      'Set up a LinkedIn profile that gets 3+ recruiter views per week',
      'Run a structured mock interview and extract specific improvement areas',
      'Build a job tracker that keeps 15 applications warm simultaneously',
    ],
    sections: [
      {
        id: 'resume-ats',
        title: 'Resume That Clears ATS',
        lessons: [
          {
            id: '1page-resume',
            title: 'The 1-Page Resume Formula for Engineering Students',
            type: 'read',
            duration: '30 min',
            summary: 'Header: Name, phone, LinkedIn, GitHub (no photo, no DOB). Education: College, Degree, CGPA if above 7.0. Projects: 2–3 with tech stack, your specific contribution, one quantified result each. Skills: languages, frameworks, tools — no \'MS Office\'. Projects before experience for freshers.',
            keyTakeaway: 'Every resume bullet must answer: what did you do, how did you do it, and with what result? No result = no bullet.',
            resources: [
              { label: 'Jake\'s Resume Template (Overleaf)', url: 'https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs' },
              { label: 'Resumake — Free Builder', url: 'https://resumake.io' },
            ],
          },
          {
            id: 'ats-optimization',
            title: 'ATS Optimization — Why 70% of Resumes Fail Before a Human Reads Them',
            type: 'read',
            duration: '25 min',
            summary: 'ATS failures: images, tables, headers/footers with contact info, fancy fonts. ATS wins: exact words from the JD, standard section headings, bullet points. Copy the JD into a word cloud — the top 5–7 words are your ATS keywords.',
            keyTakeaway: 'ATS systems do literal string matching — synonyms don\'t count. Use the exact phrasing from the job description.',
            resources: [
              { label: 'Jobscan ATS Checker', url: 'https://www.jobscan.co' },
              { label: 'WordClouds from JD', url: 'https://www.wordclouds.com' },
            ],
          },
        ],
      },
      {
        id: 'linkedin',
        title: 'LinkedIn Profile Optimization',
        lessons: [
          {
            id: 'linkedin-headline',
            title: 'LinkedIn Headline Formula That Attracts Recruiters',
            type: 'practice',
            duration: '45 min',
            summary: 'Bad: \'Final Year B.Tech Student | Looking for Opportunities.\' Good: \'Final Year CS Student | Java + DSA + React | Seeking SDE Roles | Open to Work.\' LinkedIn uses headline keywords in search — recruiters search for skills, not job-seeker status.',
            keyTakeaway: 'Your headline is your most important SEO field. It appears in every search result and every comment you make. Optimize it for the role you want, not the status you have.',
            resources: [
              { label: 'LinkedIn Algorithm Guide 2024', url: 'https://www.linkedin.com/pulse/how-linkedin-algorithm-works-2024-full-breakdown-richard-van-der-blom' },
            ],
          },
        ],
      },
      {
        id: 'mock-interviews',
        title: 'Mock Interviews & Job Tracker',
        lessons: [
          {
            id: 'self-mock',
            title: 'How to Run a Self-Mock Interview That Actually Improves You',
            type: 'practice',
            duration: '1.5 hrs',
            summary: 'Record yourself answering 5 behavioral + 1 technical question. Watch it back, write 3 specific observations. Re-run with those 3 fixes. Send the recording to a peer for one piece of feedback. Most students never record themselves — this alone puts you in the top 10% of prepared candidates.',
            keyTakeaway: 'You cannot self-correct what you cannot see. Record every practice session.',
            resources: [
              { label: 'Pramp — Free Peer Mock Interviews', url: 'https://www.pramp.com' },
              { label: 'interviewing.io', url: 'https://interviewing.io' },
            ],
          },
          {
            id: '15-company-tracker',
            title: 'The 15-Company Job Tracker System',
            type: 'tool',
            duration: '30 min',
            summary: 'Pick 15 target companies. Track: Company, Role, Applied Date, JD Link, Contact, Last Action, Next Action, Status. Review every Friday — follow up on applications older than 10 days, replace dead leads with new targets. Treating job search like a sales pipeline doubles your conversion rate.',
            keyTakeaway: 'Job searching without a tracker is like sales without a CRM. You will drop leads that were about to convert.',
            resources: [
              { label: 'Notion Job Tracker Template', url: 'https://www.notion.so/templates/job-search-tracker' },
              { label: 'Huntr Job Application Tracker', url: 'https://huntr.co' },
            ],
          },
          {
            id: 'campus-drive-strategy',
            title: 'Campus Drive Strategy — How to Prioritise 30 Companies in 6 Weeks',
            type: 'read',
            duration: '20 min',
            summary: 'Tier your targets: Tier 1 (dream companies, apply first, prepare hardest), Tier 2 (strong fit, good package), Tier 3 (safety net). Never apply to Tier 3 in Week 1 — it signals desperation and builds bad habits. Work Tier 1 and 2 hard, use Tier 3 only if needed.',
            keyTakeaway: 'Quality applications to 15 companies beat shotgun applications to 100. A tailored resume + researched cover note converts 3x better than a generic blast.',
            resources: [
              { label: 'AmbitionBox: Interview Experiences', url: 'https://www.ambitionbox.com' },
              { label: 'Glassdoor Campus Reviews', url: 'https://www.glassdoor.co.in' },
            ],
          },
        ],
      },
    ],
  },
]
