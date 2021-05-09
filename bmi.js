function bam(){
    var chieucao=document.getElementById('chieucao').value;
    var cannang=document.getElementById('cannang').value;
    let bmi =cannang/(chieucao*chieucao);
    document.getElementById('sobmi').innerHTML='bmi của bạn là '+ bmi
    
}