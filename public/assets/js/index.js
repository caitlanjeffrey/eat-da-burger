// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
        event.preventDefault()
        console.log("hi")

        const id = $(this).data("id")
        const devouredState = {
            devoured: 1
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured")
            location.reload();
        })
    })

    $("#add-burger").on("click", function(event) {
        event.preventDefault()

        const newBurger = {
            name: $("#new-burger").val().trim(),
            devoured: 0
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger!")
            location.reload()
        })
    })
})