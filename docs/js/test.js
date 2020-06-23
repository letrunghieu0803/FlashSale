
window.onload = async function () {
  let myform = document.getElementById("myform");
  console.log(myform)
  myform.onsubmit= function(event){
    event.preventDefault();
    // Change to your service ID, or keep using the default service
    let service_id = "default_service";
    let template_id = "template_4LscTQSN";
    emailjs.sendForm(service_id,template_id,myform[0])
      .then(function(){ 
        alert("Sent!");
         
      }, function(err) {
         alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
         
      });
    return false;
  };
  
}