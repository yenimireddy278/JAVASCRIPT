function withdraw(balance,amount){
    if(amount<=balance){
        return "withdrawl successful";
    }
    return "insufficient balance";
}
console.log(withdraw(10000,3000));