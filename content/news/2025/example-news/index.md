---
title: "How to create a News Post"        # set date to today when posting
date: 2025-06-20                           # publication date
expiry-date: 2025-09-20
authors: ["Frederik Beck"]                # news hidden after this date
featured_image: "news.jpg"
draft: false
summary: "**Jun 2025**: How to create a News Post"  # text shown in snippet
tags: ["News", "Events", "Website"]
---

# Welcome to your new News Post

Creating a news post in the ICCC blog is simple and follows a consistent structure. Here's a step-by-step guide:

## 1. Create the folder

All news posts live under `content/news/YYYY/`. For example:

```bash
content/news/2025/example-post/
```

Inside, create an `index.md` file and any images you want to include.

## 2. Add Frontmatter

At the top of `index.md`, include:

```yaml
---
title: "Your News Title"
date: 2025-09-20
expiry-date: 2026-09-20
authors: ["Your Name"]
featured_image: "featured-image.png"
draft: false
summary: "**Sep 2025**: Short summary of your news post"
tags: ["News", "Events"]
---
```

- `date`: publication date  
- `expiry-date`: optional, after this date the post can be marked as expired  
- `summary`: will appear in the news snippet on the homepage  
- `featured_image`: used for blog listing previews  

## 3. Add content with Markdown

You can use **headings, lists, bold text, links, and images**:

### Example Image with Caption

```markdown
<figure>
  <img src="news.jpg" alt="News Img">
  <figcaption>
    Newspaper (Source: Unsplash)
  </figcaption>
</figure>
```

<figure>
  <img src="news.jpg" alt="News Img">
  <figcaption>
    Newspaper (Source: Unsplash)
  </figcaption>
</figure>


### Example Gallery with Caption

```markdown
\{\{< gallery-swipe 
        images="news2.jpg,news.jpg" 
        captions="Smartphone (Source: Unsplash),Newspaper (Source: Unsplash)"  
    >\}\}
```

{{< gallery-swipe 
        images="news2.jpg,news.jpg" 
        captions="Smartphone (Source: Unsplash),Newspaper (Source: Unsplash)"  
    >}}


### Example Text

Write a short introduction to your news post, like:

> Welcome to our new website! Explore the latest updates, club events, and gear drops.

### Example List

```markdown
- Step 1: Create folder and `index.md`  
- Step 2: Add Frontmatter  
- Step 3: Write content using Markdown  
```

## 4. Save and check

Once your `index.md` and images are uploaded, Hugo will automatically generate the post. You can see it in your local server at:

```text
http://localhost:1313/blog/news/2025/example-post/
```

---

**Tip:** Keep the summary short and descriptive; it will be displayed on the homepage in the news list.
