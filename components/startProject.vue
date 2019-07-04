<template>
  <section class="section start-project">
    <div class="content">
      <p class="title">
        Ready to start a project?
      </p>
      <div class="">
        <p class="text">
          Let’s build something awesome together! <br>Say contact@fluidangle.com or call: +1 (978) 849-4391
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
    padding: 8% 9.5%;
    background-color: $primary;
    color: $light;

    .title {
      font-family: 'sailecmedium',serif;
      font-size: 1.8rem;
      font-weight: 500;
      margin: {
        bottom: 1.5rem;
      };
    }

    .text {
      font-size: 1.1rem;
    }

    button {
      height: 3rem;
      padding:{
        left: 2rem;
        right: 3rem;
      }
      margin: {
        top: 1.5rem;
      };
      border-style: none;
      border-radius: 1.7rem;
      color: $primary;
      background-color: $light;
      font-size: 1.1rem;
      &:focus{
          outline: 0;
      }
    }
  }
</style>
