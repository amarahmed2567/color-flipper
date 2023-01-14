let hx = ["0","1","2","3","4","5","6","7","8","9", 
            "A","B","C","D","E","F"],
            myAuto =document.getElementById("autoBun"),
            mybutton = document.getElementById("bun"),
            textspan = document.getElementById("textback"),
            mycopyButton=document.querySelector("#copyBun");

            mybutton.onclick = ()=>{
                let textt = "#";

                for(i=0; i < 6; i++ ){
                    let   ma= Math.floor(Math.random() * hx.length);  
                textt += hx[ma]
                }
                document.body.style.backgroundColor = textt ;
                textspan.innerHTML = textt;

            };
            myAuto.onclick = ()=>{
                document.body.style.backgroundColor = "#f2f7fd" ;
                textspan.innerHTML = "#f2f7fd";
            }

            //copy function
            mycopyButton.addEventListener("click", copy_password);

function copy_password() {
    var textArea = document.createElement("textarea");
    textArea.value =  textspan.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    textspan.innerHTML ="copyed "
}
