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
    console.log(this.beginningLocation)

    let streets = this.beginningLocation.vertical - this.endingLocation.vertical
    console.log(streets)
  }

  estimatedTime() {

  }
}
