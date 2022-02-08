// Object for the entire keyboard
const Keyboard = {
    // Property of an object keeping track of all the different HTML elements
    elements: {
        // Main Keyboard element
        main: null,
        // Keys Container
        keysContainer: null,
        // Array of Individual Key Buttons
        keys: []
    },

    
    // Object for all of the event handlers
    eventHandlers: {
        // Parameter for input to then fire callback function
        oninput: null
        // Other code will then know when the above events happen
    },
    

    properties: {
        // Current Value of the keyboard
        value: ""
    },

    // Function to run when the page first loads to initialize the keyboard
    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements (adding classes and keys)
        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        // Add to DOM
        // Adding keys containers as a child of the main container
        this.elements.main.appendChild(this.elements.keysContainer);
        // Adding the main element to the actual document of the file
        document.body.appendChild(this.elements.main);

        
        // *************
        // Automatically use keyboard for elements with .use-keyboard-input class
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            // Event listener for focusing on the element with the class and calling a function
            element.addEventListener("focus", () => {
                // calling the open function and passing in the current value of the text area as the initial value
                this.open(element.value, currentValue => {
                    // this sets the value of the text area is set to the value of the actual keyboard
                    element.value = currentValue.toUpperCase();
                });
            });
        });
        


    },

    // private method for creating the html for each of the keys
    _createKeys() {
        // Will be returning document fragments - virutal elements that you can use to append other elements to and then you append the whole fragment to a different element
        const fragment = document.createDocumentFragment();
        // Will then loop through this array to create individual button elements from characters
        const keyLayout = [
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", 
            "a", "s", "d", "f", "g", "h", "j", "k", "l",
            "enter", "z", "x", "c", "v", "b", "n", "m", "backspace"
        ];

        // Create function for HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        // Creating keys (loops forEach key in the keyLayout array)
        keyLayout.forEach(key => {
            // Creating button for each key character in keyLayout array above
            const keyElement = document.createElement("button");
            // Creating a line break after selected characters that are to be on different lines on keyboard
            // Is the key that we are looping through one of these characters then if it is then we get true otherwise we get false
            // IndexOf method will return '-1' if it is not in the array
            const insertLineBreak = ["p", "l" ].indexOf(key) !== -1;

            // Add attributes / classes to key elements
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            // Will need to do different things for which key we are looping through
            //  Use switch statement to select one of man code blocks to be executed - if the expression matches the value of the case then it executes
            // - if no match the default will be executed
            switch(key) {
                case "backspace":
                    // Adding appropriate class to the backspace key
                    keyElement.classList.add("keyboard__key__wide");
                    // Calling the createIconHTML class above and passing in backspace to create the icon html
                    keyElement.innerHTML = createIconHTML("backspace");

                    // Adding a click event listener
                    keyElement.addEventListener("click", () => {
                        // Setting value equal to extracting the value of the current value to equal 
                        // Substring from the first character in the current value to the second to last character
                        // This then removes the last character from the current value (because this is the backspace)
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        // B/c the input has changed we are going to trigger the oninput event handler to notify the code that is using the keyboard that the input has changed
                        this._triggerEvent("oninput");
                    });

                    break;
    
                default: 
                    keyElement.textContent = key.toUpperCase();
                    
                    // *************
                    keyElement.addEventListener("click", () => {
                        this.properties.value += key;
                        // document.activeElement.nextSibling.focus();
                        this._triggerEvent("oninput");

                    })
                
                
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;


    },

    
    // function for triggering the events - either of the events
    _triggerEvent(handlerName) {
        // if the handlername is a function - is a function specified as a value of one of these properties? (in my case just one)
        if (typeof this.eventHandlers[handlerName] == "function") {
            // will then trigger the function and pass in the current value of the keyboard as a param
            this.eventHandlers[handlerName](this.properties.value);
        }
    },
    

    
    // function for opening the keyboard - accepting three arguments the initial value of the keyboard, oninput and onclose
    // initialValue - also you to set text before if you want to - will then chain rest of letters after
    open(initialValue, oninput) {
        // setting the value to the initial value if it is set and if not then just having it as nothing/empty
        this.properties.value = initialValue || "";
        // 
        this.eventHandlers.oninput = oninput;
    },
    

};

window.addEventListener("DOMContentLoaded", function () {
    // Calling the init method on Keyboard object after the DOM has been loaded (page fully loaded then load JS)
    Keyboard.init();
});