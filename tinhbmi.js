function bam(){
    var khung2=document.getElementById('khung2').value;
    var chieucao =document.getElementById('chieucao').value;
    var sotuoi = document.getElementById('sotuoi').value;
    var cannang = document.getElementById('cannang').value;
    
    if(khung2 =='nu'){
        var sobmr=(10*Number(cannang)) + (25/4*Number(chieucao ))-( 123/25*Number(sotuoi))-161
        document.getElementById('bmr').innerHTML='Bmr của bạn là'+sobmr
    }
    else if(khung2 =='nam'){
        var sobmr=(10*Number(cannang ))+ (25/4*Number(chieucao ))- (123/25*Number(sotuoi))-5
        document.getElementById('bmr').innerHTML='Bmr của bạn là'+sobmr
    }
  
    
       

}