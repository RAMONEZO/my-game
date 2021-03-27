document.onkeydown = checkButton

let cube = {
    x: 6,
    y: 7,
    id: 'main'
}

function checkButton(e) {
    
    let k = e || window.event;

    console.log(k);

    if (k.keyCode === 38) {
        // key: ArrowUp
        cube.y -= 100
        render(cube.id, cube.x, cube.y);
      }
    
    else if (k.keyCode === 40) {
        // ArrowDown
        cube.y += 100; 
        render(cube.id, cube.x, cube.y);

    }
    
    else if (k.keyCode === 37) {
        // ArrowLeft
        cube.x -= 100; 
        render(cube.id, cube.x, cube.y);
    }

    else if (k.keyCode === 39) {
        // ArrowRight
        cube.x += 100;
        render(cube.id, cube.x, cube.y);
    }

    // key: ArrowUp
    // keyCode: 38
    // key: ArrowDown
    // keyCode: 40
    // key: ArrowLeft
    // keyCode: 37
    // key: ArrowRight
    // keyCode: 39

}

function render(id, x, y) {
    document.getElementById(id).style.top = y + 'px'
    document.getElementById(id).style.left = x + 'px'
}

render(cube.id, cube.x, cube.y);