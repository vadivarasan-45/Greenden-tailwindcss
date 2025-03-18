var open=document.getElementById("open")
    var close=document.getElementById("close")
    var slider=document.getElementById("slider")
    var search=document.getElementById("search")
    var containerlist=document.getElementById("container")
    var list=containerlist.querySelectorAll("div")

    open.addEventListener("click",function()
{
    slider.style.right=0;
})
close.addEventListener("click",function()
{
    slider.style.right="-100%";
}
)
search.addEventListener("keyup",function()
{
    var entervalue=event.target.value
    
    for(i=0;i<list.length;i++)

{
    var productname=list[i].querySelector("h1").textContent

    if(productname.toUpperCase().indexOf(entervalue)<0)
{
    list[i].style.display="none"
}
else
{
    list[i].style.display="block"
}
}})