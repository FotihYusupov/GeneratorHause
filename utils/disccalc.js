const DiscCalc = (value, value2) =>{
    let onepercent = value / 100;
    let result = 100 - value2 / onepercent 
    return result.toFixed()
} 
export default DiscCalc