<template>
  <section class="section start-project">
    <div class="content">
      <p class="title">
        Ready to start a project?
      </p>
      <div class="">
        <p class="text">
          Let’s build something awesome together! <br>Say contact@fluidangle.com or call: 234803823231
        </p>
      </div>
      <button>Start Project</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StartProject'
}
</script>

<style scoped lang="scss">
  .start-project {
    padding: 4.8rem 9rem;
    background-color: $primary;
    color: $light;

    .title {
      font-size: 1.8rem;
      margin: {
        bottom: 1.5rem;
      };
    }

    .text {
      font-size: 0.95rem;
    }

    button {
      height: 3rem;
      width: 8rem;
      margin: {
        top: 1.5rem;
      };
      border-style: none;
      border-radius: 1.7rem;
      color: $primary;
      background-color: $light;
      font-size: .95rem;
    }
  }
</style>
