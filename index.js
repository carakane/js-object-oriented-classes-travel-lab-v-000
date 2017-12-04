class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let now = new Date().getFullYear(year)
    return(now - this.startDate.getFullYear()-1)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    console.log(this.beginningLocation)
    console.log(this.endingLocation)
    let streets = this.beginningLocation.vertical - this.endingLocation.vertical
    let avenues =
    console.log(streets)
  }

  estimatedTime() {

  }
}
