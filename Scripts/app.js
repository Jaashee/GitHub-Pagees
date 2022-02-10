// IIFE -- Immediatley Invoiding Function Expression
// AKA -- Anonymous Self-Executing Function
(function ()
{
    function DisplayHomePage()
    {   
        console.log("DisplayHomePage");
        let AboutUsButton = document.getElementById("AboutUsButton")
        AboutUsButton.addEventListener("click", function ()
        {
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

        // example of insert before
        //MainContent.before(MainParagraph);

        // example of deletion
        //document.getElementById("AboutUsButton").remove();
        //AboutUsButton.remove();

        // ES6 and HTML5 => Template strings => "Super strings"
    }

    function DisplayProductsPage()
    {
        console.log("DisplayProductsPage");
    }

    function DisplayServicesPage()
    {
        console.log("DisplayServicesPage");
    }

    function DisplayAboutPage()
    {
        console.log("DisplayAboutPage");
    }

    function DisplayContactPage()
    {
        console.log("DisplayContactPage");
    }

    // namesd  function option
    function Start()
    {
        console.log("App Started!!");

        
        switch (document.title)
        {
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
        }
    }

    window.addEventListener("load", Start);


})();