<template>
  <v-row>
    <form action="">
      <v-col col="12">
        <v-text-field type="text" :value="firstName" outlined></v-text-field>

      </v-col>
    </form>
  </v-row>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      title: state => state.title
    })
  },
  methods: {
    updateMessage(e) {
      this.$store.commit('updateMessage',e.target.value)
    }
  } 
}

</script>
<style>
.input {
  color: #fff;
  border: 1pxx solid #ffff;
}
</style>