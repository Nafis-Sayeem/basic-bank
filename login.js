document.getElementById("btn-submit").addEventListener("click" , function(){
    const mail = document.getElementById("input-email");
    mailValue = mail.value; 
    const pass = document.getElementById('input-pass');
    passNalue = pass.value;


    if ( mailValue == 'sontan@gmail.com' && passNalue == 'secret')
    {
        window.location.href = 'bank.html';
    }
    else
    {
        alert("tejjo putro");
    }
})