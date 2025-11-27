const canvas = document.getElementById("canvas");
const gridSize = 20;
const colorPicker = document.getElementById("colorPicker")

for(let i = 0; i < gridSize * gridSize; i++){
  let pixel = document.createElement("div");
  pixel.className = "pixel";
  canvas.appendChild(pixel);
}

const pixels = document.querySelectorAll(".pixel");
let isDrawing = false;

  pixels.forEach(pixel => {
    pixel.addEventListener("pointerdown", function(e){
      isDrawing = true;
      this.style.backgroundColor = colorPicker.value;
      e.preventDefault();
    });

          pixel.addEventListener("pointerover", function(){
            if(isDrawing){
              this.style.backgroundColor = colorPicker.value;
            }
      });
  });

 window.addEventListener("pointerup", function(){
      isDrawing = false;
});

  
