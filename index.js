var open=document.getElementById("open")
var close=document.getElementById("close")
var slider=document.getElementById("slider")

open.addEventListener("click",function()
{
slider.style.right=0;
})
close.addEventListener("click",function()
{
slider.style.right="-100%";
}
)