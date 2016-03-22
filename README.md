# Developer Tools Gadget
An [OU Campus](https://omniupdate.com/products/oucampus) gadget designed for web developers.

## Features
- Minify/uglify CSS
- Minify/uglify JavaScript
- Compile SCSS
- Compile LESS

Works in all modern browsers.

## OU Campus Installation
Follow the OU Campus [gadget installation instructions](http://support.omniupdate.com/oucampus10/setup/gadgets/new-gadget.html) to install this gadget. When prompted for the gadget URL, enter `https://devtools.gadget.host/`

### Troubleshooting
If you are running an ESL/self-hosted version of OU Campus (i.e., your OU Campus server domain is something other than _omniupdate.com_), then you will likely encounter a certificate error when trying to install this gadget.

To resolve this, your server administrator will need to add the [Let's Encrypt intermediate certificate(s)](https://letsencrypt.org/certificates/) to your Java keystore (you'll need to install at least the Let’s Encrypt Authority X1 certificate, but it's probably best to install X2 as well).

To add the certificates, just use the Java keytool app:
```
keytool -import -trustcacerts -keystore /path/to/oucampus/keystore -alias letsencryptX1 -file /path/to/lets-encrypt-x1-cross-signed.pem

keytool -import -trustcacerts -keystore /path/to/oucampus/keystore -alias letsencryptX2 -file /path/to/lets-encrypt-x2-cross-signed.pem
```

## Installing and running locally
This gadget requires a NodeJS back-end to handle the core functionality. To install, run
```
git clone https://github.com/lashkari/gadget-devtools.git

cd gadget-devtools

npm install

npm run dev
```

## Reporting issues
This is NOT an official gadget. Please report any issues you find here on GitHub, **do not contact OmniUpdate customer support about this gadget**.

## Contributing
Contributions (by way of pull requests and reporting issues) are very welcome. I've still got some code cleanup to do and then I'll add some more info on how to contribute code.
