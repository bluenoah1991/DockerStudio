import Split from 'split.js';


window.onload = function(){

    // https://github.com/nathancahill/Split.js
    Split(['#container-panel-left', '#container-panel-right'], {
        sizes: [30, 70],
        minSize: [200, 200],
        gutterSize: 10,
        direction: 'horizontal',
        cursor: 'col-resize',
        elementStyle: function (dimension, size, gutterSize) {
            return {
                'flex-basis': 'calc(' + size + '% - ' + gutterSize + 'px)'
            }
        },
        gutterStyle: function (dimension, gutterSize) {
            return {
                'flex-basis':  gutterSize + 'px'
            }
        }
    });

    Split(['#container-panel-right-host-tab-top', '#container-panel-right-host-tab-bottom'], {
        sizes: [30, 70],
        minSize: [50, 50],
        gutterSize: 10,
        direction: 'vertical',
        cursor: 'row-resize'
    });
}
