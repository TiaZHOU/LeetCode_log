function createCheckDigit(membershipId) {
    let temp =0;
    for(let i=0; i<membershipId.length; i++)
    {
        temp += Number(membershipId.charAt(i));
    }
    if(temp > 9)
    {
        return createCheckDigit(temp.toString());
    }
    else
    {
        return temp;
    }
    // Write the code that goes here.
    return 0;
}

console.log(createCheckDigit("55555"));