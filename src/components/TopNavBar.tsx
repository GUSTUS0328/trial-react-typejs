import * as React from "react";
import "../styles/TopNavBar.scss"

interface TopNavBarProps {
    main_menu_items: string[];
}


export class TopNavBar extends React.Component<TopNavBarProps, {}> {    
    constructor(props: TopNavBarProps) {
        super(props);   
    }


    render() {
        var path = require('path');

        const curr_host: string = window.location.host;
        const menu_links: string[] = [
            path.join(curr_host , 'how-works'),
            path.join(curr_host , 'health-all'),
            path.join(curr_host , 'hand-surgery'),
            path.join(curr_host , 'become-a-provider'),
            path.join(curr_host , 'businesses'),
            path.join(curr_host , 'referral'),
            '' ];

        try{
            if (menu_links.length !== this.props.main_menu_items.length){
                throw "The number of menu items in top nav bar is not consistent with number of links!";
            }
        }
        catch(e){
            console.log(e);
        }

        var menu_items = this.props.main_menu_items.map(
            (value, index)=>
            <div className="dropdown"><a href={menu_links[index]} target="_blank" key={value.toString()}>{value}</a></div>
            
        );

        menu_items[6] = (<div className="dropdown">
                            <a href='' target="_blank">More</a>
                            <div className="dropdown-content">
                              <a href="#">Why AiTmed</a>
                              <a href="#">FAQ</a>
                              <a href="#">Blog</a>
                            </div>
                        </div>);
        //console.log({menu_items});

        return <nav>{menu_items}</nav>;
    }
}