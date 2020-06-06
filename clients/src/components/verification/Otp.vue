<template>
  <div>
    <div class="card card-otp" >
      <div class="title">
        OTP Verification
      </div>
      <div class="text">
        Enter the One Time Password we sent to your registered mail id
      </div>
      <div class="mt-2">
        <form>
          <input class="input-box" maxlength="4"/>
          <br/>
          <button class="btn btn-outline-primary">Verify</button>
        </form>
        <div class="code">
          <a style="font-size: 13px;" href="#">Send Code Again?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .card-otp{
    width: 25rem;
    margin-left: 35%;
    margin-top: 10%;
    background-color: black;
    color: white;
    border-radius: 20px;
  }

  .title{
    font-size: 25px;
    margin-left: 27%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .text{
    width: 59%;
    margin-left: 20%;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
  }

  .input-box{
    margin-left: 20%;
    width:60%;
    border-radius:20px;
    margin-top: 10px;
  }

  .btn{
    width: 25%;
    margin-top: 20px;
    margin-left: 36%
  }

  .code{
    margin-left: 35%;
    margin-top: 5%;
    margin-bottom: 20px;
  }

@media only screen and (max-width:  360px){
  .card-otp{
    width: 15rem;
    margin-left: 10%;
    margin-top: 25%;
    /* text-align: justify; */
  }

  .btn{
    width: 30%;
    margin-left: 100px;
  }

  .code{
    margin-left: 80px
  }
}

@media only screen and (max-width: 650px){
  .card-otp{
    margin-top: 40%;
    width: 20rem;
    margin-left: 14%;
  }
}
</style>