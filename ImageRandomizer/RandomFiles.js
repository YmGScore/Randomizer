document.getElementById("generate").onclick = function() {
    const randomFiles = [
        "https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?15202324258887420558",
        "https://img.freepik.com/free-vector/all-right-emoji-illustration_23-2151345565.jpg?w=360",
    ]; //put your files here

    var randomIndex = Math.floor(Math.random() * (randomFiles.length)); 
    //generate a random index

    var randomImage = randomFiles[randomIndex]; 
    //get the random file from the array

    var imageElement = document.getElementById("randomImage"); 
    //get the image element

    imageElement.src = randomImage; 
    //set the src of the image element to the random file

    if (randomFiles.length === 0) {
        console.error("No files available to randomize.");
        return;
    }
};