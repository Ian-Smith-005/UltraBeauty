              // Function to change the page title
              function changeTitle(newTitle) {
                document.title = newTitle;
            }
    
        const get = elem => document.getElementById(elem),
                         registerButton = get('register'),
                         loginButton = get('login'),
                         container = get('container')
     
    registerButton.onclick = () => {
                         container.className = "active"
                         changeTitle('Sign Up'); // Change title to 'Sign Up' when register button is clicked
    }
    
    loginButton.onclick = () => {
                            container.className = "close"
                            changeTitle('Login'); // Change title to 'Login' when login button is clicked
    }
     
    
    
    