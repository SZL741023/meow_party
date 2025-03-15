import axios from 'axios';
import { use, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import '../styles/_cart.scss'
import Input from '../components/Input';

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

  const order = async(receiver, email, tel, address, invoice, payment, message) => {
    try {
      const res = await axios.post(`https://ec-course-api.hexschool.io/v2/api/meow_party/order`, {
        "data": {
          "user": {
            "name": receiver,
            "email": email,
            "tel": tel,
            "address": address,
            "invoice": invoice
          },
          "payment": payment,
          "message": message
        }
      })
      console.log(res.data.orderId)
      nextStep();
      
    } catch (error) {
      console.log(error)
    }
  }

  const {
    register,
    handleSubmit,
    control,
    formState: {errors}
  } = useForm({
    mode: 'onTouched'
  });

  const onSubmit = async(data) => {
    const {receiver, email, tel, address, invoice, payment, message} = data
    order(receiver, email, tel, address, invoice, payment, message)
  }

  const [allProducts, setAllProducts] = useState([]);
  const getProduct = async() => {
    try {
      const res = await axios.get(`https://ec-course-api.hexschool.io/v2/api/meow_party/products/all`);
      console.log(res.data.products)

      setAllProducts(res.data.products)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect( ()=> {
    getProduct()
  },[])

  // const watchForm = useWatch({
  //   control
  // })
  // useEffect(() => {
  //   console.log(watchForm)
  // },[watchForm])


  return (
    <>
      <div className="container-md pt-5 pt-lg-21 pb-12 pb-lg-24">
        {/* 購物車步驟 */}
        <div className="row justify-content-center mb-9 mb-lg-21">
          <div className="col-xl-6">
            <ul className="list-unstyled d-flex justify-content-xl-between justify-content-center gap-xl-0 gap-6 mb-0">
              <li className="d-flex align-items-center active">
                <span className="bg-secondary d-flex align-items-center justify-content-center rounded-circle text-white me-2 flex-shrink-0" style={{width: '44px', height: '44px'}}>1</span>
                <p className="mb-0 text-secondary">確認購物車</p>
              </li>
              {step >= 2 ? 
                (<li className="d-flex align-items-center">
                  <span className="bg-secondary d-flex align-items-center justify-content-center rounded-circle text-white me-2 flex-shrink-0" style={{width: '44px', height: '44px'}}>2</span>
                  <p className="mb-0 text-secondary">收件與付款資訊</p>
                </li>) : 
                (<li className="d-flex align-items-center">
                <span className="bg-gray-200 d-flex align-items-center justify-content-center rounded-circle text-white me-2 flex-shrink-0" style={{width: '44px', height: '44px'}}>2</span>
                <p className="mb-0 text-gray-200">收件與付款資訊</p>
              </li>)}
              {step >= 3 ? 
                (<li className="d-flex align-items-center">
                  <span className="bg-secondary d-flex align-items-center justify-content-center rounded-circle text-white me-2 flex-shrink-0" style={{width: '44px', height: '44px'}}>3</span>
                  <p className="mb-0 text-secondary">完成訂購</p>
                </li>) : 
                (<li className="d-flex align-items-center">
                <span className="bg-gray-200 d-flex align-items-center justify-content-center rounded-circle text-white me-2 flex-shrink-0" style={{width: '44px', height: '44px'}}>3</span>
                <p className="mb-0 text-gray-200">完成訂購</p>
              </li>)}
            </ul>
          </div>
        </div>

        {/* 確認購物車 */}
        {
          step === 1 && (<>
            <div className="row cart-card-shadow">
              <div className="col-xl-8 mb-3 mb-xl-0">
                <div className="d-flex flex-column gap-3">
                  <div className="cart-check px-4 py-3 rounded-2 bg-white">
                    <div className="form-check">
                      <input className="form-check-input me-4" type="checkbox" id="checkAll" defaultChecked/>
                      <label className="form-check-label" htmlFor="checkAll">全選</label>
                    </div>
                  </div>
                  {/* 商品卡片 */}
                  {cartProducts.map(item => {
                    return (
                      <div className="cart-item d-flex bg-white align-items-center justify-content-between gap-6 p-4 rounded-4 flex-wrap flex-md-nowrap" key={item.product.id}>

                        <div className="d-flex align-items-center gap-6 flex-grow-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultChecked/>
                          </div>
                          <img className="cart-item-img rounded object-fit-cover" src={item.product.imageUrl} alt={item.product.title} />
                          <div className='flex-grow-1'>
                            <h3 className="fs-6 fw-bold text-secondary">{item.product.title}</h3>
                            <select className="form-select" aria-label="Default select example">
                              <option value="1">組合三件組</option>
                              <option value="2">選項一</option>
                              <option value="3">選項二</option>
                            </select>
                          </div>
                          <div style={{width: '80px'}}>
                            <p className="text-primary mb-0">NT$ {item.product.price}</p>
                            <p className="text-gray-300 mb-0" style={{letterSpacing: '0'}}><del>NT$ {item.product.origin_price}</del></p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center gap-4 cart-item-qtyDel">
                          {/* 數量按鈕 */}
                          <div className="cart-qty-group d-flex flex-nowrap flex-shrink-0 flex-grow-1">
                            <button className="btn bg-gray-100 rounded-0 rounded-start-circle d-flex align-items-center" type="button" onClick={()=> updateQty(item.id,item.product.id, item.qty - 1)}><span className="material-symbols-rounded">remove</span></button>
                            <input type="text" className="form-control text-center bg-gray-100 border-0 rounded-0" placeholder={item.qty} readOnly />
                            <button className="btn bg-gray-100 rounded-0 rounded-end-circle d-flex align-items-center" type="button" onClick={()=> updateQty(item.id,item.product.id, item.qty + 1)}><span className="material-symbols-rounded">add</span></button>
                          </div>
                          {/* 刪除按鈕 */}
                          <div className="remove-item">
                            <span className="material-symbols-rounded" role="button" onClick={()=> deleteCartItem(item.id)}>delete</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="col-xl-4">
                <div className="cart-cart-shadow p-6 bg-white rounded-4">
                  <div className="mb-8">
                    <label htmlFor="exampleFormControlInput1" className="form-label">優惠碼</label>
                    <input type="email" className="form-control mb-3 bg-neutral-white" id="exampleFormControlInput1" placeholder="輸入優惠碼" />
                    <button type="button" className="btn btn-outline-primary w-100">套用優惠</button>
                  </div>
                  <div>
                    <h3 className="fs-6 fw-bold text-secondary mb-4">結帳金額</h3>
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex">
                        <p className='text-gray-300'>商品總金額</p>
                        <p className="ms-auto text-secondary">NT $ {finalTotal}</p>
                      </div>
                      <div className="d-flex">
                        <p className='text-gray-300'>折扣金額</p>
                        <p className="ms-auto text-primary">NT $ 0</p>
                      </div>
                      <div className="d-flex">
                        <p className='text-gray-300'>優惠碼</p>
                        <p className="ms-auto text-primary">NT $ 0</p>
                      </div>
                    </div>
                  </div>
                  <hr className='border-bottom border-gray-200 my-6 border-dashed' />
                  <div className="d-flex mb-5">
                    <p className='text-gray-300'>小計</p>
                    <p className="ms-auto text-secondary fs-6">NT $ {finalTotal}</p>
                  </div>
                  <button type="button" className="btn btn-primary w-100" onClick={nextStep}>前往結帳</button>
                </div>
              </div>
            </div>
            <hr className='border-bottom border-gray-200 my-20 border-dashed' />
            <p className='text-secondary fs-6 mb-6'>您的喵喵或許還需要這些…</p>
            <div className="row gap-6 gap-sm-0">
              {allProducts.slice(0, 3).map(product => {
                return (
                  <div className="col-sm-4 col-lg-3" key={product.id}>
                    <div className="card">
                      <div className='bg-white rounded-circle position-absolute d-flex align-items-center justify-center p-2 top-0 end-0 mt-4 me-4' role='button'>
                        <span className="material-symbols-rounded text-secondary-light">favorite</span>
                      </div>
                      <img src={product.imageUrl} className='card-img-top object-fit-cover' height={230} />
                      <div className="card-body">
                        <h2 className="card-title fs-5 mb-2 text-secondary">{product.title}</h2>
                        <p className='fs-5 text-gray-300 mb-3'>NT$ {product.price}</p>
                        <a href="" className="btn btn-outline-secondary w-100">加入購物車</a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>)
        }

        {/* 收件與付款資訊 */}
        {
          step === 2 && (
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form action="" className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-10">
                    <h2 className="fs-5 fw-bold text-secondary mb-6">收件與付款資訊</h2>
                    <Input
                      register={register}
                      errors={errors}
                      id='receiver'
                      type='text'
                      labelText='姓名'
                      rules={{
                        required: {
                          value: true,
                          message: '必填'
                        },
                        maxLength: {
                          value: 20,
                          message: '姓名不可超過20個字元'
                        }
                      }}
                    ></Input>

                    <Input
                      register={register}
                      errors={errors}
                      id='email'
                      type='email'
                      labelText='Email'
                      rules={{
                        required: {
                          value: true,
                          message: '必填'
                        },
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'email格式錯誤'
                        }
                      }}
                    ></Input>

                    <Input
                      register={register}
                      errors={errors}
                      id='tel'
                      type='tel'
                      labelText='連絡電話'
                      rules={{
                        required: {
                          value: true,
                          message: '必填'
                        },
                        maxLength: {
                          value: 10,
                          message: '電話不可大於10碼'
                        }
                      }}
                    ></Input>

                    <Input
                      register={register}
                      errors={errors}
                      id='address'
                      type='text'
                      labelText='收件地址'
                      rules={{
                        required: {
                          value: true,
                          message: '必填'
                        }
                      }}
                    ></Input>
                    
                    <div className="mb-3">
                      <label htmlFor="invoice" className="form-label">手機條碼載具</label>
                      <input type="text" className="form-control" id="invoice" name="invoice" {...register('invoice')} />
                      <p className="form-text">*手機條碼載具總長度為8碼，第1碼必為「/」半形</p>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="payment" className="form-label">付款方式</label>
                      <select name="payment" id="payment" className="form-select">
                        <option value="credit">信用卡</option>
                        <option value="linepay">LINE PAY</option>
                        <option value="jkopay">街口支付</option>
                        <option value="cash">貨到付款</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">備註</label>
                      <textarea className="form-control" id="message" rows="5" {...register('message')}></textarea>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <button type="button" className="btn btn-outline-secondary" onClick={prevStep}>繼續選購</button>
                    <button type="submit" className="btn btn-primary">確認結帳</button>
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

