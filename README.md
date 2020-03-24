# BrowserExtensions
This repository contains code that I implemented to create browser extensions for Safari, Firefox and Chrome.

- [Firefox Extension](https://github.com/DinDev3/BrowserExtensions/tree/development/FirefoxExtension)
  - [Borderify](https://github.com/DinDev3/BrowserExtensions/tree/development/FirefoxExtension/borderify)
  - [Magnify](https://github.com/DinDev3/BrowserExtensions/tree/development/FirefoxExtension/magnify)
- [Chrome Extension](https://github.com/DinDev3/BrowserExtensions/tree/development/ChromeExtension/Start)
- [Safari Extension](https://github.com/DinDev3/BrowserExtensions/tree/development/SafariExtension/FB%20View%20Controller)

<hr>

## Steps followed in developing each Browser Extension
### Firefox Extension

I referred the official Mozilla developer documentation to create the [Firefox pluggin: Magnify](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)

1. Created manifest.json
2. Included manifest_version, name, version, description, icons, content_scripts in manifest.json
3. Under content_scripts; "matches" defines the URL at which the extension is activated and "js" specifies the script that'll load when the extension is used.
4. The magnify.js file was given the JS function to change the magnification of the content of the body.
5. To debug and test the extension; the [about:debugging]() page was opened and "Load Temporary Add-on" was clicked under the "This Firefox" menu. The manifest file of the browser extension was opened here.

### Chrome Extension


### Safari Extension
