import * as React from "react";
import "../styles/Title.scss"
import { TopNavBar } from "./TopNavBar"

interface TitleProps { 
    company: string; 
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Title extends React.Component<TitleProps, {}> {    
    constructor(props: TitleProps) {
        super(props);   
    }


    render() {
        return (<header>
                  <div>{this.props.company}</div> 
                  <TopNavBar main_menu_items = 
                    {["How works","Health A-Z", "Hand Surgery", 
                      "Become a Provider", "Businesses", "Referral", "More"]}
                  />
                </header>);
    }
}