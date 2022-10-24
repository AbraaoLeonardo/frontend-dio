let lines = gets().split("");

let subtractProductAndSum = 0; 
let sum = 0;
let times = 1;
let n = 0;
while( lines.length > 0) {
  n = parseInt(lines.shift())
  sum += n
  times *= n
}

subtractProductAndSum = (times - sum);

print(subtractProductAndSum);