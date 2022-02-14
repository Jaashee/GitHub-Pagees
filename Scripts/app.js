// IIFE -- Immediatley Invoiding Function Expression
// AKA -- Anonymous Self-Executing Function
(function () {
    function DisplayHomePage() {
        console.log("DisplayHomePage");
        let AboutUsButton = document.getElementById("AboutUsButton")
        AboutUsButton.addEventListener("click", function () {
            location.href = "about.html"
        });

        // Step 1 - get a reference to an entry pont(s) (insertion/deletion)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;

        // Step 2 - create a HTML element in memory
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticlParagraph" class="mt-3">This is the Article Paragraph</p>`;

        // Step 3 - Configure new Element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.textContent = "This is the Main Paragraph";
        let FirstString = "This is";
        let SecondString = `${FirstString} the Main Paragraph`;
        MainParagraph.textContent = SecondString;
        Article.setAttribute("class", "container");

        // Step 4 - Perform insertion / deletion

        // example of insert after (append)
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
    }

    function DisplayProductsPage() {
        console.log("DisplayProductsPage");
    }

    function DisplayServicesPage() {
        console.log("DisplayServicesPage");
    }

    function DisplayAboutPage() {
        console.log("DisplayAboutPage");
    }

    function DisplayContactPage() {
        console.log("DisplayContactPage");

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function ()
        {
            if(subscribeCheckbox.checked)
            {
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if (contact.serialize())
                {
                    let key = contact.FullName.substring(0, 1) + Date.now();

                    localStorage.setItem(key, contact.serialize());
                }
            }
        });
    }


    function DisplayContactListPage() {
        console.log("DisplayContactListPage");
        if (localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");
            
            let data = ""; // data container -> add deserialized data from the localStorage

            let keys = Object.keys(localStorage); // returns a string of array keys

            let index = 1; // counts how man keys

            // for every key in keys array (collection), loop
            for (const key of keys)
            {
                let contactData = localStorage.getItem(key); // get localStorage data value related to the key

                let contact = new Contact(); // create a new empty contacct object
                contact.deserialize(contactData); 

                // inject a repeatable row into the contactList
                data +=
                    `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>`;

                index++;
            }

            contactList.innerHTML = data;
        }
    }

    // namesd  function option
    function Start() {
        console.log("App Started!!");


        switch (document.title) {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
            case "Contact-List":
                DisplayContactListPage();
                break;
        }
    }

    window.addEventListener("load", Start);


})();