# Likhith AN — Personal Portfolio

A responsive, animated React portfolio built with Vite.

## 1. Requirements
- Node.js (LTS)
- VS Code
- Internet connection for Google Fonts

## 2. Run locally
Open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

Open the local address printed in the terminal (usually http://localhost:5173).

## 3. Add your profile photo
The resume you provided did not contain a separate portrait photo. Add a clear, professional headshot to `public/` and name it exactly:

`profile.jpg`

The photo placeholder will automatically be replaced when the image exists.

## 4. Add your resume
Copy your latest PDF resume into `public/` and name it:

`resume.pdf`

The Resume link in the navigation will then work.

## 5. Update project links
In `src/App.jsx`, find the `projects` array. Replace each placeholder GitHub profile URL with the exact repository URL for that project. Do not leave a project link pointing to the general profile if you have a dedicated repository.

## 6. Update LinkedIn
If you want LinkedIn shown, add your profile URL in the Hero and Contact components.

## 7. Build for production
```bash
npm run build
```
The production site is generated in `dist/`.

## 8. Publish on Vercel
1. Push this folder to a new GitHub repository.
2. Sign in to https://vercel.com/ using GitHub.
3. Import the repository and deploy.
4. Vercel detects Vite automatically.

## Content accuracy note
The text is based on the supplied resume. Verify your internship dates and project technology stacks before publishing. The portfolio intentionally does not invent project metrics, awards, LinkedIn details, or individual repository links.
