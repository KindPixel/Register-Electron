$(document).ready(function () {

    $("#butreaload").click(function (e) {

        $("#userstab tbody").empty();

        collection.find({}).toArray(function (err, result) {
            
            if (err) throw err;
            console.log(result);
            result.forEach(element => {
                $("#userstab > tbody:last-child").append("<tr><td>" + element.username + "</td><td>" + element.email + "</td><td>" + element.password + "</td></tr>");
            });
        })

    })

});
