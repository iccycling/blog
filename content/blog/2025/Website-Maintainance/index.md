---
title: "Website Maintenance Guide"
date: 2025-06-07
authors: ["Frederik Beck"]
draft: false
featured_image: "jordan-jnJVpJJmdkI-unsplash.jpg"
summary: "A practical guide to maintaining and updating the ICCC website, including tips for content, images, galleries, tools, and workflow."
tags: ["Website", "Maintenance"]
---

Welcome! This guide helps you maintain and update the website easily. No prior deep knowledge needed, but some basic coding experience helps. Otherwise, learning by doing and asking ChatGPT is a great way forward.

## About the Website

The website is built simply on a template from **HTML5UP** (big thanks for the awesome templates!).  
This ensures the site is **responsive** and works well on mobile devices. The simple structure also means **easy maintenance**.

## General Tips for Maintenance

- Be **careful when editing `main.css`** — usually, you don’t need to change much here. Small mistakes can cause layout problems.
- To **add or update content**, simply *copy & paste existing sections* and modify them.
- Check out `elements.html` for an overview of available elements and how to use them.

## Handling Images and Galleries

You can use **Glightbox** to make galleries swipeable and more user-friendly. See the example gallery below for how to implement it.

Optimize image size and format to keep load times low and site performance smooth. If unsure, ask ChatGPT for advice on best image formats and sizes.

Don’t overload the site with too many images. For photo projects, consider using **Instagram**, **Flickr**, or similar platforms to showcase galleries externally.

### Example Gallery

If you use stock photos make sure they have a license that allows the usage. Unsplash is a good website to find free stock photos. Some of those stock photos can be found in the following gallery. (Thanks @jordphotography on Unsplash)


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




## Tools and Workflow

Install **VSCode** as your development environment. It’s free and beginner-friendly.  
Always **test your changes locally in a browser** before publishing online. Keeping backups is also a good idea.

To keep blog pages manageable, after several posts create a new blog page like `blog4.html`, `blog5.html`, etc.

## Final Note

I hope this website serves as a solid foundation for the club’s online presence and lasts for many years.  
Best regards!
