# DataLayer Debugger Extension

DataLayer Debugger is a Chrome extension that allows developers to intercept and log all calls to the `dataLayer.push` method, commonly used in conjunction with Google Tag Manager. This extension is particularly useful for debugging and auditing dataLayer interactions by printing them to the console.

## Features

- Toggle debugging on and off with a single click.
- See real-time `dataLayer` interactions output in the Chrome DevTools Console.
- Easy to use with no configuration needed.

## Installation

To install the extension, follow these steps:

1. Clone the repository to your local machine or download the ZIP file and extract it.
    ```
    git clone https://github.com/your-username/DataLayer-Debugger.git
    ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" at the top right corner.
4. Click on "Load unpacked" and select the directory containing your extension files (the folder with the `manifest.json` file).
5. The DataLayer Debugger extension should now appear in your list of extensions and is ready for use.

## How to Use the DataLayer Debugger

1. Click on the DataLayer Debugger icon in the Chrome toolbar to open the popup.
2. Use the toggle button to turn debugging ON or OFF. When the toggle is blue and to the right, debugging is ON. When the toggle is grey and to the left, debugging is OFF.
3. To view the output, open the Chrome Developer Tools by right-clicking on any webpage and selecting "Inspect", or by pressing `Cmd + Option + I` (on Mac) or `Ctrl + Shift + I` (on Windows/Linux).
4. Navigate to the "Console" tab within the Developer Tools to see the logs of `dataLayer` interactions.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.



