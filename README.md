Sublime-ExtendScript
====================

This is a ST2 (ST3?) Adobe ExtendScript Bundle. It is right now only basic JavaScript definition included from source.js. 

##Basics
- Development is done via [AAAPackageDev](https://github.com/SublimeText/AAAPackageDev)  
- Basics on [Syntax definition help is here](http://docs.sublimetext.info/en/latest/reference/syntaxdefs.html)  
- To get the JavaScript.tmLanguage file to .json-tmLanguage use [AAAPackageDev](https://github.com/SublimeText/AAAPackageDev#json-and-property-list-conversion)  
- The ExtendScript.json file has to be converted to the ExtendScript.plist file using AAAPackageDev [plist\_to\_json](https://github.com/SublimeText/AAAPackageDev#commands-1)  
- It is important to rename the .plist file to .tmlanguage or it wont work. [Info found here](http://stackoverflow.com/questions/15221150/custom-syntax-highlighting-in-sublime-text-2) UPDATE: if you name the language definition .json-tmLanguage it gets converted to a .tmLanguage directly without need for renaming the file manually.

So the basic layout is there. Now we need to create lots of snippets and add definitions like ScriptUI and File stuff.  

##Associated filetypes
- jsx  
- jsxinc  

##License  

Copyright (c)  2013 Nik "dokluch" Ska, Fabian "fabiantheblind" Morón Zirfas  
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software  without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to  permit persons to whom the Software is furnished to do so, subject to the following conditions:  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  

see also http://www.opensource.org/licenses/mit-license.php

