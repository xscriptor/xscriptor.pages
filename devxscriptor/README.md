# Structure:
## components:
First of all, there are some folders that organize the infrastructure, following specific modifications.

### navbaricons:
Here you will find the icons used in the navbar, created as components to make it easier to reuse them in other contexts.

* ContactIcon.tsx

* GithubIcon.tsx

* HomeIcon.tsx

* PortfolioIcon.tsx

* ResourcesIcon.tsx

* XscriptorIcon.tsx

### pageicons:
Here you will find the icons used for general purposes throughout the web app.

### General Purpose Components:
* Bubbles.tsx — Controls the bubble light effect on the repos page. It defines the structure, but relies on globals.css for proper styling.

* CustomCursor.tsx — Defines the animated cursor behavior across the entire site.

* DecryptedText.tsx — Handles the decryption animation shown in various places, like the homepage and the contact page.

* Fonts.tsx — Defines the fonts used throughout the project, making them easy to import and apply.

* Footer.tsx — A general footer component that can be imported and reused in layouts.

* Navbar.tsx — Defines the structure of the navbar, including the icons, glassmorphism effect, and dimensions.

* NavLink.jsx — Controls the behavior of the navbar links.

* ContactForm.tsx – Creates the email message to be handled by the user's email client (e.g., Gmail or Outlook), while also sending it internally through an API on the website.

* RepoImage.tsx — Contains the logic to fetch and display a preview image for each repository directly from GitHub.

* SkillNetwork.tsx — Handles the logic for the skill map (points and connecting lines). Also controls responsive behavior on mobile screens.

Also, I defined:

* iconStyles.ts — This file centralizes the customization of the navbar and contactpage icon styles, making it easier to maintain.