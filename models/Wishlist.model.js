module.exports = function Wishlist(oldList){
    this.hotelList = oldList.hotelList || {};
    this.totalItems = oldList.totalItems || 0;

    this.add = function(hotel, id){
        var addedHotel = this.hotelList[id];
        if(!addedHotel){
            addedHotel = this.hotelList[id] = {hotel: hotel};
            this.hotelList.push(addedHotel);
            this.totalItems++
        } else{
            return this.hotelList;
        }
    }
    this.generateListArray =  function(){
        var listArr = [];
        for(var id in this.hotelList){
            listArr.push(this.hotelList[id]);
        }
        return listArr;
    }
};