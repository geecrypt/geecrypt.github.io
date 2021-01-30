<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
    <div class="w-100">
      <h2 class="mb-5">Skills</h2>

      <div class="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'html5']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'css3-alt']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'js-square']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'vuejs']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'npm']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'git-square']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'docker']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'python']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'aws']"/>
        </li>
      </ul>

      <div class="subheading mb-3">Workflow</div>
      <ul class="fa-ul mb-0">
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Security-first Development
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Efficient, Readable Code
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Test-Driven Development
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Customer Satisfaction
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Beautiful Design
        </li>
      </ul>
    </div>
  </section>
</template>
