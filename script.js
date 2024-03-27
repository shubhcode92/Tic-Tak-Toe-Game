let curr = "X";
let nums = [["s", "g", "h"], ["i", "j", "k"], ["l", "m", "n"]];

function changeValue(x, y) {
    let node = document.querySelector(`#f${x}${y}`);
    node.innerHTML = `<h2>${curr}</h2>`;
    nums[x][y] = curr;


    if ((nums[0][0] == nums[0][1] && nums[0][1] == nums[0][2]) ||
        (nums[1][0] == nums[1][1] && nums[1][1] == nums[1][2]) ||
        (nums[2][0] == nums[2][1] && nums[2][1] == nums[2][2]) ||
        (nums[0][0] == nums[0][1] && nums[0][1] == nums[0][2]) ||
        (nums[0][0] == nums[1][0] && nums[1][0] == nums[2][0]) ||
        (nums[0][1] == nums[1][1] && nums[1][1] == nums[2][1]) ||
        (nums[0][2] == nums[1][2] && nums[1][2] == nums[2][2]) ||
        (nums[0][0] == nums[1][1] && nums[1][1] == nums[2][2]) ||
        (nums[0][2] == nums[1][1] && nums[1][1] == nums[2][0]) ) {
            let win = document.querySelector(".winner");
            win.innerHTML = `<h2>Final Winner is : ${curr}</h2>`;
    }

    curr = curr === "X" ? "O" : "X";
}