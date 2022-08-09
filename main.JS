var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
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

function new_image(get_image)
{
    fabric.Image.fromURL("player.png", function(Img)
    {
    master_image_object = Img;

    master_image_object.scaleToWidth(block_image_width);
    master_image_object.scaleToHeight(block_image_height);
    master_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);


    });
}

window.addEventListener("keydown", my_keydown);



    if(keyPressed == '85')
    {

        new_image('red.jpg');
        console.log("u");

    }
    if(keyPressed == '82')
    {
        new_image('green.jpg');
        console.log("r");

    }
    if(keyPressed == '89')
    {
        new_image('blue.jpg');
        console.log("y");

    }
    if(keyPressed == '68')
    {

        new_image('pink.jpg');
        console.log("d");

    }
    if(keyPressed == '67')
    {

        new_image('yellow.jpg');
        console.log("c");
    }
    
