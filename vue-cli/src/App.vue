<template>
<!-- 컴포넌트 명명법(두 단어 이상으로 조합 권장) 종류 -->
<!--
<hello-world></hello-world>
<HelloWorld></HelloWorld>
<HelloWorld/>
-->
  <app-header v-bind:propsdata="str" v-on:renew="changeText"></app-header>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
// 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  data: function() {
    return {
      str: 'hi'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    changeText: function() {
      this.str = 'have a nice day';
    }
  }
}
</script>

<style>

</style>
