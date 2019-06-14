<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <section class="banner-grid">
        <div class="content">
          <div class="title-block center-align">
            <h1 class="LOOKING-TO-BUILD-AN-APP">
              LOOKING TO BUILD AN APP?
            </h1>
            <p class="Find-out-how-much-it-will-cost">
              Find out how much it will cost
            </p>
          </div>
        </div>
      </section>
      <div class="blocks-container">
        <img src="/svg/Image_3.png" alt="" class="Image-3">
        <h2 class="center-align Get-An-Estimate">
          Get An Estimate
        </h2>
        <div class="content">
          <section class="platform container card">
            <div class="center-align platform-title-block">
              <h3 class="">
                Platform
              </h3>
              <p>
                Which platform will the app be built on?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="android"
                class="input-block android-block first-half first-half-vertical grid three"
                :class="{selected:isPlatform('android')}"
                @click="togglePlatform('android')"
              >
                <img
                  src="svg/Android.png"
                  srcset="svg/Android@2x.png 2x,
             svg/Android@3x.png 3x"
                  alt="Android"
                >
                <label for="android">Android</label>
                <div class="radio-button flex">
                  <input id="android" v-model="platform" type="radio" name="platform" value="android">
                  <span />
                </div>
              </div>
              <div
                ref="Apple"
                class="input-block ios-block first-half grid three"
                :class="{selected:isPlatform('ios')}"
                @click="togglePlatform('ios')"
              >
                <img
                  src="svg/Apple.png"
                  srcset="svg/Apple@2x.png 2x,
             svg/Android@3x.png 3x"
                  alt="iOs"
                >
                <label for="ios">iOs</label>
                <div class="radio-button flex">
                  <input id="ios" v-model="platform" type="radio" name="platform" value="ios">
                  <span />
                </div>
              </div>
              <div
                ref="Windows"
                class="input-block windows-block first-half-vertical grid three"
                :class="{selected:isPlatform('windows')}"
                @click="togglePlatform('windows')"
              >
                <img
                  src="svg/Windows.png"
                  srcset="svg/Windows@2x.png 2x,
             svg/Windows@3x.png 3x"
                  alt="Windows"
                >
                <label for="windows">Windows</label>

                <div class="radio-button flex">
                  <input id="windows" v-model="platform" type="radio" name="platform" value="windows">
                  <span />
                </div>
              </div>
              <div
                ref="hybrid"
                class="input-block hybrid-block grid three"
                :class="{selected:isPlatform('hybrid')}"
                @click="togglePlatform('hybrid')"
              >
                <img
                  src="svg/Hybrid.png"
                  srcset="svg/Hybrid@2x.png 2x,
             svg/Hybrid@3x.png 3x"
                  alt="Hybrid"
                >
                <label for="hybrid">Hybrid</label>
                <div class="radio-button flex">
                  <input id="hybrid" v-model="platform" type="radio" name="platform" value="hybrid">
                  <span />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/partials/customNavBar.vue'

export default {
  name: 'AppEstimatorVue',
  components: {
    NavBar
  },
  data: () => {
    return {
      android: false,
      platform: ''
    }
  },
  methods: {
    togglePlatform(value) {
      this.platform = value
      // eslint-disable-next-line no-console
      console.log(this.$refs)
    },
    isPlatform(value) {
      return this.platform === value
    }
  }
}
</script>

<style lang="scss" scoped>
  .three {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .page {
    .banner {
      padding-top: 2rem;
      position: relative;

      .bg {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background: $light;
        height: 85vh;
        z-index: -1;
      }

      .banner-grid {
        .content {
          padding: {
            top: 2%;
          };
        }

        .title-block {
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.2;

          h1 {
            font-size: 3em;
            letter-spacing: normal;
            color: #3c2a9d;
          }

          p {
            font-size: 29px;
            color: #454545;

          }
        }
      }

      .blocks-container {
        background-image: linear-gradient(184deg, #503cbe, #4527a0);
        position: relative;
        margin: {
          top: 40vh;
        }
        padding: {
          top: 3%;
        };

        .Image-3 {
          /*width: 888px;*/
          /*height: 520px;*/
          position: absolute;
          z-index: -1;
          top: -30vh;
          margin: 0 auto;
          left: 0;
          right: 0;
        }

        .Get-An-Estimate {
          font-size: 48px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.21;
          letter-spacing: normal;
          color: $light;
          margin: {
            bottom: 3%;
          };
        }

        .content {
          height: 100vh;

          .options-block {
            /*width: 446px;*/
            /*height: 101px;*/
            margin: {
              top: 4%
            };
            border: solid thin #c8c7d8;
            background-color: #ffffff;
            border-radius: 5px;

            .input-block {
              width: 50%;
              color: $gray;
              padding: 2% 1%;
              /*justify-items: center;*/
              align-items: center;

              &:hover {
                cursor: pointer;
              }

              &.selected {
                border-bottom: solid 5px #5d9f4b;
                background-color: #ecf8e4;
              }

              &.first-half {
                border-bottom: solid thin #c8c7d8;
              }

              &.first-half-vertical {
                border-right: solid thin #c8c7d8;
              }

              & > div.flex {
                align-items: center;
              }

              img + label {
                margin: {
                  left: 35%;
                };
              }

              .radio-button {
                height: 100%;

                input[type="radio"] {
                  opacity: 0;
                }

                input[type="radio"] + span {
                  background: url("~assets/svg/uncheck-mark.svg") 0 -1px no-repeat;
                  height: 33.4px;
                  padding: 0 0 0 33.4px;
                }

                input[type="radio"]:checked + span {
                  background: url("~assets/svg/check-mark.svg") 0 -1px no-repeat;
                }
              }
            }
          }

          .platform {
            height: 463px;
            border-radius: 10px;
            /*box-shadow: 0 3px 20px 0 rgba(81, 63, 152, 0.54);*/
            background-color: $light;
            margin: 0 auto;
            padding: 3% 4%;
          }

          .platform-title-block {
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            letter-spacing: normal;

            h3 {
              /*width: 168px;*/
              /*height: 54px;*/
              line-height: 1.2;
              font-size: 2.2em;
              color: #4628a1;
            }

            p {
              /*width: 552px;*/
              /*height: 39px;*/
              font-size: 1.8em;
              color: $gray;
            }
          }
        }
      }
    }
  }
</style>
