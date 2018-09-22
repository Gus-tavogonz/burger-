// DEVOURED

$(function(){
    $(".change-devoured").on("click", function(event){
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdeveoured")

        var newDevouredState = {
            devoured: newDevoured
        };


        $.ajax("/api/burgers/" + id,{
            type:"PUT",
            data:newDevouredState
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


