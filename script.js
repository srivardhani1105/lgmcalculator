let screen=document.getElementById("clear");
function allClear()
{
    screen.value="";
}
function show()
{
    screen.value=screen.value.toString().slice(0,-1);
}
function print(n)
{
    screen.value+=n;
}
function calc()
{
    screen.value=eval(screen.value);
}