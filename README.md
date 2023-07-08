# [tab](https://tab.4mbl.net)
> A simple link viewer with support for custom data sources.


## Table of Contents
* [Table of Contents](#table-of-contents)
* [Technologies](#technologies)
* [Usage](#usage)
  * [Using custom data source](#using-custom-data-source)
  * [Using as Chrome new tab page](#using-as-chrome-new-tab-page)
* [License](#license)


## Technologies
* [Astro](https://astro.build/)
* [Vercel](https://vercel.com/)


## Usage
Head to [tab.4mbl.net](https://tab.4mbl.net) see the site with default data.

### Using custom data source

You can pass custom json data source with the `src` query parameter.

1. Create a json file with the following structure:
```json
[
  {
    "url": "https://www.google.com",
    "title": "Google",
    "body": "Search Engine"
  },
  {
    "url": "https://www.github.com",
    "title": "GitHub",
    "body": "Code Hosting"
  }
]
```
2. Upload the file to a public server.
3. Access the site with the `src` query parameter set to the uploaded file's url without the https protocol. For example: [`https://tab.4mbl.net/?src=4mbl.link/example/custom-new-tab-data`](https://tab.4mbl.net/?src=4mbl.link/example/custom-new-tab-data).

### Using as Chrome new tab page

To use the site as your new tab page in Chrome, follow these steps:
1. Install some extension that allows you to set a custom new tab page. I use [New Tab Redirect](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna) for Chrome.
2. You might need to grant [pop-up and redirect](https://support.google.com/chrome/answer/95472) permissions for the site.
3. Set the new tab page url to [tab.4mbl.net](https://tab.4mbl.net). You can also pass the `src` query parameter here.

Other browsers might have similar extensions. You are on your own there.

## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) license.
