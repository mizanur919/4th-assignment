// Problem 01

/* function seerToMon(seer) {
  let mon = 0;
  if (typeof seer != "number") {
      return "Insert a number.";
  } else {
      mon = seer / 40;
      return mon;
  }
}
console.log(seerToMon(80)) */

////// Problem 02 /////

/* function totalSales(shirt, pant, shoe) {
  let total = 0;

  const perShirtPrice = 100;
  const perPantPrice = 200;
  const perShoePrice = 500;

  if (
    typeof shirt == "number" &&
    typeof pant == "number" &&
    typeof shoe == "number"
  ) {
    // Check inserted value positive or not
    if (shirt >= 0 && pant >= 0 && shoe >= 0) {
      let shirtsTotalSale = shirt * perShirtPrice;
      let pantTotalSale = pant * perPantPrice;
      let shoeTotalSale = shoe * perShoePrice;
      total = shirtsTotalSale + pantTotalSale + shoeTotalSale;
      return total;
    } else {
      return "Please insert positive number";
    }
  } else {
    return "Please Insert Numbers Only";
  }
}

console.log(totalSales(1, 0, 0)); */

////// Problem 03 ///////

/* function deliveryCost(numberOfShirts) {
  let totalDeliveryCost = 0;

  const first100ShirtsDeliveryCost = 100;
  const second100ShirtsDeliveryCost = 80;
  console;
  if (numberOfShirts <= 100) {
  }
} */
