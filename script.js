let ctr = 0;
function callback() {
    const el = document.querySelectorAll("h2")[1];
    if (el) {
        el.innerHTML = ctr;
        ctr = ctr + 1;
    }
}
setInterval(callback, 1000);

<html>
    <body>
        <input type="text"></input>
        <button onclick="addTodo()">Add todo!</button>
    </body>    
        <script>
            function addTodo(){
                const inputEl=document.querySelector("input");
                const value=inputEl.value;
                const newDivEl=document.createElement("div");
                newDivEl.innerHTML="<div>"+value+"</div><button onclick='deleteToDo()'>delete</button>";
                
                document.querySelector("body").appendChild(newDivEl);
            }
        </script>

   
</html>