# [_unnamed link viewer_](https://chr-new-tab.vercel.app/)
> A simple link viewer with support for custom data sources.


## Table of Contents
* [Table of Contents](#table-of-contents)
* [Technologies](#technologies)
* [Usage](#usage)
* [License](#license)


## Technologies
* [Astro](https://astro.build/)
* [Vercel](https://vercel.com/)


## Usage
Head to [https://chr-new-tab.vercel.app](https://chr-new-tab.vercel.app/) see the site with default data.

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
3. Access the site with the `src` query parameter set to the uploaded file's url without the https protocol. For example: [https://chr-new-tab.vercel.app/?src=4mbl.link/my-new-tab-data](https://chr-new-tab.vercel.app/?src=4mbl.link/my-new-tab-data).


## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) license.
