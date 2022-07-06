
function doitiente(){
    let giatrinhapvao=document.getElementById('nhapvao').value;
    let select1=document.getElementById('select1').value;
    let select2=document.getElementById('select2').value;
    if{
    (select1==select2)
        alert(giatrinhapvao);
}
    if{
    (select1=="VND" && select2=="USD")
        alert('Result: ' + giatrinhapvao*23000)
}
    if{
    (select1=="USD" && select2=="VND")
        alert('Result: ' + giatrinhapvao/23000)
}
    if{
    (select1=="" && select2=="USD")
        alert('Result: ' + giatrinhapvao*23000)
}
}
