---
layout: page
permalink: /publications/
title: Publications
description: publications by categories in reversed chronological order. 
nav: true
nav_order: 2
---
<style>
  .publications .badge-spotlight { color:#e74c3c; font-weight:700; }
  .publications .badge-spotlight::before { content:"("; }
  .publications .badge-spotlight::after  { content:")"; }
</style>
<!-- _pages/publications.md -->
Categories: <br>
J: Journal papers <br>
C: Conference proceedings papers <br>
A: Conference abstracts <br>

<div class="publications">

  {% bibliography -f {{ site.scholar.bibliography }} --template '{{ reference
  | replace_first: ". In <i>",  ". To appear in <i>"
  | replace_first: ". In <em>", ". To appear in <em>"
  | replace_first: ". In ",     ". To appear in " }}' %}

</div> 
