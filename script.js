//your JS code here. If required.
let angle = 0; // Global variable to keep track of the rotation angle
const line = document.getElementById('line'); // Select the line element

// Function to rotate the line
function rotateLine() {
    angle += 2; // Increase the angle by 2 degrees
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Apply the rotation
}

// Call the rotateLine function every 20 milliseconds
setInterval(rotateLine, 20);