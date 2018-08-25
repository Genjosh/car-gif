

    





$("#button-submit").on("click",function() {
    event.preventDefault();
    var userInput= $("#main-search").val();
    
    // $.ajax({
    //     url: hailMarry,
    //     method: "GET"
    // }); 
    // console.log(carType);

    // console.log(get);

});
// $.ajax({
    // url: hailMarry,
    // method: "GET"
// });    .then(function(response) {
    // console.log(response);
    





$("#car-button1+").on("click", function(displayInfo) {
    event .preventDefault();
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&";
    var car = "tag="+ "lamborghini";
    var link= queryURL + car;
   
    
    $.ajax({
        url: link,
        method: "GET"
    })    .then(function(response) {
        var imageUrl = response.data.image_original_url;

        
        var carImage = $("<img>");

        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");
        console.log(response);

        $("#images").prepend(carImage);
        console.log(response);
    });
    console.log(response);

    
    


       
    

    });



    
   



// console.log()
// console.log(get);