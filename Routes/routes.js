import { Home, OrderDelivery, Restaurant } from '../components/views';
import { icons } from "../constants"


export const routes = [
    { name: 'Home', component: Home, inTab: true, icon: icons.cutlery },
    { name: 'OrderDelivery', component: OrderDelivery, inTab: true, icon: icons.search },
    { name: 'Restaurant', component: Restaurant, inTab: true, icon: icons.like },
    { name: 'User', component: Restaurant, inTab: true, icon: icons.user },
];