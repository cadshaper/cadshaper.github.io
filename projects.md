---
layout: default
title: "Projects"
---

<section class="projects-slideshow">
    <h1>Projects</h1>

    <div class="slideshow">
        {% for project in site.projects %}
        <div class="slide">
            <a href="{{ project.url }}">
                <h2>{{ project.title }}</h2>
                <img src="{{ project.thumbnail }}" alt="Thumbnail for {{ project.title }}">
            </a>
            <p>{{ project.description }}</p>

            <div class="project-gallery">
                {% for photo in project.photos %}
                <div class="gallery-slide">
                    <img src="{{ photo.url }}" alt="Gallery image for {{ project.title }}">
                    {% if photo.caption %}
                    <p class="caption">{{ photo.caption }}</p>
                    {% endif %}
                </div>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
    </div>
</section>
