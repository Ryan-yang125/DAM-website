

function debugBase64(base64URL){
    let win = window.open();
    let doc=win.document;
    win.document.write('<image id="shotImg" src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%;" allowfullscreen ></image>');
    
}


function downloadImage(imgUrl) {
    let a = $("<a></a>").attr("href", imgUrl).attr("download", "img.png").appendTo("body");
    a[0].click();
    a.remove();
}

//截图并添加隐藏水印
function shot(){ 

    renderer.render(scene, camera);
    let imgData = renderer.domElement.toDataURL("image/png");//这里可以选择png格式jpeg格式
    console.log(imgData);
    var textData;     
    ctx.font = '60px Microsoft Yahei';
    ctx.fillText('Copyright © 2020 Sculplay', 200, 130);
    textData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data;
    console.log(textData);
    var img1 = new Image();
    img1.src=imgData;
    var originalData;
    img1.onload = function () {
        ctx.drawImage(img1, 0, 0);
        // 获取指定区域的canvas像素信息
        originalData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
        var oData = originalData.data;
        console.log(oData);
        var bit, offset;  // offset的作用是找到alpha通道值
        bit = 0;
        offset = 3;
        for (var i = 0; i < oData.length; i++) {
            if (i % 4 == bit) {
                // 只处理目标通道
                if (textData[i + offset] === 0 && (oData[i] % 2 === 1)) {
                    // 没有信息的像素，该通道最低位置0，但不要越界
                    if (oData[i] === 255) {
                        oData[i]--;
                    } else {
                        oData[i]++;
                    }
                } else if (textData[i + offset] !== 0 && (oData[i] % 2 === 0)) {
                    // // 有信息的像素，该通道最低位置1，可以想想上面的斑点效果是怎么实现的
                    if (oData[i] === 255) {
                        oData[i]--;
                    } else {
                        oData[i]++;
                    }
                }
            }
        }
        ctx.putImageData(originalData, 0, 0);
    };

    //debugBase64(imgData);//弹出新窗口展示截图
    downloadImage(imgData);//自动下载图片(不带水印)
}
            
        
function set_water_mark()//添加页面全局水印
{
    var divContainer=document.body.appendChild(document.createElement('div'));
    divContainer.id="water";
    var pre_watermark=document.getElementsByClassName("watermark");
    for(let i=0;i<pre_watermark.length;i++)
    {
        document.body.removeChild(pre_watermark[i]);
    }
    let page_width=document.body.scrollWidth;
    let page_height=document.body.scrollHeight;

    cols=parseInt(page_width/(400+100))+10;
    rows=parseInt(page_height/(200+50))+1;
    let x,y;
    for(let i=0;i<rows;i++)
    {
        y=30+(45+50)*i;
        for(let j=0;j<cols;j++)
        {
            x=30+(100+100)*j;
            let new_div = document.createElement("div");
            new_div.className="watermark";
            new_div.innerText = "SCULPLAY";
            new_div.style.color = "black";

            new_div.style.transform = "rotate(-20deg)";
            new_div.style.position = "absolute";
            new_div.style.left = x+'px';
            new_div.style.top = y+'px';
            //new_div.style.overflow="hidden";
            new_div.style.zIndex="9999";
            new_div.style.pointerEvents = 'none';
            new_div.style.opacity="0.2";
            new_div.style.fontSize="12px";
            new_div.style.textAligh="center";
            //new_div.style.border = "red solid 2px";
            new_div.style.height = "100px";
            new_div.style.width = "200px";
            divContainer.appendChild(new_div);
            //document.body.appendChild(new_div);
        }
    }

} 

//监听dom避免显示水印被删除 TODO
function canvasObserver() {
    set_water_mark();
    let canvasObserver = new MutationObserver((mo) => {
        if (mo[0].removedNodes.className = 'watermark' && mo[0].addedNodes.length == 0 && mo[0].previousSibling != null) {
            set_water_mark()
        }
    });
    let config = { attributes: true, childList: true, characterData: true };

    canvasObserver.observe(document.querySelector('#watermark').parentNode, { childList: true });

    let configChild = { attributes: true, childList: true, characterData: true };
    let canvasObserverChild = new MutationObserver(mo => {
        set_water_mark()
    })
    canvasObserverChild.observe(document.querySelector('#watermark'), configChild);
}