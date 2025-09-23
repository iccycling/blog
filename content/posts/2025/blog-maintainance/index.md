---
title: "ICCC Hugo Blog – Maintenance and Content Guide"
date: 2025-06-01
authors: ["Frederik Beck"]
draft: false
featured_image: "github-unsplash.jpg"
summary: "A comprehensive guide on maintaining the ICCC Hugo blog, including repository structure, creating new posts, local testing, and deployment."  
tags: ["Website"]
---

This guide explains step by step how to maintain the blog at [iccycling.github.io/blog](https://iccycling.github.io/blog/), add new content, and test changes. It is intended for all team members responsible for creating or maintaining content.

---

## Overview

- **Generator:** Hugo (static site generator)
- **Version:** 0.149
- **Repository:** [github.com/iccycling/blog](https://github.com/iccycling/blog)
- **Deployment:** GitHub Actions automatically build the blog and deploy to GitHub Pages
- **How it works:** Hugo renders Markdown files into complete HTML pages, allowing structured content management while keeping styles and layout under centralized control.
- **Theme:** Ananke (standard layout, adapted for ICCC)

---

## Key Folders & Files

    iccycling.github.io/blog/
    ├── content/
    │   ├── posts/
    │   │   └── 2025/
    │   │       └── example-post/
    │   │           ├── index.md       # Markdown file with post content
    │   │           └── images/        # Images for this post
    │   ├── gear/
    │   │   └── example-hoodie/
    │   │       ├── index.md
    │   │       └── images/
    │   ├── authors/
    │   │   └── max-mustermann/
    │   │       ├── index.md           # Author profile
    │   │       └── profile-pic.jpg
    │   └── snippets/
    │       ├── latest.md               # Snippet: latest posts for main website
    │       └── gear.md                 # Snippet: gear articles for main website
    ├── public/                         # Output folder for generated HTML
    ├── static/
    │   ├── js/
    │   ├── css/
    │   └── images/
    ├── themes/
    │   └── ananke/
    │       ├── _default/
    │       │   ├── baseof.html         # Head, header, footer
    │       │   ├── list.html           # Overview pages for posts
    │       │   ├── single.html         # Single post layout
    │       │   ├── empty.html          # Helper page for snippets
    │       │   └── taxonomy.html       # Overview pages for tags
    │       ├── authors/
    │       │   └── term.html           # Author page with profile picture and posts
    │       ├── partials/
    │       │   ├── latest-post.html    # Snippet: latest posts
    │       │   └── gear-articles.html  # Snippet: gear articles
    │       ├── shortcodes/
    │       │   └── gallery-swipe.html  # Gallery with Swiper + Lightbox
    │       └── 404.html                # Error page
    ├── .nojekyll                        # Prevents GitHub internal build
    ├── hugo.toml                        # Hugo configuration
    └── .github/workflows/deploy.yml     # GitHub Actions workflow


**Note:** CSS and JS are currently loaded from the main website. Changes in `main.css` affect both the main website and the blog.

---

## Creating a New Blog Post

1. **Create a bundle**  
   - Create a new folder under `content/posts/YYYY/new-post/`  
   - Add `index.md` with the Markdown content  
   - Place images in the same folder and reference them in the Markdown file  
   - For guidance on formatting and including a gallery, download the template Markdown from the example post.

2. **Add author information** (optional)  
   - Create a folder under `content/authors/`  
   - Add `index.md` with the author profile  
   - Place profile image in the same folder


---

## Local Testing

Before uploading changes, test locally:

1. Install Hugo (version 0.149)
2. Download the repository: [github.com/iccycling/blog](https://github.com/iccycling/blog)  
   - Download ZIP and extract
3. Make changes in the appropriate folders (`content/posts/...`)
4. Open terminal in the blog folder and run:

        hugo server

5. Open in browser: `http://localhost:1313/blog/posts/`  
   - Check that content and layout display correctly

---

## Deployment

- You can manually upload your post bundle directly on [github.com/iccycling/blog](https://github.com/iccycling/blog)  
  by going to `content/posts/YYYY/` and adding your new folder with `index.md` and images.
- GitHub Actions will automatically build the Hugo blog
- The output is deployed to the `gh-pages` branch
- You can check if the GitHub Actions workflow succeeded online at:
  https://github.com/iccycling/blog/actions
  There you see the status of each deployment attempt and detailed logs if something went wrong.

---

## Tips & Notes

- Markdown files only contain raw text and metadata, no styling  
- Styles and scripts are managed centrally under `static/css` and `static/js`  
- Individual post images are handled via shortcodes (`gallery-swipe`)  
- Overview pages are generated via `_default/list.html` and `_default/taxonomy.html`  
- Author pages via `authors/term.html`  

---

## Summary

- Understand repository structure: `content/`, `themes/`, `static/`, `public/`, `snippets/`  
- Always create new posts as bundles  
- Test locally before upload  
- Deployment runs automatically via GitHub Actions  

This ensures that any team member can safely maintain and extend the Hugo blog.

---

## Annex: News

The **News** section is a lightweight version of blog posts.  
It is used for short announcements (e.g. events, updates, fairs) that are also displayed as a snippet on the main website.

---

### Structure

    content/
    ├── news/
    │   ├── _index.md           # overview page for all news
    │   └── 2025/
    │       └── example-news/
    │           ├── index.md    # single news post
    │           └── images/     # optional images for this post
    themes/
    ├── ananke/
    │   ├── layouts/
    │   │   └── news-list.html  # custom template for the news archive
    │   └── partials/
    │       └── news-updates.html  # snippet used for embedding latest news

---

### Creating a News Post

1. Create a new folder under:  
   `content/news/YYYY/new-post/`  

2. Add an `index.md` with this front matter:

    ```yaml
    ---
    title: "Welcome Fair on Campus"
    date: 2025-09-30              # date of publication
    expiry-date: 2025-10-05       # optional, hides news after this date
    authors: ["Frederik Beck"]
    draft: false
    summary: "**Sept 2025**: Welcome Fair on Campus"  # shown in the snippet
    tags: ["News", "Events"]
    ---
    ```

3. Add some body text and optionally images.  
   Example:

    ```markdown
    We will be at the **Welcome Fair** on campus.  
    Visit our stand to learn more about ICCC, events, and membership.

    ![welcome-fair](images/fair.jpg)
    ```

---

### Snippet on the Main Website

- The **snippet** is defined in `themes/ananke/partials/news-updates.html`.  
- It fetches all active news (`expiry-date` > today or none set) and lists them with a small orange dot + clickable summary + arrow.  
- Old news are still accessible but marked as **(expired)** in red on the archive page.

---

### News Archive

- `_index.md` inside `content/news/` defines the news overview page:

    ```yaml
    ---
    title: "All News"
    type: "news-list"
    layout: "news-list"
    ---
    ```

- The template `themes/ananke/layouts/news-list.html` renders the archive with all news posts, sorted by date.

---

### Workflow

1. **Create bundle** in `content/news/YYYY/...`  
2. **Set correct `date`** and optional `expiry-date`  
3. **Test locally** with `hugo server`  
4. **Commit & push** to GitHub → GitHub Actions deploy automatically  
5. Snippet updates automatically on the main site via fetch (no manual changes required)  

---

### Summary

- News works like blog posts, but **shorter and time-bound**  
- `summary` is shown in the snippet  
- `expiry-date` hides old news automatically from the snippet  
- Full list available at `/blog/news/`  
- Maintenance = just create/edit/delete bundles in `content/news/`


