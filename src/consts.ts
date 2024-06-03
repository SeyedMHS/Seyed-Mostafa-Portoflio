import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Portfolio",
  DESCRIPTION: "Welcome to Seyed Mostafa Portfolio, a portfolio and blog for designers and developers.",
  AUTHOR: "Seyed Mostafa",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "Seyed.mostafa.hashemi.shahroudi@gmail.com",
    HREF: "mailto:Seyed.mostafa.hashemi.shahroudi@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "SeyedMHS",
    HREF: "https://github.com/SeyedMHS"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "seyed mostafa hashemi shahroudi",
    HREF: "https://www.linkedin.com/in/seyed-mostafa-hashemi-shahroudi-810944245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "SeyedMHS97",
    HREF: "https://x.com/SeyedMHS97",
  },
]

