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
            <div class="center-align title-block platform-title-block">
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
                class="input-block android-block grid three"
                :class="{selected:isOption('platform','android')}"
                @click="toggleOption('platform','android')"
              >
                <img
                  src="svg/Android.png"
                  srcset="svg/Android@2x.png 2x,
             svg/Android@3x.png 3x"
                  alt="Android"
                >
                <label for="android">Android</label>
                <div class="radio-button flex">
                  <input id="android" v-model="option_block.platform" type="radio" name="platform" value="android">
                  <span />
                </div>
              </div>
              <div
                ref="Apple"
                class="input-block ios-block grid three"
                :class="{selected:isOption('platform','ios')}"
                @click="toggleOption('platform','ios')"
              >
                <img
                  src="svg/Apple.png"
                  srcset="svg/Apple@2x.png 2x,
             svg/Android@3x.png 3x"
                  alt="iOs"
                >
                <label for="ios">iOs</label>
                <div class="radio-button flex">
                  <input id="ios" v-model="option_block.platform" type="radio" name="platform" value="ios">
                  <span />
                </div>
              </div>
              <div
                ref="Windows"
                class="input-block windows-block grid three"
                :class="{selected:isOption('platform','windows')}"
                @click="toggleOption('platform','windows')"
              >
                <img
                  src="svg/Windows.png"
                  srcset="svg/Windows@2x.png 2x,
             svg/Windows@3x.png 3x"
                  alt="Windows"
                >
                <label for="windows">Windows</label>

                <div class="radio-button flex">
                  <input id="windows" v-model="option_block.platform" type="radio" name="platform" value="windows">
                  <span />
                </div>
              </div>
              <div
                ref="hybrid"
                class="input-block hybrid-block grid three"
                :class="{selected:isOption('platform','hybrid')}"
                @click="toggleOption('platform','hybrid')"
              >
                <img
                  src="svg/Hybrid.png"
                  srcset="svg/Hybrid@2x.png 2x,
             svg/Hybrid@3x.png 3x"
                  alt="Hybrid"
                >
                <label for="hybrid">Hybrid</label>
                <div class="radio-button flex">
                  <input id="hybrid" v-model="option_block" type="radio" name="platform" value="hybrid">
                  <span />
                </div>
              </div>
            </div>
          </section>

          <section class="design container card">
            <div class="center-align title-block design-title-block">
              <h3 class="">
                Design
              </h3>
              <p>
                What would your UI theme be?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="stock_ui"
                class="input-block stock-block grid three"
                :class="{selected:isOption('design','Stock or Template UI')}"
                @click="toggleOption('design','Stock or Template UI')"
              >
                <img
                  src="svg/layout.png"
                  srcset="svg/layout@2x.png 2x,
             svg/layout@3x.png 3x"
                  alt="Stock or Template UI"
                >
                <label for="stock_ui">Stock or Template UI</label>
                <div class="radio-button flex">
                  <input id="stock_ui" v-model="option_block.design" type="radio" name="design" value="Stock or Template UI">
                  <span />
                </div>
              </div>
              <div
                ref="custom_ui"
                class="input-block custom-ui-block grid three"
                :class="{selected:isOption('design','Custom Branded UI')}"
                @click="toggleOption('design','Custom Branded UI')"
              >
                <img
                  src="svg/layout_1.png"
                  srcset="svg/layout_1@2x.png 2x,
             svg/layout_1@3x.png 3x"
                  alt="Custom Branded UI"
                >
                <label for="custom_ui">Custom Branded UI</label>
                <div class="radio-button flex">
                  <input id="custom_ui" v-model="option_block.design" type="radio" name="design" value="Custom Branded UI">
                  <span />
                </div>
              </div>
              <div
                ref="animated_ui"
                class="input-block animated-ui-block grid three"
                :class="{selected:isOption('design','Animated UI')}"
                @click="toggleOption('design','Animated UI')"
              >
                <img
                  src="svg/play-button.png"
                  srcset="svg/play-button@2x.png 2x,
             svg/play-button@3x.png 3x"
                  alt="Animated UI"
                >
                <label for="animated_ui">Windows</label>

                <div class="radio-button flex">
                  <input id="animated_ui" v-model="option_block.design" type="radio" name="design" value="Animated UI">
                  <span />
                </div>
              </div>
              <div
                ref="game_animations"
                class="input-block game-animations-block grid three"
                :class="{selected:isOption('design','Game Animations')}"
                @click="toggleOption('design','Game Animations')"
              >
                <img
                  src="svg/console.png"
                  srcset="svg/console@2x.png 2x,
             svg/console@3x.png 3x"
                  alt="Game Animations "
                >
                <label for="game_animations">Game Animations</label>
                <div class="radio-button flex">
                  <input id="game_animations" v-model="option_block.design" type="radio" name="design" value="Game Animations">
                  <span />
                </div>
              </div>
            </div>

            <hr class="option-block-separator container">

            <div class="center-align title-block design-title-block">
              <p>
                How many approximate numbers of screens your app have?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="one_six"
                class="input-block one_six-block grid three"
                :class="{selected:isOption('screen','1 - 6')}"
                @click="toggleOption('screen','1 - 6')"
              >
                <img
                  src="svg/responsive_1.png"
                  srcset="svg/responsive_1@2x.png 2x,
             svg/responsive_1@3x.png 3x"
                  alt="one_six"
                >
                <label for="one_six">1 - 6</label>
                <div class="radio-button flex">
                  <input id="one_six" v-model="option_block.screen" type="radio" name="screen" value="1 - 6">
                  <span />
                </div>
              </div>
              <div
                ref="seven_twelve"
                class="input-block seven_twelve-block grid three"
                :class="{selected:isOption('screen','7 - 12')}"
                @click="toggleOption('screen','7 - 12')"
              >
                <img
                  src="svg/responsive_1.png"
                  srcset="svg/responsive_1@2x.png 2x,
             svg/responsive_1@3x.png 3x"
                  alt="seven_twelve"
                >
                <label for="seven_twelve">7 - 12</label>
                <div class="radio-button flex">
                  <input id="seven_twelve" v-model="option_block.screen" type="radio" name="screen" value="7 - 12">
                  <span />
                </div>
              </div>
              <div
                ref="thirteen_twenty"
                class="input-block thirteen_twenty-block grid three"
                :class="{selected:isOption('screen','13 - 20')}"
                @click="toggleOption('screen','13 - 20')"
              >
                <img
                  src="svg/responsive_1.png"
                  srcset="svg/responsive_1@2x.png 2x,
             svg/responsive_1@3x.png 3x"
                  alt="thirteen_twenty"
                >
                <label for="thirteen_twenty">13 - 20</label>
                <div class="radio-button flex">
                  <input id="thirteen_twenty" v-model="option_block.screen" type="radio" name="screen" value="13 - 20">
                  <span />
                </div>
              </div>
              <div
                ref="twenty_plus"
                class="input-block twenty_plus-block grid three"
                :class="{selected:isOption('screen','21+')}"
                @click="toggleOption('screen','21+')"
              >
                <img
                  src="svg/responsive_1.png"
                  srcset="svg/responsive_1@2x.png 2x,
             svg/responsive_1@3x.png 3x"
                  alt="twenty_plus"
                >
                <label for="twenty_plus">21+</label>
                <div class="radio-button flex">
                  <input id="twenty_plus" v-model="option_block.screen" type="radio" name="screen" value="21+">
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
      option_block: {
        platform: '',
        design: '',
        screen: ''
      }
    }
  },
  methods: {
    toggleOption(input, value) {
      this.option_block[input] = value
    },
    isOption(input, value) {
      return this.option_block[input] === value
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin radius($i) {
    @if ($i == 1) {
      border-top-left-radius: 5px;
    } @else if ($i == 2) {
      @include breakpoint($min: 767px) {
        border-top-right-radius: 5px;
      }
    } @else if ($i == 3) {
      @include breakpoint($min: 767px) {
        border-bottom-left-radius: 5px;
      }
    } @else {
      border-bottom-right-radius: 5px;
    }
  }

  .three {
    grid-template-columns: 0.5fr 1fr auto;
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
          min-height: 10vh;
          padding: {
            bottom: 5vh;
          }

          section {
            /*height: 463px;*/
            border-radius: 10px;
            /*box-shadow: 0 3px 20px 0 rgba(81, 63, 152, 0.54);*/
            background-color: $light;
            margin: 0 auto;
            padding: 3% 4%;
            margin: {
              bottom: 5%;
            }
          }

          section .title-block {
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

          .options-block {
            width: 90%;
            margin: {
              top: 4%
            };
            background-color: #ffffff;

            .input-block {
              width: 50%;
              color: $gray;
              padding: 2% 1%;
              /*justify-items: center;*/
              align-items: center;
              border: solid thin #c8c7d8;
              @for $i from 1 through 4 {
                &:nth-child(#{$i}) {
                  @include radius($i)
                }
              }
              @include breakpoint($max: 767px) {
                width: 100%;
              }

              &:hover {
                cursor: pointer;
              }

              &.selected {
                border: {
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: solid 5px #5d9f4b;
                }
                background-color: #ecf8e4;
              }

              & > div.flex {
                align-items: center;
              }

              & img {
                justify-self: center;
              }

              img + label {
                /*margin: {*/
                /*  left: 35%;*/
                /*};*/
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

          .option-block-separator {
            width: 90%;
            margin: {
              top: 3.8em;
              bottom: 3.8em;
            };
            border: solid 1px #c8c7d8;
          }
        }
      }
    }
  }
</style>
