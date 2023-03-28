const passwordView = document.querySelector("#passWord"),
      passwordLength = document.querySelector("#passwordLength"),
      lengthView = document.querySelector("#viewLength"),
      generate = document.querySelector("#generate"),
      copySign = document.querySelector(".copy-sign"),
      body = document.querySelector("body"),
      upperCaseCheckBox = document.querySelector("#upperCase");
    generate.addEventListener("click" , generatePassword);
    passwordLength.addEventListener("change" , generatePassword);
    upperCaseCheckBox.addEventListener("click" , generatePassword);
    function loaded() {
        var checkLs = localStorage.getItem("launcher");
        if (checkLs && checkLs !== null) {
        } else {
            Swal.fire({
                iconHtml: '<i class="bi bi-lock"></i>',
                iconColor: 'darkslategray',
                showCloseButton: true,
                color: 'darkslategray',
                background: '#fff',
                confirmButtonText: 'Get Started!',
                icon: 'info',
                title: '<hr style="background: white; height: 5px;"><strong>Password Generator</strong><hr style="background: white; height: 5px;">',
                html: '<b>1. To Specify Password Length: <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                    '<img src="stuffs/img/password.jpg" style=""> <br>' +
                    '<b>2. To Copy Generated Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b><img src="stuffs/img/copy.jpg" alt="instructions"> <br>',
                    footer: '<i class="bi bi-lock"></i> Password Generator&nbsp;&nbsp;||&nbsp;&nbsp;<a href="https://github.com/Johnocaleb/PasswordGenerator"><i class="bi bi-github"></i> Github</a> &nbsp;|| ' + new Date().getFullYear()
            })
           localStorage.setItem("launcher" , "checked");
        }; 
        const pwslth = 8;
        var abc = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+|";
                var password = "";
                lengthView.textContent = 8;
                passwordLength.value = 8;
            for (var i = 1; i <= pwslth; i++) {
                var randomNumber = Math.floor(Math.random() * abc.length);
                password += abc.substring(randomNumber, randomNumber +1);
            }
            passwordView.textContent = password;
    };
        function generatePassword() {
            const pwslth = passwordLength.value;
            var abc = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+|";
            if (upperCaseCheckBox.checked == true) {
            abc = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+|";
        }        
        var password = "";
        lengthView.textContent = pwslth;
        for (var i = 1; i <= pwslth; i++) {
            var randomNumber = Math.floor(Math.random() * abc.length);
            password += abc.substring(randomNumber, randomNumber +1);
            }
            passwordView.textContent = password;
        }
    copySign.addEventListener("click" , copyPassword);
    passwordView.addEventListener("click" , copyPassword);
    function copyPassword() {
        navigator.clipboard.writeText(passwordView.textContent);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: '"' + passwordView.textContent + '"' + '<br><br>' + ' Copied Successfully 🥳'
        })
    }
//End of external script Follow : https://github.com/Johnocaleb