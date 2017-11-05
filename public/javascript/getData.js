/**
 * Created by leslie on 2017/11/5.
 */
$(document).ready(function(){
    console.log("Ready");
    $.get("GraphiQL?query={user(id:1){id, name}}", function(result){
        console.log(result);
        console.log(result.data.user);
        console.log(result.data.user.name);
        var pUser = document.getElementById("userInfo");
        pUser.innerText = result.data.user.name;
    });

    //insert data into mongoDB
    // $.ajax({
    //     type: "POST",
    //     url: "GraphiQL",
    //     data: "query=mutation{addUser(id:4,name:\"leslie\"){id,name}}",
    //     success: function(data) {
    //         console.log("Insert data sucess");
    //     }
    // });

    //delete data from mongoDB
    // $.ajax({
    //     type: "POST",
    //     url: "GraphiQL",
    //     data: "query=mutation{deleteUser(id:4){id}}",
    //     success: function(data) {
    //         console.log("Delete data sucess");
    //     }
    // });

    // update the data
    $.ajax({
        type: "POST",
        url: "GraphiQL",
        data: "query=mutation{updateUser(id:4,name:\"leslie\"){id,name}}",
        success: function(data) {
            console.log("Update data sucess");
        }
    });
});