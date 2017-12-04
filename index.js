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
    let streets = this.beginningLocation.vertical - this.endingLocation.vertical
    let avenues = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)
    return(Math.abs(streets) + Math.abs(avenues))
  }

  estimatedTime(peak) {
    peak === true this.blocksTravelled()/3 : this.blocksTravelled()/2
  }
}
