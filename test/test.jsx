function function_name (argument) {
  // body...
}

if (true) {};

if (true) {} else{};

switch(true){
  case 1:
  break;
  case default:
  break;
}

for(var key in obj){
  if(obj.hasOwnProperty(key)){
    //do something
  }
}

for (var i = 0; i < Things.length; i++) {
  Things[i]
};

for (var i = Things.length - 1; i >= 0; i--) {
  Things[i]
};

while(true){
  //body
}

simple();
function simple(){

app.beginUndoGroup("simple");
var curComp = app.project.activeItem;
   if (!curComp || !(curComp instanceof CompItem)){
        alert("noComp");
        return;
    };
app.endUndoGroup();
}

