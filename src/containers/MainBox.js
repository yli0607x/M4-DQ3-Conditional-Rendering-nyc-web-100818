import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    page: ""
  }

  pageMapper = {
    profile: <Profile />,
    photo: <Photos />,
    cocktail: <Cocktails />,
    pokemon: <Pokemon />
  }

  handleMenuBarClick = (clickedItem) => {
    this.setState({page: clickedItem})
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */


    let detailsToDisplay = this.pageMapper[this.state.page] || <div>YERRRRRRRRRRR</div>
    // Profile, Photos, Cocktails, Pokemon

    // switch(this.state.page){
    //   case "profile":
    //   detailsToDisplay = <Profile />
    //   break
    //   case "photo":
    //   detailsToDisplay = <Photos />
    //   break
    //   case "cocktail":
    //   detailsToDisplay = <Cocktails />
    //   break
    //   case "pokemon":
    //   detailsToDisplay = <Pokemon />
    //   break
    //   default:
    //   detailsToDisplay = <div>YERRRRRRRRRRR</div>
    // }


    return (
      <div>
        <MenuBar onClick={this.handleMenuBarClick} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
