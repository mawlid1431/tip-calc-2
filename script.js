function calcTip(bill) {
  let tip;
  
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15; // 15% tip
  } else {
    tip = bill * 0.20; // 20% tip
  }
  
  const total = bill + tip;
  
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
}

// Example usage:
calcTip(275); // Output: "The bill was 275, the tip was 41.25, and the total value 316.25"
console.log("hello");
