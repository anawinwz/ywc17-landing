<template>
  <FreeBadge />
</template>
<script>
import styled from 'vue-styled-components'
const FreeBadge = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 20px;
  right: 20px;
  width: 122px;
  height: 125px;
  background: url(${require('~/assets/images/freeBadge.png')}) no-repeat center;
  background-size: 100%;
  
  @media(max-width:768px) {
    & {
      position: absolute;
      width: 132px;
      height: 130px;
      top: 5px;
      right: 5px;
    }
  }
`
export default {
  components: {
    FreeBadge
  }
}
</script>
