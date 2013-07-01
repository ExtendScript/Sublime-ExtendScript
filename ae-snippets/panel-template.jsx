/**
 *  function template by @author fabiantheblind
 */
(function(thisObj){
// basic panel
simple(thisObj);
/**
 * [simple description]
 * @param  {[type]} thisObj [description]
 * @return {[type]}         [description]
 */
function simple(thisObj){

// this is global
data =  {
    'x':10,
    'y':10
};


// THIS WILL CHECK IF PANEL IS DOCKABLE OR FLAOTING WINDOW  
var win   = buildUI(thisObj );
if ((win !== null) && (win instanceof Window)) {
    win.center();
    win.show();
} // end if win  null and not a instance of window 

 function buildUI (thisObj  ) {
        var H = 25; // the height
        var W = 30; // the width
        var G = 5; // the gutter
        var x = G;
        var y = G;
    var win = (thisObj instanceof Panel) ? thisObj :  new Window('palette', 'window',[0,0,G*2 + W*3 ,G*2 + H*1],{resizeable: true});

    if (win !== null) {
        win.do_it_button = win.add('button', [x ,y,x+W*3,y + H], 'do it');
        win.do_it_button.onClick = function () {
            run();
      };
    }
    return win;
}
function run(){
// "in function run. From here on it is a straight run"

    var curComp = app.project.activeItem;
   if (!curComp || !(curComp instanceof CompItem)){
        alert('please select a comp');
        return;
    }
    // if(curComp.selectedLayers.length < 1){
    //     alert('Please select at least one layer');
    // return;
    //  }
    app.beginUndoGroup('run function');
    alert("Hello World");
    app.endUndoGroup();
  }
 }// close run
})(this);