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
            <div class="category-detail hover-cursor">Thời gian theo hạn</div>
          </div>
          <div class="place-category">
            <span>Địa điểm</span>
            <div class="category-detail hover-cursor">Miền Bắc</div>
            <div class="category-detail hover-cursor">Miền Trung</div>
            <div class="category-detail hover-cursor">Miền Nam</div>
          </div>
        </div>
        <div class="new-feed">
              <h1>Bài đăng mới</h1>
          
          
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
          <input type="radio" name="time" value="Thời gian theo hạn"> Thời gian theo hạn
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
  introPage: 
  `
  <div class="content-detail-seller">
  <h1>Giới thiệu FlashSale</h1>
  <div class="entry-content">
    <div id='main-content-intro'>
      <div id="intro-deco">
        <img id='intro-page-img'src="https://i.pinimg.com/originals/fe/df/98/fedf9824a6ff2de7b56a6edcc47ff9ab.jpg" alt="">
      </div>
      <div id="intro-content">
        <p>
          Mục tiêu của FlashSale là sẽ trở thành thị trường thông tin mua
          bán trực tuyến tiện ích hàng đầu Việt Nam. Mục đích của FlashSale
          là cho phép người mua và người bán tìm kiếm, đăng tải thông tin,
          kết nối an toàn, dễ dàng trong một môi trường tiện lợi và rõ ràng.
        </p>
        <p>
          Không giống các trang khác, trên trang của chúng tôi, những hạng
          mục sản phẩm liên quan tới thời gian, và ở đây đặc biệt là "có
          hạn"! Tất nhiên, sản phẩm nào mà chả có hạn thời gian sử dụng,
          nhưng chúng tôi chia hạn thời gian này thành 2 mục, đó là : hết
          hạn vẫn có thể sử dụng và hết hạn không thể sử dụng.
        </p>

        <p>
          Hêt hạn có thể sử dụng? Là những sản phẩm ví như đồ ăn quá hạn
          vậy. Bạn có thể sử dụng tiếp chúng trong tiếp 1 khoảng thời gian
          lâu hay ngắn thì không biết. Nhưng!!! Vị hay chất lượng của nó thì
          chúng tôi cá chắc rằng sẽ rất tệ đó! Hay như chiếc ti vi có hạn sử
          dụng cỡ 10 năm thì sẽ có nguy cơ hỏng, quảng cáo là vậy nhưng tùy
          theo mức sử dụng, chúng ta đã có một khoảng thời gian dùng nó khác
          rồi!
        </p>
        <p>
          Đó không phải là thứ chúng thôi nhắm đến. Thứ chúng tôi hướng đến
          là loại còn lại - sản phẩm một khi hết hạn sẽ không tài nào sử
          dụng được nữa. Ví như chiếc vé máy bay, nó đã có sự ấn định ngày
          sử dụng, bạn không dùng -> bạn mất nó. Hay như chiếc thẻ thành
          viên tập gym của bạn, bạn có một khoảng thời gian dài thật dài để
          sử dụng nó đi chăng nữa, qua hạn ngày cuối dù chỉ 1 ngày bạn cũng
          chả thể nào sử dụng nữa. Đại loại đến đây chắc bạn cũng hình dung
          được một số đặc điểm khác nhau của 2 loại vật phẩm "có hạn" này.
          Nhưng đó chưa hẳn là 100% mục tiêu của trang chúng tôi!
        </p>

        <p>
          Như đã đề cập ở trên, nó là 1 trang trực tuyến tiện ích, chữ tiện
          ích này cũng chiếm đến 50% lý do chúng tôi xây dựng web này. "Tiện
          ích" này không hẳn là gì đó quá cao siêu. Đơn giản là nó chính là
          sự tiện nghi, đơn giản với người dùng. Và người dùng ở đây chúng
          tôi nhắm đến chính là những người sở hữu những món đồ "hết hạn
          không thể sử dụng" còn thời gian sử dụng được mà không có nhu cầu
          sử dụng nữa. Sao lại vậy? Chỉ là chúng tôi thấy thực sự lãng phí
          khi bạn có một chiếc vé đi du lịch, nhưng trước đó vài ngày bạn
          lại dính phải sự cố không đi được nữa -> bạn cần pass lại nó; bạn
          mới có một chiếc thẻ thành viên tập gym 6 tháng tại một địa điểm
          A, nhưng vì lý do bạn phải chuyển nơi B xa nơi A, không còn tập
          được nữa -> bạn cũng nên pass lại!...
        </p>
        <p>
          Đó đó đó! Chúng tôi nhắm tới những người có nhu cầu pass lại những
          vật phẩm đó và những người có nhu cầu sử dụng lại chúng! Thật
          tuyệt biết bao khi có một nơi để phục vụ những nhu cầu đó - nhỏ lẻ
          nhưng chi tiết và cần thiết!
        </p>
      </div>
    </div>
  </div>
</div>
    <div id="footer-intropage">
      <p>
        Mỗi người trong số chúng ta đều có những sản phẩm có thể bán được. Bên
        cạnh việc giữ sản phẩm không cần đến ở nhà, bất kỳ ai cũng có thể kiếm
        thêm tiền bằng cách bán nó cho người khác thông qua thị trường mua bán
        trực tuyến này.
      </p>
      <p>
        Sản phẩm mà bạn không cần đến vẫn có thể trở thành vật quý giá với
        người khác. Đừng do dự mà hãy gửi thông tin về sản phẩm của bạn ngay
        bây giờ!
      </p>

    </div>
  `
  ,
  footer:
    `
    <footer id="footer">
    <div id="deco-footer">
      <p class='font-deco' >♥ FS ♥</p>
      <p class='font-deco' >(っ◔◡◔)っ</p>
    </div>
    <div id="content-footer">
      <ul id="list-footer">
        <li id="linkIntroPage">
          Giới thiệu Flash Sale
        </li>
        <li>
          <a>Quy chế hoạt động</a>
        </li>
        <li>
          <a>Chính sách bảo mật</a>
        </li>
      </ul>
      
      <div id="list-ketnoi">
      <li id='donate'>
      <a  href="https://firebasestorage.googleapis.com/v0/b/flash-sale-503a4.appspot.com/o/103934416_267398624324499_4426595228627271614_n.jpg?alt=media&token=d8e87ece-5571-44ae-ae52-ef0218ce5647"> Ủng hộ chúng tôi</a>
      </li>
      <div>
        <li>Hỗ trợ trực tiếp:</li>   
        <div id="doc">
          <a href="https://www.facebook.com/pvc.cuong97">Phan Cương</a>
          <a href="https://www.facebook.com/le.trunghieu.83">Trung Hiếu</a>
        </div>
      </div>
      <li>
        Group FaceBook
      </li>
      </div>
    </div>
  </footer>
  `
};
