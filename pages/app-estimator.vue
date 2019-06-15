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
            <div class="center-align title-block platform-title-block container">
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
            <div class="center-align title-block design-title-block container">
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
                  <input
                    id="stock_ui"
                    v-model="option_block.design"
                    type="radio"
                    name="design"
                    value="Stock or Template UI"
                  >
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
                  <input
                    id="custom_ui"
                    v-model="option_block.design"
                    type="radio"
                    name="design"
                    value="Custom Branded UI"
                  >
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
                  <input
                    id="game_animations"
                    v-model="option_block.design"
                    type="radio"
                    name="design"
                    value="Game Animations"
                  >
                  <span />
                </div>
              </div>
            </div>

            <hr class="option-block-separator container">

            <div class="center-align title-block design-title-block container">
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

          <section class="signup-login-secure container card">
            <div class="center-align signup-login-block  title-block signup-login-title-block container">
              <p>
                How will your user signup and login into the app?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="email_password"
                class="input-block email-password-block grid three"
                :class="{selected:isOption('signup_login','Email/Password Sign Up')}"
                @click="toggleOption('signup_login','Email/Password Sign Up')"
              >
                <img
                  src="svg/email_1.png"
                  srcset="svg/email_1@2x.png 2x,
             svg/email_1@3x.png 3x"
                  alt="Email/Password Sign Up"
                >
                <div class="grid no-gap">
                  <label for="email_password">Email/Password Sign Up</label>
                  <small>Classic sign up with an email and password</small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="email_password"
                    v-model="option_block.signup_login"
                    type="radio"
                    name="signup_login"
                    value="Email/Password Sign Up"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="social_networks"
                class="input-block custom-ui-block grid three"
                :class="{selected:isOption('signup_login','Social Networks')}"
                @click="toggleOption('signup_login','Social Networks')"
              >
                <img
                  src="svg/business-affiliate-network.png"
                  srcset="svg/business-affiliate-network@2x.png 2x,
             svg/business-affiliate-network@3x.png 3x"
                  alt="Social Networks"
                >
                <div class="grid no-gap">
                  <label for="social_networks">Social Networks</label>
                  <small>(Facebook, Twitter, Github, LinkedIn)</small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="social_networks"
                    v-model="option_block.signup_login"
                    type="radio"
                    name="signup_login"
                    value="Social Networks"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="multi_tenant"
                class="input-block animated-ui-block grid three"
                :class="{selected:isOption('signup_login','Multi-tenant Accounts')}"
                @click="toggleOption('signup_login','Multi-tenant Accounts')"
              >
                <img
                  src="svg/account.png"
                  srcset="svg/account@2x.png 2x,
             svg/account@3x.png 3x"
                  alt="Multi-tenant Accounts"
                >
                <div class="grid no-gap">
                  <label for="multi_tenant">Multi-tenant Accounts</label>
                  <small>Accounts base signups, each with their own
                    administrators and users.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="multi_tenant"
                    v-model="option_block.signup_login"
                    type="radio"
                    name="design"
                    value="Multi-tenant Accounts"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="subdomains"
                class="input-block game-animations-block grid three"
                :class="{selected:isOption('signup_login','Subdomains')}"
                @click="toggleOption('signup_login','Subdomains')"
              >
                <img
                  src="svg/http.png"
                  srcset="svg/http@2x.png 2x,
             svg/http@3x.png 3x"
                  alt="Subdomains"
                >
                <div class="grid no-gap">
                  <label for="subdomains">Subdomains</label>
                  <small style="font-size: 0.5em">In combination with multi-tenant accounts, this would
                    allow your customers to access their account with their
                    own subdomain, eg <i>www.acme.com</i> or <i>www.xyz.com</i></small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="subdomains"
                    v-model="option_block.signup_login"
                    type="radio"
                    name="signup_login"
                    value="Subdomains"
                  >
                  <span />
                </div>
              </div>
            </div>

            <hr class="option-block-separator container">

            <div class="center-align title-block secure-title-block container">
              <p>
                How do you wish to secure your app?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="security"
                class="input-block security-block grid two-auto"
                :class="{selected:isOption('secure','Security not important')}"
                @click="toggleOption('secure','Security not important')"
              >
                <div class="grid no-gap">
                  <label for="security">Security not important</label>
                  <small>for initial MVP versions
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="security"
                    v-model="option_block.secure"
                    type="radio"
                    name="secure"
                    value="Security not important"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="ssl"
                class="input-block ssl-block grid two-auto"
                :class="{selected:isOption('secure','SSL Certificate based Security')}"
                @click="toggleOption('secure','SSL Certificate based Security')"
              >
                <div class="grid no-gap">
                  <label for="ssl">SSL Certificate based Security</label>
                  <small>The industry standard way to ensure your users data is safe
                    during the use of this app
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="ssl"
                    v-model="option_block.secure"
                    type="radio"
                    name="secure"
                    value="SSL Certificate based Security"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="dos"
                class="input-block dos-block grid two-auto"
                :class="{selected:isOption('secure','DoS Protection')}"
                @click="toggleOption('secure','DoS Protection')"
              >
                <div class="grid no-gap">
                  <label for="dos">DoS Protection</label>
                  <small>For high volume app that with a high public profile, you may
                    be the target of Denial of Service attacks
                  </small>
                </div>
                <div class="radio-button flex">
                  <input id="dos" v-model="option_block.secure" type="radio" name="secure" value="DoS Protection">
                  <span />
                </div>
              </div>
              <div
                ref="two_factor"
                class="input-block two_factor-block grid two-auto"
                :class="{selected:isOption('secure','Two Factor Authentication')}"
                @click="toggleOption('secure','Two Factor Authentication')"
              >
                <div class="grid no-gap">
                  <label for="two_factor">Two Factor Authentication</label>
                  <small>for initial MVP versions
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="two_factor"
                    v-model="option_block.secure"
                    type="radio"
                    name="secure"
                    value="Two Factor Authentication"
                  >
                  <span />
                </div>
              </div>
            </div>
          </section>

          <section class="generated-content container card">
            <div class="center-align title-block generated-content-title-block container">
              <p>
                What type of user generated content
                do you want on your app?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="dashboard"
                class="input-block dashboard-block grid two-auto"
                :class="{selected:isOption('generated_content','Dashboard')}"
                @click="toggleOption('generated_content','Dashboard')"
              >
                <div class="grid no-gap">
                  <label for="dashboard">Dashboard</label>
                  <small>A dashboard would usually be the first thing a user sees when logged
                    in and would summarize data and perhaps show graphs and notices
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="dashboard"
                    v-model="option_block.generated_content"
                    type="radio"
                    name="generated_content"
                    value="Dashboard"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="activity"
                class="input-block activity-block grid two-auto"
                :class="{selected:isOption('generated_content','Activity Feed')}"
                @click="toggleOption('generated_content','Activity Feed')"
              >
                <div class="grid no-gap">
                  <label for="activity">Activity Feed</label>
                  <small>An Activity feed would perhaps show what users have
                    been doing recently
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="activity"
                    v-model="option_block.generated_content"
                    type="radio"
                    name="generated_content"
                    value="Activity Feed"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="file_upload"
                class="input-block file_upload-block grid two-auto"
                :class="{selected:isOption('generated_content','File Upload')}"
                @click="toggleOption('generated_content','File Upload')"
              >
                <div class="grid no-gap">
                  <label for="file_upload">File Upload</label>
                  <small>Users should be able to upload file content, eg. images, PDF’s ect
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="file_upload"
                    v-model="option_block.generated_content"
                    type="radio"
                    name="generated_content"
                    value="File Upload"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="user_profile"
                class="input-block user_profile-block grid two-auto"
                :class="{selected:isOption('generated_content','User Profile')}"
                @click="toggleOption('generated_content','User Profile')"
              >
                <div class="grid no-gap">
                  <label for="user_profile">User Profile</label>
                  <small>Users should be able to upload file content, eg. images, PDF’s ect
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="user_profile"
                    v-model="option_block.generated_content"
                    type="radio"
                    name="generated_content"
                    value="User Profile"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="transactional_emails"
                class="input-block transactional_emails-block grid two-auto"
                :class="{selected:isOption('generated_content','Transactional Emails')}"
                @click="toggleOption('generated_content','Transactional Emails')"
              >
                <div class="grid no-gap">
                  <label for="transactional_emails">Transactional Emails</label>
                  <small>Users might receive regular automated emails from the app
                    to drive engagement or notify them of changes
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="transactional_emails"
                    v-model="option_block.generated_content"
                    type="radio"
                    name="generated_content"
                    value="Transactional Emails"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="tags_allows"
                class="input-block tags_allows-block grid two-auto"
                :class="{selected:isOption('generated_content','Tags allows')}"
                @click="toggleOption('generated_content','Tags allows')"
              >
                <div class="grid no-gap">
                  <label for="tags_allows">Tags allows</label>
                  <small>Users to categorize information so that others can find
                    relevant information
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="tags_allows"
                    v-model="option_block.generated_content"
                    type="radio"
                    name="generated_content"
                    value="Tags allows"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="ratings"
                class="input-block ratings-block grid two-auto"
                :class="{selected:isOption('generated_content','Ratings or review')}"
                @click="toggleOption('generated_content','Ratings or review')"
              >
                <div class="grid no-gap">
                  <label for="ratings">Ratings or review</label>
                  <small>typical use case for ratings and reviews might be restaurants
                    reviews or customer satisfaction ratings.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="ratings"
                    v-model="option_block.generated_content"
                    type="radio"
                    name="generated_content"
                    value="Ratings or review"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="av_processing"
                class="input-block av_processing-block grid two-auto"
                :class="{selected:isOption('generated_content','Audio/Video Processing')}"
                @click="toggleOption('generated_content','Audio/Video Processing')"
              >
                <div class="grid no-gap">
                  <label for="av_processing">Audio/Video Processing</label>
                  <small>Encoding, modification and storage of audio or video files.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="av_processing"
                    v-model="option_block.generated_content"
                    type="radio"
                    name="generated_content"
                    value="Audio/Video Processing"
                  >
                  <span />
                </div>
              </div>
            </div>
          </section>

          <section class="dates-and-locations container card">
            <div class="center-align title-block dates-and-locations-title-block container">
              <p>
                What type of Dates & Locations do you
                want on your app?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="calendaring"
                class="input-block calendaring-block grid two-auto"
                :class="{selected:isOption('dates_and_locations','Calendaring')}"
                @click="toggleOption('dates_and_locations','Calendaring')"
              >
                <div class="grid no-gap">
                  <label for="calendaring">Calendaring</label>
                  <small>Display and capture of data in a calendar format
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="calendaring"
                    v-model="option_block.dates_and_locations"
                    type="radio"
                    name="dates_and_locations"
                    value="Calendaring"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="map_data"
                class="input-block map_data-block grid two-auto"
                :class="{selected:isOption('dates_and_locations','Display of Map Data/Geolocation')}"
                @click="toggleOption('dates_and_locations','Display of Map Data/Geolocation')"
              >
                <div class="grid no-gap">
                  <label for="map_data">Display of Map Data/Geolocation</label>
                  <small>Showing a map with data points, eg. venue locations, driver location
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="map_data"
                    v-model="option_block.dates_and_locations"
                    type="radio"
                    name="dates_and_locations"
                    value="Display of Map Data/Geolocation"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="custom_map"
                class="input-block custom_map-block grid two-auto"
                :class="{selected:isOption('dates_and_locations','Display of custom map markers/regions:')}"
                @click="toggleOption('dates_and_locations','Display of custom map markers/regions:')"
              >
                <div class="grid no-gap">
                  <label for="custom_map">Display of custom map markers/regions:</label>
                  <small>Allowing the user to select a map area visually or custom
                    icons for different location types
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="custom_map"
                    v-model="option_block.dates_and_locations"
                    type="radio"
                    name="dates_and_locations"
                    value="Display of custom map markers/regions:"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="booking"
                class="input-block booking-block grid two-auto"
                :class="{selected:isOption('dates_and_locations','Booking')}"
                @click="toggleOption('dates_and_locations','Booking')"
              >
                <div class="grid no-gap">
                  <label for="booking">Booking</label>
                  <small>Electing start and end dates, managing capacity etc.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="booking"
                    v-model="option_block.dates_and_locations"
                    type="radio"
                    name="dates_and_locations"
                    value="Booking"
                  >
                  <span />
                </div>
              </div>
            </div>
          </section>

          <section class="social-and-engagements container card">
            <div class="center-align title-block social-and-engagements-title-block container">
              <p>
                What type of Social & Engagement  do
                you want on your app?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="messaging"
                class="input-block messaging-block grid two-auto"
                :class="{selected:isOption('social_and_engagement','Messaging')}"
                @click="toggleOption('social_and_engagement','Messaging')"
              >
                <div class="grid no-gap">
                  <label for="messaging">Messaging</label>
                  <small>Allowing users within the app to send messages to other
                    account users or groups of users
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="messaging"
                    v-model="option_block.social_and_engagement"
                    type="radio"
                    name="social_and_engagement"
                    value="Messaging"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="forums"
                class="input-block forums-block grid two-auto"
                :class="{selected:isOption('social_and_engagement','Forums or commenting')}"
                @click="toggleOption('social_and_engagement','Forums or commenting')"
              >
                <div class="grid no-gap">
                  <label for="forums">Forums or commenting</label>
                  <small>Classic forum functional for account users or simple
                    commenting on information
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="forums"
                    v-model="option_block.social_and_engagement"
                    type="radio"
                    name="social_and_engagement"
                    value="Forums or commenting"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="social_sharing"
                class="input-block social-sharing-block grid two-auto"
                :class="{selected:isOption('social_and_engagement','Social Sharing')}"
                @click="toggleOption('social_and_engagement','Social Sharing')"
              >
                <div class="grid no-gap">
                  <label for="social_sharing">Social Sharing</label>
                  <small>Ability to share pieces of information in a controlled way on
                    social media accounts to drive engagement.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="social_sharing"
                    v-model="option_block.social_and_engagement"
                    type="radio"
                    name="social_and_engagement"
                    value="Social Sharing"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="open_graph"
                class="input-block open_graph-block grid two-auto"
                :class="{selected:isOption('social_and_engagement','Push to Facebook Open Graph')}"
                @click="toggleOption('social_and_engagement','Push to Facebook Open Graph')"
              >
                <div class="grid no-gap">
                  <label for="open_graph">Push to Facebook Open Graph</label>
                  <small>Pushing content from your app directly into the Facebook Graphs
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="open_graph"
                    v-model="option_block.social_and_engagement"
                    type="radio"
                    name="social_and_engagement"
                    value="Push to Facebook Open Graph"
                  >
                  <span />
                </div>
              </div>
            </div>
          </section>

          <section class="social-and-engagements container card">
            <div class="center-align title-block social-and-engagements-title-block container">
              <p>
                What type of Billing or eCommerce
                do you want on the app?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="subscription"
                class="input-block subscription-block grid two-auto"
                :class="{selected:isOption('billing','Subscription plans')}"
                @click="toggleOption('billing','Subscription plans')"
              >
                <div class="grid no-gap">
                  <label for="subscription">Subscription plans</label>
                  <small>Allowing users within the app to send messages to other
                    account users or groups of users
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="subscription"
                    v-model="option_block.billing"
                    type="radio"
                    name="billing"
                    value="Subscription plans"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="payment"
                class="input-block payment-block grid two-auto"
                :class="{selected:isOption('billing','Payment Processing')}"
                @click="toggleOption('billing','Payment Processing')"
              >
                <div class="grid no-gap">
                  <label for="payment">Payment Processing</label>
                  <small>You will process adhoc or regular payment from users and
                    manage refunds, ect.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="payment"
                    v-model="option_block.billing"
                    type="radio"
                    name="billing"
                    value="Payment Processing"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="cart"
                class="input-block subscription-block grid two-auto"
                :class="{selected:isOption('billing','Shopping Cart')}"
                @click="toggleOption('billing','Shopping Cart')"
              >
                <div class="grid no-gap">
                  <label for="cart">Shopping Cart</label>
                  <small>Users will be able to browse products and add them to a cart,
                    Amazon style
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="cart"
                    v-model="option_block.billing"
                    type="radio"
                    name="billing"
                    value="Shopping Cart"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="marketplace"
                class="input-block marketplace-block grid two-auto"
                :class="{selected:isOption('billing','User Marketplace')}"
                @click="toggleOption('billing','User Marketplace')"
              >
                <div class="grid no-gap">
                  <label for="cart">User Marketplace</label>
                  <small>Users will be able to sell products or services to others users
                    and your revenue model will be based on a commission model.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="marketplace"
                    v-model="option_block.billing"
                    type="radio"
                    name="billing"
                    value="User Marketplace"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="product"
                class="input-block product-block grid two-auto"
                :class="{selected:isOption('billing','Product Management')}"
                @click="toggleOption('billing','Product Management')"
                style="width: 100%"
              >
                <div class="grid no-gap">
                  <label for="product">Product Management</label>
                  <small>Ability to manage data, eg. product listings, availability or other data relevant to your domain.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="product"
                    v-model="option_block.billing"
                    type="radio"
                    name="billing"
                    value="Product Management"
                  >
                  <span />
                </div>
              </div>
            </div>
          </section>

          <section class="types container card">
            <div class="center-align title-block types-title-block container">
              <p>
                What type of Admin, Feedback & Analytics
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="cms_integration"
                class="input-block cms_integration-block grid two-auto"
                :class="{selected:isOption('types','Dashboard')}"
                @click="toggleOption('types','Dashboard')"
              >
                <div class="grid no-gap">
                  <label for="cms_integration">CMS Integration</label>
                  <small>A content management system would allow editing of significant
                    parts of the static content of the app without developer intervention.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="cms_integration"
                    v-model="option_block.types"
                    type="radio"
                    name="types"
                    value="Dashboard"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="user_admin"
                class="input-block user_admin-block grid two-auto"
                :class="{selected:isOption('types','User Admin Page')}"
                @click="toggleOption('types','User Admin Page')"
              >
                <div class="grid no-gap">
                  <label for="user_admin">User Admin Page</label>
                  <small>Account administrators would be able to
                    list/add/remove/suspend users.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="user_admin"
                    v-model="option_block.types"
                    type="radio"
                    name="types"
                    value="User Admin Page"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="approval"
                class="input-block approval-block grid two-auto"
                :class="{selected:isOption('types','Moderation/Content Approval')}"
                @click="toggleOption('types','Moderation/Content Approval')"
              >
                <div class="grid no-gap">
                  <label for="approval">Moderation/Content Approval</label>
                  <small>Account administration would oversee content submitted by
                    users for publication and would have an approval workflow
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="approval"
                    v-model="option_block.types"
                    type="radio"
                    name="types"
                    value="Moderation/Content Approval"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="intercom"
                class="input-block intercom-block grid two-auto"
                :class="{selected:isOption('types','Intercom')}"
                @click="toggleOption('types','Intercom')"
              >
                <div class="grid no-gap">
                  <label for="intercom">Intercom</label>
                  <small>A leading third party platform for managing user engagement,
                    drip emails, feature announcements ect
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="intercom"
                    v-model="option_block.types"
                    type="radio"
                    name="types"
                    value="Intercom"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="usage_analytics"
                class="input-block usage_analytics-block grid two-auto"
                :class="{selected:isOption('types','Usage Analytics')}"
                @click="toggleOption('types','Usage Analytics')"
              >
                <div class="grid no-gap">
                  <label for="usage_analytics">Usage Analytics</label>
                  <small>Find out  where your users come from and how they use your app.
                    We recommend Kissmetrics and Google Analytics
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="usage_analytics"
                    v-model="option_block.types"
                    type="radio"
                    name="types"
                    value="Usage Analytics"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="crash_reporting"
                class="input-block crash_reporting-block grid two-auto"
                :class="{selected:isOption('types','Crash Reporting')}"
                @click="toggleOption('types','Crash Reporting')"
              >
                <div class="grid no-gap">
                  <label for="crash_reporting">Crash Reporting</label>
                  <small>When things go wrong you need to know we recommend Sentry.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="crash_reporting"
                    v-model="option_block.types"
                    type="radio"
                    name="types"
                    value="Crash Reporting"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="performance"
                class="input-block performance-block grid two-auto"
                :class="{selected:isOption('types','Performance Monitoring')}"
                @click="toggleOption('types','Performance Monitoring')"
              >
                <div class="grid no-gap">
                  <label for="performance">Performance Monitoring</label>
                  <small>As you scale up it is important to know that you are maintaining a
                    good user experience and making efficient use of your hosting
                    environment.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="performance"
                    v-model="option_block.types"
                    type="radio"
                    name="types"
                    value="Performance Monitoring"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="multilingual"
                class="input-block av_processing-block grid two-auto"
                :class="{selected:isOption('types','Multilingual Support')}"
                @click="toggleOption('types','Multilingual Support')"
              >
                <div class="grid no-gap">
                  <label for="multilingual">Multilingual Support</label>
                  <small>Provide support for multiple languages for your app
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="multilingual"
                    v-model="option_block.types"
                    type="radio"
                    name="types"
                    value="Multilingual Support"
                  >
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
        screen: '',
        signup_login: '',
        secure: '',
        generated_content: '',
        dates_and_locations: '',
        social_and_engagement: '',
        billing: '',
        types: '',
        external_api: ''
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

  .two-auto {
    grid-template-columns: 1fr auto;
  }

  .no-gap {
    grid-gap: 0;
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

            small {
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              font-size: 0.7em;
              line-height: 1.17;
              letter-spacing: normal;
              /*text-align: left;*/
              color: #909090;
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
