<template>
  <div id="footer">
    <div class="footer">
      <div v-for="(contact, i) of contacts" :key="i">
        <a :href="`${contact.href}`" target="_blank">
          <component :is="`${contact.svg}`" />
        </a>
      </div>
    </div>
    <div class="copy">&copy; {{ new Date().getFullYear() }}.</div>
  </div>
</template>

<script>
import gmail from "@/assets/images/gmail.svg?inline";
import linkedin from "@/assets/images/linkedin.svg?inline";
import github from "@/assets/images/github.svg?inline";

export default {
  name: "Footer",
  components: {
    gmail,
    linkedin,
    github,
  },
  data() {
    return {
      contacts: [
        {
          svg: "gmail",
          href: "mailto:orhidea.martinic@gmail.com",
        },
        {
          svg: "github",
          href: "https://github.com/suncica-negra",
        },
        {
          svg: "linkedin",
          href: "https://www.linkedin.com/in/dea-k-331534187/",
        },
      ],
    };
  },
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

    svg {
      width: 40px;
      height: 40px;
    }

    #github path,
    #linkedin path {
      fill: var(--footer-svg) !important;
    }

    #email {
      rect,
      polygon {
        fill: var(--bg) !important;
      }

      path {
        fill: var(--footer-svg) !important;
      }
    }

    svg:hover {
      animation: pulse 1s infinite;
      transition: 0.3s ease-in-out;
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
