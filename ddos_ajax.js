while(true){
$.ajax({
method: "POST",
url: "database/settings/connect_db.php"
})
.done(function(){
console.log("Ddos");
});
}
