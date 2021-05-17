import { useEffect } from 'react';
import './styles/login.css'
import $ from 'jquery'
import 'jquery'
import Buyer from './components/login form/buyer';
import Seller from './components/login form/seller';


function Slide() {
  useEffect(()=>{
    $(document).ready(function(){
      $('.login-info-box').fadeOut();
      $('.login-show').addClass('show-log-panel');
  $('input[type="radio"]').on('change',function() 
  {   
      if($('#log-reg-show').is(':checked')) {
          $('.register-info-box').fadeIn();
          $('.login-info-box').fadeOut();
          
          $('.white-panel').removeClass('right-log');
          
          $('.login-show').addClass('show-log-panel');
          $('.register-show').removeClass('show-log-panel');
      }
      if($('#log-login-show').is(':checked')) {
          $('.register-info-box').fadeOut(); 
          $('.login-info-box').fadeIn();
          
          $('.white-panel').addClass('right-log');
          $('.register-show').addClass('show-log-panel');
          $('.login-show').removeClass('show-log-panel');
          
      }
    });
   });
  })
  return (
    <div className="login-reg-panel">
            <div className="login-info-box">
                <h2>Are you a Buyer?</h2>
                <p>Buy Bonsai Trees at cheap prices avail exclusive offers upto 90% Off on next purchase!Happy shopping!</p><br></br>
                <label id="label-register" htmlFor="log-reg-show">Login</label>
                <input type="radio" name="active-log-panel" id="log-reg-show" value="log-reg-show" />
            </div>
                        
            <div className="register-info-box">
                <h2>Are you a Seller?</h2>
                <p>Add your bonsai trees and grow your business with us and provide service with 1lakh+ happy customers</p><br></br>
                <label id="label-login" htmlFor="log-login-show">Login</label>
                <input type="radio" name="active-log-panel" value="log-login-show" id="log-login-show" />
            </div>
                
    <div className="white-panel">
        <div className="login-show">
        <h2>Buyer Login</h2>
            <Buyer />     
        </div>
        <div className="register-show">
        <h2>Seller Login</h2>
            <Seller />   
        </div>
    </div>
    </div>
  );
}

export default Slide;
