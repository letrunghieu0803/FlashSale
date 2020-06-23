const components = {
  nav: `
    <nav class="nav">
      <div class="nav-left">
        <div class="logo-nav">
          <button id="logo" class="non-button"></button>
        </div>
        <form action="" class="form-search-item">
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
    
    <div class="contain">
      <div class="non-contain"></div>
      <div class="main-contain">
        <div class="category">
          <span>Phân loại</span>
          <div class="time-category">
            <span>Thời gian</span>
            <div class="category-detail hover-cursor">Thời gian cố định</div>
            <div class="category-detail hover-cursor">Thời gian có hạn</div>
          </div>
          <div class="place-category">
            <span>Địa điểm</span>
            <div class="category-detail hover-cursor">Miền Bắc</div>
            <div class="category-detail hover-cursor">Miền Trung</div>
            <div class="category-detail hover-cursor">Miền Nam</div>
          </div>
        </div>
        <div class="new-feed">
          <span> Bài đăng mới </span>
          
          
        </div>

        <div class="follow">
          <div class='user-use hover-cursor'>Bài viết đã đăng
          </div>
          <div class='user-use hover-cursor'>Bài viết đang theo dõi
          </div>
      </div>
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
      <div class="main-contain" id='detail-main'></div>
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

          <textarea  type="text" name="description" id="description-form-add" placeholder="Mô tả sản phẩm"></textarea>
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
        
        <div id="time-error2" class="error"></div>
          
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
          <div class="div-post-btn">
          <button type="submit" id="form-post-btn">Đăng</button>
          </div>
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
            <div class="message-success error" id="message-error"></div>

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
          <div class="input-wrapper px">
              Tên<input type="text" name="name">
              </input>
          </div>

          <div class="input-wrapper">
              Email<input type="email" class="disable-input" name="email" disabled="disabled">
              </input>
          </div>

          <div class="input-wrapper">
              SĐT<input type="number" name="phoneNumber">
              </input>
          </div>

          <div class="input-wrapper">
              Ngày sinh<input type="date" name="birthDay">
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
              Ngày tạo<input class="disable-input" type="text" name="createdAt" disabled="disabled">
              </input>
          </div>

          
          <div id="footer-user">
              <button class="update">Cập nhập thông tin</button>

              <div class="button-back">
                  <button type="button">Quay lại trang chủ</button>
  
              </div>
          </div>

      </form>
  </div>
</section>
  `
  ,
  feedback:
    `
  <div class="container">
      <div class="row">
          
          <div id="body-report" class="col-8">
              <div>
              <h1 class="gop-y">Góp ý</h1>
              
                  <div class="form-group">
                      <b for="exampleInputEmail1">Địa chỉ email</b>
                      <input type="email" class="form-control" id="email-report" aria-describedby="emailHelp" placeholder="Enter email">
                      <div id="email-error" class="error"></div>
                  </div>
                  <div class="form-group">
                      <b for="exampleInputPassword1">Nội dung</b>
                      <textarea rows="4" id="content-report" type="text"></textarea>
                      <div id="content-error" class="error"></div>
                  </div>
                  <p class="icon-chuky">(っ◔◡◔)っ ♥ FS ♥</p>
                  <div class="chu-ky">
                  <button id="submit-report" type="submit" class="btn btn-primary">Gửi</button>
                  </div>
                  
              </div>            
          </div>
          
      </div>
  </div>
  `,
  footer:
    `
    <footer id="footer">
    <ul id="list-footer">
      <li>Chính sách bảo mật</li>
      <li>Quy chế hoạt động</li>
      <li>Chính sách trả hàng và hoàn tiền</li>
      <li>Giới thiệu Flash Sale</li>
    </ul>
    
    <div id="list-ketnoi">
    <span>Kết nối với chúng tôi</span>   
    <div id="doc">
    <a href="https://www.facebook.com/pvc.cuong97">pvc.cuong97</a>
      <a href="https://www.facebook.com/le.trunghieu.83">le.trunghieu.83</a>
    
    
      </div>
      <a id='donate' href="https://firebasestorage.googleapis.com/v0/b/flash-sale-503a4.appspot.com/o/103934416_267398624324499_4426595228627271614_n.jpg?alt=media&token=d8e87ece-5571-44ae-ae52-ef0218ce5647"> Ủng hộ chúng tôi</a>
    
    </div>
  </footer>
  `
};
