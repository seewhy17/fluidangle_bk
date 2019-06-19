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
              Get your app development cost
            </p>
          </div>
        </div>
      </section>
      <div class="blocks-container">
        <img
          src="/img/app-estimator/Image 3.png"
          srcset="/img/app-estimator/Image 3@2x.png 2x,
             /img/app-estimator/Image 3@3x.png 3x"
          alt=""
          class="Image-3"
        >
        <h2 class="center-align Get-An-Estimate">
          Get App Estimate
        </h2>
        <div class="content">
          <section class="platform container card">
            <div class="center-align title-block platform-title-block container">
              <h3 class="">
                App Platform
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
                  src="/img/app-estimator/Image 4.png"
                  srcset="/img/app-estimator/Image 4@2x.png 2x,
             /img/app-estimator/Image 4@3x.png 3x"
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
                  src="/img/app-estimator/Image 5.png"
                  srcset="/img/app-estimator/Image 5@2x.png 2x,
             /img/app-estimator/Image 5@3x.png 3x"
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
                  src="/img/app-estimator/Image 6.png"
                  srcset="/img/app-estimator/Image 6@2x.png 2x,
             /img/app-estimator/Image 6@3x.png 3x"
                  alt="Windows"
                >
                <label for="windows">Windows</label>

                <div class="radio-button flex">
                  <input id="windows" v-model="option_block.platform" type="radio" name="platform" value="windows">
                  <span />
                </div>
              </div>
              <div
                ref="crossPlatform"
                class="input-block hybrid-block grid three"
                :class="{selected:isOption('platform','Cross Platform')}"
                @click="toggleOption('platform','Cross Platform')"
              >
                <img
                  src="/img/app-estimator/Image 7.png"
                  srcset="/img/app-estimator/Image 7@2x.png 2x,
             /img/app-estimator/Image 7@3x.png 3x"
                  alt="Cross Platform"
                >
                <label for="cross-platform">Cross Platform</label>
                <div class="radio-button flex">
                  <input id="cross-platform" v-model="option_block" type="radio" name="platform" value="Cross Platform">
                  <span />
                </div>
              </div>
            </div>
          </section>

          <section class="design container card">
            <div class="center-align title-block design-title-block container">
              <h3 class="">
                App UI Design
              </h3>
              <p>
                What would your UI theme be?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="stock_ui"
                class="input-block stock-block grid three"
                :class="{selected:isOption('design','UX research & Wireframing')}"
                @click="toggleOption('design','UX research & Wireframing')"
              >
                <img
                  src="/img/app-estimator/layout.png"
                  srcset="/img/app-estimator/layout@2x.png 2x,
             /img/app-estimator/layout@3x.png 3x"
                  alt="Stock or Template UI"
                >
                <label for="stock_ui">UX research & Wireframing</label>
                <div class="radio-button flex">
                  <input
                    id="stock_ui"
                    v-model="option_block.design"
                    type="radio"
                    name="design"
                    value="UX research & Wireframing"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="custom_ui"
                class="input-block custom-ui-block grid three"
                :class="{selected:isOption('design','HiFi UI Design')}"
                @click="toggleOption('design','HiFi UI Design')"
              >
                <img
                  src="/img/app-estimator/layout (1).png"
                  srcset="/img/app-estimator/layout (1)@2x.png 2x,
             /img/app-estimator/layout (1)@3x.png 3x"
                  alt="Custom Branded UI"
                >
                <label for="custom_ui">HiFi UI Design</label>
                <div class="radio-button flex">
                  <input
                    id="custom_ui"
                    v-model="option_block.design"
                    type="radio"
                    name="design"
                    value="HiFi UI Design"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="animated_ui"
                class="input-block animated-ui-block grid three"
                :class="{selected:isOption('design','Prototyping')}"
                @click="toggleOption('design','Prototyping')"
              >
                <img
                  src="/img/app-estimator/play-button.png"
                  srcset="/img/app-estimator/play-button@2x.png 2x,
             /img/app-estimator/play-button@3x.png 3x"
                  alt="Animated UI"
                >
                <label for="animated_ui">Prototyping</label>

                <div class="radio-button flex">
                  <input id="animated_ui" v-model="option_block.design" type="radio" name="design" value="Prototyping">
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
                  src="/img/app-estimator/console.png"
                  srcset="/img/app-estimator/console@2x.png 2x,
             /img/app-estimator/console@3x.png 3x"
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
          </section>

          <section class="signup-login-secure container card">
            <div class="center-align signup-login-block  title-block signup-login-title-block container">
              <h3 class="">
                App User Access
              </h3>
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
                  src="/img/app-estimator/email (1).png"
                  srcset="/img/app-estimator/email (1)@2x.png 2x,
             /img/app-estimator/email (1)@3x.png 3x"
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
                  src="/img/app-estimator/business-affiliate-network.png"
                  srcset="/img/app-estimator/business-affiliate-network@2x.png 2x,
             /img/app-estimator/business-affiliate-network@3x.png 3x"
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
                  src="/img/app-estimator/account.png"
                  srcset="/img/app-estimator/account@2x.png 2x,
             /img/app-estimator/account@3x.png 3x"
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
                  src="/img/app-estimator/http.png"
                  srcset="/img/app-estimator/http@2x.png 2x,
             /img/app-estimator/http@3x.png 3x"
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
              <h3 class="">
                App UI Design
              </h3>
              <p>
                How do you wish to secure your app?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="security"
                class="input-block security-block grid three"
                :class="{selected:isOption('secure','Security not important')}"
                @click="toggleOption('secure','Security not important')"
              >
                <img
                  src="/img/app-estimator/shield (2).png"
                  srcset="/img/app-estimator/shield (2)@2x.png 2x,
             /img/app-estimator/shield (2)@3x.png 3x"
                  alt="Security"
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
                class="input-block ssl-block grid three"
                :class="{selected:isOption('secure','SSL Certificate based Security')}"
                @click="toggleOption('secure','SSL Certificate based Security')"
              >
                <img
                  src="/img/app-estimator/locked.png"
                  srcset="/img/app-estimator/locked@2x.png 2x,
             /img/app-estimator/locked@3x.png 3x"
                  alt="SSL"
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
                class="input-block dos-block grid three"
                :class="{selected:isOption('secure','DoS Protection')}"
                @click="toggleOption('secure','DoS Protection')"
              >
                <img
                  src="/img/app-estimator/shield (1).png"
                  srcset="/img/app-estimator/shield (1)@2x.png 2x,
             /img/app-estimator/shield (1)@3x.png 3x"
                  alt="DOS Protection"
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
                class="input-block two_factor-block grid three"
                :class="{selected:isOption('secure','Two Factor Authentication')}"
                @click="toggleOption('secure','Two Factor Authentication')"
              >
                <img
                  src="/img/app-estimator/authentication.png"
                  srcset="/img/app-estimator/authentication@2x.png 2x,
             /img/app-estimator/authentication@3x.png 3x"
                  alt="2fa Auth"
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
              <h3>
                App Content
              </h3>
              <p>
                What type of user generated content
                do you want on your app?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="dashboard"
                class="input-block dashboard-block grid three"
                :class="{selected:isOption('generated_content','Dashboard')}"
                @click="toggleOption('generated_content','Dashboard')"
              >
                <img
                  src="/img/app-estimator/dashboard.png"
                  srcset="/img/app-estimator/dashboard@2x.png 2x,
             /img/app-estimator/dashboard@3x.png 3x"
                  alt="Dashboard"
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
                class="input-block activity-block grid three"
                :class="{selected:isOption('generated_content','Activity Feed')}"
                @click="toggleOption('generated_content','Activity Feed')"
              >
                <img
                  src="/img/app-estimator/newspaper.png"
                  srcset="/img/app-estimator/newspaper@2x.png 2x,
               /img/app-estimator/newspaper@3x.png 3x"
                  alt="Activity"
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
                class="input-block file_upload-block grid three"
                :class="{selected:isOption('generated_content','File Upload')}"
                @click="toggleOption('generated_content','File Upload')"
              >
                <img
                  src="/img/app-estimator/folder.png"
                  srcset="/img/app-estimator/folder@2x.png 2x,
             /img/app-estimator/folder@3x.png 3x"
                  alt="File Upload"
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
                class="input-block user_profile-block grid three"
                :class="{selected:isOption('generated_content','User Profile')}"
                @click="toggleOption('generated_content','User Profile')"
              >
                <img
                  src="/img/app-estimator/user.png"
                  srcset="/img/app-estimator/user@2x.png 2x,
             /img/app-estimator/user@3x.png 3x"
                  alt="User Profile"
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
                class="input-block transactional_emails-block grid three"
                :class="{selected:isOption('generated_content','Transactional Emails')}"
                @click="toggleOption('generated_content','Transactional Emails')"
              >
                <img
                  src="/img/app-estimator/email (2).png"
                  srcset="/img/app-estimator/email (2)@2x.png 2x,
             /img/app-estimator/email (2)@3x.png 3x"
                  alt="Transaction Emails"
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
                class="input-block tags_allows-block grid three"
                :class="{selected:isOption('generated_content','Tags allows')}"
                @click="toggleOption('generated_content','Tags allows')"
              >
                <img
                  src="/img/app-estimator/price-tag.png"
                  srcset="/img/app-estimator/price-tag@2x.png 2x,
             /img/app-estimator/price-tag@3x.png 3x"
                  alt="Tags"
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
                class="input-block ratings-block grid three"
                :class="{selected:isOption('generated_content','Ratings or review')}"
                @click="toggleOption('generated_content','Ratings or review')"
              >
                <img
                  src="/img/app-estimator/star (2).png"
                  srcset="/img/app-estimator/http@2x.png 2x,
             /img/app-estimator/star (2)@3x.png 3x"
                  alt="Ratings"
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
                class="input-block av_processing-block grid three"
                :class="{selected:isOption('generated_content','Audio/Video Processing')}"
                @click="toggleOption('generated_content','Audio/Video Processing')"
              >
                <img
                  src="/img/app-estimator/audio.png"
                  srcset="/img/app-estimator/audio@2x.png 2x,
             /img/app-estimator/audio@3x.png 3x"
                  alt="AV Processing"
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
              <h3>
                App Events
              </h3>
              <p>
                What type of Dates & Locations do you
                want on your app?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="calendaring"
                class="input-block calendaring-block grid three"
                :class="{selected:isOption('dates_and_locations','Calendaring')}"
                @click="toggleOption('dates_and_locations','Calendaring')"
              >
                <img
                  src="/img/app-estimator/calendar (4).png"
                  srcset="/img/app-estimator/calendar (4)@2x.png 2x,
             /img/app-estimator/calendar (4)@3x.png 3x"
                  alt="Calendaring"
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
                class="input-block map_data-block grid three"
                :class="{selected:isOption('dates_and_locations','Display of Map Data/Geolocation')}"
                @click="toggleOption('dates_and_locations','Display of Map Data/Geolocation')"
              >
                <img
                  src="/img/app-estimator/geolocalization.png"
                  srcset="/img/app-estimator/geolocalization@2x.png 2x,
             /img/app-estimator/geolocalization@3x.png 3x"
                  alt="Map Data"
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
                class="input-block custom_map-block grid three"
                :class="{selected:isOption('dates_and_locations','Display of custom map markers/regions:')}"
                @click="toggleOption('dates_and_locations','Display of custom map markers/regions:')"
              >
                <img
                  src="/img/app-estimator/map-location.png"
                  srcset="/img/app-estimator/map-location@2x.png 2x,
             /img/app-estimator/map-location@3x.png 3x"
                  alt="Map Marker"
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
                class="input-block booking-block grid three"
                :class="{selected:isOption('dates_and_locations','Booking')}"
                @click="toggleOption('dates_and_locations','Booking')"
              >
                <img
                  src="/img/app-estimator/choices.png"
                  srcset="/img/app-estimator/choices@2x.png 2x,
             /img/app-estimator/choices@3x.png 3x"
                  alt="Booking"
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
              <h3>App Engagement</h3>
              <p>
                What type of Social & Engagement  do
                you want on your app?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="messaging"
                class="input-block messaging-block grid three"
                :class="{selected:isOption('social_and_engagement','Messaging')}"
                @click="toggleOption('social_and_engagement','Messaging')"
              >
                <img
                  src="/img/app-estimator/chat.png"
                  srcset="/img/app-estimator/chat@2x.png 2x,
             /img/app-estimator/chat@3x.png 3x"
                  alt="Messaging"
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
                class="input-block forums-block grid three"
                :class="{selected:isOption('social_and_engagement','Forums or commenting')}"
                @click="toggleOption('social_and_engagement','Forums or commenting')"
              >
                <img
                  src="/img/app-estimator/group (2).png"
                  srcset="/img/app-estimator/group (2)@2x.png 2x,
             /img/app-estimator/group (2)@3x.png 3x"
                  alt="Forums"
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
                class="input-block social-sharing-block grid three"
                :class="{selected:isOption('social_and_engagement','Social Sharing')}"
                @click="toggleOption('social_and_engagement','Social Sharing')"
              >
                <img
                  src="/img/app-estimator/conversation.png"
                  srcset="/img/app-estimator/conversation@2x.png 2x,
             /img/app-estimator/conversation@3x.png 3x"
                  alt="Social Sharing"
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
                class="input-block open_graph-block grid three"
                :class="{selected:isOption('social_and_engagement','Push to Facebook Open Graph')}"
                @click="toggleOption('social_and_engagement','Push to Facebook Open Graph')"
              >
                <img
                  src="/img/app-estimator/facebook.png"
                  srcset="/img/app-estimator/facebook@2x.png 2x,
             /img/app-estimator/facebook@3x.png 3x"
                  alt="Push to Facebook"
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

          <section class="billing container card">
            <div class="center-align title-block billing-title-block container">
              <h3>App Billing</h3>
              <p>
                What type of Billing or eCommerce
                do you want on the app?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="subscription"
                class="input-block subscription-block grid three"
                :class="{selected:isOption('billing','Subscription plans')}"
                @click="toggleOption('billing','Subscription plans')"
              >
                <img
                  src="/img/app-estimator/subscription.png"
                  srcset="/img/app-estimator/subscription@2x.png 2x,
             /img/app-estimator/subscription@3x.png 3x"
                  alt="Subscription"
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
                class="input-block payment-block grid three"
                :class="{selected:isOption('billing','Payment Processing')}"
                @click="toggleOption('billing','Payment Processing')"
              >
                <img
                  src="/img/app-estimator/credit-card.png"
                  srcset="/img/app-estimator/credit-card@2x.png 2x,
             /img/app-estimator/credit-card@3x.png 3x"
                  alt="Payment Processing"
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
                class="input-block subscription-block grid three"
                :class="{selected:isOption('billing','Shopping Cart')}"
                @click="toggleOption('billing','Shopping Cart')"
              >
                <img
                  src="/img/app-estimator/shopping.png"
                  srcset="/img/app-estimator/shopping@2x.png 2x,
             /img/app-estimator/shopping@3x.png 3x"
                  alt="Shopping Cart"
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
                class="input-block marketplace-block grid three"
                :class="{selected:isOption('billing','User Marketplace')}"
                @click="toggleOption('billing','User Marketplace')"
              >
                <img
                  src="/img/app-estimator/laptop (2).png"
                  srcset="/img/app-estimator/laptop (2)@2x.png 2x,
             /img/app-estimator/laptop (2)@3x.png 3x"
                  alt="User Marketplace"
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
                class="input-block product-block grid three"
                :class="{selected:isOption('billing','Product Management')}"
                @click="toggleOption('billing','Product Management')"
              >
                <img
                  src="/img/app-estimator/time.png"
                  srcset="/img/app-estimator/time@2x.png 2x,
             /img/app-estimator/time@3x.png 3x"
                  alt="Product Management"
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
              <div
                ref="emailMarketing"
                class="input-block email-block grid three"
                :class="{selected:isOption('email_marketing','Email Marketing')}"
                @click="toggleOption('email_marketing','Email Marketing')"
              >
                <img
                  src="/img/app-estimator/newsletter.png"
                  srcset="/img/app-estimator/newsletter@2x.png 2x,
             /img/app-estimator/newsletter@3x.png 3x"
                  alt="Product Management"
                >
                <div class="grid no-gap">
                  <label for="product">Email Marketing</label>
                </div>
                <div class="radio-button flex">
                  <input
                    id="email_marketing"
                    v-model="option_block.email_marketing"
                    type="radio"
                    name="billing"
                    value="Email Marketing"
                  >
                  <span />
                </div>
              </div>
            </div>
          </section>

          <section class="types container card">
            <div class="center-align title-block types-title-block container">
              <h3>App Admin & Analytics</h3>
              <p>
                What type of Admin, Feedback & Analytics
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="cms_integration"
                class="input-block cms_integration-block grid gear three"
                :class="{selected:isOption('types','Dashboard')}"
                @click="toggleOption('types','Dashboard')"
              >
                <img
                  src="/img/app-estimator/gear.png"
                  srcset="/img/app-estimator/gear@2x.png 2x,
             /img/app-estimator/gear@3x.png 3x"
                  alt="CMS Integration"
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
                class="input-block user_admin-block grid three"
                :class="{selected:isOption('types','User Admin Page')}"
                @click="toggleOption('types','User Admin Page')"
              >
                <img
                  src="/img/app-estimator/admin.png"
                  srcset="/img/app-estimator/admin@2x.png 2x,
             /img/app-estimator/admin@3x.png 3x"
                  alt="User Admin Page"
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
                class="input-block approval-block grid three"
                :class="{selected:isOption('types','Moderation/Content Approval')}"
                @click="toggleOption('types','Moderation/Content Approval')"
              >
                <img
                  src="/img/app-estimator/responsive (2).png"
                  srcset="/img/app-estimator/responsive (2)@2x.png 2x,
             /img/app-estimator/responsive (2)@3x.png 3x"
                  alt="Moderation Approval"
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
                class="input-block intercom-block grid three"
                :class="{selected:isOption('types','Intercom')}"
                @click="toggleOption('types','Intercom')"
              >
                <img
                  src="/img/app-estimator/intercom.png"
                  srcset="/img/app-estimator/intercom@2x.png 2x,
             /img/app-estimator/intercom@3x.png 3x"
                  alt="Intercom"
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
                class="input-block usage_analytics-block grid three"
                :class="{selected:isOption('types','Usage Analytics')}"
                @click="toggleOption('types','Usage Analytics')"
              >
                <img
                  src="/img/app-estimator/bar-chart.png"
                  srcset="/img/app-estimator/bar-chart@2x.png 2x,
             /img/app-estimator/bar-chart@3x.png 3x"
                  alt="Usage Analytics"
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
                class="input-block crash_reporting-block grid three"
                :class="{selected:isOption('types','Crash Reporting')}"
                @click="toggleOption('types','Crash Reporting')"
              >
                <img
                  src="/img/app-estimator/statistics.png"
                  srcset="/img/app-estimator/statistics@2x.png 2x,
             /img/app-estimator/statistics@3x.png 3x"
                  alt="Crash Reporting"
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
                class="input-block performance-block grid three"
                :class="{selected:isOption('types','Performance Monitoring')}"
                @click="toggleOption('types','Performance Monitoring')"
              >
                <img
                  src="/img/app-estimator/speed.png"
                  srcset="/img/app-estimator/speed@2x.png 2x,
             /img/app-estimator/speed@3x.png 3x"
                  alt="Performance Monitoring"
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
                class="input-block av_processing-block grid three"
                :class="{selected:isOption('types','Multilingual Support')}"
                @click="toggleOption('types','Multilingual Support')"
              >
                <img
                  src="/img/app-estimator/support (2).png"
                  srcset="/img/app-estimator/support (2)@2x.png 2x,
             /img/app-estimator/support (2)@3x.png 3x"
                  alt="Multilingual Support"
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

          <section class="external-api container card">
            <div class="center-align title-block external-api-title-block container">
              <h3>App Integrations</h3>
              <p>
                What Type of External APIs and Integration
                do you want for your app?
              </p>
            </div>
            <div class="options-block container flex wrap dir-row">
              <div
                ref="third_party"
                class="input-block messaging-block grid three"
                :class="{selected:isOption('external_api','Connect to one or more third party services')}"
                @click="toggleOption('external_api','Connect to one or more third party services')"
              >
                <img
                  src="/img/app-estimator/web.png"
                  srcset="/img/app-estimator/web@2x.png 2x,
             /img/app-estimator/web@3x.png 3x"
                  alt="Third Party Services"
                >
                <div class="grid no-gap">
                  <label for="third_party">Connect to one or more third party services</label>
                  <small>Perhaps a data feed that you need to integrate with or a partner app.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="third_party"
                    v-model="option_block.external_api"
                    type="radio"
                    name="external_api"
                    value="Connect to one or more third party services"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="sms"
                class="input-block sms-block grid three"
                :class="{selected:isOption('external_api','SMS Messaging')}"
                @click="toggleOption('external_api','SMS Messaging')"
              >
                <img
                  src="/img/app-estimator/chat (1).png"
                  srcset="/img/app-estimator/chat (1)@2x.png 2x,
             /img/app-estimator/chat (1)@3x.png 3x"
                  alt="SMS Messaging"
                >
                <div class="grid no-gap">
                  <label for="sms">SMS Messaging</label>
                  <small>Allow your app to send SMS messages
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="sms"
                    v-model="option_block.external_api"
                    type="radio"
                    name="external_api"
                    value="SMS Messaging"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="api"
                class="input-block api-block grid three"
                :class="{selected:isOption('external_api','An API for others to integrate with your app')}"
                @click="toggleOption('external_api','An API for others to integrate with your app')"
              >
                <img
                  src="/img/app-estimator/browser.png"
                  srcset="/img/app-estimator/browser@2x.png 2x,
             /img/app-estimator/browser@3x.png 3x"
                  alt="Api"
                >
                <div class="grid no-gap">
                  <label for="api">An API for others to integrate with your app</label>
                  <small>Ability to share pieces of information in a controlled way on
                    social media accounts to drive engagement.
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="api"
                    v-model="option_block.external_api"
                    type="radio"
                    name="external_api"
                    value="An API for others to integrate with your app"
                  >
                  <span />
                </div>
              </div>
              <div
                ref="number_masking"
                class="input-block number_masking-block grid three"
                :class="{selected:isOption('external_api','Phone Number Masking')}"
                @click="toggleOption('external_api','Phone Number Masking')"
              >
                <img
                  src="/img/app-estimator/agenda.png"
                  srcset="/img/app-estimator/agenda@2x.png 2x,
             /img/app-estimator/agenda@3x.png 3x"
                  alt="Phone Number Masking"
                >
                <div class="grid no-gap">
                  <label for="number_masking">Phone Number Masking</label>
                  <small>Calls made through your app will have masked numbers
                  </small>
                </div>
                <div class="radio-button flex">
                  <input
                    id="number_masking"
                    v-model="option_block.external_api"
                    type="radio"
                    name="external_api"
                    value="Phone Number Masking"
                  >
                  <span />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <section class="contact-form container">
      <p class="title center-align">Enter your details to get price estimation</p>
      <form action="" class="container">
        <div class="input-container">
          <div class="input-block">
            <input id="first-name" v-model="user.firstName" type="text" name="firstName" placeholder="First Name">
          </div>
          <div class="input-block">
            <input id="last-name" v-model="user.lastName" type="text" name="lastName" placeholder="Last Name">
          </div>
          <div class="input-block">
            <input id="email-address" v-model="user.email" type="text" name="email" placeholder="Email">
          </div>
          <div class="input-block">
            <input id="telephone" v-model="user.telephone" type="text" name="telephone" placeholder="Telephone">
          </div>
          <div class="input-block">
            <input id="company-name" v-model="user.companyName" type="text" name="companyName" placeholder="Company Name">
          </div>
        </div>
        <div class="button-container center-align flex">
          <button>Get Price Estimation</button>
        </div>
      </form>
    </section>
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
        email_marketing: '',
        secure: '',
        generated_content: '',
        dates_and_locations: '',
        social_and_engagement: '',
        billing: '',
        types: '',
        external_api: ''
      },
      user: {
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        companyName: ''
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
    grid-template-columns: 0.25fr 1fr auto;
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
          .generated-content{
            .input-block{
              &:nth-child(n+3){
                border-radius:0 ;
              }
            }
          }
        }
      }
    }
    .contact-form{
      padding: {
        top:4.41rem;
        bottom:4rem;
      };
      .title{
        margin: {
          bottom: 1.4rem;
        };
        font-size: 2rem;
        color:$grey;
      }
      .input-container{
        display: flex;
        flex-wrap: wrap;
        justify-items: center;
        .input-block{
          width: 49%;
          margin: {
            bottom: 1rem;
          };
          &:nth-child(even){
            margin-left:2%;
          }
          &:last-child{
            flex-grow: 2;
          }
        }
        input{
          width: 100%;
          padding: {
            top:1rem;
            bottom: 1.2rem;
            left:1.5rem;
            right:1.5rem;
          };
          color:$light-gray;
          border-radius: 6px;
          border: solid 1px $light-gray;

          &:focus{
            outline: 0;
          }
        }
      }
      .button-container{
        margin:{
          top:1rem;
        }
        width: 100%;
        button{
          background-color: #ffb100;
          width: 100%;
          border-radius: 10px;
          padding: {
            top: 1.45rem;
            bottom: 1.25rem;
          };
          border: 0;
          color:$light;
          font-weight: 700;
          font-size:1.45rem;
        }
      }

    }
  }
</style>
