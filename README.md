# 🏠 Mate AI - Your Flatmate Management Assistant

> The all-in-one solution for shared living that actually works. No more "did you clean the bathroom?" debates.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-E2E-green.svg)](https://playwright.dev/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/glebapps/mate-ai/issues)

## 🎯 The Problem

Living with flatmates shouldn't be this hard. Whether you're a student or just trying to afford rent in today's market, shared living comes with the same headaches:

- 📅 "What week is it? Who cleans the bathroom?"
- 💰 "Did you buy dish soap? How much do I owe you?"
- 📋 "I forgot to take out the trash again..."
- 🗓️ "Wait, you booked the living room when I have my study group?"

Sound familiar? You end up juggling WhatsApp groups, Google Calendars, expense apps, and sticky notes on the fridge. It's chaos.

## ✨ The Solution

**Mate AI** brings everything together in one beautiful, AI-powered app that actually understands how flatmates live.

### 🤖 Meet Mate - Your AI Flatmate Assistant

Just ask Mate anything:

- _"What do I need to clean this week?"_
- _"How much do I owe for groceries?"_
- _"Can I book the living room for Saturday?"_
- _"Bob and I want to swap cleaning duties, can you update it?"_

Mate remembers everything, settles disputes, and keeps everyone on the same page.

### 🏗️ Core Features

- **🧹 Smart Cleaning Calendar** - Automatic rotation with reminders
- **💳 Shared Expense Tracking** - Split bills, track who owes what
- **✅ Task Management** - From trash duty to grocery runs
- **📅 Space Booking** - Reserve common areas without conflicts
- **🤖 AI-First Interface** - Set up everything through conversation
- **📱 Mobile-First Design** - PWA support for native-like experience

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/glebapps/mate-ai.git
cd mate-ai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your AI API keys (OpenAI, etc.)

# Run development server
npm run dev

# Run tests
npm run test          # Unit tests
npm run test:e2e      # Playwright E2E tests
```

Open [http://localhost:3000](http://localhost:3000) and start managing your flat like a pro!

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **AI Integration**: OpenAI GPT-4 / Anthropic Claude
- **Testing**: Vitest + Playwright
- **Deployment**: Vercel
- **Monitoring**: Sentry

## 📁 Project Structure

```
mate-ai/
├── app/                    # Next.js 14 App Router
│   ├── (auth)/            # Auth pages group
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/       # Main app group
│   │   ├── dashboard/
│   │   ├── cleaning/
│   │   ├── expenses/
│   │   ├── booking/
│   │   └── settings/
│   ├── api/              # API routes
│   │   ├── auth/
│   │   ├── ai/
│   │   ├── tasks/
│   │   └── expenses/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/           # Reusable components
│   ├── ui/              # Base UI components
│   ├── chat/            # AI chat components
│   ├── dashboard/       # Dashboard widgets
│   └── forms/           # Form components
├── lib/                 # Utilities & configs
│   ├── ai/             # AI service layer
│   ├── db/             # Database utilities
│   ├── auth/           # Auth configuration
│   ├── utils/          # Helper functions
│   └── types/          # TypeScript types
├── prisma/             # Database schema
│   ├── schema.prisma
│   └── migrations/
├── tests/              # Test files
│   ├── unit/          # Vitest unit tests
│   └── e2e/           # Playwright E2E tests
├── public/            # Static assets
├── docs/              # Documentation
└── package.json
```

## 🎨 Current Status

**✅ Phase 1: Foundation (Current)**

- [x] Next.js 14 + TypeScript setup
- [x] Core UI/UX design
- [x] Dashboard layout
- [x] AI chat interface mockup
- [x] Mobile-responsive design
- [ ] E2E test framework

**🔄 Phase 2: Core Features (In Progress)**

- [ ] Database schema design
- [ ] User authentication system
- [ ] Real AI integration (OpenAI/Anthropic)
- [ ] Task management system
- [ ] Expense tracking with splitting
- [ ] Calendar booking system

**📋 Phase 3: Advanced Features (Planned)**

- [ ] Push notifications (PWA)
- [ ] Receipt scanning (AI vision)
- [ ] Calendar app integration
- [ ] Real-time collaboration
- [ ] Mobile apps (React Native)

## 🧪 Testing Strategy

We use a comprehensive testing approach:

```bash
# Unit tests with Vitest
npm run test

# E2E tests with Playwright
npm run test:e2e

# Test coverage
npm run test:coverage

# Run specific test suites
npm run test:unit
npm run test:integration
```

**E2E Test Scenarios:**

- Flatmate onboarding flow
- AI chat interactions
- Task assignment and completion
- Expense splitting workflows
- Calendar booking conflicts
- Multi-user collaboration

## 🤝 Contributing

We'd love your help making Mate AI even better! Whether you're fixing bugs, adding features, or improving docs - all contributions are welcome.

### Development Setup

1. Fork and clone the repo
2. Install dependencies: `npm install`
3. Copy environment variables: `cp .env.example .env.local`
4. Run the dev server: `npm run dev`
5. Run tests: `npm run test:e2e`

### Contribution Guidelines

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Write tests for new features
3. Ensure TypeScript compiles: `npm run type-check`
4. Run E2E tests: `npm run test:e2e`
5. Commit with conventional commits
6. Open a Pull Request

### What We Need Help With

- 🎨 UI/UX improvements (Figma designs welcome!)
- 🤖 AI prompt engineering and conversation flows
- 📱 Mobile experience optimization
- 🧪 Test coverage expansion
- 🌍 Internationalization (i18n)
- 📊 Analytics and insights features
- 🔒 Security and privacy enhancements

## 💡 Roadmap & Ideas

**Upcoming Features:**

- 🗣️ Voice commands ("Hey Mate, what's my cleaning duty?")
- 🏠 Smart home integration (IoT sensors)
- 🎮 Gamification (cleaning streaks, rewards)
- 🛒 Marketplace for flatmate services
- 📹 AR cleaning tutorials
- 🤖 Proactive AI suggestions

**Technical Improvements:**

- Edge runtime optimization
- Real-time updates with WebSockets
- Offline-first architecture
- Advanced AI context management
- Performance monitoring

Got ideas? [Open an issue](https://github.com/glebapps/mate-ai/issues) or start a [discussion](https://github.com/glebapps/mate-ai/discussions)!

## 🔧 Environment Variables

```bash
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"

# AI Services
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="..."

# Optional: Analytics & Monitoring
SENTRY_DSN="..."
VERCEL_ANALYTICS_ID="..."
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with love for all the flatmates struggling with shared living
- Inspired by real experiences from university dorms to big city flats
- Special thanks to the Next.js, TypeScript, and Playwright communities
- Shoutout to everyone who's ever had a "who didn't do the dishes?" argument

---

**Made with ❤️ and TypeScript for flatmates everywhere**

_Questions? Bugs? Ideas? [Join our community](https://github.com/glebapps/mate-ai/discussions) or reach out on [LinkedIn](https://www.linkedin.com/in/glebapps/)!_
