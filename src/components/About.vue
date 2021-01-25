<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Gavin
        <span class="text-primary">Acquroff</span>
      </h1>
      <div class="subheading mb-5">
        Vancouver, BC · 
        <a
          href="mailto:gacquroff@gmail.com"
        >gacquroff@gmail.com</a>
      </div>
      <p
        class="lead mb-5"
      >Enthusiastic software engineer with 1.5 years of professional experience in embedded system development. Eager to explore new fields in IT and apply strong security principles.</p>

      <div class="social-icons">
        <a href="https://linkedin.com/in/gacquroff" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://github.com/geecrypt" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
        <a href="https://twitter.com/geecrypt" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
          <font-awesome :icon="['fab', 'twitter']"/>
        </a>
        <a href="https://www.facebook.com/gavin.acquroff" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
          <font-awesome :icon="['fab', 'facebook']"/>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
