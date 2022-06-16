window.addEventListener("load", (event) =>
{
    const sketchPad = document.querySelector("main");
    
    const createPad = () =>
    {
        for (let i = 0; i < 8; i++)
        {
            let newDiv = document.createElement("div");
            newDiv.addEventListener("mouseover", colorAll);
            sketchPad.appendChild(newDiv);
        }
    };

    const colorAll = (divEvent) =>
    {
        console.log(divEvent.target);
        divEvent.target["style"]["background-color"] = "black";
    };

    createPad();
});