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
    //insert data into mongo
    $.ajax({
        type: "POST",
        url: "GraphiQL",
        data: "query=mutation{addUser(id:4,name:\"leslie\"){id,name}}",
        success: function(data) {
            alert("sucess");
        }
    });
});