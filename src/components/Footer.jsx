import "../styles/component/_footer.scss";
import LogoWhite from "/images/logo-white.svg";
import Facebook from "/images/icon-fb.svg";
import Instagram from "/images/icon-ig.svg";
import Line from "/images/icon-line.svg";

function Footer() {
  return(
    <div className="footer-conatiner bg-black text-white py-15">
      <div className="container">
        <div className="d-flex justify-content-between gap-9 flex-md-row flex-column">
          <img src={LogoWhite} alt="Meow Party" style={{width: '140px'}} />
          <div className="siteMap d-flex gap-md-12 gap-9 flex-wrap">
            <ul className="list-unstyled d-flex flex-column gap-4">
              <li className="text-secondary-light fs-7">喵喵派對</li>
              <li><a href="#">關於我們</a></li>
              <li><a href="#">最新消息</a></li>
              <li><a href="#">商品一覽</a></li>
            </ul>
            <ul className="list-unstyled d-flex flex-column gap-4">
              <li className="text-secondary-light fs-7">新手選購</li>
              <li><a href="#">罐頭體驗組</a></li>
              <li><a href="#">貓咪吃肉肉</a></li>
              <li><a href="#">鏟屎官新手組合</a></li>
              <li><a href="#">梳毛美容組</a></li>
            </ul>
            <ul className="list-unstyled d-flex flex-column gap-4">
              <li className="text-secondary-light fs-7">購買相關</li>
              <li><a href="#">常見問題</a></li>
              <li><a href="#">實體商店</a></li>
            </ul>
            <ul className="list-unstyled d-flex flex-column gap-4">
              <li className="text-secondary-light fs-7">聯絡我們</li>
              <li><a href="#">營業時間：周一至周五 09:30-18:00</a></li>
              <li><a href="#">客服電話：02-1234-5678</a></li>
              <li><a href="#">E-mail：meowparty@meow.com</a></li>
            </ul>
          </div>
          <div className="snsIcons">
            <ul className="list-unstyled d-flex gap-4">
              <li><a href="#" className="bg-white rounded-circle d-block p-2 sns-icon"><img src={Facebook} alt="Facebook" /></a></li>
              <li><a href="#" className="bg-white rounded-circle d-block p-2 sns-icon"><img src={Instagram} alt="Instagram" /></a></li>
              <li><a href="#" className="bg-white rounded-circle d-block p-2 sns-icon"><img src={Line} alt="Line" /></a></li>
            </ul>
          </div>
        </div>
        <hr className="my-12 border border-gray-400" />
        <p className="text-center">喵喵派對 Meow Meow Party. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;

