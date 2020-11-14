canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

player_object = "";
block_object = "";

block_width = 30;
block_height = 30;

function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_block(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey && keyPressed == '80') {
        console.log("shift and p");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width_span").innerHTML = block_width;
        document.getElementById("height_span").innerHTML = block_height;
    }

    if (e.shiftKey && keyPressed == '77') {
        console.log("shift and m");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("width_span").innerHTML = block_width;
        document.getElementById("height_span").innerHTML = block_height;
    }

    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '70') {
        new_block("ironman_face.png");
        console.log("f");
    }
    if (keyPressed == '66') {
        new_block("spiderman_body.png");
        console.log("b");
    }
    if (keyPressed == '76') {
        new_block("hulk_legs.png");
        console.log("l");
    }
    if (keyPressed == '82') {
        new_block("thor_right_hand.png");
        console.log("r");
    }
    if (keyPressed == '72') {
        new_block("captain_america_left_hand.png");
        console.log("h");
    }
    
}
