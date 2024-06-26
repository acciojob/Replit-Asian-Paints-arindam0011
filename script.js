//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll(".grid-item");
    const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset");

    changeButton.addEventListener("click", function() {
        // Get the input values
        const blockId = document.getElementById("block_id").value;
        const colorId = document.getElementById("colour_id").value;

        // Reset all grid items to transparent
        gridItems.forEach(item => {
            item.style.backgroundColor = "transparent";
        });

        // Change the background color of the specified block
        const selectedBlock = document.getElementById(blockId);
        if (selectedBlock) {
            selectedBlock.style.backgroundColor = colorId;
        }
    });

    resetButton.addEventListener("click", function() {
        // Reset all grid items to transparent
        gridItems.forEach(item => {
            item.style.backgroundColor = "transparent";
        });
    });
});
