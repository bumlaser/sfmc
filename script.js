function saveTitle() {

    BlockSDK = window.sfdc.BlockSDK;
    
    var block = new BlockSDK();
    
    var theTitle = document.getElementById("titleInput").value;
    var generatedHTML = '<a href="https://www.aopa.org"><h1>' + theTitle + '</h1></a>';

    block.setData({
        content: generatedHTML
    });

    block.setSuperContent(generatedHTML);
}
