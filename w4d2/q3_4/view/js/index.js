$(function(){
    $("#add").submit(() => {
        const data = {
            name: $("#name").val()
        };
        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done((res) => {
            $("#quant").text(res.quantity);
        })
        return false;
    })
})