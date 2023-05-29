/***************************CREATING A RECURSVIVE FUNCTION*******************************
function recursive(num) {
    console.log('Recursing number: ', num);
    if (num < 10 && num > 0) {
        recursive((num + 1));
        //10 has been set as the limit
    }else {
        console.log('Ended rescursive function at number: ', num);
    }
}
recursive(3);
recursive(9);
recursive(1);
*/


/****************************SETTING TIMEOUT ORDER***************************/
// let func1 = () => console.log('One');
// let func2 = () => console.log('Two');
// let func3 = () => {
//     console.log('Three')
//     func1();
//     func2();
// };
// let func4 = () => {
//     console.log('Four');
//     //setTimeout invokes function 1 then function 3 immediately after
//     setTimeout(func1, 0);
//     func3();
// };
// func4();
//functions are saved as variables and result in strings being output into the console 


