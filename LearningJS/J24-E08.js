function Card() {
    this.suit;
    this.face;

    this.setSuit = function(suit) {
        this.suit = suit;
    }
    this.setFace = function(face) {
        this.face = face;
    }
}
// Extend Date object to show day prior to current Date.  !!Incomplete!!
Date.prototype.getYesterday() = function() {
    today = new Date();
    return 
}