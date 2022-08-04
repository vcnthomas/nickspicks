function boxMinBet(numberOfHorses) {
    let result = numberOfHorses;
    if (numberOfHorses <= 1 || numberOfHorses > 10)
return "Please enter a valid number of horses";
while (numberOfHorses > 1){
    numberOfHorses--;
    result *= numberOfHorses
}
return result;
}
