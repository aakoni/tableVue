

new Vue ({
  el: "#app",


  data: {
    leaders: [],
    alltimers: [],
    seen: true
  },
  
  mounted() {
    axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent").then(response => {this.leaders = response.data});
    axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime").then(response => {this.alltimers = response.data});
  }

});