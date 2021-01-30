<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
    <div class="w-100">
      <h2 class="mb-5">Certifications</h2>
      <ul class="fa-ul mb-0">
        <li data-iframe-width="150" data-iframe-height="270" data-share-badge-id="2c158d83-d337-4789-bca8-7dde3ab47c8b" data-share-badge-host="https://www.youracclaim.com">
        </li>
        <li>
        <li>
          <font-awesome class="fa-li text-warning cert-icons" :icon="['fas', 'broadcast-tower']"/>Advanced Amateur Radio
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    mounted() {
      let award = document.createElement('script')
      award.setAttribute('src', 'https://cdn.youracclaim.com/assets/utilities/embed.js')
      document.head.appendChild(award)
    },
  }
</script>