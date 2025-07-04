export function showNotification(setter){
    setter(true);
    setTimeout(() => {
        setter(false)
    }, 2000)
}

// Function to check if user has won.

export function checkWin(correct, wrong, word){
    let status = 'win';
    
    // Check for win

    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = '';
        }
    })

    // Check for loss
    
    if(wrong.length === 6) status = 'lose'

    return status;
}