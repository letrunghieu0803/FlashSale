const components = {
  nav: `
    <nav class="nav">
      <div class="nav-left">
        <div class="logo-nav">
          <button id="logo" class="non-button"></button>
        </div>
        <form action="" class="form-search-item">
          <span>Search</span>
          <input id="input-search" type="text" placeholder="Nhập thứ bạn cần tìm" />
          <button id="icon-search" type="submit" class="non-button"></button>
        </form>
      </div>
      <div class="nav-right">
        <button class="non-button" id="add-post-btn"></button>
        <button class="non-button" class="item-link" id="item-link-feedback"></button>   
        <button class="non-button" class="item-link" id="item-link-user"></button>
        <button class="non-button" class="item-link" id="item-link-logout"></button>
        
      </div>
    </nav>
    `
  ,
  home: `  
    <div class="bia-nen-home">
    </div>
    <div class="contain">
      <div class="non-contain"></div>
      <div class="main-contain">
        <div class="category">
          <span>Phân loại</span>
          <div class="time-category">
            <span>Thời gian</span>
            <div class="category-detail">Thời gian cố định</div>
            <div class="category-detail">Thời gian có hạn</div>
          </div>
          <div class="place-category">
            <span>Địa điểm</span>
            <div class="category-detail">Miền Bắc</div>
            <div class="category-detail">Miền Trung</div>
            <div class="category-detail">Miền Nam</div>
          </div>
        </div>
        <div class="new-feed">
          <span> Bài đăng mới </span>
          
          
        </div>

      </div>
    `
  ,
  search: `
    <div class="contain">
      <div class="non-contain"></div>
      <div class="main-contain search-page" id="searchPage">
        <p>Danh sách bạn cần tìm</p>
        
        </div>
      </div>
    </div>`
  ,
  details: `
    <div class="contain">
      <div class="non-contain"></div>
      <div id="detailDiv" class="main-contain details">

      </div>
    </div>
    </div>
    `
  ,
  addPost:
    `
    <div class="contain-add">
    <div class="non-contain"></div>
    <div class='main-contain-add'>
    <h2>Nội dung các mục khi đăng  </h2>
        <form action="" id="form-add-post" >
          <input type="text" name="title" id="tilte-form-add" placeholder="Nhập tên sản phẩm">
          <div id="title-error" class="error"></div>

          <input type="text" name="description" id="description-form-add" placeholder="Mô tả sản phẩm">
          <div id="description-error" class="error"></div>

          <input type="text" name="deadTime" id="time-form-add" placeholder="Nhập thời hạn sử dụng của sản phẩm">
          <div id="time-error" class="error"></div>

          <div class="area-form-add" id="area-form-add">
            <span>Khu vực:</span>
            <input type="radio" name="area" value="Miền Bắc"> Miền Bắc
            <input type="radio" name="area" value="Miền Trung"> Miền Trung
            <input type="radio" name="area" value="Miền Nam"> Miền Nam
          </div>
          
          <div id="area-error" class="error"></div>

          <div class="time-form-add" id="time-form-add">
          <span>Thời gian:</span>
          <input type="radio" name="time" value="Thời gian cố định"> Thời gian cố định
          <input type="radio" name="time" value="Thời gian có hạn"> Thời gian có hạn
        </div>
        
        <div id="time-error" class="error"></div>
          
          <input type="text" name="placeUse"  placeholder="Nhập địa chỉ cụ thể sử dụng sản phẩm">
          <div id="placeUse-error" class="error"></div>

          <input type="text" name="price" placeholder="Nhập giá sản phẩm">
          <div id="price-error" class="error"></div>

          <input type="text" name="contact" placeholder="Nhập phương thức liên lạc với chủ sản phẩm">
          <div id="contact-error" class="error"></div>

          <div id="upload-picture-form">
            <span>Chọn ảnh minh họa sản phẩm:</span>
            <input type="file" name="picture" id="upload-picture">
          </div>
          <button type="submit" id="form-post-btn">Đăng</button>
        </form>
      </div>
    </div>
    `
  ,
  register:
    `
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

        <div class="birthDay text input-wrapper">Ngày sinh</div>
        <div class="input-bDay input-wrapper">
            <input type="date" name="bDay">
            <div id="bDay-error" class="error"></div>

        </div>

        <div class="gender text input-wrapper">Giới tính</div>
        <div class="input-gender">
            <input type="radio" name="gender" value="Nam" checked> Nam
            <input type="radio" name="gender" value="Nữ"> Nữ
            <input type="radio" name="gender" value="Khác"> Khác
            <div id="gender-error" class="error"></div>
        </div>

        <div class="message-error" id="register-error"></div>

        <div class="btn-register">
            <a href="#" class="a">Đi đến đăng nhập</a>
            <button class="register-btn">Đăng ký</button>
        </div>
        </div>

        
    </form>
</section>
    `,

  login:
    `
        <section class="login">
        <form class="form-login">
            <div class="header">
                <h1>Flash Sale</h1>
                <h3>Nhanh chóng và dễ dàng <3</h3>
            </div>
            
            <div class="input-wrapper">
                <input type="email" name="email" placeholder=" Email">
                <div id="email-error" class="error"></div>
            </div>

            <div class="input-wrapper">
                <input type="password" name="password" placeholder=" Mật khẩu">
                <div id="password-error" class="error"></div>
            </div>
            <div class="message-success message-error error "></div>

            <div class="btn-login">
                <a href="#" class="a">Đi đến đăng ký</a>
                <button class="login-btn" id="test">Đăng nhập</button>
            </div>

            
        </form>
    </section>
`,
  user:
    `
    <section class="user-info">
    <div class="background">
        <form class="form-user-info">
            <div class="input-wrapper">
                Tên<input type="text" name="name">
                </input>
            </div>

            <div class="input-wrapper">
                Email<input type="email" name="email">
                </input>
            </div>

            <div class="input-wrapper">
                SĐT<input type="number" name="phoneNumber">
                </input>
            </div>

            <div class="input-wrapper">
                Ngày sinh<input type="text" name="birthDay">
                </input>
            </div>

            <div class="input-wrapper">
                Giới tính<input type="text" name="gender">
                </input>
            </div>

            <div class="input-wrapper">
                Địa chỉ<input type="text" name="address" >
                </input>
            </div>

            <div class="input-wrapper">
                Cmt<input type="number" name="cmt">
                </input>
            </div>

            <div class="input-wrapper">
                Ngày tạo<input type="text" name="createdAt">
                </input>
            </div>

            <div>
                <button class="update">Cập nhập thông tin</button>

            </div>

            <div class="button-back">
                <button type="button">Quay lại trang chủ</button>

            </div>
        </form>
    </div>
</section>
    `
  ,
feedback :
`
  <div class="container">
      <div class="row">
          <div class="col-3">
          </div>
          <div id="body-report" class="col-8">
              <div>
                  <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="email-report" aria-describedby="emailHelp" placeholder="Enter email">
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                          else.</small>
                  </div>
                  <div class="form-group">
                      <label for="exampleInputPassword1">Nội dung</label>
                      <input id="content-report" type="text">
                  </div>

                  <button id="submit-report" type="submit" class="btn btn-primary">Submit</button>
              </div>            
          </div>
          <div class="col-3">

          </div>
      </div>
  </div>
  `,
};
