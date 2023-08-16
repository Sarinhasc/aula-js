function enviar() {
    var nome = documento. getElementybyid("nomeid");
  
    if (nome.value != "") {
      alert('obrigado, sr(a)' + nome.value + 'seu formulario foi enviado')
    }else{
        alert('vazio')
    }
  }
  
  function limpa_formulario_cep() {
      document.getElementyById('rua').value("");
      document.getElementyById('bairro').value("");
      document.getElementyById('cidade').value("");
      document.getElementyById('uf').value("");
  }

  function meu_callback(conteudo) {
      if (!("erro") in conteudo) { 
      document.getElementyById('rua').value=(conteudo.logradouro);
      document.getElementyById('bairro').value=(conteudo.bairro);
      document.getElementyById('cidade').value=(conteudo.localidade);
      document.getElementyById('uf').value=(conteudo.uf);
      } else {
          
              limpa_formulario_cep();
              alert(CEPinvalido)
       }
  }
  
  function pesquisacep (valor){
      var cep = valor.replace(/\D/g,'');
  
      if (cep != ""){
          var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)){
            document.getElementyById('rua').value="...";
            document.getElementyById('bairro').value="...";
            document.getElementyById('cidade').value="...";
            document.getElementyById('uf').value="...";
    
            var script = documento.createElement('script');
    
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_calback'
            
            document.body.appendChild(script)
        
        } else {
          limpa_formulario_cep()
          alert(CEPInavalido)
        }
    } else {
        limpa_formulario_cep();
    }
}       

