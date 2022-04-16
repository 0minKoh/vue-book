<template>
<div>
  <a id="custom-login-btn" href="javascript:loginWithKakao()">
    <img
      src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
      width="222"
      alt="카카오 로그인 버튼"
    />
  </a>
</div>
</template>
<script>
export default {
  name:'kakao-login',
  methods: {
    KakaoLogin() {
      window.Kakao.Auth.login({
        scope: 'profile, account_email',
        success: this.getKaKaoAccount
      })
    },
    getKaKaoAccount() {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          const kakao_account = res.kakao_account
          const nickname = kakao_account.profile.nickname
          const email = kakao_account.email
          console.log('nickname', nickname)
          console.log('email', email)

          //로그인 처리 구현
          alert("로그인 성공!")
        },
        fail: error => {
          console.log(error)
        } 

      })
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        //로그아웃
        console.log(response)
      })
    }
  }
}
</script>