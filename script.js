function button_submit(){
    var inputElements = document.getElementsByTagName('input');
    let s = "";
    let p = "";
    if (document.getElementById('Music').checked === true){
        s = s+"You select Music \n";   
        p = p+"I love Music \n";   
    }
    if (document.getElementById('Football').checked === true) {
        s = s + "You select Football \n";
        p = p + "I love Football but i am not a pro player\n";
    }
    if (document.getElementById('Drawing').checked === true) {
        s = s+ "You select Drawing \n";
        p = p + "I don't know drawing\n";

    }
    if (document.getElementById('Movie').checked === true) {
        s = s + "You select Movie \n";
        p = p + "I love Movie specially south and hollywood \n";
    }
    if(s == ""){
        alert("you select nothing");
    }else{
        if(confirm(s)){
            alert(p);
        }
    }
}