<template>
  <div>
    <p v-texto="this.text">asdasdasdasdasdasdasdasdasdasdasdsasdasdasdas</p>
    <div v-position:relative="75">Binding de argumento aqui</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    text: { cor: "blue", tamanhoFonte: "200%", totalCaracteres: 15 },
  }),
};
</script>

<style>
</style>
