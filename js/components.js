const components = {
  nav: `
    <nav class="nav">
      <div class="nav-left">
        <div class="logo-nav">
          <button id="logo" class="non-button"></button>
        </div>
        <form action="" class="form-search-item">
          <span>Search</span>
          <input id="input-search" type="text" placeholder="Nhap thu m tim" />
          <button id="icon-search" class="non-button"></button>
        </form>
      </div>
      <div class="nav-right">
        <button class="non-button">dang bai</button>
        <button class="non-button">user</button>
        <button class="non-button">
          <i class="">dang nhap/dangxuat</i>
        </button>
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
          <div class="intro-new-feed">
            <p id="title">Title</p>
            <img class="img-intro" data-atf="true" src="https://namthanh.vn//Upload/20082018/ve-may-bay-da-mua-co-tra-lai-duoc-khong.jpg" alt="" />
            <p id="introduce">Mô tả : vscaswadavbsbasvassssssssssssssssssssssssssa1dsa5d6aw41d651v561v6531d4v65ds64s6d84f9s8d64c1d31v3sd1s513542 dád</p>
            <p id="time-date">Thời hạn sử dụng:</p>
            <p id="price">Giá:</p>
          </div>
          <div class="intro-new-feed">
            <p id="title">Title</p>
            <img class="img-intro" data-atf="true" src="https://techbike.vn/attachments/the-member-cgv-jpg.3511/" alt="" />
            <p id="introduce">Mô tả:</p>
            <p id="time-date">Thời hạn sử dụng:</p>
            <p id="price">Giá:</p>
          </div>
          <div class="intro-new-feed">
            <p id="title">Title</p>
            <img class="img-intro" data-atf="true" src="https://lh3.googleusercontent.com/proxy/NY6fKcDv5nNX_jT79-e0Gp_q-PSgNqlIj1nBj-1kjgYhN-zpkGTdODQjP59PF5-B_q2_PCgs04io9jzQBJkp2JpSR6RlB_rJquOmnmvbwi_sF2WAMJZE-_Pj" alt="" />
            <p id="introduce">Mô tả:</p>
            <p id="time-date">Thời hạn sử dụng:</p>
            <p id="price">Giá:</p>
          </div>
          </div>
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
    <div class="main-contain details">
      <p>title</p>
      <img class="img-details"
        src="https://inthenhua.net.vn/wp-content/uploads/2017/01/the-giam-gia-1.jpg"
        alt=""
      />
      <p>Chi tiết sản phẩm</p>
      <p>Thời hạn sử dụng</p>
      <p>Địa điểm sử dụng</p>
      
      <p>Giá cả</p>
      <p>Người đăng</p>
      
      <p>Phương thức liên hệ</p>
      <button id="flow-button">Theo dõi</button>
    </div>
    </div>
    `
    ,
  
};
