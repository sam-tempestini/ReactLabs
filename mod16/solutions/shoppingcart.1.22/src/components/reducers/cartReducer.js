import Range from '../../images/drivingrange.jpg'
import Camp from '../../images/kidsgolfcamp.jpg'
import Lessons from '../../images/lessons.jpg'
import Membership from '../../images/membership.jpg'
import PlayGolf from '../../images/playgolf.jpg'
import Proshop from '../../images/proshop.jpg'
import Twilight from '../../images/twilight.jpg'

import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/actionTypes'


const initState = {
    items: [
        {id:1,title:'Driving Range', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:10,img:Range},
        {id:2,title:'Kids Golf Camp', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:300,img: Camp},
        {id:3,title:'Private Lessons', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:100,img: Lessons},
        {id:4,title:'2020 Membership', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1500,img:Membership},
        {id:5,title:'$50 Gift card ', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:50,img: PlayGolf},
        {id:6,title:'$100 Gift card', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:100,img: Proshop},
        {id:7,title:'Twilight Membership', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:800,img: Twilight}

    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState, action)=>{
    let addedItem, selectedItem, newTotal;
    switch(action.type){
        case ADD_TO_CART:
           addedItem = state.items.find(item=> item.id === action.id);
           
           let existed_item= state.addedItems.find(item=> action.id === item.id);
           if(existed_item){
                addedItem.quantity += 1; 
                return{
                    ...state,
                    total: state.total + addedItem.price 
                };
            }
            else{
                addedItem.quantity = 1;
                newTotal = state.total + addedItem.price ;
              
                return{
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total : newTotal
                };
              
            } 
        case REMOVE_ITEM:
            let itemToRemove= state.addedItems.find(item=> action.id === item.id);
            let new_items = state.addedItems.filter(item=> action.id !== item.id);
        
            newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );
            
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            };            
        case ADD_QUANTITY:
            selectedItem = state.items.find(item=> item.id === action.id);
            selectedItem.quantity += 1; 
            newTotal = state.total + selectedItem.price;
            return{
              ...state,
              total: newTotal
            };
        case SUB_QUANTITY:
            selectedItem = state.items.find(item=> item.id === action.id); 
            
            if(selectedItem.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id);
                newTotal = state.total - selectedItem.price;
                return{
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                };
            }
            else {
                selectedItem.quantity -= 1;
                newTotal = state.total - selectedItem.price;
                return{
                    ...state,
                    total: newTotal
                };
            }
        default:
            return state;
    }
}

export default cartReducer