const components = {
  register: `
    <section class="register">
    <form class="form-register">

        <div class="form-form">

    
        <div class="header">
            <h1>Flash Sale</h1>
            <h3>Nhanh chóng và dễ dàng <3</h3>
        </div>
        <div class="form-user">
            <div class="input-wrapper">
                <input type="text" name="firstName" placeholder=" Họ">
                <div id="firstName-error" class="error"></div>
                </div>
            <div class="input-wrapper">
                <input type="text" name="lastName" placeholder=" Tên">
                <div id="lastName-error" class="error"></div>
            </div>
        </div>

        <div class="input-wrapper">
            <input type="email" name="email" placeholder=" Email">
            <div id="email-error" class="error"></div>
        </div>

        <div class="input-wrapper">
            <input type="password" name="password" placeholder=" Mật khẩu">
            <div id="password-error" class="error"></div>
        </div>

        <div class="input-wrapper">
            <input type="password" name="comfirmPassword" placeholder=" Nhập lại mật khẩu">
            <div id="comfirmPassword-error" class="error"></div>
        </div>

        <div class="birthDay text">Ngày sinh</div>
        <div class="input-bDay">
            <input type="date" name="bDay">
            <div id="bDay-error" class="error"></div>

        </div>

        <div class="gender text">Giới tính</div>
        <div class="input-gender">
            <input type="radio" name="gender" value="male" checked> Male
            <input type="radio" name="gender" value="female"> Female
            <input type="radio" name="gender" value="other"> Other
            <div id="gender-error" class="error"></div>
        </div>

        <div class="btn-register">
            <a href="#" class="a">Đi đến đăng nhập</a>
            <button>Đăng ký</button>
        </div>
        </div>

        
    </form>
</section>
    `,

  login: `
        <section class="login">
        <form class="form-login">
            <div class="header">
                <h1>Flash Sale</h1>
                <h3>Nhanh chóng và dễ dàng <3</h3>
            </div>
            
            <div class="input-wrapper">
                <input type="email" name="email" placeholder=" Email">
            </div>

            <div class="input-wrapper">
                <input type="password" name="password" placeholder=" Mật khẩu">
            </div>

            <div class="btn-login">
                <a href="#" class="a">Đi đến đăng ký</a>
                <button>Đăng nhập</button>
            </div>

            
        </form>
    </section>
`,
};
