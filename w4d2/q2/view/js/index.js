$(() => {
    console.log("it is working here");

    $("#ask").submit(() => {
        $.get({
            url: "/8ball",
        })
        .done((resp) => {
            console.log(resp);
            $("#quest").val(resp.answer);
        })
        return false;
    })
})