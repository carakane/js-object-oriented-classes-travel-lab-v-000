class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let now = new Date().getFullYear(year)
    console.log(now)
    console.log(this.startDate)
    return(now - this.startDate.getFullYear()-1)
  }
}
