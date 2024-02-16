alert('Notice that this is only for school use. You must have a sandi unified email to login.')

const firebaseConfig = {
  apiKey: "AIzaSyDpkt3ZEJAcdihIC1aFwB2tdWhLHI1UTes",
  authDomain: "logintoamplify.firebaseapp.com",
  projectId: "logintoamplify",
  storageBucket: "logintoamplify.appspot.com",
  messagingSenderId: "1081201855286",
  appId: "1:1081201855286:web:99d752e5e8caab5f79c197"
};

  firebase.initializeApp(firebaseConfig);


var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var user = result.user;
      var userEmail = String(user.email)
      var index = userEmail.indexOf("@")
      var fge = userEmail.slice(0, index)
      var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      var ester = 0
      for (var a = 0; a<alphabet.length; a++){
    
        if (fge.includes(alphabet[a])){
                window.location.replace('https://learning.amplify.com')
            
        } else {
                var win = window.open('about:blank')
                var favicon = document.createElement('link');
                favicon.setAttribute('rel','shortcut icon');
                favicon.setAttribute('href','https://ssl.gstatic.com/classroom/ic_product_classroom_96.png');
                win.document.head.appendChild(favicon);
                win.document.title = "Home"
                win.document.body.style.margin = '0'
                var iframe = win.document.createElement('iframe');
                iframe.style.border='none';
                iframe.style.width = '100%' ;
                iframe.style.height = '100%' ;
                iframe.style.margin = '0';
                iframe.src = 'https://monkeygg5.github.io';
                win.document.body.appendChild(iframe);
                window.location.replace('https://classroom.google.com')
            {break;}
        }
    }
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
   });
}
