const sizePicker = document.querySelector('.size_choosen');
const pixelCanvas = document.querySelector('.table_canvas');
const quickFill = document.querySelector('.fillbtn');
const eraseMode = document.querySelector('.eraser');
const drawMode = document.querySelector('.draw_canvas');

function makepixel_Grid_() {
  let pixel_Grid_Height = document.querySelector('.height_choosen').value;
  let pixel_Grid_Width = document.querySelector('.width_choosen').value;
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
  for (let i = 1; i <= pixel_Grid_Height; i++) {
    let gridrow_part = document.createElement('tr');
    pixelCanvas.appendChild(gridrow_part);
    for (let j = 1; j <= pixel_Grid_Width; j++) {
      let pixel_Grid_Cell = document.createElement('td');
      gridrow_part.appendChild(pixel_Grid_Cell);
      pixel_Grid_Cell.addEventListener('mousedown', function() {
        const color = document.querySelector('.color_choice').value;
        this.style.backgroundColor = color;
      })
     }
  }
}

makepixel_Grid_(25, 25);

sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makepixel_Grid_();
});

let down = false;  

pixelCanvas.addEventListener('mousedown', function(e) {
	down = true;
	pixelCanvas.addEventListener('mouseup', function() {
		down = false;
	});
  pixelCanvas.addEventListener('mouseleave', function() {
    down = false;
  });

  pixelCanvas.addEventListener('mouseover', function(e) {
    const color = document.querySelector('.color_choice').value;
  	if (down) {
      if (e.target.tagName === 'TD') {
      	e.target.style.backgroundColor = color;
      }
    }
  });
});

quickFill.addEventListener('click', function(e) {
  e.preventDefault();
  const color = document.querySelector('.color_choice').value;
  pixelCanvas.querySelectorAll('td').forEach(td => td.style.backgroundColor = color);
});

pixelCanvas.addEventListener('dblclick', e => {
  e.target.style.backgroundColor = null;
});


eraseMode.addEventListener('click', function() {
  pixelCanvas.addEventListener('mousedown', function(e) {
  	down = true;
  	pixelCanvas.addEventListener('mouseup', function() {
  		down = false;
  	});
    pixelCanvas.addEventListener('mouseleave', function() {
      down = false;
    });
    pixelCanvas.addEventListener('mouseover', function(e) {
    	if (down) {
        if (e.target.tagName === 'TD') {
        	e.target.style.backgroundColor = null;
        }
      }
    });
  });
  pixelCanvas.addEventListener('mousedown', function(e) {
    e.target.style.backgroundColor = null;
  });
});

drawMode.addEventListener('click', function() {
  pixelCanvas.addEventListener('mousedown', function(e) {
  	down = true;
  	pixelCanvas.addEventListener('mouseup', function() {
  		down = false;
  	});
    pixelCanvas.addEventListener('mouseleave', function() {
      down = false;
    });
    pixelCanvas.addEventListener('mouseover', function(e) {
      const color = document.querySelector('.color_choice').value;
    	if (down) {
        if (e.target.tagName === 'TD') {
        	e.target.style.backgroundColor = color;
        }
      }
    });
  });
  pixelCanvas.addEventListener('mousedown', function(e) {
    if (e.target.tagName !== 'TD') return;
    const color = document.querySelector('.color_choice').value;
    e.target.style.backgroundColor = color;
  });
});
