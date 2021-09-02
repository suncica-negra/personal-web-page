<template>
  <div class="about-me-card">
    <div class="about-me-card-holder">
      <p>Kartica</p>
      {{ card.one }}
      <span class="material-icons-outlined">update</span>
      <span class="material-icons-outlined">school</span>
      <span class="material-icons-outlined">history_edu</span>
      <span class="circle"></span>
      <span class="circle ping"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMeCard",
  props: {
    card: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>

<style lang="scss">
.about-me-card {
  display: flex;
  justify-content: flex-end;
  margin: 50px 0;
  padding-right: 30px;
  position: relative;
  width: 50%;

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;

    .about-me-card-holder {
      align-items: flex-start;
      text-align: left;
      margin-left: 27px;

      &:after {
        left: -7.5px;
        right: auto;
        background-color: #7b6542;
      }

      .circle {
        left: -40px;
        right: auto;

        &.ping {
          left: -50px;
          top: calc(50% - 22px);
        }
      }
    }
  }

  .about-me-card-holder {
    align-items: flex-end;
    background-image: linear-gradient(to right, #7b6542 0%, #d5c19c 45%);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    max-width: 70%;
    padding: 15px;
    position: relative;
    text-align: right;
    width: 400px;
    margin-right: 27px;
    filter: drop-shadow(0px 0px 10px var(--box-shadow-less-transparent));
    color: var(--card-text-color);
    transition: all 0.5s ease-in-out;

    &:after {
      background-color: #d5c19c;
      content: " ";
      height: 15px;
      position: absolute;
      right: -7.5px;
      top: calc(50% - 7.5px);
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      width: 15px;
    }

    .circle {
      background-color: var(--blue);
      border: 3px solid var(--blue);
      border-radius: 50%;
      height: 20px;
      width: 20px;
      position: absolute;
      right: -40px;
      top: calc(50% - 12px);
      z-index: 100;
      transition: all 0.5s ease-in-out;

      &.ping {
        background-color: var(--box-shadow);
        border: 3px solid var(--box-shadow);
        height: 40px;
        width: 40px;
        z-index: 0;
        right: -50px;
        top: calc(50% - 22px);
      }
    }
  }
}

.ping {
  -webkit-animation: ping 1.5s ease-in-out infinite both;
  animation: ping 1.5s ease-in-out infinite both;
}

@-webkit-keyframes ping {
  0% {
    -webkit-transform: scale(0.2);
    transform: scale(0.2);
    opacity: 0.8;
  }

  80% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    opacity: 0;
  }

  100% {
    -webkit-transform: scale(2.2);
    transform: scale(2.2);
    opacity: 0;
  }
}

@keyframes ping {
  0% {
    -webkit-transform: scale(0.2);
    transform: scale(0.2);
    opacity: 0.8;
  }

  80% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    opacity: 0;
  }

  100% {
    -webkit-transform: scale(2.2);
    transform: scale(2.2);
    opacity: 0;
  }
}
</style>
