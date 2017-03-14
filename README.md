# Developer Tools Gadget
An [OU Campus](https://omniupdate.com/products/oucampus) gadget designed for web developers.

## Features
- Minify/uglify CSS
- Minify/uglify JavaScript
- Compile SCSS
- Compile LESS

Works in all modern browsers.

## OU Campus Installation
Follow the OU Campus [gadget installation instructions](http://support.omniupdate.com/oucampus10/setup/gadgets/new-gadget.html) to install this gadget. When prompted for the gadget URL, enter `https://gadget.devtools.host/`

### Troubleshooting
If you are running an ESL/self-hosted version of OU Campus (i.e., your OU Campus server domain is something other than _omniupdate.com_), then you will likely encounter a certificate error when trying to install this gadget.

To resolve this, your server administrator will need to add the [Let's Encrypt intermediate certificate(s)](https://letsencrypt.org/certificates/) to your Java truststore (you'll need to install at least the Let’s Encrypt Authority X3 certificate, but it's probably best to install the X4 backup certificate as well).

To add the certificates, just use the Java keytool app:
```
keytool -import -trustcacerts -keystore /path/to/oucampus/truststore -alias letsencryptX3 -file /path/to/lets-encrypt-x3-cross-signed.pem

keytool -import -trustcacerts -keystore /path/to/oucampus/truststore -alias letsencryptX4 -file /path/to/lets-encrypt-x4-cross-signed.pem
```

## Installing and running locally
This gadget requires a NodeJS back-end to handle the core functionality. To install, run
```
git clone https://github.com/lashkari/gadget-devtools.git

cd gadget-devtools

npm install

npm run dev
```

## Limitations
This gadget will only access the currently selected file and cannot not handle processing of additional files through SCSS/LESS `@imports`.

## Reporting issues
This is NOT an official gadget. Please report any issues you find here on GitHub, **do not contact OmniUpdate customer support about this gadget**.

## Contributing
Contributions (by way of pull requests and reporting issues) are very welcome.