# About

Hide Instagram Seen and Story Seen Notifications
A Chrome extension to block Instagram's "seen" notifications for direct messages and stories. This ensures your activity remains private while using Instagram.

Features
Hide Message Seen Notifications: Prevent Instagram from marking your direct messages as read.
Hide Story Seen Notifications: Block story view updates to keep your profile off story viewers' lists.
How It Works
The extension intercepts network requests related to Instagram's "seen" actions and blocks them before they are sent to the server. This is done by overriding the fetch and XMLHttpRequest APIs.

## Installation

Download this repository as a ZIP file or clone it using

```bash
bash
Copy
Edit
git clone <https://github.com/TojanHorse/Message-Story-Hider--chome-extension.git>
Extract the contents if downloaded as a ZIP.
Open Chrome Extensions Page
```

## Usage

```python
Go to chrome://extensions/ in your Chrome browser.

Enable Developer Mode

Toggle the Developer Mode switch in the top-right corner of the page.
Load Unpacked Extension

Click on Load unpacked and select the folder containing the extracted files (manifest.json, content.js).
Verify Installation
```

## Checking working

Ensure the extension appears in the list of extensions and is enabled.
Usage Instructions
Open Instagram in Chrome.
Use Instagram as usual.
For DMs: Messages you view will not show as "seen" to the sender.
For Stories: Stories you watch will not record your profile in the viewers' list.
Open the Console Tab in Developer Tools (F12) to verify logs if needed.
File Overview
manifest.json: Defines the extension's configuration, permissions, and behavior.
content.js: Contains the logic to block "seen" and "story seen" network requests.
Troubleshooting
Extension Not Loading:

Ensure you selected the correct folder containing manifest.json.
Check for typos or missing files in the folder.
Feature Not Working:

Please make sure to update tests as appropriate.

## Checking working
Confirm that the extension is enabled.
Open DevTools (F12) > Console and look for logs like:
sql
Copy
Edit
Blocked "seen" notification
Blocked story view
Notes
This extension works only in the Chrome browser.
You need to reload Instagram after enabling the extension to ensure it works properly.

## Disclaimer
This extension is for personal use and educational purposes. Use it responsibly and ensure compliance with Instagram's terms of service.
