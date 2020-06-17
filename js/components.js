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
        <button class="non-button" id="add-post-btn">dang bai</button>
        <button class="non-button">user</button>
        <button class="non-button">
          <i class="">dang nhap/dangxuat</i>
        </button>
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
  search : `
    <div class="contain">
      <div class="non-contain"></div>
      <div class="main-contain search-page">
        <p>Danh sách bạn cần tìm</p>
        <div class="product-intro">
          <div class="pic-intro">
            <img class="img-intro img-list"
              src="https://tutimviec.com/wp-content/uploads/2019/04/bachhoaxanh-amp.jpg"
              alt=""
            />
          </div>
          <div class="details-intro">
            <p id="title">Title</p>
            <p id="introduce">
              Mô tả :
              vscaswadavbsbasvassssssssssssssssssssssssssa1dsa5d6aw41d651v561v6531d4v65ds64s6d84f9s8d64c1d31v3sd1s513542
              dád
            </p>
            <p id="time-date">Thời hạn sử dụng:</p>
            <p id="price">Giá:</p>
            <div class="bottom-intro">
              <p>Địa điểm</p>
              <button>Theo dõi</button>
            </div>
          </div>
        </div>
       
        <div class="product-intro">
          <div class="pic-intro">
            <img class="img-intro img-list"
              src="https://tutimviec.com/wp-content/uploads/2019/04/bachhoaxanh-amp.jpg"
              alt=""
            />
          </div>
          <div class="details-intro">
            <p id="title">Title</p>
            <p id="introduce">
              Mô tả :
              vscaswadavbsbasvassssssssssssssssssssssssssa1dsa5d6aw41d651v561v6531d4v65ds64s6d84f9s8d64c1d31v3sd1s513542
              dád
            </p>
            <p id="time-date">Thời hạn sử dụng:</p>
            <p id="price">Giá:</p>
            <div class="bottom-intro">
              <p>Địa điểm</p>
              <button>Theo dõi</button>
            </div>
          </div>
        </div>
        <div class="product-intro">
          <div class="pic-intro">
            <img class="img-intro img-list"
              src="https://tutimviec.com/wp-content/uploads/2019/04/bachhoaxanh-amp.jpg"
              alt=""
            />
          </div>
          <div class="details-intro">
            <p id="title">Title</p>
            <p id="introduce">
              Mô tả :
              vscaswadavbsbasvassssssssssssssssssssssssssa1dsa5d6aw41d651v561v6531d4v65ds64s6d84f9s8d64c1d31v3sd1s513542
              dád
            </p>
            <p id="time-date">Thời hạn sử dụng:</p>
            <p id="price">Giá:</p>
            <div class="bottom-intro">
              <p>Địa điểm</p>
              <button>Theo dõi</button>
            </div>
          </div>
        </div>
        <div class="product-intro">
          <div class="pic-intro">
            <img class="img-intro img-list"
              src="https://tutimviec.com/wp-content/uploads/2019/04/bachhoaxanh-amp.jpg"
              alt=""
            />
          </div>
          <div class="details-intro">
            <p id="title">Title</p>
            <p id="introduce">
              Mô tả :
              vscaswadavbsbasvassssssssssssssssssssssssssa1dsa5d6aw41d651v561v6531d4v65ds64s6d84f9s8d64c1d31v3sd1s513542
              dád
            </p>
            <p id="time-date">Thời hạn sử dụng:</p>
            <p id="price">Giá:</p>
            <div class="bottom-intro">
              <p>Địa điểm</p>
              <button>Theo dõi</button>
            </div>
          </div>
        </div>
        <div class="product-intro">
          <div class="pic-intro">
            <img class="img-intro img-list"
              src="https://tutimviec.com/wp-content/uploads/2019/04/bachhoaxanh-amp.jpg"
              alt=""
            />
          </div>
          <div class="details-intro">
            <p id="title">Title</p>
            <p id="introduce">
              Mô tả :
              vscaswadavbsbasvassssssssssssssssssssssssssa1dsa5d6aw41d651v561v6531d4v65ds64s6d84f9s8d64c1d31v3sd1s513542
              dád
            </p>
            <p id="time-date">Thời hạn sử dụng:</p>
            <p id="price">Giá:</p>
            <div class="bottom-intro">
              <p>Địa điểm</p>
              <button>Theo dõi</button>
            </div>
          </div>
        </div>
      </div>
    </div>`
    ,
  details : `
    <div class="contain">
      <div class="non-contain"></div>
      <div id="detailDiv" class="main-contain details">

      </div>
    </div>
    </div>
    `
    ,
  addPost : 
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
          <input type="radio" name="time" value="Thời gian cố hạn"> Thời gian có hạn
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
  
};
