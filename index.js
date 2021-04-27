// Code your solution in this file!


//returns a distance in blocks
function distanceFromHqInBlocks(street) {   
    if (street > 42) { 
        return(street - 42)
    } else {
        return(42 - street)
    }
}


//returns a distance in feet
function distanceFromHqInFeet(street) {
    return (distanceFromHqInBlocks(street) * 264)

}

//returns the distance travelled in feet
function distanceTravelledInFeet(street1, street2) {
        if (street1 > street2) {
            return (street1 - street2) * 264}
        else 
            return (street2 - street1) * 264}  
            

//calculatesFarePrice(start, destination)
function calculatesFarePrice(start, destination) {
        let distanceInFeet = distanceTravelledInFeet(start, destination);
        //The first four hundred feet are free.
        if (distanceInFeet <= 400){
            return 0;} //For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!)
        else if (distanceInFeet >= 400 && distanceInFeet <= 2000){
            return (distanceInFeet - 400) * 0.02;} //Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
        else if (distanceInFeet > 2000 && distanceInFeet < 2500){
            return 25;        
            }   
        else {
            return 'cannot travel that far'
        }        
}
