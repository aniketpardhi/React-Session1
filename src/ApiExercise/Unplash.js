import axios from "axios";

const Unplash=axios.create({
 baseURL: "https://api.unsplash.com/",
 headers: {
    Authorization: "Client-ID gK_2K1whhuxg4otS38iTXg2ALmsyniHuaopFOIwjVmg",
  },
})
export default Unplash;