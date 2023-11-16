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

## Usage

After installation, you'll see the DataLayer Debugger icon in your browser toolbar.

- To enable the debugger, simply click the icon. When the debugging is active, the icon will change to indicate that it's in the "ON" state.
- Open the Chrome DevTools Console to view the `dataLayer` interactions.
- To disable the debugger, click the icon again. The icon will revert to the "OFF" state.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.



