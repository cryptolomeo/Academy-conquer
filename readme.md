# Conquer Blocks — Online Programming Academy

A responsive website for an online programming academy, built with HTML5, Sass using Vite. The project focuses on responsive layouts, reusable UI components, maintainable stylesheets and a consistent visual identity.

## Live Demo

* **Live Website:** [View the live project](https://cryptolomeo.github.io/Academy-conquer/)
* **Repository:** [View the source code](https://github.com/cryptolomeo/Academy-conquer)

## Overview

Conquer Blocks is a multi-page website concept for an online academy specializing in programming and emerging technologies.

The website presents the academy, showcases its training programs, provides information about individual courses and includes pages for user access, registration and contact.

The main goal of this project was to practice building a complete responsive website while improving my skills in semantic HTML with BEM classes, Sass architecture, CSS layouts and frontend development workflows.

## Features

* **Responsive design:** layouts adapted to mobile, tablet and desktop screens.
* **Multi-page navigation:** dedicated pages for the academy, courses, blog and user-related sections.
* **Reusable card components:** consistent presentation of courses, articles and other content.
* **Responsive navigation:** a navigation menu adapted to different screen sizes.
* **Sass architecture:** styles organized into reusable modules.
* **BEM naming methodology:** structured CSS class names to improve readability and maintainability.
* **CSS Grid and Flexbox:** flexible page layouts and component positioning.
* **Interactive UI details:** hover effects, transitions and visual feedback.
* **SVG decorations:** custom vector graphics used as decorative elements.
* **Form interfaces:** login, registration and contact form layouts.
* **SEO fundamentals:** page titles, meta descriptions and favicon configuration.

## Pages

The website includes the following sections:

| Page                        | Description                                                           |
| --------------------------- | --------------------------------------------------------------------- |
| Home                        | Introduction to the academy and featured content.                     |
| About Us                    | Information about the academy, its team and its educational approach. |
| Courses                     | Overview of available training programs.                              |
| Full Stack Master's Program | Information about the Full Stack development program.                 |
| Blockchain Master's Program | Information about the Blockchain program.                             |
| Blog                        | Articles and additional content.                                      |
| Login                       | User sign-in interface.                                               |
| Registration                | New user registration interface.                                      |
| Contact                     | Contact information, location and contact form.                       |
| Legal Notice                | Legal information.                                                    |

## Technologies

* **HTML5** — semantic markup and page structure.
* **CSS3** — responsive styling, animations and visual effects.
* **Sass (SCSS)** — variables, nesting, mixins where appropriate and modular stylesheets.
* **Vite** — development server and production build tooling.
* **Git and GitHub** — version control and project hosting.
* **Font Awesome** — icons.

## Project Structure

```text
conquer-blocks/
├── index.html
├── cursos.html
├── blog.html
├── contacto.html
├── quienessomos.html
├── login.html
├── registro.html
├── aviso-legal.html
├── 404.html
├── cursos/
│   ├── curso-full-stack.html
│   └── curso-blockchain.html
├── sass/
│   ├── abstracts/
│   ├── base/
│   ├── components/
│   ├── layout/
│   ├── pages/
│   ├── themes/
│   ├── vendors/
│   └── main.scss
├── css/
│   └── style.css
├── js/
├── img/
├── public/
├── main.js
├── package.json
└── vite.config.js
```

### Main Directories

* **`sass/`** — Modular Sass stylesheets organized using the 7-1 architecture.
* **`css/`** — Compiled CSS and source maps.
* **`js/`** — Directory reserved for future JavaScript modules and functionality.
* **`img/`** — Images and SVG assets used throughout the website.
* **`public/`** — Static assets served directly by Vite.
* **`cursos/`** — Individual course landing pages.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd conquer-blocks-academy
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Development

Start the local development server:

```bash
npm run dev
```

### Production Build

Generate an optimized production build:

```bash
npm run build
```

The generated files will be available in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Deployment

Deploy the production build to GitHub Pages:

```bash
npm run deploy
```


## Responsive Design

The layout uses CSS Grid, Flexbox and media queries to adapt content to different viewport sizes.

The design considers:

* Mobile navigation and content stacking.
* Tablet layouts and intermediate screen sizes.
* Desktop grids and wider content arrangements.
* Responsive images and flexible containers.
* Spacing and typography adjustments across breakpoints.

## Accessibility and Usability

The project aims to follow common accessibility and usability practices, including:

* Semantic HTML elements.
* Explicit labels for form controls.
* Visible focus indicators for keyboard navigation.
* Descriptive page titles.
* Alternative text for meaningful images.
* Sufficient color contrast and readable typography.

Accessibility should be verified through testing as the project evolves.

## Current Limitations

This project primarily focuses on frontend development and visual presentation.

* Login and registration interfaces do not imply a working authentication system.
* Contact and registration forms require a backend or external service to process and store submissions.
* Any links or features that depend on external services must be configured and tested separately.

Only describe these features as functional if the required integrations have actually been implemented.

## What I Learned

Through this project, I practised:

* Building and organizing a multi-page website.
* Writing semantic HTML and reusable BEM class names.
* Structuring a Sass codebase into separate modules.
* Creating responsive layouts with CSS Grid and Flexbox.
* Designing reusable cards and shared UI components.
* Working with Vite and npm scripts.
* Using Git and GitHub to manage and publish a project.
* Reviewing responsive behavior and refining the user interface.

## Future Improvements

Potential improvements include:

* Accessibility testing and refinement.
* Performance and image optimization.
* Further SEO improvements.
* Functional form handling and validation.
* Backend integration for authentication and registration.
* Automated testing and continuous integration.

## License

This project was created for educational and portfolio purposes.

Unless a separate license is specified in this repository, no additional permission to reuse or redistribute the project should be assumed.

## Author

**Iván Rodríguez da Mota**

GitHub: [@cryptolomeo](https://github.com/cryptolomeo) & [@TaliantCode](https://github.com/TaliantCode)

