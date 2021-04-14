const tabitems=document.querySelectorAll('.tab-item');
const tabcontents=document.querySelectorAll('.tab-content-item');

//select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border')

    //Grab content item from the DOM
    const tabcontentItem = document.querySelector(`#${this.id}-content`);
    tabcontentItem.classList.add('show');
}


function removeBorder(){
    tabitems.forEach(item=>item.classList.remove('tab-border'));
}

function removeShow(){
    tabcontents.forEach(item=>item.classList.remove('show'));
}


tabitems.forEach(item =>item.addEventListener('click',selectItem));