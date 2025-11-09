const calDate=()=>{
    let date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return date
}

export default calDate