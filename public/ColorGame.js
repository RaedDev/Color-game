var colors = GenerateRandomColors(6);

var squares = document.querySelectorAll(".square");
var selectedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var numSquares = 6;

colorDisplay.textContent = selectedColor;

easyBtn.addEventListener("click", function(){
    numSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = GenerateRandomColors(numSquares);
    selectedColor = pickColor();
    colorDisplay.textContent = selectedColor;

    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    numSquares = 6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    colors = GenerateRandomColors(numSquares);
    selectedColor = pickColor();
    colorDisplay.textContent = selectedColor;

    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    colors = GenerateRandomColors(numSquares);
    selectedColor = pickColor();
    colorDisplay.textContent = selectedColor;
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "#232323";
});

for(var i = 0; i < squares.length; i++) {
    // Assgining initial colors
    squares[i].style.backgroundColor = colors[i];

    // Adding event listeners
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor === selectedColor){
            messageDisplay.textContent = "Correct";
            ChangeColors(selectedColor);
            h1.style.backgroundColor = selectedColor;
            resetButton.textContent = "Play Again?";
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function pickColor()
{
    return colors[Math.floor(Math.random() * colors.length)];
}

function ChangeColors(color)
{
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function GenerateRandomColors(num)
{
    var arr = []

    for(var i = 0; i < num; i++)
    {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        arr.push("rgb(" + r + ", " + g + ", " + b + ")");
    }

    return arr;
}