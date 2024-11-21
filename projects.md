---
layout: default
title: "Projects"
---

<section class="projects-container">
    <h1>Projects</h1>

    {% for project in site.projects %}
    <article class="project">
        <header class="project-header">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
        </header>

        <section class="project-details">
            <h3>Project Overview</h3>
            <ul>
                {% for item in project.overview %}
                <li>{{ item | markdownify }}</li>
                {% endfor %}
            </ul>

            <h3>Project Details</h3>
            <p>{{ project.details | markdownify }}</p>
        </section>

        <section class="project-gallery-section">
            <h3>Photo Gallery</h3>
            <div class="slideshow">
                {% for photo in project.photos %}
                <div class="gallery-slide">
                    <img src="{{ photo.url }}" alt="Gallery image for {{ project.title }}">
                    {% if photo.caption %}
                    <figcaption class="caption">{{ photo.caption }}</figcaption>
                    {% endif %}
                </div>
                {% endfor %}
            </div>
        </section>
    </article>
    {% endfor %}
</section>
