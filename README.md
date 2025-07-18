# Stockorama App

> This project is part of [Modern Full Stack Next.js Course](https://nextjscourse.dev).
> If you'd like to learn more about how this project is built in depth then check out the course!

A modern inventory management application built with Next.js 15, React 19, and MongoDB. This app allows users to add, manage, and interact with warehouse inventory items.

## Features

- **Add Products**: Create new inventory items with name and quantity
- **View Inventory**: Display all products sorted by likes (most liked first)
- **Like System**: Users can like products to show preference
- **Delete Products**: Remove items from inventory
- **Real-time Updates**: Optimistic updates for better user experience
- **Form Validation**: Client and server-side validation using Zod
- **Responsive Design**: Built with Tailwind CSS for mobile-first design

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19 with TypeScript
- **Database**: MongoDB with Prisma ORM
- **Styling**: Tailwind CSS 4
- **Validation**: Zod for schema validation
- **Icons**: Lucide React
- **Development**: Turbopack for faster builds

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB database
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd stockorama-app
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:

```env
DATABASE_URL="your-mongodb-connection-string"
```

4. Set up the database:

```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Project Structure

```
stockorama-app/
- actions/                 # Server actions
  - product-actions.ts   # Product CRUD operations
- app/                     # Next.js App Router
  - globals.css          # Global styles
  - layout.tsx           # Root layout
  - page.tsx             # Home page (Add products)
  - products/            # Products page
    - page.tsx         # View all products
  - components/              # Reusable UI components
    - delete-button.tsx    # Delete product button
    - inventory-management-form.tsx # Add product form
    - like-button.tsx      # Like product button
    - form-fields/         # Form field components
      - input-field.tsx  # Input field component
  - lib/                     # Utilities and database
    - db/                  # Database utilities
      - index.ts         # Prisma client
      - product.ts       # Product database operations
  - prisma/                  # Prisma schema
    - schema.prisma        # Database schema
  - types/                   # TypeScript type definitions
    - product-types.ts     # Product-related types
  - public/                  # Static assets
```

## Database Schema

The app uses a simple Product model:

```prisma
model Product {
  id       String @id @default(auto()) @map("_id") @db.ObjectId
  name     String
  quantity Int
  likes    Int    @default(0)
}
```

## API Routes & Actions

### Server Actions

- `createProductAction`: Add new products with validation
- `incrementLikesAction`: Increment likes for a product
- `deleteProductAction`: Remove a product from inventory

All actions include authentication checks and proper error handling.

## Key Features

### Form Validation

- Client-side validation using React 19's `useActionState`
- Server-side validation using Zod schemas
- Comprehensive error handling and user feedback

### Optimistic Updates

- Like button uses optimistic updates for instant feedback
- Loading states for better user experience

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Card-based layout for product display
- Accessible form controls

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

| Variable       | Description               |
| -------------- | ------------------------- |
| `DATABASE_URL` | MongoDB connection string |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is private and part of a Next.js course.
