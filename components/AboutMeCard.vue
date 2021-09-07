<template>
  <div class="about-me-card">
    <div class="about-me-card-holder">
      <span v-if="card.job" class="picture-desc"
        ><span class="material-icons-outlined">work</span>
        <p>{{ card.job }}</p></span
      >
      <span v-if="card.book" class="picture-desc"
        ><span class="material-icons-outlined">auto_stories</span>
        <p>{{ card.book }}</p></span
      >
      <span v-if="card.formalEducation" class="picture-desc"
        ><span class="material-icons-outlined">school</span>
        <p>{{ card.formalEducation }}</p></span
      >
      <span v-if="card.born" class="picture-desc"
        ><span class="material-icons-outlined">child_care</span>
        <p>{{ card.born }}</p></span
      >
      <span v-if="card.informalEducation" class="picture-desc">
        <span class="material-icons-outlined">history_edu</span>
        <p>{{ card.informalEducation }}</p>
      </span>
      <span v-if="card.date" class="picture-desc"
        ><span class="material-icons-outlined">update</span
        >{{ card.date }}</span
      >
      <span v-if="card.details">
        <span v-for="(detail, i) in card.details" :key="i" class="informal">
          <span class="picture-desc">
            <span class="desc-wrapper"
              >{{ detail.courseName
              }}<span class="material-icons-outlined"
                >radio_button_checked</span
              >
            </span>
            <span class="desc-wrapper"
              >{{ detail.tech
              }}<span class="material-icons-outlined">construction</span>
            </span>
          </span>
        </span>
      </span>
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

      .picture-desc {
        flex-direction: unset;

        .material-icons-outlined {
          margin-right: 10px;
          margin-left: unset;
        }
      }

      .informal {
        .picture-desc {
          display: grid;

          .desc-wrapper {
            display: flex;
            flex-direction: row-reverse;

            &:first-child {
              margin: 0 0 5px 20px;
            }

            &:last-child {
              margin: 0 0 0 59px;
              font-family: "Rajdhani", sans-serif;

              .material-icons-outlined {
                font-size: 20px;
              }
            }
          }
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

    .picture-desc {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      margin-bottom: 10px;

      .material-icons-outlined {
        margin-left: 10px;
      }

      p {
        font-weight: 600;
      }
    }

    .informal {
      .picture-desc {
        display: grid;

        .desc-wrapper {
          display: flex;
          justify-content: flex-end;

          &:first-child {
            margin: 0 20px 5px 0;
          }

          &:last-child {
            margin-right: 59px;
            font-family: "Rajdhani", sans-serif;

            .material-icons-outlined {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}

.ping {
  -webkit-animation: ping 2s ease-in-out infinite both;
  animation: ping 2s ease-in-out infinite both;
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
