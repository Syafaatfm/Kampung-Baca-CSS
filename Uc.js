var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if( isMobile.Android() ) {
var cari = navigator.userAgent;
var redirect = cari.search("UCBrowser");
if(redirect>1) {
var strings='<meta name="viewport" content="width=device-width, initial-scale=1.0"><h3 align="center"> Maaf, website kami tidak dapat dibuka dengan baik jika anda menggunakan UCBrowser<br/><br/>Harap gunakan browser lain (seperti Chrome, Opera, dll)<br/></h3>';
    document.getElementById("gaboleh").innerHTML = strings;
var OpenChrome = window.location.assign("googlechrome://navigate?url="+ window.location.href);
var activity = OpenChrome;document.getElementsByTagName('head')[0].appendChild(activity);
}
};
 if ( isMobile.Any() ){
var cari = navigator.userAgent;
var dapet = cari.search("UCBrowser");
if(dapet>1) {

    var strs=document.URL;
    var urlnya= strs.replace("http://", "");
    var strings='<meta name="viewport" content="width=device-width, initial-scale=1.0"><h3 align="center"> Maaf, website kami tidak dapat dibuka dengan baik jika anda menggunakan UCBrowser<br/><br/>klik tombol pilih dibawah ini , lalu salin/copy dan buka menggunakan browser lain (seperti Chrome, Opera, dll)<br/><br/><input type="text" class="teks" value="'+ document.URL  +'" size="50"><br/> <button class="js-copy-btn">Pilih</button><br/></h3>';


    document.getElementById("gaboleh").innerHTML = strings;
 
var copyTextareaBtn = document.querySelector('.js-copy-btn');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.teks');
  //copyTextarea.select();
copyTextarea.selectionStart=0;
copyTextarea.selectionEnd=copyTextarea.value.length;

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});

   exit();
}

function exit( status ) {
    var i;

    if (typeof status === 'string') {
        alert(status);
    }

    window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);

    var handlers = [
        'cut',
        'beforeunload', 'blur', 'change', 'contextmenu', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
        'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
        'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'submit', 'unload'
    ];

    function stopPropagation (e) {
        e.stopPropagation();
        // e.preventDefault(); // Stop for the form controls, etc., too?
    }
    for (i=0; i < handlers.length; i++) {
        window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
    }

    if (window.stop) {
        window.stop();
    }

    throw '';
}
 };