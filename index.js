const shiki = require("shiki");

module.exports = {
  // Map of hooks
  hooks: {
    page: function (page) {
      return page;
    },
  },

  // Map of new blocks
  blocks: {
    code: function (block) {
      const config = this.config.get("pluginsConfig.shiki", {});
      const theme = config.theme || "dark-plus";

      const language = block.kwargs.language;

      const bundles = shiki.BUNDLED_LANGUAGES.filter((bundle) => {
        // Languages are specified by their id, they can also have aliases (i. e. "js" and "javascript")
        return bundle.id === language || bundle.aliases?.includes(language);
      });
      if (bundles.length === 0) {
        console.error(
          `Failed to highlight code: Language ${language} is not supported by Shiki.`
        );
        return block.body;
      }

      if (!shiki.BUNDLED_THEMES.includes(theme)) {
        console.error(
          `Failed to highlight code: Theme ${theme} is not supported by Shiki.`
        );
        return block.body;
      }

      return shiki
        .getHighlighter({
          theme,
          langs: [language],
        })
        .then((highlighter) => {
          return highlighter.codeToHtml(block.body, {
            lang: language,
          });
        });
    },
  },

  // Map of new filters
  filters: {},
};
