    ---
layout: page
title: Group
permalink: /group/
nav: true
nav_order: 3
---

<style>
    /* Styles for screens larger than 768px (typical breakpoint for tablets) */
    @media (min-width: 768px) {
        .professor-photo {
            width: 200px;
            margin-right: 30px;
        }
        .student-photo {
            width: 120px; /* Slightly smaller than the professor photo */
            margin-right: 25px;
        }
        .professor-text, .student-text {
            max-width: 90%; /* or whatever max width you think looks good */
        }
        .student-container {
            display: flex;
            align-items: center; /* Align items vertically in the center */
            margin-bottom: 20px; /* Spacing between student entries */
    }

    /* Styles for screens smaller than 768px */
    @media (max-width: 768px) {
        .professor-photo {
            width: 100px; /* adjust as needed for mobile */
            margin-right: 15px;
        }
        .student-photo {
            width: 60px; /* Adjusted for mobile */
            margin-right: 10px;
        }
        .professor-text, .student-text {
            max-width: 100%; /* 100% minus the image width and a bit of margin */
            flex: 1; /* this allows the text div to take up any remaining space */
        }
        .student-container {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
    }
</style>

## Professor

<div style="overflow: auto;">
    <img class="professor-photo" src="/assets/img/hongki-photo.jpg" alt="Hongki Lim" style="float: left; margin-right: 20px; margin-bottom: 10px;">
    <div class="professor-text">
        Hongki Lim is currently an assistant professor in the Department of Electronic Engineering at Inha University. Previously he worked as a Senior AI Scientist at Siemens Healthineers. He received his Ph.D. from the Department of Electrical and Computer Engineering at the University of Michigan in 2020, advised by <a href='https://web.eecs.umich.edu/~fessler/'>Prof. Jeffrey Fessler</a> and <a href='https://medicine.umich.edu/dept/radiology/yuni-dewaraja-phd'>Prof. Yuni Dewaraja</a>. <br><br>        
    </div>
</div>


<br><br>

## Current MS student(s)
<div class="student-container">
    <img class="student-photo" src="/assets/img/kim_mw.JPG" alt="kim_mw" style="float: left; margin-right: 20px; margin-bottom: 10px;">
    <div class="student-text">
        <a href='https://www.linkedin.com/in/민우-김-414aba2a3/'>Kim, Minwoo</a><br>
        Inverse problem<br>
    </div>
</div>
<div class="student-container">
    <img class="student-photo" src="/assets/img/lee_h.jpg" alt="lee_h" style="float: left; margin-right: 20px; margin-bottom: 10px;">
    <div class="student-text">
        <a href='https://www.linkedin.com/in/dlghks629'>Lee, Hwan</a><br>
        Video synthesis<br>
    </div>
</div>
<br>
## Undergraduate researchers
<div class="student-container">
    <img class="student-photo" src="/assets/img/kim_jh.jpg" alt="kim_jh" style="float: left; margin-right: 20px; margin-bottom: 10px;">
    <div class="student-text">
        <a href='https://www.linkedin.com/in/종하-김-4253312b8/'>Kim, Jongha</a><br>
        Video synthesis<br>
        2024-<br>
    </div>
</div>
<div class="student-container">
    <img class="student-photo" src="/assets/img/kang_jw.jpg" alt="kang_jw" style="float: left; margin-right: 20px; margin-bottom: 10px;">
    <div class="student-text">
        <a href='https://www.linkedin.com/in/junggang22'>Kang, Jungwoon</a><br>
        Inverse problem<br>
        2024-<br>
    </div>
</div>
<div class="student-container">
    <img class="student-photo" src="/assets/img/kim_ks.jpg" alt="kim_ks" style="float: left; margin-right: 20px; margin-bottom: 10px;">
    <div class="student-text">
        <a href='https://'>Kim, Kyung Sub</a><br>
        Video synthesis<br>
        2024-<br>
    </div>
</div>
<div class="student-container">
    <img class="student-photo" src="/assets/img/chun_ms.jpg" alt="chun_ms" style="float: left; margin-right: 20px; margin-bottom: 10px;">
    <div class="student-text">
        <a href='https://'>Chun, Minsoo</a><br>
        Inverse problem<br>
        2024-<br>
    </div>
</div>
<div class="student-container">
    <img class="student-photo" src="/assets/img/shin_sh.jpg" alt="shin_sh" style="float: left; margin-right: 20px; margin-bottom: 10px;">
    <div class="student-text">
        <a href='https://www.linkedin.com/in/shinseunghyeok/'>Shin, Seunghyeok</a><br>
        3D reconstruction<br>
        2024-<br>
    </div>
</div>
<div class="student-container">
    <img class="student-photo" src="/assets/img/kim_db.jpg" alt="kim_db" style="float: left; margin-right: 20px; margin-bottom: 10px;">
    <div class="student-text">
        <a href='https://'>Kim, Dabin</a><br>
        3D reconstruction<br>
        2024-<br>
    </div>
</div>
<div class="student-container">
    <img class="student-photo" src="/assets/img/kim_dm.jpg" alt="kim_dm" style="float: left; margin-right: 20px; margin-bottom: 10px;">
    <div class="student-text">
        <a href='https://www.linkedin.com/in/dong-min-kim-6844272b8'>Kim, Dong Min</a><br>
        3D reconstruction<br>
        2024-<br>
    </div>
</div>
<br>

## Prospective Member {#prospective}

Thank you for your interest in the research at MI Lab. <br>

To understand the current projects in MI Lab, please refer to our recent journal and conference <a href='https://milab-inha.github.io/publications'>papers</a>. However, every member of my group is unique and I work with each person to find projects that suit their interests. <br>

While much of our past work has centered on medical imaging, our vision for the future is broadening. We are leaning into general machine learning challenges, with a special focus on deep generative models and computer vision problems. <br>

If you are interested in doing research with us, send me an [email](mailto:hklim@inha.ac.kr) with your CV and/or transcript.


<!--
## Master's Students

## Undergraduate Researchers

### 김철수 

<div style="display: flex; align-items: start;">
    <img src="/assets/img/hongki-photo.jpg" alt="Hongki Lim" style="width: 150px; margin-right: 20px;">
    <div>
        <strong>Research Interest:</strong> 
    </div>
</div>

-->



