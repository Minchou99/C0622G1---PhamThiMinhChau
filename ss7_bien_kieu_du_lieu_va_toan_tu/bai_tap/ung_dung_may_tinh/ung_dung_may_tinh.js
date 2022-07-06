function add(){
    let nhapvao1 = document.getElementById("nhap1").value;
    let nhapvao2 = document.getElementById('nhap2').value;
    let result;
    result = nhapvao1+nhapvao2 ;
    document.getElementById('result').innerText=result;
}
function sub(){
    let nhapvao1 = document.getElementById('nhap1').value;
    let nhapvao2 = document.getElementById('nhap2').value;
    let result;
    result = nhapvao1-nhapvao2;
    document.getElementById('result').innerText=result
}
function mul(){
    let nhapvao1 = document.getElementById('nhap1').value;
    let nhapvao2 = document.getElementById('nhap2').value;
    let result;
    result = nhapvao1*nhapvao2;
    document.getElementById('result').innerText=result
}
function div(){
    let nhapvao1 = document.getElementById('nhap1').value;
    let nhapvao2 = document.getElementById('nhap2').value;
    let result;
    result= nhapvao1/nhapvao2;
    document.getElementById('result').innerText=result
}