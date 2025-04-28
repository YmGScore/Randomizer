document.getElementbyId("generate").onclick = function() {
    const randomFiles = [
        "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
        "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
    ]; //put your files here

    const randomIndex = Math.floor(Math.random() * (randomFiles.length)); 
    //generate a random index

    const randomFile = randomFiles[randomIndex]; 
    //get the random file from the array

    const imageElement = document.getElementById("randomImage"); 
    //get the image element

    imageElement.src = randomFile; 
    //set the src of the image element to the random file
};