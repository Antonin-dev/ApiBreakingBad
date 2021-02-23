import React from 'react'
import './MenuContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MonReducer from '../Reducer/MonReducer';
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaChild, FaThList, FaAlignCenter, FaAngleUp} from "react-icons/fa";
import { Link } from 'react-router-dom';



function MenuContainer() {

    
    const [state, dispatch] = MonReducer();

    
    
    const {choix} = state;
    

    return (

        <ProSidebar>
            <SidebarHeader>
                <p>Breaking bad</p>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem icon={<FaAngleUp />}>
                        <Link to="/" />
                    </MenuItem>
                    <MenuItem icon={<FaChild />}>
                        Characters
                        <Link to="/characters" />
                    </MenuItem>
                    <MenuItem icon={<FaThList />}>
                        Episodes
                        <Link to="/episodes" />
                    </MenuItem>
                    <MenuItem icon={<FaAlignCenter />}>
                        Quote
                        <Link to="/quotes" />
                    </MenuItem>
                </Menu>
            </SidebarContent>




  
</ProSidebar>


        
    )
}







export default MenuContainer


// <div className='menu'>
//             <a class="btn btn-primary" onClick={()=>{dispatch({type: "choix", payload: "characters"})}} href="#" role="button">Characters</a>
//             <a class="btn btn-primary" onClick={()=>{dispatch({type: "choix", payload: "episodes"})}} href="#" role="button">Link</a>
//             <a class="btn btn-primary" onClick={()=>{dispatch({type: "choix", payload: "series"})}} href="#" role="button">Link</a>
//         </div>
