# Elektron-first-try

My first attempt with Electron js.
Programs like Discord or Visual Studio Code work with Electron.

To install Electron, you need to install it using the command:

> npm install electron --save-dev

Electron is started using the **npm start** command which refers to the command:

> electron .

<br />

Basic program settings.
Here you can set the minimum or maximum height or width of the window. 
You can also set whether the window can be enlarged or shrunk. And whether it will be possible to open developer tools in the program as we know from Chrome.

<br />

![image](https://user-images.githubusercontent.com/43612452/184341270-f7cb98b4-78a6-416d-8da9-664df27733bd.png)

The files can be compiled into an exe file and some files can be packed into an .asar file while the code is still readable.
To install the module to support compilation, install: 

> npm install electron-packager --save-dev

Use the following command to start the compilation: 

> electron-packager . 

![image](https://user-images.githubusercontent.com/43612452/184340704-fa5ef1e3-6794-4e0a-910d-b60f1a373a51.png)
![image](https://user-images.githubusercontent.com/43612452/184340742-c61e7284-4d41-4350-9f67-555765be4c08.png)
![image](https://user-images.githubusercontent.com/43612452/184340812-7534a591-2dd4-4d7f-bcc0-e4c74a995f93.png)
