/*
* 标记当前显示的左侧菜单
* */
function markSideMenu(menuList,currName){

    var currDom = null;

    for(var i=0;i<menuList.length;i++){
        // console.log(menuList[i].getAttribute('mark'));
        if(menuList[i].getAttribute('mark')==currName){

            //检测是否存在className,存在就增加，不存在就添加
            if(menuList[i].className){
                menuList[i].className += ' active';
            }else{
                menuList[i].className = 'active';
            }

            currDom = menuList[i];

            break;

        }
    }

    return currDom; //返回被标记的元素

}

