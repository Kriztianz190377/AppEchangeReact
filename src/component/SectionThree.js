import React from 'react';
import IconMoney from './inconsMoney';
import '../css/SectionThree.css';

const SectionThree=()=> {
  return (
    <div className="iconmoney">
      
      <IconMoney
        src='https://s2.coinmarketcap.com/static/img/coins/64x64/1697.png'
        name="BasicAttention"
        href="https://coinmarketcap.com/currencies/basic-attention-token/" />
      
      
      <IconMoney
        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
        name="Bitcoin "
        href="https://coinmarketcap.com/currencies/bitcoin/" />
      <IconMoney
        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png"
        name="Bitcoin Cash"
        href="https://coinmarketcap.com/currencies/bitcoin-cash/" />

      <IconMoney
        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
        href="https://coinmarketcap.com/currencies/binance-coin/"
        name='Binance'
      />
      <IconMoney
        src="https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png"
        href="https://coinmarketcap.com/currencies/crypto-com-coin/"
        name='Crypto.com'
      />
      <IconMoney
        src="https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png"
        href="https://coinmarketcap.com/currencies/multi-collateral-dai/"
        name='Dai'
      />
      <IconMoney 
      src="https://s2.coinmarketcap.com/static/img/coins/64x64/131.png"
      href="https://coinmarketcap.com/currencies/dash/"
      name='Dash'
      />
      <IconMoney 
      src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
      href="https://coinmarketcap.com/currencies/ethereum/"
      name='Ethereum'
      />
      <IconMoney 
      src="https://s2.coinmarketcap.com/static/img/coins/64x64/2502.png"
      href="https://coinmarketcap.com/currencies/huobi-token/"
      name='Huobi Token'
      />
      <IconMoney 
      src='https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'
      href="https://coinmarketcap.com/currencies/litecoin/"
      name='Litecoin'
      />
      <IconMoney 
      src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
      href="https://coinmarketcap.com/currencies/tether/"
      name='Tether'
      
    />
    </div>
  );
}

export default  SectionThree;
