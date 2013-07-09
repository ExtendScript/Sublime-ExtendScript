Sublime-ExtendScript
====================

This is a ST2 (ST3?) Adobe ExtendScript Bundle still in development
Version 0.1  


##Associated filetypes
- jsx  
- jsxinc  

##Installation  
Clone the repo to (Mac) /Users/[USERNAME]/Library/Application Support/Sublime Text 2/Packages

    git clone https://github.com/fabiantheblind/Sublime-ExtendScript.git  


#Development  
##For starters the development should be done in a fork and applied to the original repo via pull request.  

##Basics
- Basics on [Syntax definition help is here](http://docs.sublimetext.info/en/latest/reference/syntaxdefs.html)  
- Development is done via [AAAPackageDev](https://github.com/SublimeText/AAAPackageDev)  
- To get the JavaScript.tmLanguage file to .json-tmLanguage use [AAAPackageDev](https://github.com/SublimeText/AAAPackageDev#json-and-property-list-conversion)  
- The ExtendScript.json-tmLanguage file has to be converted to the ExtendScript.tmLanguage file using AAAPackageDev [plist\_to\_json](https://github.com/SublimeText/AAAPackageDev#commands-1)  

So the basic layout is there. Now we need to create lots of snippets and add definitions like ScriptUI and File stuff.  

##Recources  

##Object Model Viewer XML  
To get all available classes  we should take a look into these files:

###ESTK is Build on JSX could be usefull  

- /Applications/Adobe ExtendScript Toolkit CC/ExtendScript Toolkit.app/Contents/SharedSupport/Required/35omvData.jsx  
- /Applications/Adobe ExtendScript Toolkit CC/ExtendScript Toolkit.app/Contents/SharedSupport/Required/35omvUI.jsx  
- /Applications/Utilities/Adobe Utilities-CS5.5.localized/ExtendScript Toolkit CS5.5/ExtendScript Toolkit.app/Contents/SharedSupport/Required/35omvData.jsx  
- /Applications/Utilities/Adobe Utilities-CS5.5.localized/ExtendScript Toolkit CS5.5/ExtendScript Toolkit.app/Contents/SharedSupport/Required/35omvUI.jsx  
- /Applications/Utilities/Adobe Utilities-CS5.localized/ExtendScript Toolkit CS5/ExtendScript Toolkit.app/Contents/SharedSupport/Required/35omvData.jsx  
- /Applications/Utilities/Adobe Utilities-CS5.localized/ExtendScript Toolkit CS5/ExtendScript Toolkit.app/Contents/SharedSupport/Required/35omvUI.jsx  
- /Applications/Utilities/Adobe Utilities-CS6.localized/ExtendScript Toolkit CS6/ExtendScript Toolkit.app/Contents/SharedSupport/Required/35omvData.jsx  
- /Applications/Utilities/Adobe Utilities-CS6.localized/ExtendScript Toolkit CS6/ExtendScript Toolkit.app/Contents/SharedSupport/Required/35omvUI.jsx  
- /Applications/Utilities/Adobe Utilities.localized/ExtendScript Toolkit CS4/ExtendScript Toolkit.app/Contents/SharedSupport/Required/35omvData.jsx  
- /Applications/Utilities/Adobe Utilities.localized/ExtendScript Toolkit CS4/ExtendScript Toolkit.app/Contents/SharedSupport/Required/35omvUI.jsx  

###Others  
- /Library/Application Support/Adobe/Scripting Dictionaries CC/Illustrator/omv.xml  
- /Library/Application Support/Adobe/Scripting Dictionaries CS4/Bridge/omv.xml  
- /Library/Application Support/Adobe/Scripting Dictionaries CS5/Bridge/omv.xml  
- /Library/Application Support/Adobe/Scripting Dictionaries CS5/Device Central/omv.xml  
- /Library/Application Support/Adobe/Scripting Dictionaries CS5.5/Bridge/omv.xml  
- /Library/Application Support/Adobe/Scripting Dictionaries CS5.5/Device Central/omv.xml  
- /Library/Application Support/Adobe/Scripting Dictionaries CS6/Bridge/omv.xml  
- /Library/Application Support/Adobe/Scripting Dictionaries CS6/Illustrator/omv.xml  
- /Library/Application Support/Adobe/Scripting Dictionaries CS6/photoshop/omv.xml  

###InDesign  

- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.5/omv$indesign-7.0$3.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.5/omv$indesign-7.0$4.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.5/omv$indesign-7.0$5.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.5/omv$indesign-7.0$6.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.5/omv$indesign-7.0$7.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-7.5$3.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-7.5$4.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-7.5$5.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-7.5$6.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-7.5$7.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-7.5$7.5.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-8.0$3.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-8.0$4.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-8.0$5.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-8.0$6.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-8.0$7.0.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-8.0$7.5.xml
- /Users/[USERNAME]/Library/Preferences/ExtendScript Toolkit/3.8/omv$indesign-8.0$8.0.xml

###Misc Links  

- if you name your syntax definition only .json It is important to rename the .plist file to .tmlanguage or it wont work. [Info found here](http://stackoverflow.com/questions/15221150/custom-syntax-highlighting-in-sublime-text-2)  

#License  

Copyright (c)  2013 Nik "dokluch" Ska, Fabian "fabiantheblind" Morón Zirfas  
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software  without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to  permit persons to whom the Software is furnished to do so, subject to the following conditions:  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  

see also http://www.opensource.org/licenses/mit-license.php

