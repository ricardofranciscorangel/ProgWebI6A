const spider = new Personaje("Spiderman");
const div2 = document.getElementsByClassName("detalle");
if (div2){
    div2.innerHTML = `Mi nombre es ${spider.name}`;
}