// DEVOURED

$(function(){
    $(".changedevoured").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        //var newDevoured = $(this).val()

        var updateBurger = {
            devoured: $("#devoured").val().trim()
        };


        $.ajax("/api/burgers/" + id,{
            type:"PUT",
            data:updateBurger
        }).then(
            function(){
                console.log("chaged devour to", newDevoured);


                location.reload();
            }
        )
    })
})


//CREATE

$(".create-form").on("submit", function(event){

    event.preventDefault();

    var newBurger = {
        burger_name:$("#bur").val().trim()
    }

    $.ajax("/api/burgers", {
        type:"POST",
        data:newBurger
    }).then(
        function(){
            console.log("new burger added!!");
            location.reload();
        }
    )
    
})


