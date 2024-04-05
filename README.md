# [tab](https://tab.4mbl.net)

> A simple link viewer with support for custom data sources.

## Table of Contents

* [Table of Contents](#table-of-contents)
* [Technologies](#technologies)
* [Usage](#usage)
  * [Customizing Data](#customizing-data)
    * [Passing links in the URL](#passing-links-in-the-url)
    * [External JSON Data Source](#external-json-data-source)
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

You can customize the displayed links in two ways. You can either pass the links in the URL or use an external JSON data source.

#### Passing links in the URL

Simply pass the links as semicolon (or comma) separated values in the `links` query parameter.

For example: [`https://tab.4mbl.net/?links=example.com;example.org`](https://tab.4mbl.net/?links=example.com;example.org). You may also include the protocol in the URL.

It is also possible to pass local file paths. For example: [`https://tab.4mbl.net/?links=file:///C:/path/to/local/file`](https://tab.4mbl.net/?links=file:///C:/path/to/local/file).

#### External JSON Data Source

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
          "body": "Code Hosting",
          "icon": "https://octodex.github.com/images/original.png"
      }
    ]
    ```

    Only `url` is required. Other fields are optional.

2. Upload the file to a public server accessible via https. For example: <https://npoint.io>.
3. Pass in the URL of the uploaded file to the `src` query parameter without the https protocol. For example: [`https://tab.4mbl.net/?src=4mbl.link/example/custom-new-tab-data`](https://tab.4mbl.net/?src=4mbl.link/example/custom-new-tab-data). You might need to encode the url if it contains special characters.

Multiple data sources can be used by separating them with a semicolon (or comma).

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

* The editor can be disabled with the `editor=false` query parameter.

## License

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) license.
