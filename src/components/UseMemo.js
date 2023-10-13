import React, { useMemo, useState } from 'react'

const data=[{
    "id": 1,
    "first_name": "Erskine",
    "last_name": "Delahunty",
    "email": "edelahunty0@merriam-webster.com",
    "gender": "Male",
    "ip_address": "151.103.73.118"
  }, {
    "id": 2,
    "first_name": "Damara",
    "last_name": "Stoaks",
    "email": "dstoaks1@ovh.net",
    "gender": "Female",
    "ip_address": "146.210.206.147"
  }, {
    "id": 3,
    "first_name": "Carilyn",
    "last_name": "Frowing",
    "email": "cfrowing2@indiatimes.com",
    "gender": "Genderfluid",
    "ip_address": "46.205.250.175"
  }, {
    "id": 4,
    "first_name": "Pammi",
    "last_name": "Ottley",
    "email": "pottley3@wired.com",
    "gender": "Female",
    "ip_address": "179.149.59.71"
  }, {
    "id": 5,
    "first_name": "Kiley",
    "last_name": "Renner",
    "email": "krenner4@google.pl",
    "gender": "Male",
    "ip_address": "234.95.12.65"
  }, {
    "id": 6,
    "first_name": "Korriealex",
    "last_name": "Pien",
    "email": "kpien5@instagram.com",
    "gender": "Female",
    "ip_address": "22.172.234.47"
  }, {
    "id": 7,
    "first_name": "Gwen",
    "last_name": "Castellone",
    "email": "gcastellone6@jimdo.com",
    "gender": "Female",
    "ip_address": "109.253.131.74"
  }, {
    "id": 8,
    "first_name": "Berti",
    "last_name": "Nourse",
    "email": "bnourse7@squidoo.com",
    "gender": "Male",
    "ip_address": "75.13.205.170"
  }, {
    "id": 9,
    "first_name": "Nils",
    "last_name": "Hawthorn",
    "email": "nhawthorn8@statcounter.com",
    "gender": "Male",
    "ip_address": "190.9.114.34"
  }, {
    "id": 10,
    "first_name": "Lorita",
    "last_name": "McLeary",
    "email": "lmcleary9@soundcloud.com",
    "gender": "Genderqueer",
    "ip_address": "144.56.116.4"
  }, {
    "id": 11,
    "first_name": "Derrik",
    "last_name": "Crallan",
    "email": "dcrallana@woothemes.com",
    "gender": "Male",
    "ip_address": "129.131.115.143"
  }, {
    "id": 12,
    "first_name": "Westbrook",
    "last_name": "Binny",
    "email": "wbinnyb@dyndns.org",
    "gender": "Male",
    "ip_address": "98.181.31.118"
  }, {
    "id": 13,
    "first_name": "Annabal",
    "last_name": "Golding",
    "email": "agoldingc@google.com.au",
    "gender": "Female",
    "ip_address": "146.155.139.17"
  }, {
    "id": 14,
    "first_name": "Ailyn",
    "last_name": "Hanne",
    "email": "ahanned@auda.org.au",
    "gender": "Female",
    "ip_address": "74.184.105.98"
  }, {
    "id": 15,
    "first_name": "Morris",
    "last_name": "Oxbrough",
    "email": "moxbroughe@senate.gov",
    "gender": "Male",
    "ip_address": "152.109.200.152"
  }, {
    "id": 16,
    "first_name": "Jobey",
    "last_name": "Jantel",
    "email": "jjantelf@jugem.jp",
    "gender": "Female",
    "ip_address": "38.176.168.236"
  }, {
    "id": 17,
    "first_name": "Elsa",
    "last_name": "Ivanyushkin",
    "email": "eivanyushking@bravesites.com",
    "gender": "Female",
    "ip_address": "44.9.81.165"
  }, {
    "id": 18,
    "first_name": "Randell",
    "last_name": "Korous",
    "email": "rkoroush@elegantthemes.com",
    "gender": "Genderqueer",
    "ip_address": "25.231.171.52"
  }, {
    "id": 19,
    "first_name": "Ax",
    "last_name": "Tomaszczyk",
    "email": "atomaszczyki@wsj.com",
    "gender": "Male",
    "ip_address": "153.92.254.76"
  }, {
    "id": 20,
    "first_name": "Olag",
    "last_name": "Teml",
    "email": "otemlj@twitter.com",
    "gender": "Male",
    "ip_address": "249.123.170.244"
  },];



const UseMemo = () => {
    const [toggle,settoggle]=useState(true);
    const getlonegestName=()=>{
        let res="";
        for(let i=0; i<data.length; i++){
            if(res.length<data[i].first_name.length){
                res=data[i].first_name;
            }
        }
        return res;
    }

    // catching the result
    let getNamebyMemo=useMemo(()=>{
        return getlonegestName();
    },[toggle])
   
  return (
    <div>
        <p>LongestName is :{getNamebyMemo}</p>
        <button onClick={()=>settoggle(!toggle)}>Toggle</button>
        {toggle && <p>Toggle</p>}
    </div>
  )
}

export default UseMemo