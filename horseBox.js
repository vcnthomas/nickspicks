function boxMinBet(numberOfHorses) {
    let result = numberOfHorses;
    if (numberOfHorses == 0 || numberOfHorses == 1)
return "Please enter two or more horses";
while (numberOfHorses > 1){
    numberOfHorses--;
    result *= numberOfHorses
}
return result;
}
