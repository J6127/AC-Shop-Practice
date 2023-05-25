import Register from './Step/Register';
import Cart from './Cart/Cart';
import ProgressControl from './ProgressControl/ProgressControl';

export default function Main (){
  return(
    <main class="site-main">
      <div class="main-container">
        <Register />
        <Cart />
        <ProgressControl />
      </div>
    </main>
  )
}
