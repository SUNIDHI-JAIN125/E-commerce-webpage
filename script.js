// document.querySelector('.popupwindow').style.display='none';
document.querySelector('.btn').addEventListener("click",()=>{
    document.querySelector('.popupwindow').classList.toggle('popupwindowgo');
})

if((document.querySelector('.popupwindow').classList.contains('popupwindow')))
{
document.querySelector('.popupwindow').addEventListener("mouseleave",()=>{
    document.querySelector('.popupwindow').classList.toggle('popupwindowgo');
})
}

