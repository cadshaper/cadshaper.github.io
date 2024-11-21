---
layout: default
title: "Blog"
---

<h1>Latest Blog Posts</h1>

<div class="blog-posts">
    {% for post in site.posts %}
        <div class="blog-post">
            <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            <p><em>{{ post.date | date: "%B %d, %Y" }}</em></p>
            <p>{{ post.excerpt }}</p> <!-- This is a brief excerpt from the post -->
        </div>
    {% endfor %}
</div>
