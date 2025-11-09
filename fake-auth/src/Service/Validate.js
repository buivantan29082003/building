const checkValidDate=(date,year)=>{
    let now=new Date();
    let yearCalcu=now.getFullYear()-date.getFullYear();
    const monthDiff = now.getMonth() - date.getMonth();
    const dayDiff = now.getDate() - date.getDate(); 
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        yearCalcu--;
    }
    return yearCalcu>=year;
}

const checkValidPhone=(phone)=>{
  const regex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
  return regex.test(phone);
}


const checkValidEmail=(email)=> {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


const checkValidLength=(string,length)=>{
    return (string+"").length>=length
}


module.exports={
    checkDate:checkValidDate,
    checkValidPhone:checkValidPhone,
    checkValidEmail:checkValidEmail,
    checkValidLength
}

 
