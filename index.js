class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let now = new Date().getFullYear(year)
    return(now - this.startDate.getFullYear())
  }
}
