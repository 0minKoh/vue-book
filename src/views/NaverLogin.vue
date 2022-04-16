<template>
<div>
  <div id="naverIdLogin"></div>
  <button type="button" @click="logout"></button>
</div>
</template>
<script>
import axios from "axios" //서버 데이터 바인딩 모듈
export default {
  name:'Naver-login',
  data() {
    return {
      naverLogin: null,
    }
  },
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clinetId: "hXwr0kisfBNidkfgtjB0", //등록된 클라이언트 아이디
      callbackUrl: "http://localhost:8080/naverlogin", //등록한 콜백
      isPopup: true, //로그인 팝업창 띄움 여부
      loginButton: {
        color: "green",
        type: 3,
        height: 60
      }
    })

    this.naverLogin.init() //초기화
    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status)
        console.log(this.naverLogin.user)

        //필수적으로 받아야 하는 프로필 정보 -> callback 처리 시점에 체크
        var email = this.naverLogin.user.getEmail()
        if (email == undefined || email == null) {
          alert('이메일은 필수 정보입니다. 정보 제공을 동의해주세요')
          this.naverLogin.reprompt()
          return
        }
      } else {
        console.log('callback 처리에 실패하였습니다')
      }
    })
  },
  methods: {
    logout() {
      const clientId = "hXwr0kisfBNidkfgtjB0"
      const clientSecret = "j30A7zSNLy"
      const accessToken = this.naverLogin.accessToken.accessToken;
      const url = `/oauth2.0/token?grant_type=delete&client_id=${clientId}&client_secret=${clientSecret}&access_token=${accessToken}&service_provider=NAVER`

      axios.get(url).then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>