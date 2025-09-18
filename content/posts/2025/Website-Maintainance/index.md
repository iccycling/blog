---
title: "Website Maintenance Guide"
date: 2025-05-17
authors: ["Frederik Beck"]
draft: false
featured_image: "jordan-jnJVpJJmdkI-unsplash.jpg"
summary: "A practical guide to maintaining and updating the ICCC website, including tips for content, images, tools, and workflow."
tags: ["Website"]
---

Welcome! This guide helps you maintain and update the ICCC website easily. No prior deep knowledge is required — you can make changes directly using a simple editor. Learning by doing and asking ChatGPT is also a great way forward.

## Example Gallery

<!-- Three Images Side by Side (Zoomed, fixed aspect ratio 2:3) -->
<div style="display:flex; gap:1em; flex-wrap:wrap; margin-bottom:1.5em;">

  <div style="flex:1; max-width:calc(33% - 0.66em); display:flex; justify-content:center; align-items:center;">
    <img src="jordan-jnJVpJJmdkI-unsplash.jpg" alt="Sample Image 1" style="width:100%; aspect-ratio:2/3; object-fit:cover;" />
  </div>

  <div style="flex:1; max-width:calc(33% - 0.66em); display:flex; justify-content:center; align-items:center;">
    <img src="jordan-SWh8uPmVx2g-unsplash.jpg" alt="Sample Image 2" style="width:100%; aspect-ratio:2/3; object-fit:cover;" />
  </div>

  <div style="flex:1; max-width:calc(33% - 0.66em); display:flex; justify-content:center; align-items:center;">
    <img src="jordan-jOr2qGvelSU-unsplash.jpg" alt="Sample Image 3" style="width:100%; aspect-ratio:2/3; object-fit:cover;" />
  </div>

</div>



## About the Website

The website is a **static site**, built on an **HTML5UP template** and hosted on **GitHub Pages**.  
It has a **simple structure**, which makes it **easy to maintain**.

The website repository is available here: [https://github.com/iccycling/iccycling.github.io](https://github.com/iccycling/iccycling.github.io).  
You can download the folder as a ZIP file, edit files with a basic text editor on Windows, and check changes directly in your browser. For larger updates, using **VSCode with GitHub integration** is recommended.

### Main Structure

Most content updates can be done by editing the following files/folders:

    iccycling.github.io/
        images/         # all images
        videos/         # videos
        assets/
            js/         # JavaScript for dynamic functions
            css/        # CSS for styling
        index.html      # Homepage
        about.html      # About the club
        road.html       # Road cycling section
        offroad.html    # Mountain biking section
        gear.html       # Club wear and gear
        other.html      # Other cycling disciplines
        blog/           # Blog static pages (pre-built)

For simple content edits, you only need to update these files — everything else is handled automatically.

---

## Editing Content

- Open the HTML file for the page you want to update.
- Copy & modify existing sections for new content.
- Headings, paragraphs, lists, and images can be edited directly in the HTML.
- Replace images in the `images/` folder and update the `<img src="">` references accordingly.

No advanced coding skills are required — simple copy & paste and text edits are enough.

---

## Workflow and Tools

- **Text Editor**: You can use Notepad or any basic editor for small edits.  
- **Browser Testing**: Always open the page in a browser to check your changes.  
- **Version Control**: For larger updates, use VSCode with GitHub to track changes and push updates.  
- **Backups**: Keep a copy of your repository before making major edits.

---

## Special Note on the Blog

The **blog** is handled separately using the **Hugo static site generator** and lives in its own repository.  

- The main website **does not require Hugo** — it is fully static.  
- Only the **latest blog posts** and **Gear articles** are dynamically pulled into the main site.  
- For blog maintenance, see the dedicated guide for the Hugo blog.

This separation keeps the main website simple and easy to maintain for anyone, while the blog can use Hugo for more advanced features.

---

## Final Note

The ICCC website is designed to be simple, robust, and easy to update. With this guide, anyone can maintain it safely, add new content, or update images.  

Happy editing!


