## cordova-ContentProviderPlugin

A generic Cordova plugin for querying Content Providers on Android devices.

## Android Content Providers

A complete list of available content providers in Android can be found here:
http://developer.android.com/reference/android/provider/package-summary.html

Content Providers in Android can be usefull to query information such as SMS, Contacts, Calendar, and much more. Some applications use Content Providers to store their data, and this data can be queried by any third party app.

## Note About Permissions

Most content providers require to add special permissions in `AndroidManifest.xml` file. For example, if you want to query the `content://sms/` provider, you will need to add the following line in the manifest (see Android SDK for more info):

    <uses-permission android:name="android.permission.READ_SMS" />

You can add permissions through the `plugin.xml` file of the Cordova plugin. There is an example of how this can be achieved in comments of the `plugin.xml` of this plugin. The same way, this can probably be achieved by adding the same content to the `config.xml` of your Cordova project (although I haven't tested it).

## Installation

Through Github Repo (latest):

    cordova plugin add https://github.com/drivenwinder/cordova-ContentProviderPlugin.git

## Example Usage

    window.plugins.contentproviderplugin.query({
			contentUri: "content://sms/inbox",
			projection: ["address", "date", "body"],
			selection: null,
			selectionArgs: null,
			sortOrder: "date DESC"
		}, function (data) {
			console.log(JSON.stringify(data));
		}, function (err) {
			console.log("error query");
		});
		
      window.plugins.contentproviderplugin.update({			{
			contentUri:"content://com.sie.plugin.context.contentprovider/context",
			key: "UserId",
			value: "56"
			},function (data) {
				console.log(data);
			},function (err) {
				console.log(err);
	        });


#### Licence
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
