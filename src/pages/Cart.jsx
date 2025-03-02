import axios from 'axios';
import { useEffect, useState } from 'react';

function Cart(){

  // 設定步驟狀態
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1)
  }
  const prevStep = () => {
    setStep(step - 1)
  }

  // 取得購物車產品
  const [cartProducts, setCartProducts] = useState([]);
  const [finalTotal, setFinalTotal] = useState(0)
  useEffect(() => {
    getCartList();
  },[])

  const getCartList = async() => {
    try {
      const res = await axios.get('https://ec-course-api.hexschool.io/v2/api/meow_party/cart');
      console.log(res.data.data)
      const cartList = res.data.data.carts
      setCartProducts(cartList)

      const cartFinalTotal = res.data.data.final_total
      setFinalTotal(cartFinalTotal)
    } catch (error) {
      console.log(error)
      alert('取得購物車列表失敗!')
    }
  }

  const updateQty = async (cartItemId, productId, newQty) => {
    // 數量不能小於 1
    if (newQty < 1) {
      alert('商品數量不可小於1!')
      return
    };

    try {
      await axios.put(`https://ec-course-api.hexschool.io/v2/api/meow_party/cart/${cartItemId}`, {
        data: {
          product_id: productId,
          qty: newQty,
        },
      });
      getCartList(); // 重新取得購物車列表，確保畫面同步
    } catch (error) {
      console.log(error);
      alert("更新購物車數量失敗!");
    }
  };

  const deleteCartItem = async(cartItemId) => {
    try {
      await axios.delete(`https://ec-course-api.hexschool.io/v2/api/meow_party/cart/${cartItemId}`)
      getCartList();
    } catch (error) {
      alert("刪除產品失敗!")
      console.log(error)
    }
  }

  return (
    <>
      <div className="container py-5">
        {/* 購物車步驟 */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <ul className="list-unstyled d-flex justify-content-between">
              <li className="d-flex align-items-center active">
                <span className="bg-secondary d-flex align-items-center justify-content-center rounded-circle text-white me-2" style={{width: '44px', height: '44px'}}>1</span>
                <p className="mb-0 text-secondary">確認購物車</p>
              </li>
              {step >= 2 ? 
                (<li className="d-flex align-items-center">
                  <span className="bg-secondary d-flex align-items-center justify-content-center rounded-circle text-white me-2" style={{width: '44px', height: '44px'}}>2</span>
                  <p className="mb-0 text-secondary">收件與付款資訊</p>
                </li>) : 
                (<li className="d-flex align-items-center">
                <span className="bg-gray-200 d-flex align-items-center justify-content-center rounded-circle text-white me-2" style={{width: '44px', height: '44px'}}>2</span>
                <p className="mb-0 text-gray-200">收件與付款資訊</p>
              </li>)}
              {step >= 3 ? 
                (<li className="d-flex align-items-center">
                  <span className="bg-secondary d-flex align-items-center justify-content-center rounded-circle text-white me-2" style={{width: '44px', height: '44px'}}>3</span>
                  <p className="mb-0 text-secondary">完成訂購</p>
                </li>) : 
                (<li className="d-flex align-items-center">
                <span className="bg-gray-200 d-flex align-items-center justify-content-center rounded-circle text-white me-2" style={{width: '44px', height: '44px'}}>3</span>
                <p className="mb-0 text-gray-200">完成訂購</p>
              </li>)}
            </ul>
          </div>
        </div>

        {/* 確認購物車 */}
        {
          step === 1 && (
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex flex-column gap-3">
                  <div className="cart-check border px-4 py-3 rounded-2">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="checkAll" defaultChecked/>
                      <label className="form-check-label" htmlFor="checkAll">全選</label>
                    </div>
                  </div>
                  {/* 商品卡片 */}
                  {cartProducts.map(item => {
                    return (
                      <div className="cart-card d-flex border align-items-center gap-4 p-4 rounded-2" key={item.product.id}>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultChecked/>
                        </div>
                        <img width={160} height={120} className="rounded object-fit-cover" src={item.product.imageUrl} alt={item.product.title} />
                        <div>
                          <h3 className="fs-6 fw-bold text-secondary">{item.product.title}</h3>
                          <select className="form-select" aria-label="Default select example">
                            <option value="1">組合三件組</option>
                            <option value="2">選項一</option>
                            <option value="3">選項二</option>
                          </select>
                        </div>
                        <div>
                          <p className="text-primary mb-0">NT$ {item.product.price}</p>
                          <p className="text-gray-300 mb-0"><del>NT$ {item.product.origin_price}</del></p>
                        </div>
                        <div className="input-group" style={{width: '137px'}}>
                          <button className="btn btn-outline-secondary" type="button" onClick={()=> updateQty(item.id,item.product.id, item.qty - 1)}>-</button>
                          <input type="text" className="form-control text-center" placeholder={item.qty} readOnly />
                          <button className="btn btn-outline-secondary" type="button" onClick={()=> updateQty(item.id,item.product.id, item.qty + 1)}>+</button>
                        </div>
                        <div className="remove-item">
                          <span className="material-symbols-rounded curser" role="button" onClick={()=> deleteCartItem(item.id)}>delete</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">優惠碼</label>
                  <input type="email" className="form-control mb-3 bg-neutral-white" id="exampleFormControlInput1" placeholder="輸入優惠碼" />
                  <button type="button" className="btn btn-outline-primary w-100">套用優惠</button>
                </div>
                <div>
                  <h3>結帳金額</h3>
                  <div className="d-flex">
                    <p>商品總金額</p>
                    <p className="ms-auto">NT $ {finalTotal}</p>
                  </div>
                  <div className="d-flex">
                    <p>折扣金額</p>
                    <p className="ms-auto text-primary">NT $ 0</p>
                  </div>
                  <div className="d-flex">
                    <p>優惠碼</p>
                    <p className="ms-auto text-primary">NT $ 0</p>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="d-flex">
                    <p>小計</p>
                    <p className="ms-auto">NT $ {finalTotal}</p>
                  </div>
                </div>
                <button type="button" className="btn btn-primary w-100" onClick={nextStep}>下一步</button>
              </div>
            </div>
          )
        }

        {/* 收件與付款資訊 */}
        {
          step === 2 && (
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form action="" className="mb-5">
                  <h2 className="fs-5 fw-bold text-secondary">收件人資訊</h2>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">姓名</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">連絡電話</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">收件地址</label>
                    <div className="d-flex gap-3">
                      <select className="form-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <select className="form-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">發票類型</label>
                    <div className="d-flex gap-3">
                      <select className="form-select" id="inputGroupSelect01">
                        <option selected>電子發票 - 個人</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                  </div>
                  <h2 className="fs-5 fw-bold text-secondary">信用卡資訊</h2>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">卡號</label>
                    <div className="input-group gap-3">
                      <input type="text" className="form-control" id="exampleInputPassword1" />
                      <input type="text" className="form-control" id="exampleInputPassword1" />
                      <input type="text" className="form-control" id="exampleInputPassword1" />
                      <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">持卡人姓名</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">卡片有效期</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">安全碼</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <button type="button" className="btn btn-outline-secondary" onClick={prevStep}>上一步</button>
                    <button type="submit" className="btn btn-primary" onClick={nextStep}>確認結帳</button>
                  </div>
                </form>
              </div>
            </div>
          )
        }

        {/* 完成訂購 */}
        {
          step === 3 && (
            <div className="row">
              <h1 className="text-center">恭喜您完成訂購🎉</h1>
            </div>
          )
        }
        
      </div>
    </>
  )
}

export default Cart;