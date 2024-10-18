function authStateListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        location.href = "culturalconnections.html";
      }
    });
  }
  
  window.addEventListener("load", function () {
    authStateListener();
    document
      .getElementById("sign-in-button")
      .addEventListener("click", function () {
        let provider = new firebase.auth.GoogleAuthProvider();
  
        provider.addScope("email");
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(function (result) {
            console.log("Logging sucessfully", result.user);
            location.href = "culturalconnections.html";
          })
          .catch(function (error) {
            console.log("Logging fail", error);
          });
      });
  
    document.getElementById("sign-in-2").addEventListener("click", function () {
      let emailTxt = document.getElementById("email").value;
      let passtxt = document.getElementById("password").value;
  
      firebase
        .auth()
        .signInWithEmailAndPassword(emailTxt, passtxt)
        .then(() => {
          console.log("Logging sucessfully");
          alert("Logging sucessfully");
          location.href = "culturalconnections.html";
        })
        .catch((error) => {
          let errorMessage = error.message;
          alert("Logging fail");
          console.log("Logging fail", errorMessage);
        });
    });
    
    document.getElementById("sign-in-3").addEventListener("click", function() {
      let phoneNo = document.getElementById("phone").value

      firebase.auth().s
    })
  });