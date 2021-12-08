var array = [];

function submit()
{
    var idk = [];
    for(var j = 1; j <= 4; j++)
    {
        var store = document.getElementById("name_of_the_student_"+j).value;
        console.log(store);
        array.push(store);
    }
    console.log(array);
    var long = array.length;
    console.log(long);
    
    for(var k = 0; k < long; k++)
    {
        idk.push("<h4>Name- "+array[k]+"</h4>");
        console.log(idk);
        
    }
    console.log(idk);
    document.getElementById("display_name_with_commas").innerHTML = idk;
    var rc = idk.join(" ");
    console.log(rc);
    document.getElementById("display_name_without_commas").innerHTML = rc;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
    array.sort();
    console.log(array);
    var sorted = [""]
    console.log(array);
    var long = array.length;
    console.log(long);
    
    for(var k = 0; k < long; k++)
    {
        sorted.push("<h4>Name- "+array[k]+"</h4>");
        console.log(sorted);
        
    }
    var rc = sorted.join(" ");
    console.log(rc);
    document.getElementById("display_name_without_commas").innerHTML = rc;
}