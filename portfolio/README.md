# Sanjana S Nair - Portfolio Website

A sleek, minimalist portfolio website built with Next.js and Tailwind CSS.

## Features

- Modern, responsive design with a clean green color palette
- Interactive timeline for showcasing experience
- Skills section with visual progress indicators
- Fully functional contact form with validation
- Optimized for all device sizes

## Project Structure

\`\`\`
portfolio/
├── app/                  # Next.js app directory
│   ├── api/              # API routes for form handling
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact form
│   ├── experience.tsx    # Experience timeline
│   ├── footer.tsx        # Footer component
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation bar
│   ├── skills.tsx        # Skills section
│   ├── ui/               # UI components (shadcn)
│   └── work.tsx          # Work/projects section
├── public/               # Static assets
├── README.md             # This file
└── tailwind.config.ts    # Tailwind CSS configuration
\`\`\`

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open your browser and navigate to:
   \`\`\`
   http://localhost:3000
   \`\`\`

## Deployment

This project is ready to be deployed on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy

## Customization

- Update personal information in the component files
- Replace placeholder images with your own in the public directory
- Modify the color scheme in tailwind.config.ts if desired

## Contact Form

The contact form is set up to work with a serverless API route. To make it fully functional:

1. Implement email sending functionality in `app/api/contact/route.ts`
2. Consider using services like SendGrid, Mailgun, or Resend

## License

This project is open source and available under the MIT License.
