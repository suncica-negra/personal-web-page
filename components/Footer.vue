<template>
  <div id="footer">
    <div class="footer">
      <a href="mailto:orhidea.martinic@gmail.com" target="_blank">
        <svg
          version="1.1"
          id="email"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          width="40"
          height="40"
        >
          <rect x="64" y="64" style="fill: #eceff1" width="384" height="384" />
          <polygon
            style="fill: #cfd8dc"
            points="256,296.384 448,448 448,148.672 "
          />
          <path
            style="fill: #f44336"
            d="M464,64h-16L256,215.616L64,64H48C21.504,64,0,85.504,0,112v288c0,26.496,21.504,48,48,48h16V148.672
          l192,147.68L448,148.64V448h16c26.496,0,48-21.504,48-48V112C512,85.504,490.496,64,464,64z"
          />
        </svg>
      </a>
      <a href="https://github.com/suncica-negra" target="_blank">
        <svg
          viewBox="0 0 1024 998"
          aria-labelledby="github"
          id="github"
          width="40"
          height="40"
        >
          <path
            d="M0 512q0 166 95.5 298.5T343 996q6 1 10 1t6.5-1.5 4-3 2-5 .5-4.5V882q-37 4-66-.5t-45.5-14-29-23.5-17-25.5-9-24T194 780q-9-15-27-27.5t-27-20-2-14.5q50-26 113 66 34 51 119 30 10-41 40-70-116-21-172-86t-56-158q0-87 55-151-22-65 6-137 29-2 65 11.5t50.5 23T384 264q57-16 128.5-16T642 264q13-9 29-19t49-21.5 61-9.5q27 71 6 135 56 64 56 152 0 92-56.5 157.5T615 744q43 43 43 104v129q0 1 1 3 0 6 .5 9t4.5 6 11 3q154-52 251.5-185.5T1024 512q0-104-40.5-199t-109-163.5T711 40.5 512 0 313 40.5t-163.5 109T40.5 313 0 512z"
          ></path>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/dea-k-331534187/" target="_blank">
        <svg
          version="1.1"
          id="linkedin"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 382 382"
          style="enable-background: new 0 0 382 382"
          xml:space="preserve"
          width="40"
          height="40"
        >
          <path
            style="fill: #0077b7"
            d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
          C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
          H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
          c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
          s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
          c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
          c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
          c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
          L341.91,330.654L341.91,330.654z"
          />
        </svg>
      </a>
    </div>
    <div class="copy">&copy; {{ new Date().getFullYear() }}.</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
#footer {
  width: 100%;
  box-shadow: 0 0 7px var(--box-shadow-transparent);

  .footer {
    display: flex;
    justify-content: space-evenly;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;

    #github path,
    #linkedin path {
      fill: var(--footer-svg) !important;
      transition: all 0.5s ease-in-out;
    }

    #email {
      rect,
      polygon {
        fill: var(--bg) !important;
        transition: all 0.5s ease-in-out;
      }

      path {
        fill: var(--footer-svg) !important;
        transition: all 0.5s ease-in-out;
      }
    }

    a:hover {
      animation: pulse 1s infinite;
      transition: 0.3s ease-in-out;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }

      70% {
        transform: scale(1.1);
      }

      100% {
        transform: scale(1);
      }
    }
  }

  .copy {
    text-align: center;
    font-family: "Chakra Petch", sans-serif;
    font-size: 13px;
    padding-bottom: 20px;
    color: var(--copy);
  }
}
</style>
