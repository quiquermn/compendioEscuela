import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "" : "",
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // ignore deliberate link to shiny 404 page
        if (
          path === "/not-found" &&
          referrer === "/blog/how-we-built-our-404-page"
        ) {
          return;
        }

        // otherwise fail the build
        return undefined;
      },
    },
  },
};

export default config;
