
function gerar(){
    
    var numero = document.getElementById("numero")
    if(numero.value.length == 0){
        alert("Preencha um numero para gerar uma tabuada!")
    }else{
        var sele = document.getElementById("sele")
        sele.innerHTML = ""
        for(var i=0;i<11;i++){
            let opt = document.createElement("option")
            let num = Number(numero.value)
            opt.text = `${num} x ${i} = ${(num*i)}`
            sele.appendChild(opt)
        }
        
        
    }
}