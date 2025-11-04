# Agentforce Sales & Service Agent Documentation

Documentation site for Agentforce Sales & Service Agent with Lightning Types, built with [FumaDocs](https://fumadocs.dev).

## Overview

This documentation covers:
- Architecture and design patterns
- Deployment and configuration
- Features and capabilities
- API references

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment to Heroku

### Prerequisites
- Heroku CLI installed
- Git repository initialized
- Heroku account

### Steps

1. **Login to Heroku**
```bash
heroku login
```

2. **Create Heroku App**
```bash
heroku create your-app-name
```

3. **Set Node.js Buildpack** (if not automatically detected)
```bash
heroku buildpacks:set heroku/nodejs
```

4. **Deploy**
```bash
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

5. **Open Your App**
```bash
heroku open
```

### Environment Variables

No environment variables are required for basic operation. The app runs with:
- `NODE_ENV=production` (automatically set by Heroku)
- Node.js 20+ required

### Troubleshooting

**Build Fails:**
- Check Node.js version (must be 20+)
- Verify all dependencies are in package.json
- Check build logs: `heroku logs --tail`

**Port Issues:**
Heroku automatically assigns a port via the `PORT` environment variable. Next.js will use this automatically.

## Project Structure

```
├── app/                    # Next.js app directory
├── content/
│   └── docs/              # MDX documentation files
│       └── index.mdx      # Homepage
├── content_backup/        # Backup of original Mintlify content
├── lib/                   # Shared utilities
├── package.json          # Dependencies and scripts
├── Procfile              # Heroku process file
└── app.json              # Heroku app configuration
```

## Adding Content

1. Create `.mdx` files in `content/docs/`
2. Add frontmatter with title and description
3. Import FumaDocs components as needed
4. Update `meta.json` to include new pages

Example:

```mdx
---
title: My Page
description: Page description
---

import { Card, Cards } from 'fumadocs-ui/components/card';

## Content here

<Cards>
  <Card title="Card Title" icon="Icon">
    Card content
  </Card>
</Cards>
```

## Available Components

- `Card` / `Cards` - Card layouts
- `Callout` - Info, warning, error callouts
- `Step` / `Steps` - Step-by-step instructions
- `Tab` / `Tabs` - Tabbed content

## Support

For issues or questions:
- Check [FumaDocs documentation](https://fumadocs.dev)
- Review Heroku deployment logs
- Contact the development team

## License

Private project - All rights reserved
