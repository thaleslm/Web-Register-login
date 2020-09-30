function valid(){
     const senha = document.getElementById('passwor');
     const senha1 = document.getElementById('passwor1');
     const Btsubmit = document.getElementById('formregist')
    
     // validação de cadastro - se senha ter mais de 5 caractere e ser iguais
    if(senha.value == senha1.value ){
         if( senha.value.length > 5 && senha1.value.length > 5){
            Btsubmit.submit() 
       
        }else{
            alert('error: A senha não possui mais que 5 caractere!')
        }
    }else{
        alert('error: A senha não são iguais! ');
    }
    
}