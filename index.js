class BoardMember {
  constructor(name, home, train) {
    this.name = name;
    this.homeState = home;
    this.training = train;
  }

  veto() {
    return "No, I must disagree";
  }

  approve(){
    return "You can do that!";
  }
}
