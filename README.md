# "Maupassant IC" Hugo Theme (International Collection)

Maupassant IC is a free, minimalistic, light, and responsive Hugo theme designed for bloggers. It offers a clean design focused on readability and simplicity, ensuring your content stands out on desktops, laptops, tablets and phones.

## → [Demo Site](https://bryndin.github.io/maupassant-hugo/)

## Key Features

- Responsive design
- Minimalistic and clean layout
- Easy customization
- SEO friendly
- Google Tag Manager integration (Google Analytics, etc.)
- Multilingual support
- Extensive customizations

### Comprehensive Feature List

- **Multiple Languages (i18n)**: Supports English, French, German, Spanish, Japanese, Korean, Chinese (simplified & traditional).
- **Google Tag Manager (GTM)**: Integrates seamlessly with Google Analytics, Ads, Optimize, and many other services without requiring code changes.
- **Comments**: Compatible with [Disqus](https://disqus.com/), [Utterances](https://utteranc.es/), and [Waline](https://waline.js.org/en/) comment systems.
- **Categories & Tags**: Includes dedicated pages and sidebar list widgets.
- **Recent Posts**: Display the most recent submissions.
- **Related Posts**: Automatically suggest related posts to readers.
- **Multiple Authors**: Support for multiple authors via front matter.
- **Site Search**: Offers both local-native search and Google site search options.
- **RSS**: Works out-of-the-box for syndicating your content.
- **Custom CSS and JS files**: Easily configure to point to your own custom files.
- **Archives**: Dedicated page for listing all your posts.
- **Configurable Sidebar**: Options for displaying recent posts, ads, categories & tags, third-party links, and social network links.
- **CI/CD**: Sample continuous integration via GitHub workflows.

## Requirements

- Hugo >= 0.127.0

The theme was developed and tested with v0.127.0. If this version is not available for your default package manager, try one from [Snap](https://snapcraft.io/hugo).

## Installation

1. **Clone the Repository into your Hugo website directory**:

    ```sh
    git clone https://github.com/bryndin/maupassant-hugo/ themes/maupassant
    ```

2. **Copy example configuration and modify it for your needs**:

    ```sh
    cp themes/maupassant/exampleSite/hugo.toml .
    ```

### Updating the Theme

To update the theme, navigate to the theme directory and pull the latest changes:

```sh
cd themes/maupassant
git pull
```

## Configuration

Follow the comments in sample [`hugo.toml`](https://github.com/bryndin/maupassant-hugo/blob/master/exampleSite/hugo.toml)

### Setting up GihHub CI/CD

To automate website deployment from a GitHub repository to [GitHub Pages](https://pages.github.com/), adjust [our workflow](https://github.com/bryndin/maupassant-hugo/blob/master/.github/workflows/hugo.yaml) of the theme `exampleSite`.

## Customization

**Layout Customization**
Modify layout files in the `layouts` directory to customize the theme's appearance.

**Adding Widgets**
Add widgets by modifying the `sidebar.html` partial in the `layouts/partials` directory.

**Configuring Menus**
Define menus in the `config.toml` as shown in the example configuration.

**Customizing the Footer**
Edit the `footer.html` partial to customize the footer content.

## Troubleshooting

**Reporting Bugs**
Report bugs by creating an [issue](https://github.com/bryndin/maupassant-hugo/issues).

**Getting Help**
For help, check the [Hugo community forums](https://discourse.gohugo.io/) or [Hugo documentation](https://gohugo.io/documentation/).

### Local Search

Local search is based on RSS (`index.html` file). If you don't see the list of results

- Check RSS is working locally [`http://localhost:1313/index.xml`](http://localhost:1313/index.xml) (or `http://localhost:1313/<path from baseURL>/index.xml`).
- Do the same for the deployed site.
- Check local search is enabled in `hugo.toml`

    ```toml
    [params.search]
      disable = false
      localSearch = true
    ```

- Verify there is a `content/search.md` file with the `type: "search"` line in the [front matter](https://gohugo.io/content-management/front-matter/).

### Archive Page

- Verify there is a `content/archives.md` file with the `type: "archives"` line in the [front matter](https://gohugo.io/content-management/front-matter/).

### Google Tag Manager, Google Analytics, AdSense, etc

No need to integrate Google Analytics, AdSense, etc. code into your website. The theme has the support for Google Tag Manager (GTM) containerization. Include your GTM key in `hugo.toml` and the rest of integrations are done via [GTM website](https://tagmanager.google.com/#/home).

```toml
[params.googletagmanager]
  gtmid = "GTM-xxxxxx" # Google Tag Manager ID

```

Follow Google's instructions, they claim it takes them up to 48h to start showing data.

### Wrong i18n Translations

All translations are in the `i18n` directory in `theme/maupassant`. If there's an error, please open an [issue](https://github.com/bryndin/maupassant-hugo/issues), indicate the language and suggest the correct translation. Pull requests are always welcome.

## Contributing

**Submitting Pull Requests**
Fork the repository, create a new branch, and submit a pull request with your changes.

## Credits

**The Maupassant theme** was originally created by [Cho](https://github.com/pagecho/maupassant) for the [Typecho](https://github.com/typecho/typecho) PHP blogging platform. It has been ported to multiple platforms, including Hugo. The initial Hugo port was created by [JokerQyou](https://github.com/JokerQyou) and further improved by [Flysnow-org](https://github.com/flysnow-org). These versions are primarily targeted at an oriental audience and offer good integrations with Chinese services.

"Maupassant IC" is an enhanced version tailored for an international audience.

**SVG Icons** from [Bootstrap Icons](https://icons.getbootstrap.com/).
