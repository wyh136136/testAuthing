<template>
  <div id="authing-guard-container"></div>
</template>
<script>
export default {
  mounted() {
    // 使用 start 方法挂载 Guard 组件到你指定的 DOM 节点，登录成功后返回 userInfo
    this.$guard.start("#authing-guard-container").then((userInfo) => {
      console.log("userInfo: ", userInfo);
    })
  },
};
</script>
