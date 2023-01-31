function sendMail(){
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      tel: document.getElementById("tel").value,
       company: document.getElementById("company").value,
  
    }
    const serviceId = "service_8jbz2zh";
    const templateId = "template_4fbq02n";
    
    emailjs.send(serviceId, templateId, params).then((res)=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("tel").value = "";
        console.log(res);
        alert("Your message sent succesfully");
      })
      .catch((err)=> console.log(err));
  }