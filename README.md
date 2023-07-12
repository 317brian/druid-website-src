# Druid project website

https://druid.apache.org/

This repo is used to build the Apache Druid website. It is the source of truth for website pages such as the website homepage and pages like Community.

A different repo houses the source of truth for the following:
* Markdown files for `docs`
* the sidebar file, and
* the redirects file.

For those, see [`apache/druid`](https://github.com/apache/druid/). 

The target repo for the website when you're ready to publish is [`druid-website`](https://github.com/apache/druid-website).

## Building the site for Druid 26 and later

By default, the repo always starts/builds latest if you run `npm start|build` or `yarn start|build`. This way, you can always view the site locally.

The build scripts described in [Publish the site](#publish-the-site) handles building the versioned docs for when you're ready to do a release.

To start, you'll need to install Docusaurus 2.  

### Install Docusaurus 2

You need a supported version of node, such as the latest Node 18.

Run `npm install` or `yarn install` in the root of the directory.

### Publish the site

These are the steps to publish either a new release or a hotfix to an existing release. Note that you'll always need to build `latest` so that the downloads page lists the correct versions, so the script automatically builds latest for you.

> Note that the build scripts expect `apache/druid` and `apache/druid-website-src` to be peers at the same directory level.

1. Update the version list in `static/js/version.js`. The highest release version goes in position 0. This file is used by `RecentReleasesWidget` on the home page to display the 3 most recent versions and to interpolate the download links on the download page.

2. From the root of `druid-website-src`, go to `scripts/`.

3. In `copy_druid_docs.py`, set `source_directory` to your OSS Druid repo. Make sure you're on the correct branch in your Druid repo before continuing. 

4. In `scripts`, run `python do_all_things.py -v VERSION`. The script assumes you used `npm` to install. See example 3 if you use `yarn`.

   **Example 1**: `python do_all_things.py -v 26.0.0`. This command builds version 26.0.0 of the docs and latest.

   **Example 2**: If you already have Docusaurus 2 installed, skip the installation by specifying the flag `--skip-install`. For example, `python do_all_things.py -v 26.0.0 --skip-install`

   **Example 3**: If you want to use yarn instead of npm, specify the flag `--yarn`. For example, `python do_all_things.py -v 26.0.0 --skip-install --yarn`

   For more information about the scripts, see [the scripts](#the-scripts).

5. Find the build output in `druid-website-src/build`. If you go to `build/docs`, you should see the latest and the version you specified. These are the files for the built site. If you run it locally, such as with `http-server` you'll get the latest version of the site, such as `localhost:8080/docs/latest/` and the version you built, such as `localhost:8080/docs/26.0.0/`.

6. Make a PR to `https://github.com/apache/druid-website` with the contents of `published_versions`.

### The scripts

The `do_all_things.py` script is a wrapper for the following scripts:

- Uses `copy_druid_docs.py` to copy the markdown files for the docs over and inserts the actual Druid version for the variable {{DRUIDVERSION}}. It copies the Markdown files to `docs/VERSION`. If the version is going to be the highest version available, it'll also copy to `docs/latest`.

- Uses `build_docs.py` to build the version you want and latest. You always need to build latest to update the downloads page and the widgets on the home page. It also handles writing the redirects to create the versioned redirects for (`/docs/VERSION/`). 

Once `do_all_things.py` builds the version you want and latest, it copies the build output to `published_versions`. You can use this directory to republish the whole site.

`published_versions` houses the following:

- The old CSS needed to properly render Docusaurus 1 pages
- The website pages, like Community
- All the built HTML pages for the docs, including pre-Docusaurus 2 HTML pages

## Building the site before Druid 26

The HTML files for pre-Docusaurus 2 versions (versions before 26) are in .published_versions/docs. If you need to publish updated versions of those files for any reason, you need to build the docs with Docusaurus 1 in the `apache/druid` repo:

1. Checkout the branch you want to build, such as `25.0.0`.
2. In `apache/druid/website`, run `npm run build` or `yarn build`.
3. Copy the HTML files for the docs from the build output to `published_versions/docs/VERSION`.
4. Publish the site as you normally would for a new release.

## Contributing

See [CONTRIBUTING.md](https://github.com/apache/druid-website-src/blob/master/CONTRIBUTING.md).

