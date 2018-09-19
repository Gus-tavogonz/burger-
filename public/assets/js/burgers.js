//First CREATE

$(".create-form").on("submit", function(event){

    event.prevenDeafault();

    var newBurger = {
        burger_name:$("#bur").val().trim()
    }
})

