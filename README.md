# Automatic Code Generation: OAuth2.0 Authentication

This SDK has been generated through APIMatic's automatic code generation engine. I've worked extensively on this code generation engine during my time as a software engineer at APIMatic (I've worked on JavaScript SDK Generation).
This SDK has been generated for Dropbox's API v2. It is just a sample SDK, generated for demo purposes. Therefore, it allows consumption of 1 endpoint only.

Dropbox API uses OAuth2.0 for authentication purposes. And this generated SDK has built-in support for handling the OAuth2 authentication flow. For this demo, **Implicit Grant** is being used. But there's support for the following grant types as well:

* Authentication Code Grant
* Resource Owner Password Grant
* Client Credentials Grant

For this demo, the item of interest is the [OAuthManager.js](https://github.com/mahamshahid18/oauth2.0-angular-implicit-example/blob/master/scripts/DropboxLib/OAuthManager.js) file. It is an OAuth2.0 client which exposes methods to obtain & refresh access tokens. It takes care of all the technical details internally. You just have to call the `retrieveAndSetAccessToken` method to obtain an access token. And after authentication, API calls can be made.
**I wrote the implementation for [this client](https://github.com/mahamshahid18/oauth2.0-angular-implicit-example/blob/master/scripts/DropboxLib/) from scratch.**

I have already written the code to obtain an access token and make an API call (to show a demo). You can simply open up the `index.html` file, open up the console in the browser. And watch the magic happen! :D

Please take a look at `app.js` as well if you want to understand how this is working. Be sure to change the configuration (to add in the `clientId` and `redirectURI`) according to your Dropbox app.

> Note: All the automatically generated code is in  `scripts/DropboxLib/` folder


The documentation below is also automatically generated with the SDK.




# Getting started

Sample App for testing OAuth2.0 flow with Dropbox API v2

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/).
You will also need to download and link [angular-moment](https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.0.1/angular-moment.min.js) and [moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js) with your project because the SDK internally uses moment.js.

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `DropboxLib` folder inside the scripts folder.
+ If any of the Custom Types in your API have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will need to download angular-moment and moment.js. Move these 2 files into the `scripts` folder as well.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=Dropbox-Angular&projectName=DropboxLib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=Dropbox-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
var app = angular.module('myApp', []);
app.controller('testController', function($scope) 
{

});
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Angular Project</title>
	<script></script>
</head>

<body>
</body>

</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=Dropbox-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
<script src="scripts/angular.min.js" ></script>
```
If any of the Custom Types that you have defined have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will also need to link to angular-moment and moment.js like:
```html
<script src="scripts/angular.min.js" ></script>
<script src="scripts/moment.min.js" ></script>
<script src="scripts/angular-moment.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
<head>
    ...
    <!-- Helper files -->
    <script src="scripts/DropboxLib/Module.js"></script>
    <script src="scripts/DropboxLib/Configuration.js"></script>
    <script src="scripts/DropboxLib/ModelFactory.js"></script>
    <script src="scripts/DropboxLib/ObjectMapper.js"></script>
    <script src="scripts/DropboxLib/APIHelper.js"></script>
    <script src="scripts/DropboxLib/OAuthManager.js"></script>
    <script src="scripts/DropboxLib/Http/Client/HttpContext.js"></script>
    <script src="scripts/DropboxLib/Http/Client/HttpClient.js"></script>
    <script src="scripts/DropboxLib/Http/Request/HttpRequest.js"></script>
    <script src="scripts/DropboxLib/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="scripts/DropboxLib/Controllers/BaseController.js"></script>
    <script src="scripts/DropboxLib/Controllers/AccountController.js"></script>


    <!-- Models -->
    <script src="scripts/DropboxLib/Models/BaseModel.js"></script>
    <script src="scripts/DropboxLib/Models/Account.js"></script>
    <script src="scripts/DropboxLib/Models/OAuthToken.js"></script>
    <script src="scripts/DropboxLib/Models/OAuthProviderErrorEnum.js"></script>
    <script src="scripts/DropboxLib/Models/OAuthToken.js"></script>
    <script src="scripts/DropboxLib/Models/OAuthProviderErrorEnum.js"></script>

    ...
</head>
```
> The `Module.js` file should be imported before the other files. After `Module.js`, `Configuration.js` should be imported.
> The `ModelFactory.js` file is needed by `ObjectMapper.js` file. The `ObjectMapper` in turn, is needed by `BaseController.js`.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
<head>
	...
	<script src="scripts/app.js"></script>
</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
...
<body ng-app="myApp">
	<div ng-controller="testController">
		...
	</div>
	...
</body>
...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
var app = angular.module('myApp', ['DropboxLib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Initialization


The Angular Application can be initialized as following:
```JavaScript
var app = angular.module('myApp', [DropboxLib]);
// now controllers/services can be created which import
// the factories provided by the sdk
```
### Authentication
In order to setup authentication and initialization of the Angular App, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthClientId | OAuth 2 Client ID |
| oAuthRedirectUri | OAuth 2 Redirection endpoint or Callback Uri |



```js
var app = angular.module('myApp', [DropboxLib]);

app.run(function(Configuration) {
    // Configuration parameters and credentials
    Configuration.oAuthClientId = 'oAuthClientId'; // OAuth 2 Client ID
    Configuration.oAuthRedirectUri = 'oAuthRedirectUri'; // OAuth 2 Redirection endpoint or Callback Uri
    
});
```


You must now authorize the client.

### Authorizing your client

Your application must obtain user authorization before it can execute an endpoint call. The SDK uses OAuth 2.0 Implicit Grant to obtain a user's consent to perform an API request on user's behalf.
The entire flow of building the authorization URL, obtaining consent from the user and storing the access token is handled by the SDK itself.


`retrieveAndSetAccessToken()` method will be called in order to obtain and set the access token in the `Configuration`.   

Calling this method will open up the consent screen.

### Consent screen and access token retrieval
Once the user responds to the consent request, the OAuth 2.0 server responds to your application's access request by redirecting the user to the redirect URI specified in Configuration.

The redirect URI will receive the access token as the token argument in the URL fragment. This is how it will look

```
https://example.com/oauth/callback#token=XXXXXXXXXXXXXXXXXXXXXXXXX
```

The access token must be extracted by client-side JavaScript code.

`OAuthCallbackScript.js` is the script which retrieves the access token and passes it as an event data to the window which actually opened up the consent screen. You can simply link this with a html file to handle access token retrieval.

```html
<script src="OAuthCallbackScript.js"></script>
```





### Complete Example

In order to set up the client side script which extracts the access token from the uri, perform the following steps:
+ Link the `OAuthCallbackScript.js` to the html file which is served at the registered redirect_uri for the application.

For example, if the redirect_uri is `http://localhost/callback.html`, create `callback.html` in the root of the project folder. And add the following content:

#### `callback.html`

```html
<!DOCTYPE html>
<html>

<head>
    <title>OAuthTest</title>

</head>


<body>
    <script src="scripts/OAuthCallbackScript.js"></script>
</body>

</html>
```

This will ensure that the access token which will be received at `http://localhost/callback.html` will be retrieved by the `OAuthCallbackScript.js`.

After setting up as above, here's how the Implicit Grant flow can be executed.

#### `app.js`

```JavaScript
var app = angular.module('OAuthTest', ['DropboxLib']);

app.controller('oauthClientController', function($scope, OAuthManager) {
    var scopes = [];
    var promise = OAuthManager.retrieveAndSetAccessToken(scopes, '', true);
    promise.then(function(success) {
        // client successfully authorized
        // make API calls as required
    });
});
```

#### `index.html`
```html
<!DOCTYPE html>
<html>

<head>
    <title>OAuthTest</title>
    <meta charset="UTF8">

    <script src="scripts/angular.min.js"></script>

    <script src="scripts/DropboxLib/Module.js"></script>
    <script src="scripts/DropboxLib/Configuration.js"></script>
    <script src="scripts/DropboxLib/ModelFactory.js"></script>
    <script src="scripts/DropboxLib/ObjectMapper.js"></script>
    <script src="scripts/DropboxLib/APIHelper.js"></script>
    <script src="scripts/DropboxLib/Servers.js"></script>
    <script src="scripts/DropboxLib/Environments.js"></script>
    <script src="scripts/DropboxLib/Http/Client/HttpContext.js"></script>
    <script src="scripts/DropboxLib/Http/Request/HttpRequest.js"></script>
    <script src="scripts/DropboxLib/Http/Response/HttpResponse.js"></script>
    <script src="scripts/DropboxLib/Http/Client/HttpClient.js"></script>

    <!-- API Controllers -->
    <script src="scripts/DropboxLib/Controllers/BaseController.js"></script>
    <script src="scripts/DropboxLib/Controllers/AccountController.js"></script>


    <!-- Models -->
    <script src="scripts/DropboxLib/Models/BaseModel.js"></script>
    <script src="scripts/DropboxLib/Models/Account.js"></script>
    <script src="scripts/DropboxLib/Models/OAuthToken.js"></script>
    <script src="scripts/DropboxLib/Models/OAuthProviderErrorEnum.js"></script>
    <script src="scripts/DropboxLib/Models/OAuthToken.js"></script>
    <script src="scripts/DropboxLib/Models/OAuthProviderErrorEnum.js"></script>


    <script src="scripts/DropboxLib/OAuthManager.js"></script>
    <script src="scripts/app.js"></script>

</head>


<body ng-app="OAuthTest">
    <div ng-controller="oauthClientController">

    </div>
</body>

</html>
```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [AccountController](#account_controller)

## <a name="account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountController") AccountController

### Get singleton instance

The singleton instance of the ``` AccountController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AccountController, Account){
	});
```

### <a name="get_account_info"></a>![Method: ](https://apidocs.io/img/method.png ".AccountController.getAccountInfo") getAccountInfo

> TODO: Add a method description


```javascript
function getAccountInfo()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, AccountController, Account){


		var result = AccountController.getAccountInfo();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)



