function login() {
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (uname == '') {
      alert("Enter user name.");
    }
    else if (pwd == '') {
      alert("Enter  password");
    }
    else if (!filter.test(uname)) {
      alert("Enter valid email id.");
    }
    else if (pwd.length < 8 || pwd.length > 8) {
      alert("Password min and max length is 8.");
    }
    else {
      alert('Thank You for Login &  now You are Redirecting to Azim_Ansari Website');
      //Redirecting to dashboard
      window.location = "https://hackerranksolution.xyz/";
    }
  }