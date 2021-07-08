function readMore() {
    var blockText = document.getElementById("menu");
    var menuText = document.getElementById("text");
    var btn = document.getElementById("btn");
    
    if (blockMenu.childElementCount < 2){
        for (i=0; i<2; i++){
        var cloneMenuBtn = menuText.cloneNode(true);
        blockText.appendChild(cloneMenuBtn);
        btn.innerHTML = "Скрыть";
    }
    } else {
        for (i=0; i=2; i++) {
            document.getElementById("text").remove();
            btn.innerHTML = "Показать все";
        }
    }
    }