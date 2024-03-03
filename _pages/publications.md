---
layout: page
permalink: /publications/
title: Publications
description: publications by categories in reversed chronological order. 
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
Categories: <br>
J: Journal papers <br>
C: Conference proceedings papers <br>
A: Conference abstracts <br>
<!-- <div class="publications">

{% bibliography -f {{ site.scholar.bibliography }} %}

</div> -->
<div class="publication">
  <span class="title">{{ entry.title }}</span><br>
  <span class="authors">{{ entry.author }}</span><br>
  <span class="journal">{{ entry.journal }}</span><br>
  <span class="year">{{ entry.year }}</span><br>
  {% if entry.url %}
    <a href="{{ entry.url }}">Paper Link</a><br>
  {% elsif entry.doi %}
    <a href="https://doi.org/{{ entry.doi }}">Paper Link</a><br>
  {% endif %}
</div>
