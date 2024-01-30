# [tab](https://tab.4mbl.net)
>
> A simple link viewer with support for custom data sources.

## Table of Contents

* [Table of Contents](#table-of-contents)
* [Technologies](#technologies)
* [Usage](#usage)
  * [Customizing Data](#customizing-data)
  * [Link Groups](#link-groups)
  * [Using as Chrome new tab page](#using-as-chrome-new-tab-page)
  * [Other Features](#other-features)
* [License](#license)

## Technologies

* [Astro](https://astro.build/)
* [Vercel](https://vercel.com/)

## Usage

Head to [tab.4mbl.net](https://tab.4mbl.net) to use the site.

### Customizing Data

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

    Only URL is required. Title and body are optional.

2. Upload the file to a public server accessible via https. For example: <https://npoint.io>.
3. Pass in the URL of the uploaded file to the `src` query parameter without the https protocol. For example: [`https://tab.4mbl.net/?src=4mbl.link/example/custom-new-tab-data`](https://tab.4mbl.net/?src=4mbl.link/example/custom-new-tab-data). You might need to encode the url if it contains special characters.

Multiple data sources can be used by separating them with a semicolon.

### Link Groups

You can also define group of links in the following way:

```json
[
  {
    "url": "https://www.google.com",
  },
  {
    "type": "group",
    "title": "Social Media",
    "links": [
      {
        "url": "https://www.facebook.com",
      },
      {
        "url": "https://www.twitter.com",
      }
    ]
  }
]
```

### Using as Chrome new tab page

To use the site as your new tab page in Chrome, follow these steps:

1. Install some extension that allows you to set a custom new tab page. For example:
 [New Tab Redirect](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna).
2. You might need to grant [pop-up and redirect](https://support.google.com/chrome/answer/95472) permissions for the site.
3. Set the new tab page url to [tab.4mbl.net](https://tab.4mbl.net). You can also pass the `src` query parameter here.

Other browsers might have similar extensions. You are on your own there.

### Other Features

* Disable the editor with the `editor=false` query parameter.

## License

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) license.
