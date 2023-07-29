export default function getDustyInfoItems (obj={}){
    const url = `B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${process.env.REACT_APP_API_KEY}`

    const sidoName = `&sidoName=${obj?.sidoName || "서울"}`
    const stationName = `&stationName=${obj?.stationName || "종로구"}`
    const returnType =`&returnType=${obj?.returnType || "json"}`
    const ver =`&ver=${obj?.ver || "1.0"}`
    const numOfRows =`&numOfRows=${obj?.numOfRows || "100"}`
    const pageNo =`&pageNo=${obj?.pageNo || "1"}`
    
    return fetch(url +sidoName +stationName +returnType +ver +numOfRows +pageNo)
      .then((response) => {
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.log("contentType : ", contentType);
        }
        return response.json();
      })
      .then((data) => {
        if(data.response.header.resultCode == '00'){
            return data.response.body.items
        }else{
          alert('데이터를 가져오지 못했습니다')
        }
      });
} 
