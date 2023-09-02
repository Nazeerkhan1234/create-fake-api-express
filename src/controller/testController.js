let testController = (req,res)=>{
    function getRamdomDateInBetween(start, end) {
       //7 day before
       var date1 = new Date();
        var start=  date1.setDate(date1.getDate() - 7);
       //after 7 day
       const date2 = new Date();
         var end=  date2. setDate(date2. getDate() + 7)
         let date3=new Date(Math.floor(Math.random() * (end - start + 1) + start));
         //const unixTimestamp = Math.floor(date.getTime() / 1000);
         const unixTT=Math.floor(date3);
        return unixTT;
    }
    //Controller Logic Functions
    if( Math.random() > 0.5 ?true:false){ 
        var ordersArray = [];
        let rn = Math.ceil(Math.random()*20);
        for(var i = 1;i <= rn ; i++){
            let order = {
                "order_id": Math.ceil(Math.random() * (99999 - 1000) + 1000),
                "arrives_at_utc": getRamdomDateInBetween(),
                "paid_with": Math.random() < 0.5? "Cash":"Wallet",
                "total_paid": parseFloat((Math.random() * (99.00 - 10.00) + 10.00).toFixed(2)),
                'test':rn
               
            }
            ordersArray = [
                ...ordersArray, 
                order
            ]
        }
        res.status(200).json({
            orders:ordersArray
        });
    }else{
        //False
        res.status(503).send();
    }
}
exports.testController = testController;
