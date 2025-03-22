# YourBrand - Wholesale/Retail E-Commerce Platform

A modern e-commerce platform that supports both retail and wholesale customers, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Dual Pricing System**: Show retail or wholesale prices based on user account type
- **User Authentication**: Register and login with account type selection (retail/wholesale)
- **Product Catalog**: Browse products with filtering capabilities
- **Shopping Cart**: Add products to cart with quantity management
- **Wholesale Dashboard**: Special dashboard for wholesale customers to manage orders and access catalogs
- **Responsive Design**: Works on all devices from mobile to desktop

## Tech Stack

- **Frontend**:
  - Next.js 14 (App Router)
  - React
  - TypeScript
  - Tailwind CSS
  - React Icons

- **Backend**:
  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL (via Vercel Postgres)

- **Authentication**:
  - NextAuth.js

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn
- PostgreSQL database (local or hosted)

### Installation

1. Clone the repository
```bash
git clone https://github.com/mtdewwolf/friendly-octo-bassoon.git
cd friendly-octo-bassoon
```

2. Install dependencies
```bash
npm install
```

3. Configure your environment variables by creating a `.env.local` file
```
DATABASE_URL="postgresql://username:password@localhost:5432/ecommerce"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4. Run Prisma migrations
```bash
npx prisma migrate dev
```

5. Start the development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This application is designed to be deployed on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure your environment variables in the Vercel dashboard
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting
- Tailwind CSS for the utility-first CSS framework
