module.exports = function Booking(oldBooking){
    this.booking = oldBooking.booking || {};
    this.totalQty = oldBooking.totalQty || 0;

    this.add = function(booking, id){
        var addedBooking = this.booking[id];
        if(!addedBooking){
            addedBooking = this.booking[id] ={booking : booking, addedQty: 0};
        }
        addedBooking.addedQty++;
        this.totalQty++;
    }
    this.generateArray = function(){
        var arr = [];
        for(var id in this.booking){
            arr.push(this.booking[id]);
        }
        return arr;
    }
};