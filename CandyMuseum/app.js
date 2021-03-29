
const btn = document.querySelector('.button');
const validname = document.querySelector('#validname');
const validemail = document.querySelector('#validemail');
const validmsg = document.querySelector('#validmsg');
btn.addEventListener('click', (event)=>{
    event.preventDefault(event); 
   var name = document.querySelector('#name');
   var email = document.querySelector('#email');
   var msg = document.querySelector('#msg');
   validname.innerHTML = "";
   validemail.innerHTML = "";
   validmsg.innerHTML = "";
   var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    if(name.value == "" && msg.value ==""){
        validname.innerHTML = 'please enter name';
        validemail.innerHTML ='please enter valid email';
        validmsg.innerHTML = 'please enter message';
    
    }/* else if(email.value == "" && email.value !== '' ){
        validemail.innerHTML ='please enter valid email';
    } */
    else if(email.value.match(mailformat)){
   alert(`Hello! ${name.value} Successfully recieved your query`);
   name.value = "";
   email.value ="";
   msg.value="";
    }
    else{
        validemail.innerHTML ='please enter valid email (name@example.com)';
    }
})

