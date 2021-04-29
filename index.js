
function superbowlWin (array) {
    const win = array.find(obj => {return obj.result === 'W'})
    if (win != undefined) {
        return win.year
    } else {
        return undefined
    }
}