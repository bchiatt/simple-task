//Resources
var prompt=require('sync-prompt').prompt;
var chalk=require('chalk');

var play = [], home = [], work = [];
var todo = prompt("Do what? ('quit' to stop adding) ");

//User Prompt

while (todo != 'quit'){
  var option = prompt('To-do for (h)ome, (w)ork, (play): ');
  if (option === 'h'){
    home.push(todo);
  }else if (option === 'w'){
    work.push(todo);
  }else if ( option === 'p'){
    play.push(todo);
  }else{
    console.log("Please only enter 'h', 'w', 'p'.");
  }
  todo = prompt("Do what? ('quit'; to stop adding) ");
}

//Calculations



//Final Display

console.log('');
console.log('');
console.log('Here are your remaining tasks:');
console.log('');
console.log('HOME');
for (var i = 0; i < home.length; i++){
  console.log(chalk.green(home[i]));
}
console.log('');
console.log('WORK');
for (var i = 0; i < work.length; i++){
  console.log(chalk.yellow(work[i]));
}
console.log('');
console.log('PLAY');
for (var i = 0; i < play.length; i++){
  console.log(chalk.red(play[i]));
}
