import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./search-icon";

const CartCount = styled.span`
width: 17px;
height: 17px;
left: 1263px;
top: 43px;

background-color: var(--delete-color)
color: white;
`

export function CartControl(){
  const {value} = useLocalStorage('cart-items')
  return(
    <div>
      <CartIcon/>
      {value.length && <CartCount>{value.length}</CartCount>}
    </div>
  )
}